"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { studioAmenities, studioBackdrops } from "@/lib/data";

export function StudioSection() {
  return (
    <section className="section-pad bg-[var(--cream-deep)]/60">
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Studio Rental</p>
            <h2 className="heading-lg mt-4 text-ink">Your Vision. Our Studio.</h2>
            <p className="lead mt-4">
              Photographers and creatives can rent Emma&apos;s Den and work with
              available backdrops, props, and themed setups — a flexible space
              for kids, families, and imaginative shoots.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {studioAmenities.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-[var(--shadow-soft)]"
                >
                  <Check size={16} className="text-sage-deep" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/book/studio" className="btn btn-primary mt-8">
              Rent the Studio
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {studioBackdrops.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`img-frame relative ${i % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/5] mt-6"}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="heading-md text-ink">Backdrop Gallery</h3>
          <p className="lead mt-2 max-w-xl">
            A glimpse of the creative environments available for rental and
            styled sessions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studioBackdrops.map((item) => (
              <div key={item.title} className="surface-card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="p-4 font-medium text-ink">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
