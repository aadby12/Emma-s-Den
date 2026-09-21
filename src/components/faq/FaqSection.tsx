"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">FAQ</p>
          <h2 className="heading-lg mt-4 text-ink">
            Helpful answers before you book.
          </h2>
          <p className="lead mt-4">
            Clear guidance on photography, parties, studio rental, and visiting
            Emma&apos;s Den in Abelemkpe.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question} className="surface-card overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{faq.question}</span>
                  <ChevronDown
                    className={`shrink-0 text-ink-soft transition ${isOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-ink-soft leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
