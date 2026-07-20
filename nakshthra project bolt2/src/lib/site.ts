export const site = {
  name: "Nakshatra Coimbatore Travels",
  shortName: "Nakshatra Travels",

  phoneDisplay: "073739 87383",
  phoneRaw: "+917373987383",
  tel: "tel:+917373987383",

  whatsappNumber: "917373987383",

  whatsappDefault: `https://wa.me/917373987383?text=${encodeURIComponent(
    `Hi Nakshatra Coimbatore Travels,

I want to book a trip.

Please share the available vehicles, quotation and booking details.`
  )}`,

  hours: "Open 24 hours",

  address: {
    line1: "Trichy Main Road, Pirivu",
    line2: "Near Sulur, Dmart, Ravathur",
    city: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "641402",
    full: "Trichy Main Road, Pirivu, near Sulur, Dmart, Ravathur, Coimbatore, Tamil Nadu 641402",
  },

  email: "info@nakshatracoimbatoretravels.com",

  serviceAreas: [
    "Coimbatore",
    "Ooty",
    "Kodaikanal",
    "Tirupati",
    "Madurai",
    "Rameswaram",
    "Valparai",
    "Munnar",
    "Wayanad",
  ],
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const navLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Tour Packages",
    to: "/tour-packages",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "FAQ",
    to: "/faq",
  },
] as const;