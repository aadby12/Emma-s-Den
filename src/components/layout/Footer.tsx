import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--cream-deep)]">
      <div className="container-wide section-pad !py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl text-ink">Emma&apos;s Den</p>
            <p className="mt-3 max-w-md text-ink-soft">{site.tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              A complete destination for family memories and children&apos;s
              experiences — photography, celebrations, and creative studio
              space in Abelemkpe, Accra.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-soft transition hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/book/photoshoot" className="text-ink-soft hover:text-ink">
                  Book
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
              Visit & Contact
            </p>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-coral" />
                <span>
                  {site.name}
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-coral" />
                <a href={`tel:${site.phoneTel}`} className="hover:text-ink">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-coral" />
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon size={18} className="shrink-0 text-coral" />
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  {site.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-ink-soft md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Website concept crafted by {site.craftedBy}.</p>
        </div>
      </div>
    </footer>
  );
}
