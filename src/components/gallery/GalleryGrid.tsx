"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems, type GalleryFilter } from "@/lib/data";

const filters: { id: GalleryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "kids", label: "Kids" },
  { id: "babies", label: "Babies" },
  { id: "families", label: "Families" },
  { id: "maternity", label: "Maternity" },
  { id: "birthdays", label: "Birthdays" },
  { id: "parties", label: "Parties" },
  { id: "studio", label: "Studio" },
];

export function GalleryGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [active, setActive] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const items = useMemo(() => {
    const filtered =
      filter === "all"
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  const close = useCallback(() => setActive(null), []);

  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % items.length));
  }, [items.length]);

  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? i : (i - 1 + items.length) % items.length,
    );
  }, [items.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section className="section-pad">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Gallery</p>
          <h2 className="heading-lg mt-4 text-ink">
            Images that sell the experience.
          </h2>
          <p className="lead mt-4">
            Kids, babies, families, maternity, birthdays, parties, and studio
            moments — a visual invitation to create yours.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === f.id
                  ? "bg-ink text-cream"
                  : "bg-white text-ink-soft border border-[var(--line)] hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="masonry mt-10">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="masonry-item img-frame group relative w-full overflow-hidden text-left"
              style={{ height: item.tall ? 360 : 260 }}
              onClick={() => setActive(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-ink opacity-0 transition group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && items[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
            onClick={close}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white backdrop-blur"
              onClick={close}
              aria-label="Close"
            >
              <X />
            </button>
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white md:left-6"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white md:right-6"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              <ChevronRight />
            </button>

            <motion.div
              key={items[active].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative h-[70vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStart === null) return;
                const diff = e.changedTouches[0].clientX - touchStart;
                if (diff > 50) prev();
                if (diff < -50) next();
                setTouchStart(null);
              }}
            >
              <Image
                src={items[active].src}
                alt={items[active].alt}
                fill
                className="rounded-[var(--radius)] object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
