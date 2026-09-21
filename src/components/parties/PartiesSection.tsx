"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { partyJourney, partyPackages } from "@/lib/data";
import { site } from "@/lib/site";

export function PartiesSection() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Kids Parties</p>
            <h2 className="heading-lg mt-4 text-ink">
              Make Their Big Day Unforgettable.
            </h2>
            <p className="lead mt-4 max-w-xl">
              A celebration space for birthdays, private events, and children&apos;s
              experiences — designed so parents can plan with clarity and kids
              can simply enjoy.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/book/party" className="btn btn-accent">
              Request Party Package
            </Link>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {partyJourney.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-[var(--radius)] border border-[var(--line)] bg-white/80 p-5"
            >
              <p className="font-display text-3xl text-blush-deep">{step.step}</p>
              <p className="mt-2 font-semibold text-ink">{step.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{step.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {partyPackages.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="surface-card overflow-hidden"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-md text-ink">{pkg.title}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{pkg.description}</p>
                <Link
                  href={`/book/party?type=${pkg.id}`}
                  className="btn btn-primary mt-5"
                >
                  Request Party Package
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
