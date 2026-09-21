import type { Metadata } from "next";
import { AboutSection } from "@/components/about/AboutSection";
import { LocationSection } from "@/components/location/LocationSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Emma's Den — a kids photography studio, children's party venue, and creative studio rental space in Abelemkpe, Accra.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <LocationSection />
    </>
  );
}
