export const site = {
  name: "Emma's Den",
  tagline: "Where Little Moments Become Big Memories.",
  description:
    "Photography, celebrations and creative studio experiences for families in Accra.",
  address: {
    line1: "26 Nii Lomo Tackie",
    line2: "Abelemkpe, Accra, Ghana",
  },
  phone: "020 668 8153",
  phoneTel: "+233206688153",
  email: "emmadengh@gmail.com",
  instagram: "@emmadengh",
  instagramUrl: "https://www.instagram.com/emmadengh",
  whatsappUrl: "https://wa.me/233206688153",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=26+Nii+Lomo+Tackie+Abelemkpe+Accra+Ghana",
  craftedBy: "Avenor Tech",
  url: "https://emmasden.com",
} as const;

export const navLinks = [
  { href: "/photography", label: "Photography" },
  { href: "/parties", label: "Kids Parties" },
  { href: "/studio", label: "Studio Rental" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;
