import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Kids Photography & Party Venue Accra`,
    template: `%s | ${site.name}`,
  },
  description:
    "Kids photography Accra, baby photoshoots, birthday sessions, kids party venue, and studio rental in Abelemkpe. Where little moments become big memories.",
  keywords: [
    "Kids Photography Accra",
    "Kids Photoshoot Accra",
    "Baby Photography Accra",
    "Birthday Photoshoot Accra",
    "Kids Party Venue Accra",
    "Photography Studio Abelemkpe",
    "Studio Rental Accra",
    "Family Photography Accra",
    "Emma's Den",
  ],
  openGraph: {
    title: `${site.name} | Where Little Moments Become Big Memories`,
    description: site.description,
    locale: "en_GH",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased atmosphere pb-mobile-cta">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
