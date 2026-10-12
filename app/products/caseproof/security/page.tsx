import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, JsonLd, breadcrumbSchema } from "@/components/ui";
import { absoluteUrl, cta } from "@/lib/site";

const title = "Caseproof Security: Isolated Environments & Access Control";
const description =
  "How Caseproof protects medical data for insurers and TPAs: an isolated environment per customer, role-based access, encryption in transit and a full audit trail.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products/caseproof/security" },
  openGraph: { title, description, url: "/products/caseproof/security" },
};

const sections = [
  {
    h: "An isolated environment per customer",
    p: "Each customer runs on a dedicated environment with its own database, storage and processing pipeline. No database is shared between clients.",
  },
  {
    h: "Role-based access",
    p: "Administrators, annotators and reviewers see only what their role allows. Access is configured per customer.",
  },
  {
    h: "Encryption and secure APIs",
    p: "Data is encrypted in transit, and the intake API and webhooks use authenticated requests.",
  },
  {
    h: "Full audit trail",
    p: "Every action on every case is recorded with who did it and when, from intake through correction to delivery.",
  },
  // TODO: confirm before launch; remove if not offered
  {
    h: "Deployment options",
    p: "Caseproof is delivered as a licensed, managed deployment. Private-cloud or on-premise hosting is available on request.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section>
        <Container className="max-w-4xl pb-12 pt-14 md:pt-20 lg:pt-24">
          <p className="text-sm text-muted">
            <Link href="/products/caseproof" className="hover:text-ink">
              Caseproof
            </Link>{" "}
            / Security
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">
            Security built for medical data
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted">
            Written for insurer and TPA security, procurement and vendor-risk teams reviewing Caseproof.
          </p>
        </Container>
      </section>
      <section className="pb-12">
        <Container className="max-w-4xl">
          <div className="divide-y divide-line border-t border-line">
            {sections.map((s) => (
              <div key={s.h} className="grid gap-3 py-8 md:grid-cols-[1fr_1.4fr] md:gap-10">
                <h2 className="text-lg font-semibold">{s.h}</h2>
                <p className="leading-relaxed text-muted">{s.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-surface p-8">
            <h2 className="text-xl font-semibold">Need our security questionnaire answered?</h2>
            <p className="mt-2 max-w-[56ch] leading-relaxed text-muted">
              Send it with your demo request and we will work through it with you.
            </p>
            <div className="mt-6">
              <ButtonLink href={cta.demo.href}>{cta.demo.label}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Caseproof", url: absoluteUrl("/products/caseproof") },
          { name: "Security", url: absoluteUrl("/products/caseproof/security") },
        ])}
      />
    </>
  );
}
