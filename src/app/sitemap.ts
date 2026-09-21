import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/photography",
    "/parties",
    "/studio",
    "/gallery",
    "/about",
    "/faq",
    "/book/photoshoot",
    "/book/party",
    "/book/studio",
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
