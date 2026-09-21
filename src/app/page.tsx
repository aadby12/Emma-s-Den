import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ExperiencePillars } from "@/components/home/ExperiencePillars";
import { PhotographyPreview } from "@/components/photography/PhotographyPreview";
import { PartiesSection } from "@/components/parties/PartiesSection";
import { StudioSection } from "@/components/studio/StudioSection";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { AboutSection } from "@/components/about/AboutSection";
import { LocationSection } from "@/components/location/LocationSection";
import { FaqSection } from "@/components/faq/FaqSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperiencePillars />
      <PhotographyPreview />
      <PartiesSection />
      <StudioSection />
      <GalleryGrid limit={9} />
      <div className="pb-8 text-center">
        <Link href="/gallery" className="btn btn-secondary">
          Open Full Gallery
        </Link>
      </div>
      <AboutSection />
      <LocationSection />
      <FaqSection />
      <section className="section-pad pt-0">
        <div className="container-site">
          <div className="surface-card relative overflow-hidden px-8 py-12 text-center md:px-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--blush)_25%,transparent),transparent_45%),radial-gradient(circle_at_80%_0%,color-mix(in_oklab,var(--sky)_25%,transparent),transparent_40%)]" />
            <div className="relative">
              <p className="eyebrow justify-center">Ready when you are</p>
              <h2 className="heading-lg mt-4 text-ink">
                Choose your path to a beautiful memory.
              </h2>
              <p className="lead mx-auto mt-4 max-w-xl">
                Book a photoshoot, plan a kids party, or rent the studio —
                three ways to experience Emma&apos;s Den.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/book/photoshoot" className="btn btn-primary">
                  Book a Photoshoot
                </Link>
                <Link href="/book/party" className="btn btn-accent">
                  Plan a Kids Party
                </Link>
                <Link href="/book/studio" className="btn btn-secondary">
                  Rent the Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
