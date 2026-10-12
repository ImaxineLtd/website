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
    "Custom workflow automation, AI consulting and software development in India. Makers of Caseproof, medical document digitisation for insurers and TPAs.",
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

// Page metadata with canonical + Open Graph. Setting openGraph on a page replaces the inherited object,
// so the share image is passed explicitly (falls back to the site-wide card).
export function pageMeta({ title, description, path, image = "/opengraph-image" }: { title: string; description: string; path: string; image?: string }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website" as const, locale: site.locale, siteName: site.name, title, description, url: path, images: [image] },
  };
}
