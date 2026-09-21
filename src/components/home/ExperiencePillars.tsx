"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, PartyPopper, Building2, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    title: "Kids & Family Photography",
    copy: "Newborn to family portraits — warm sessions designed around children and the people who love them.",
    href: "/photography",
    cta: "Explore Photography",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&q=80",
    tint: "from-[color-mix(in_oklab,var(--blush)_35%,transparent)]",
  },
  {
    title: "Kids Party Venue",
    copy: "Birthday celebrations, private events, and children’s experiences in a space built for joy.",
    href: "/parties",
    cta: "Plan a Party",
    icon: PartyPopper,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80",
    tint: "from-[color-mix(in_oklab,var(--butter)_45%,transparent)]",
  },
  {
    title: "Studio Rental",
    copy: "Photographers and creatives can rent the studio with backdrops, props, and themed sets.",
    href: "/studio",
    cta: "Rent the Studio",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff7d?w=900&q=80",
    tint: "from-[color-mix(in_oklab,var(--sky)_40%,transparent)]",
  },
];

export function ExperiencePillars() {
  return (
    <section className="section-pad pt-0">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Three experiences. One destination.</p>
          <h2 className="heading-lg mt-4 text-ink">
            Not just a photo studio — a complete family memory destination.
          </h2>
          <p className="lead mt-4">
            Emma&apos;s Den brings photography, celebrations, and creative studio
            space together for families and creatives in Accra.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group surface-card overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${item.tint} to-transparent opacity-70`}
                  />
                  <div className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink shadow-[var(--shadow-soft)]">
                    <Icon size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-md text-ink">{item.title}</h3>
                  <p className="mt-3 text-ink-soft leading-relaxed">{item.copy}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral transition group-hover:gap-2.5"
                  >
                    {item.cta}
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
