import { MapPin, Phone, Mail, Navigation, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function LocationSection() {
  return (
    <section className="section-pad bg-white/60">
      <div className="container-wide grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card p-8">
          <p className="eyebrow">Location</p>
          <h2 className="heading-lg mt-4 text-ink">{site.name}</h2>
          <div className="mt-6 space-y-4 text-ink-soft">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-coral" size={20} />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="shrink-0 text-coral" size={20} />
              <a href={`tel:${site.phoneTel}`} className="hover:text-ink">
                {site.phone}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="shrink-0 text-coral" size={20} />
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Navigation size={17} />
              Get Directions
            </a>
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

        <div className="img-frame relative min-h-[320px] overflow-hidden bg-[var(--cream-deep)]">
          <iframe
            title="Emma's Den location map"
            src="https://www.google.com/maps?q=26+Nii+Lomo+Tackie+Abelemkpe+Accra+Ghana&output=embed"
            className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
