"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { BookingWizard, type WizardStep } from "@/components/booking/BookingWizard";
import { partyPackages } from "@/lib/data";

function PartyBooking() {
  const params = useSearchParams();
  const type = params.get("type") || "";

  const steps: WizardStep[] = [
    {
      id: "type",
      title: "Party Type",
      description: "Choose the celebration format.",
      fields: [
        {
          type: "select",
          name: "partyType",
          label: "Party type",
          required: true,
          options: partyPackages.map((p) => ({
            value: p.id,
            label: p.title,
          })),
        },
      ],
    },
    {
      id: "package",
      title: "Package",
      description: "Request the package direction that fits your celebration.",
      fields: [
        {
          type: "select",
          name: "package",
          label: "Package interest",
          required: true,
          options: [
            { value: "request", label: "Request Party Package" },
            { value: "indoor", label: "Indoor Celebration Focus" },
            { value: "outdoor", label: "Outdoor Celebration Focus" },
            { value: "custom", label: "Custom Party Planning" },
          ],
        },
      ],
    },
    {
      id: "guests",
      title: "Guest Information",
      fields: [
        {
          type: "text",
          name: "guestCount",
          label: "Approximate guest count",
          required: true,
          placeholder: "e.g. 15–20",
        },
        {
          type: "text",
          name: "ageGroup",
          label: "Age group",
          required: true,
          placeholder: "e.g. 4–8 years",
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
      id: "requirements",
      title: "Requirements",
      fields: [
        {
          type: "textarea",
          name: "requirements",
          label: "Theme & requirements",
          required: true,
          placeholder: "Theme ideas, décor notes, catering needs…",
        },
        {
          type: "text",
          name: "name",
          label: "Your name",
          required: true,
        },
        {
          type: "tel",
          name: "phone",
          label: "Phone / WhatsApp",
          required: true,
        },
      ],
    },
    {
      id: "inquiry",
      title: "Inquiry",
      description: "Confirm and send your party inquiry.",
      fields: [
        {
          type: "email",
          name: "email",
          label: "Email",
          placeholder: "Optional email",
        },
        {
          type: "textarea",
          name: "finalNotes",
          label: "Final notes",
          placeholder: "Anything else we should know?",
        },
      ],
    },
  ];

  return (
    <BookingWizard
      accentLabel="Plan a Kids Party"
      title="Plan an unforgettable celebration"
      subtitle="Party Type → Package → Guest Information → Date → Requirements → Inquiry"
      steps={steps}
      initialValues={{ partyType: type }}
      whatsappPrefill={(data) =>
        `Hi Emma's Den! I'd like to plan a kids party.\n\nType: ${data.partyType || "-"}\nPackage: ${data.package || "-"}\nGuests: ${data.guestCount || "-"}\nAge group: ${data.ageGroup || "-"}\nDate: ${data.date || "-"}\nRequirements: ${data.requirements || "-"}\nName: ${data.name || "-"}\nPhone: ${data.phone || "-"}\nEmail: ${data.email || "-"}\nNotes: ${data.finalNotes || "-"}`
      }
    />
  );
}

export default function BookPartyPage() {
  return (
    <section className="section-pad">
      <div className="container-site max-w-2xl">
        <Suspense fallback={<div className="surface-card p-8">Loading booking…</div>}>
          <PartyBooking />
        </Suspense>
      </div>
    </section>
  );
}
