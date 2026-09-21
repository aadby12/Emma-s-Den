"use client";

import { BookingWizard, type WizardStep } from "@/components/booking/BookingWizard";
import { studioAmenities } from "@/lib/data";

const steps: WizardStep[] = [
  {
    id: "requirement",
    title: "Studio Requirement",
    description: "Tell us how you plan to use the space.",
    fields: [
      {
        type: "select",
        name: "requirement",
        label: "Studio requirement",
        required: true,
        options: [
          { value: "kids-shoot", label: "Kids / Family Shoot" },
          { value: "commercial", label: "Creative / Commercial Session" },
          { value: "own-photographer", label: "Bring My Own Photographer" },
          { value: "themed-set", label: "Themed Set Session" },
          { value: "other", label: "Other Creative Use" },
        ],
      },
    ],
  },
  {
    id: "date",
    title: "Date",
    fields: [
      {
        type: "date",
        name: "date",
        label: "Preferred date",
        required: true,
      },
    ],
  },
  {
    id: "time",
    title: "Time",
    fields: [
      {
        type: "time",
        name: "startTime",
        label: "Preferred start time",
        required: true,
      },
      {
        type: "select",
        name: "duration",
        label: "Estimated duration",
        required: true,
        options: [
          { value: "2h", label: "About 2 hours" },
          { value: "4h", label: "About 4 hours" },
          { value: "full-day", label: "Full day" },
          { value: "discuss", label: "Prefer to discuss" },
        ],
      },
    ],
  },
  {
    id: "equipment",
    title: "Equipment / Setup",
    fields: [
      {
        type: "select",
        name: "setup",
        label: "Primary setup interest",
        required: true,
        options: studioAmenities.map((item) => ({
          value: item.toLowerCase().replace(/\s+/g, "-"),
          label: item,
        })),
      },
      {
        type: "textarea",
        name: "equipmentNotes",
        label: "Equipment & setup notes",
        placeholder: "Backdrops, props, lighting needs…",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Details",
    fields: [
      {
        type: "text",
        name: "name",
        label: "Full name",
        required: true,
      },
      {
        type: "tel",
        name: "phone",
        label: "Phone / WhatsApp",
        required: true,
      },
      {
        type: "email",
        name: "email",
        label: "Email",
        required: true,
      },
      {
        type: "textarea",
        name: "notes",
        label: "Additional notes",
      },
    ],
  },
];

export default function BookStudioPage() {
  return (
    <section className="section-pad">
      <div className="container-site max-w-2xl">
        <BookingWizard
          accentLabel="Rent the Studio"
          title="Reserve the creative space"
          subtitle="Studio Requirement → Date → Time → Equipment / Setup → Contact Details"
          steps={steps}
          whatsappPrefill={(data) =>
            `Hi Emma's Den! I'd like to rent the studio.\n\nRequirement: ${data.requirement || "-"}\nDate: ${data.date || "-"}\nStart time: ${data.startTime || "-"}\nDuration: ${data.duration || "-"}\nSetup: ${data.setup || "-"}\nEquipment notes: ${data.equipmentNotes || "-"}\nName: ${data.name || "-"}\nPhone: ${data.phone || "-"}\nEmail: ${data.email || "-"}\nNotes: ${data.notes || "-"}`
          }
        />
      </div>
    </section>
  );
}
