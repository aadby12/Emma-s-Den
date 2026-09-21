import type { Metadata } from "next";
import { PartiesSection } from "@/components/parties/PartiesSection";

export const metadata: Metadata = {
  title: "Kids Party Venue Accra",
  description:
    "Kids party venue in Abelemkpe, Accra — birthday parties, private events, indoor and outdoor celebrations, and children's experiences at Emma's Den.",
};

export default function PartiesPage() {
  return <PartiesSection />;
}
