import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="section-pad">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="img-frame relative aspect-[4/5] max-w-md shadow-[var(--shadow)]">
            <Image
              src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1000&q=80"
              alt="Family moment at Emma's Den"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 max-w-[220px] rounded-[var(--radius)] bg-white p-5 shadow-[var(--shadow)] sm:right-6">
            <p className="font-display text-xl text-ink">Abelemkpe, Accra</p>
            <p className="mt-1 text-sm text-ink-soft">
              Photography · Parties · Studio
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow">About Emma&apos;s Den</p>
          <h2 className="heading-lg mt-4 text-ink">
            A family-focused studio for memories that grow with them.
          </h2>
          <div className="mt-5 space-y-4 text-ink-soft leading-relaxed">
            <p>
              Emma&apos;s Den is a kids photography studio and children&apos;s party
              venue in Abelemkpe, Accra. Families come here for more than a
              single session — they come for a complete experience that
              celebrates childhood.
            </p>
            <p>
              From children&apos;s photography and family portraits to kids parties
              and creative studio rental, the space is designed around warmth,
              play, and professional care. Flexible photography options, creative
              sets, and thoughtful props help every visit feel personal.
            </p>
            <p>
              Whether you are booking a photoshoot, planning a celebration, or
              renting the studio for your own creative vision, Emma&apos;s Den is a
              destination for family memories and children&apos;s experiences.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book/photoshoot" className="btn btn-primary">
              Start Booking
            </Link>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Follow {site.instagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
