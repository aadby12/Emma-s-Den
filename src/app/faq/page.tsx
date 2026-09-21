import type { Metadata } from "next";
import { FaqSection } from "@/components/faq/FaqSection";
import { LocationSection } from "@/components/location/LocationSection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about photography sessions, kids parties, studio rental, and booking at Emma's Den Accra.",
};

export default function FaqPage() {
  return (
    <>
      <FaqSection />
      <LocationSection />
    </>
  );
}
