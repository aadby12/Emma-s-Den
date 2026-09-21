"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { BookingWizard, type WizardStep } from "@/components/booking/BookingWizard";
import { photographyCategories } from "@/lib/data";

const packages = [
  { value: "classic", label: "Classic Session" },
  { value: "signature", label: "Signature Session" },
  { value: "celebration", label: "Celebration Session" },
  { value: "custom", label: "Custom / Discuss with Studio" },
];

function PhotoshootBooking() {
  const params = useSearchParams();
  const type = params.get("type") || "";

  const steps: WizardStep[] = [
    {
      id: "type",
      title: "Photography Type",
      description: "Choose the experience that fits your moment.",
      fields: [
        {
          type: "select",
          name: "photographyType",
          label: "Photography type",
          required: true,
          options: photographyCategories.map((c) => ({
            value: c.id,
            label: c.title,
          })),
        },
      ],
    },
    {
      id: "package",
      title: "Package",
      description: "Select a package direction — details confirmed with the studio.",
      fields: [
        {
          type: "select",
          name: "package",
          label: "Package",
          required: true,
          options: packages,
        },
      ],
    },
    {
      id: "date",
      title: "Date",
      description: "Share your preferred session date.",
      fields: [
        {
          type: "date",
          name: "date",
          label: "Preferred date",
          required: true,
        },
      ],
    },
    {
      id: "details",
      title: "Client Details",
      fields: [
        {
          type: "text",
          name: "name",
          label: "Full name",
          required: true,
          placeholder: "Your name",
        },
        {
          type: "tel",
          name: "phone",
          label: "Phone / WhatsApp",
          required: true,
          placeholder: "020 …",
        },
        {
          type: "email",
          name: "email",
          label: "Email",
          required: true,
          placeholder: "you@email.com",
        },
        {
          type: "textarea",
          name: "notes",
          label: "Notes",
          placeholder: "Ages, themes, or anything helpful",
        },
      ],
    },
    {
      id: "confirm",
      title: "Confirm",
      description: "Review your details, then send your inquiry on WhatsApp.",
      fields: [
        {
          type: "textarea",
          name: "confirmation",
          label: "Anything else before we confirm?",
          placeholder: "Optional final notes",
        },
      ],
    },
  ];

  return (
    <BookingWizard
      accentLabel="Book a Photoshoot"
      title="Book your photography experience"
      subtitle="Photography Type → Package → Date → Client Details → Confirm"
      steps={steps}
      initialValues={{ photographyType: type }}
      whatsappPrefill={(data) =>
        `Hi Emma's Den! I'd like to book a photoshoot.\n\nType: ${data.photographyType || "-"}\nPackage: ${data.package || "-"}\nDate: ${data.date || "-"}\nName: ${data.name || "-"}\nPhone: ${data.phone || "-"}\nEmail: ${data.email || "-"}\nNotes: ${data.notes || "-"}\nExtra: ${data.confirmation || "-"}`
      }
    />
  );
}

export default function BookPhotoshootPage() {
  return (
    <section className="section-pad">
      <div className="container-site max-w-2xl">
        <Suspense fallback={<div className="surface-card p-8">Loading booking…</div>}>
          <PhotoshootBooking />
        </Suspense>
      </div>
    </section>
  );
}
