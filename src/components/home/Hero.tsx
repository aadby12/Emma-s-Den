"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { heroImages } from "@/lib/data";
import { site } from "@/lib/site";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[92vh] overflow-hidden grain">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[index].src}
              alt={heroImages[index].alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(42,36,32,0.72)] via-[rgba(42,36,32,0.45)] to-[rgba(42,36,32,0.2)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,36,32,0.55)] via-transparent to-[rgba(250,246,241,0.12)]" />
      </div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[22%] right-[8%] z-[2] hidden h-36 w-28 overflow-hidden rounded-2xl border-4 border-white/90 shadow-[var(--shadow)] md:block"
      >
        <Image
          src={heroImages[(index + 1) % heroImages.length].src}
          alt=""
          fill
          className="object-cover"
          sizes="140px"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[22%] top-[18%] z-[2] hidden h-28 w-24 overflow-hidden rounded-2xl border-4 border-white/90 shadow-[var(--shadow)] lg:block"
      >
        <Image
          src={heroImages[(index + 2) % heroImages.length].src}
          alt=""
          fill
          className="object-cover"
          sizes="120px"
        />
      </motion.div>

      <div className="container-wide relative z-[3] flex min-h-[92vh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[color-mix(in_oklab,var(--blush)_70%,white)]"
          >
            Abelemkpe · Accra
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="heading-xl mt-4 text-white"
          >
            {site.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 font-display text-[clamp(1.35rem,3vw,2.2rem)] leading-snug text-white/95"
          >
            {site.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-white/80"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/book/photoshoot" className="btn btn-accent">
              Book a Photoshoot
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/book/party"
              className="btn border-white/30 bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
            >
              Plan a Kids Party
            </Link>
            <Link
              href="/book/studio"
              className="btn border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              Rent the Studio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
