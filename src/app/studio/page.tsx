import type { Metadata } from "next";
import { StudioSection } from "@/components/studio/StudioSection";

export const metadata: Metadata = {
  title: "Studio Rental Accra",
  description:
    "Rent a photography studio in Abelemkpe, Accra with backdrops, props, kiddie chairs, themed sets, and seasonal setups at Emma's Den.",
};

export default function StudioPage() {
  return <StudioSection />;
}
