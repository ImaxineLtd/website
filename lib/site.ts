// Single source of truth for business details. Values marked TODO need confirming before launch.
export const site = {
  name: "Imaxine",
  // TODO: confirm registered entity name as on the certificate of incorporation (e.g. "Imaxine Private Limited")
  legalName: "Imaxine Ltd",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  // TODO: replace with the real sales inbox
  email: "hello@example.com",
  // TODO: Indian business number in E.164 without "+", e.g. "919800000000". Leave empty to hide WhatsApp links.
  whatsapp: "",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  locale: "en_IN",
  description:
    "Custom workflow automation, AI consulting and software development for businesses in India. Makers of Caseproof, medical document digitisation for insurers and TPAs.",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/products/caseproof", label: "Caseproof" },
  { href: "/contact", label: "Contact" },
];

// One label per CTA intent, used everywhere (taste-skill: no duplicate CTA intent).
export const cta = {
  consult: { href: "/contact", label: "Book a consultation" },
  demo: { href: "/contact?interest=caseproof", label: "Book a demo" },
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
