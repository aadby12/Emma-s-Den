export type PhotoCategory =
  | "newborn"
  | "baby"
  | "birthday"
  | "milestones"
  | "kids"
  | "family"
  | "maternity"
  | "portraits";

export type GalleryFilter =
  | "all"
  | "kids"
  | "babies"
  | "families"
  | "maternity"
  | "birthdays"
  | "parties"
  | "studio";

export const photographyCategories = [
  {
    id: "newborn" as const,
    title: "Newborn",
    description:
      "Gentle, carefully paced sessions that capture those first quiet days with softness and care.",
    packageInfo:
      "Soft lighting, props, and a calm studio environment tailored for newborns and new parents.",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900&q=80",
  },
  {
    id: "baby" as const,
    title: "Baby",
    description:
      "Celebrate rolling, smiling, and early personality — beautifully styled for lasting keepsakes.",
    packageInfo:
      "Age-appropriate sets, playful props, and guidance for natural, joyful expressions.",
    image:
      "https://images.unsplash.com/photo-1544126592-807adefc5210?w=900&q=80",
  },
  {
    id: "birthday" as const,
    title: "Birthday",
    description:
      "Mark another year with themed setups, cake moments, and portraits full of sparkle.",
    packageInfo:
      "Birthday-ready backdrops and styling that turn celebration energy into timeless photos.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&q=80",
  },
  {
    id: "milestones" as const,
    title: "Milestones",
    description:
      "First steps, first birthday, school readiness — document the moments that define childhood.",
    packageInfo:
      "Flexible session formats designed around the milestone you want to remember.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80",
  },
  {
    id: "kids" as const,
    title: "Kids",
    description:
      "Fun, expressive portraits that let children be themselves — curious, bold, and full of life.",
    packageInfo:
      "Creative sets and playful direction that keep kids comfortable and engaged.",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&q=80",
  },
  {
    id: "family" as const,
    title: "Family",
    description:
      "Warm, connected family portraits that feel natural — not stiff, not forced.",
    packageInfo:
      "Studio or styled family sessions with guidance for every age in the frame.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=900&q=80",
  },
  {
    id: "maternity" as const,
    title: "Maternity",
    description:
      "Elegant maternity portraits celebrating the beauty and anticipation of new life.",
    packageInfo:
      "Flattering light, thoughtful posing, and serene studio setups for expecting parents.",
    image:
      "https://images.unsplash.com/photo-1493894473891-10fc1e36d374?w=900&q=80",
  },
  {
    id: "portraits" as const,
    title: "Portraits",
    description:
      "Refined individual portraits for children and families — clean, expressive, and timeless.",
    packageInfo:
      "Portrait-focused sessions with curated backdrops and professional styling support.",
    image:
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=900&q=80",
  },
];

export const partyPackages = [
  {
    id: "birthday",
    title: "Birthday Parties",
    description:
      "Themed celebrations designed for little guests — colorful, joyful, and stress-light for parents.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80",
  },
  {
    id: "private",
    title: "Private Events",
    description:
      "Intimate gatherings for family milestones, playdates, and special children’s occasions.",
    image:
      "https://images.unsplash.com/photo-1464349153736-12acf9046d5b?w=900&q=80",
  },
  {
    id: "indoor",
    title: "Indoor Parties",
    description:
      "Climate-friendly indoor celebrations with creative setups and space for play and photos.",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900&q=80",
  },
  {
    id: "outdoor",
    title: "Outdoor Parties",
    description:
      "Fresh-air celebrations when the occasion calls for open space and outdoor energy.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc7ce?w=900&q=80",
  },
  {
    id: "kids-club",
    title: "Kids Club / Children's Experiences",
    description:
      "Creative children’s experiences that go beyond a party — play, imagination, and memory-making.",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&q=80",
  },
];

export const partyJourney = [
  { step: "01", title: "Choose Your Theme", detail: "Pick a look that matches their personality." },
  { step: "02", title: "Choose Your Package", detail: "Select the celebration format that fits." },
  { step: "03", title: "Choose Your Date", detail: "Lock in a day that works for your family." },
  { step: "04", title: "Celebrate", detail: "Arrive, enjoy, and leave with big memories." },
];

export const studioAmenities = [
  "Backdrops",
  "Props",
  "Kiddie chairs",
  "Themed sets",
  "Seasonal setups",
];

export const studioBackdrops = [
  {
    title: "Soft Neutral Studio",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff7d?w=900&q=80",
  },
  {
    title: "Pastel Play Set",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900&q=80",
  },
  {
    title: "Birthday Theme Space",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80",
  },
  {
    title: "Family Portrait Corner",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=900&q=80",
  },
  {
    title: "Seasonal Setup",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900&q=80",
  },
  {
    title: "Creative Prop Zone",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&q=80",
  },
];

export const galleryItems: {
  id: string;
  src: string;
  alt: string;
  category: GalleryFilter;
  tall?: boolean;
}[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&q=80",
    alt: "Child portrait in soft light",
    category: "kids",
    tall: true,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1544126592-807adefc5210?w=900&q=80",
    alt: "Baby photography session",
    category: "babies",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=900&q=80",
    alt: "Family portrait together",
    category: "families",
    tall: true,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1493894473891-10fc1e36d374?w=900&q=80",
    alt: "Maternity photography",
    category: "maternity",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&q=80",
    alt: "Birthday cake celebration",
    category: "birthdays",
    tall: true,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80",
    alt: "Kids party decorations",
    category: "parties",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff7d?w=900&q=80",
    alt: "Studio photography space",
    category: "studio",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80",
    alt: "Kids milestone moment",
    category: "kids",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900&q=80",
    alt: "Newborn wrapped peacefully",
    category: "babies",
    tall: true,
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=900&q=80",
    alt: "Mother and child portrait",
    category: "families",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900&q=80",
    alt: "Colorful party celebration",
    category: "parties",
    tall: true,
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc7ce?w=900&q=80",
    alt: "Outdoor kids celebration",
    category: "birthdays",
  },
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&q=80",
    alt: "Studio props and creative set",
    category: "studio",
    tall: true,
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1464349153736-12acf9046d5b?w=900&q=80",
    alt: "Party table setup",
    category: "parties",
  },
];

export const faqs = [
  {
    question: "What photography sessions do you offer?",
    answer:
      "Emma's Den offers sessions across newborn, baby, birthday, milestones, kids, family, maternity, and portrait photography. Share the moment you want to capture and we will guide you to the right experience.",
  },
  {
    question: "Can I bring my own photographer?",
    answer:
      "Yes — the studio can be rented by photographers and creatives. Reach out with your date and setup needs so we can confirm availability and studio requirements.",
  },
  {
    question: "Can I rent the studio?",
    answer:
      "Absolutely. Photographers and creatives can rent the studio and make use of available backdrops, props, kiddie chairs, themed sets, and seasonal setups.",
  },
  {
    question: "Do you provide photographers?",
    answer:
      "Emma's Den offers photography experiences as part of its studio services. For specific session needs, contact us and we will help you book the right option.",
  },
  {
    question: "What types of kids parties can you host?",
    answer:
      "We host birthday parties, private events, indoor parties, outdoor parties, and kids club / children's experiences. Tell us your theme and guest needs and we will help you plan.",
  },
  {
    question: "Where are you located?",
    answer:
      "Emma's Den is at 26 Nii Lomo Tackie, Abelemkpe, Accra, Ghana.",
  },
  {
    question: "How do I book?",
    answer:
      "Use the Book Photoshoot, Plan Party, or Rent Studio paths on this website, or message us on WhatsApp, call 020 668 8153, or email emmadengh@gmail.com.",
  },
  {
    question: "What should I bring to a photoshoot?",
    answer:
      "Bring outfits that feel like your family, any special props that matter to you, and a relaxed spirit. We will share practical session tips when you book.",
  },
];

export const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=1200&q=80",
    alt: "Joyful child portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
    alt: "Family embracing",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
    alt: "Kids party celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1544126592-807adefc5210?w=1200&q=80",
    alt: "Baby studio session",
  },
];
