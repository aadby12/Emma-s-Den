"use client";

import Link from "next/link";
import { Camera, PartyPopper, Building2, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

const items = [
  {
    href: "/book/photoshoot",
    label: "Book Photoshoot",
    icon: Camera,
  },
  {
    href: "/book/party",
    label: "Plan Party",
    icon: PartyPopper,
  },
  {
    href: "/book/studio",
    label: "Rent Studio",
    icon: Building2,
  },
  {
    href: site.whatsappUrl,
    label: "WhatsApp",
    icon: MessageCircle,
    external: true,
  },
];

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-[color-mix(in_oklab,var(--cream)_94%,white)]/95 px-2 py-2 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-4 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const className =
            "flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[0.65rem] font-semibold text-ink transition hover:bg-white";
          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                <Icon size={18} className="text-coral" />
                {item.label}
              </a>
            );
          }
          return (
            <Link key={item.label} href={item.href} className={className}>
              <Icon size={18} className="text-coral" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
