"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = pathname === "/" && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color-mix(in_oklab,var(--cream)_92%,white)]/90 backdrop-blur-xl border-b border-[var(--line)] shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between gap-4 py-4">
        <Link href="/" className="group relative z-10">
          <span
            className={`font-display text-2xl tracking-tight md:text-[1.7rem] ${
              onHero ? "text-white" : "text-ink"
            }`}
          >
            Emma&apos;s Den
          </span>
          <span
            className={`mt-0.5 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
              onHero ? "text-white/70" : "text-ink-soft"
            }`}
          >
            Accra · Memories
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                onHero
                  ? "text-white/80 hover:text-white"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
              onHero
                ? "border-white/25 bg-white/10 text-white hover:bg-white/20"
                : "border-[var(--line)] bg-white text-ink hover:border-blush"
            }`}
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <Link href="/book/photoshoot" className="btn btn-accent">
            Book a Photoshoot
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
            onHero
              ? "border-white/25 bg-white/10 text-white"
              : "border-[var(--line)] bg-white text-ink"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-0 top-full border-b border-[var(--line)] bg-cream px-4 pb-6 pt-2 shadow-[var(--shadow)] lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/book/photoshoot"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                Book a Photoshoot
              </Link>
              <Link
                href="/book/party"
                onClick={() => setOpen(false)}
                className="btn btn-secondary w-full"
              >
                Plan a Kids Party
              </Link>
              <Link
                href="/book/studio"
                onClick={() => setOpen(false)}
                className="btn btn-ghost w-full"
              >
                Rent the Studio
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
