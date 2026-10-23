// All shop content lives here. Replace the [placeholders] with real details.

import { url } from "../lib/url";

export const shop = {
  name: "Leo Barbershop",
  established: "[Jahr]",
  city: "[Stadt]",
  tagline:
    "Klassisches Barbierhandwerk mit modernem Finish. Kommen Sie spontan für einen schnellen Schnitt vorbei oder buchen Sie Haarschnitt und Heißtuch-Rasur.",
  address: "[Straße und Hausnummer]",
  postcode: "[PLZ, Stadt]",
  phone: "[Telefonnummer]",
  email: "[E-Mail-Adresse]",
  instagram: "https://instagram.com/",
  // Google Maps embed. Swap the q= value for the shop's exact address,
  // or paste the src from Google Maps > Share > Embed a map
  mapEmbedUrl: "https://www.google.com/maps?q=Prishtina,+Kosovo&z=15&output=embed",
  // Illustrations in public/images — replace with real photos (same name, .jpg) when ready
  heroImage: url("/images/interior.svg"),
};

// Details for the Impressum and Datenschutz pages
export const legal = {
  owner: "[Vor- und Nachname des Inhabers]",
  legalForm: "[Rechtsform, z. B. Einzelunternehmen]",
  vatId: "[USt-IdNr. nach § 27a UStG, falls vorhanden]",
  chamber: "[Handwerkskammer, z. B. Handwerkskammer Berlin]",
  craftRegister: "[Eintragung in die Handwerksrolle, Betriebsnummer]",
  masterTitle: "[Berufsbezeichnung, z. B. Friseurmeister, verliehen in Deutschland]",
  hosting: "[Name und Anschrift des Hosting-Anbieters, z. B. Netlify Inc.]",
  formProvider: "[Anbieter und Anschrift von FormSubmit laut formsubmit.co]",
  databaseProvider: "[Supabase Inc., Anschrift laut supabase.com; Serverstandort, z. B. Frankfurt (EU)]",
  supervisoryAuthority: "[Datenschutz-Aufsichtsbehörde des Bundeslandes]",
  lastUpdated: "[Monat Jahr]",
};

export const hours = [
  { days: "Mo – Fr", time: "[09:00 – 20:00]" },
  { days: "Samstag", time: "[09:00 – 18:00]" },
  { days: "Sonntag", time: "Geschlossen" },
];

// Booking requests from the "Termin buchen" popup are emailed to `email` through
// FormSubmit (formsubmit.co). The very first request sends an activation email
// from FormSubmit to that address, which has to be confirmed once.
export const booking = {
  email: "06bs0280@gmail.com",
  // Supabase project that stores bookings so a taken slot can't be booked twice.
  // Set up with supabase/booking.sql, then paste the values from
  // Supabase > Project Settings > API. The anon key is meant to be public.
  // While these are empty, slots aren't blocked and requests are only emailed.
  supabaseUrl: "https://vltafpngbwvnfpmwpzws.supabase.co",
  supabaseAnonKey: "sb_publishable_zGJJ-0Y_ZA1M88t_DU68Rw_3Nd-3L6D",
  slotMinutes: 30,
  daysAhead: 14,
  // Opening times per weekday for the time slots, starting with Sunday; null = closed.
  // Keep in sync with `hours` above.
  openingHours: [
    null,
    ["09:00", "20:00"],
    ["09:00", "20:00"],
    ["09:00", "20:00"],
    ["09:00", "20:00"],
    ["09:00", "20:00"],
    ["09:00", "18:00"],
  ] as ([string, string] | null)[],
};

export const services = [
  { name: "Haarschnitt", price: "[XX €]", duration: 30, description: "Mit Schere oder Maschine, inklusive Styling" },
  { name: "Skin Fade", price: "[XX €]", duration: 40, description: "Fade bis auf null, von Hand verblendet" },
  { name: "Bart trimmen", price: "[XX €]", duration: 20, description: "Form, Konturen und Bartöl" },
  { name: "Heißtuch-Rasur", price: "[XX €]", duration: 30, description: "Rasiermesser mit heißen und kalten Tüchern" },
  { name: "Schnitt + Bart", price: "[XX €]", duration: 45, description: "Das Komplettpaket, ca. 45 Minuten" },
  { name: "Kinderhaarschnitt", price: "[XX €]", duration: 20, description: "Unter 12 Jahren" },
];

export const barbers = [
  { name: "[Barbier Eins]", role: "Inhaber · Fades und klassische Schnitte", image: url("/images/barber-1.svg") },
  { name: "[Barbier Zwei]", role: "Bärte und Heißtuch-Rasuren", image: url("/images/barber-2.svg") },
  { name: "[Barbier Drei]", role: "Texturierte Schnitte und Styling", image: url("/images/barber-3.svg") },
];

export const gallery = [
  { label: "Fade", image: url("/images/work-fade.svg") },
  { label: "Crop", image: url("/images/work-crop.svg") },
  { label: "Bart", image: url("/images/work-beard.svg") },
  { label: "Pompadour", image: url("/images/work-pompadour.svg") },
  { label: "Buzz Cut", image: url("/images/work-buzz.svg") },
  { label: "Taper", image: url("/images/work-taper.svg") },
  { label: "Rasur", image: url("/images/work-shave.svg") },
  { label: "Quiff", image: url("/images/work-quiff.svg") },
  { label: "Locken", image: url("/images/work-curls.svg") },
  { label: "Konturen", image: url("/images/work-lineup.svg") },
];
