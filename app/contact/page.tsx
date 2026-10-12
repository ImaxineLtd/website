import type { Metadata } from "next";
import { Suspense } from "react";
import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { pageMeta, site } from "@/lib/site";

const title = `Contact ${site.name}: Book a Consultation or Caseproof Demo`;
const description =
  "Talk to Imaxine about workflow automation, AI or software consulting, or book a Caseproof demo for MER and medical report digitisation.";

export const metadata: Metadata = pageMeta({ title, description, path: "/contact" });

export default function ContactPage() {
  return (
    <section>
      <Container className="grid gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:pt-24">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">Talk to us</h1>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-muted">
            Tell us about your process or book a Caseproof demo. Someone from the team replies personally.
          </p>
          <ul className="mt-10 space-y-4">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-ink hover:text-accent">
                <EnvelopeSimple size={22} aria-hidden /> {site.email}
              </a>
            </li>
            {site.whatsapp && (
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  className="inline-flex items-center gap-3 text-ink hover:text-accent"
                  rel="noopener"
                >
                  <WhatsappLogo size={22} aria-hidden /> Chat on WhatsApp
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="rounded-2xl border border-line p-6 sm:p-8">
          <Suspense fallback={<div className="h-[560px] animate-pulse rounded-xl bg-surface" aria-hidden />}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
