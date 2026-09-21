"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export type WizardStep = {
  id: string;
  title: string;
  description?: string;
  fields: WizardField[];
};

export type WizardField =
  | {
      type: "select";
      name: string;
      label: string;
      options: { value: string; label: string }[];
      required?: boolean;
    }
  | {
      type: "text" | "email" | "tel" | "date" | "time";
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
    }
  | {
      type: "textarea";
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
    };

type Props = {
  title: string;
  subtitle: string;
  steps: WizardStep[];
  accentLabel: string;
  whatsappPrefill: (data: Record<string, string>) => string;
  initialValues?: Record<string, string>;
};

export function BookingWizard({
  title,
  subtitle,
  steps,
  accentLabel,
  whatsappPrefill,
  initialValues = {},
}: Props) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Record<string, string>>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const progress = ((step + 1) / steps.length) * 100;
  const current = steps[step];

  const canContinue = useMemo(() => {
    return current.fields.every((field) => {
      if (!field.required) return true;
      return Boolean(data[field.name]?.trim());
    });
  }, [current.fields, data]);

  function update(name: string, value: string) {
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function next() {
    if (step < steps.length - 1) setStep((s) => s + 1);
    else setSubmitted(true);
  }

  function back() {
    if (submitted) {
      setSubmitted(false);
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canContinue) return;
    next();
  }

  const waUrl = `${site.whatsappUrl}?text=${encodeURIComponent(whatsappPrefill(data))}`;

  return (
    <div className="surface-card overflow-hidden">
      <div className="border-b border-[var(--line)] bg-white px-6 py-6 md:px-8">
        <p className="eyebrow">{accentLabel}</p>
        <h1 className="heading-md mt-3 text-ink">{title}</h1>
        <p className="mt-2 text-ink-soft">{subtitle}</p>
        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[var(--cream-deep)]">
          <motion.div
            className="h-full rounded-full bg-coral"
            animate={{ width: `${submitted ? 100 : progress}%` }}
            transition={{ duration: 0.35 }}
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {steps.map((s, i) => (
            <span
              key={s.id}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                i === step && !submitted
                  ? "bg-ink text-cream"
                  : i < step || submitted
                    ? "bg-[color-mix(in_oklab,var(--sage)_35%,white)] text-ink"
                    : "bg-[var(--cream-deep)] text-ink-soft"
              }`}
            >
              {s.title}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 py-8 md:px-8">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--sage)_30%,white)] text-sage-deep">
                <Check size={28} />
              </div>
              <h2 className="heading-md mt-5 text-ink">Inquiry ready</h2>
              <p className="lead mx-auto mt-3 max-w-md">
                Your details are prepared. Send them on WhatsApp so Emma&apos;s Den
                can confirm availability and next steps.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent mt-6"
              >
                <MessageCircle size={17} />
                Send on WhatsApp
              </a>
              <button type="button" className="btn btn-ghost mt-3" onClick={back}>
                Edit details
              </button>
            </motion.div>
          ) : (
            <motion.form
              key={current.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
              onSubmit={onSubmit}
              className="space-y-5"
            >
              <div>
                <h2 className="font-display text-2xl text-ink">{current.title}</h2>
                {current.description && (
                  <p className="mt-1 text-ink-soft">{current.description}</p>
                )}
              </div>

              {current.fields.map((field) => (
                <FieldBlock key={field.name} field={field} value={data[field.name] || ""} onChange={update} />
              ))}

              <div className="flex flex-wrap gap-3 pt-2">
                {step > 0 && (
                  <button type="button" className="btn btn-ghost" onClick={back}>
                    <ArrowLeft size={16} />
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!canContinue}
                >
                  {step === steps.length - 1 ? "Confirm" : "Continue"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function FieldBlock({
  field,
  value,
  onChange,
}: {
  field: WizardField;
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  let control: ReactNode;

  if (field.type === "select") {
    control = (
      <select
        id={field.name}
        value={value}
        required={field.required}
        onChange={(e) => onChange(field.name, e.target.value)}
      >
        <option value="">Select an option</option>
        {field.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  } else if (field.type === "textarea") {
    control = (
      <textarea
        id={field.name}
        rows={4}
        value={value}
        required={field.required}
        placeholder={field.placeholder}
        onChange={(e) => onChange(field.name, e.target.value)}
      />
    );
  } else {
    control = (
      <input
        id={field.name}
        type={field.type}
        value={value}
        required={field.required}
        placeholder={field.placeholder}
        onChange={(e) => onChange(field.name, e.target.value)}
      />
    );
  }

  return (
    <div>
      <label htmlFor={field.name}>{field.label}</label>
      {control}
    </div>
  );
}
