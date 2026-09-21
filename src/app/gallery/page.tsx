import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse kids, babies, families, maternity, birthdays, parties, and studio photography from Emma's Den in Accra.",
};

export default function GalleryPage() {
  return <GalleryGrid />;
}
