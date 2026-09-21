import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "PhotographyBusiness"],
        "@id": `${site.url}/#business`,
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: site.phoneTel,
        email: site.email,
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=1200&q=80",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          addressLocality: "Abelemkpe",
          addressRegion: "Accra",
          addressCountry: "GH",
        },
        geo: {
          "@type": "GeoCoordinates",
          addressCountry: "GH",
        },
        sameAs: [site.instagramUrl],
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: "Accra",
        },
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Kids & Family Photography",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Kids Party Venue",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Studio Rental",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
