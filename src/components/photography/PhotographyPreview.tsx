"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { photographyCategories } from "@/lib/data";

export function PhotographyPreview({ full = false }: { full?: boolean }) {
  const items = full ? photographyCategories : photographyCategories.slice(0, 4);

  return (
    <section className="section-pad bg-white/50">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Kids & Family Photography</p>
            <h2 className="heading-lg mt-4 text-ink">
              Moments worth framing — from first days to big birthdays.
            </h2>
            <p className="lead mt-4">
              Flexible photography experiences with creative sets, props, and a
              calm, family-focused studio environment in Abelemkpe.
            </p>
          </div>
          {!full && (
            <Link href="/photography" className="btn btn-secondary shrink-0">
              View All Sessions
            </Link>
          )}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((cat, i) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="surface-card overflow-hidden"
            >
              <div className="img-frame relative aspect-[4/5] rounded-none">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-ink">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {cat.description}
                </p>
                <p className="mt-3 text-sm font-medium text-ink">{cat.packageInfo}</p>
                <Link
                  href={`/book/photoshoot?type=${cat.id}`}
                  className="btn btn-primary mt-5 w-full"
                >
                  Book This Experience
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
