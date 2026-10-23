// All shop content lives here. Replace the [placeholders] with real details.

export const shop = {
  name: "[Shop Name]",
  established: "[Year]",
  city: "[City]",
  tagline:
    "Classic barbering with a modern finish. Walk in for a quick trim or book a full cut and hot-towel shave.",
  address: "[Street address]",
  postcode: "[City, postcode]",
  phone: "[+383 XX XXX XXX]",
  instagram: "https://instagram.com/",
  // Link to the booking service page (Fresha, Booksy, Setmore, …)
  bookingUrl: "#",
  // Google Maps embed. Swap the q= value for the shop's exact address,
  // or paste the src from Google Maps > Share > Embed a map
  mapEmbedUrl: "https://www.google.com/maps?q=Prishtina,+Kosovo&z=15&output=embed",
  // Illustrations in public/images — replace with real photos (same name, .jpg) when ready
  heroImage: "/images/interior.svg",
};

export const hours = [
  { days: "Mon – Fri", time: "[09:00 – 20:00]" },
  { days: "Saturday", time: "[09:00 – 18:00]" },
  { days: "Sunday", time: "Closed" },
];

export const services = [
  { name: "Haircut", price: "[€XX]", description: "Scissor or clipper cut, styled to finish" },
  { name: "Skin fade", price: "[€XX]", description: "Zero fade blended by hand" },
  { name: "Beard trim", price: "[€XX]", description: "Shape, line-up and beard oil" },
  { name: "Hot-towel shave", price: "[€XX]", description: "Straight razor with hot and cold towels" },
  { name: "Cut + beard", price: "[€XX]", description: "The full combo, about 45 minutes" },
  { name: "Kids cut", price: "[€XX]", description: "Under 12" },
];

export const barbers = [
  { name: "[Barber One]", role: "Owner · fades and classic cuts", image: "/images/barber-1.svg" },
  { name: "[Barber Two]", role: "Beards and hot-towel shaves", image: "/images/barber-2.svg" },
  { name: "[Barber Three]", role: "Textured cuts and styling", image: "/images/barber-3.svg" },
];

export const gallery = [
  { label: "Fade", image: "/images/work-fade.svg" },
  { label: "Crop", image: "/images/work-crop.svg" },
  { label: "Beard", image: "/images/work-beard.svg" },
  { label: "Pompadour", image: "/images/work-pompadour.svg" },
  { label: "Buzz", image: "/images/work-buzz.svg" },
  { label: "Taper", image: "/images/work-taper.svg" },
  { label: "Shave", image: "/images/work-shave.svg" },
  { label: "Quiff", image: "/images/work-quiff.svg" },
  { label: "Curls", image: "/images/work-curls.svg" },
  { label: "Line-up", image: "/images/work-lineup.svg" },
];
