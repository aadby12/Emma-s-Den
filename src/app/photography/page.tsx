import type { Metadata } from "next";
import { PhotographyPreview } from "@/components/photography/PhotographyPreview";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kids Photography Accra",
  description:
    "Kids photography, baby photoshoots, birthday sessions, family and maternity portraits at Emma's Den in Abelemkpe, Accra.",
};

export default function PhotographyPage() {
  return (
    <>
      <section className="section-pad pb-0">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow">Photography</p>
          <h1 className="heading-lg mt-4 text-ink">
            Kids & family photography in Accra.
          </h1>
          <p className="lead mt-4">
            Newborn, baby, birthday, milestones, kids, family, maternity, and
            portrait sessions — creative sets, flexible options, and a warm
            studio experience.
          </p>
          <Link href="/book/photoshoot" className="btn btn-primary mt-6">
            Book a Photoshoot
          </Link>
        </div>
      </section>
      <PhotographyPreview full />
    </>
  );
}
