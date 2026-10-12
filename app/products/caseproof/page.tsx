import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/ssr";
import { ButtonLink, Container, Faq, ImageSlot, JsonLd, breadcrumbSchema, faqSchema } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { caseproof as cp } from "@/lib/caseproof";
import { absoluteUrl, cta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: cp.title,
  description: cp.description,
  alternates: { canonical: "/products/caseproof" },
  openGraph: { title: cp.title, description: cp.description, url: "/products/caseproof" },
};

const software = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: cp.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: cp.description,
  provider: { "@type": "Organization", name: site.legalName, url: site.url },
  areaServed: { "@type": "Country", name: "India" },
};

export default function CaseproofPage() {
  const [lead, ...features] = cp.features;
  return (
    <>
      <section>
        <Container className="grid items-center gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[6fr_6fr] lg:gap-16 lg:pt-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              {cp.name}: {cp.descriptor}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl">
              {cp.h1}
            </h1>
            <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-muted">{cp.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={cta.demo.href}>{cta.demo.label}</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">
                How it works
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageSlot label="Scanned handwritten MER beside extracted fields in the QC workspace, synthetic data, 1600x1200" />
          </Reveal>
        </Container>
      </section>

      <section aria-label="Documents Caseproof reads" className="border-y border-line py-8">
        <Container>
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-medium text-muted">
            {cp.documents.map((d) => (
              <li key={d} className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-accent" aria-hidden />
                {d}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="why-heading" className="py-20">
        <Container>
          <h2 id="why-heading" className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
            Why insurers and TPAs choose Caseproof
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-6">
            <Reveal className="md:col-span-3 md:row-span-2">
              <div className="flex h-full flex-col justify-end rounded-2xl bg-accent-soft p-8">
                <h3 className="text-2xl font-semibold tracking-tight">{lead.title}</h3>
                <p className="mt-3 max-w-[44ch] leading-relaxed text-muted">{lead.body}</p>
              </div>
            </Reveal>
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.06 * i} className="md:col-span-3">
                <div className={`h-full rounded-2xl p-7 ${i % 3 === 0 ? "bg-surface-strong" : "bg-surface"}`}>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="how-it-works" aria-labelledby="how-heading" className="scroll-mt-20 py-20">
        <Container className="grid gap-12 lg:grid-cols-[5fr_7fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="how-heading" className="max-w-[16ch] text-3xl font-semibold tracking-tight md:text-4xl">
              How MER digitisation works
            </h2>
            <p className="mt-4 max-w-[40ch] leading-relaxed text-muted">
              From a paper form at a diagnostic centre to data your underwriters can use.
            </p>
          </div>
          <ol className="relative space-y-10 border-l border-line pl-8">
            {cp.steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-0.5 grid size-5 place-items-center rounded-full border-2 border-accent bg-bg"
                />
                <Reveal delay={0.05 * i}>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 max-w-[52ch] leading-relaxed text-muted">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="ops-heading" className="border-y border-line bg-surface py-20">
        <Container>
          <h2 id="ops-heading" className="max-w-[22ch] text-3xl font-semibold tracking-tight md:text-4xl">
            Built for operations at scale
          </h2>
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {cp.operations.map((o) => (
              <div key={o.title}>
                <dt className="font-semibold">{o.title}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{o.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="security-heading" className="py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 id="security-heading" className="max-w-[18ch] text-3xl font-semibold tracking-tight md:text-4xl">
              Security your vendor-risk team will ask about
            </h2>
            <div className="mt-8">
              <ButtonLink href="/products/caseproof/security" variant="secondary">
                Read the security overview
              </ButtonLink>
            </div>
          </div>
          <ul className="space-y-5">
            {cp.security.map((s) => (
              <li key={s} className="flex gap-3 leading-relaxed">
                <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-accent" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="who-heading" className="py-20">
        <Container>
          <h2 id="who-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
            Who it is for
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {cp.audiences.map((a) => (
              <div key={a.title} className="bg-bg p-8">
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-heading" className="py-20">
        <Container className="max-w-4xl">
          <h2 id="faq-heading" className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions about Caseproof
          </h2>
          <Faq items={cp.faqs} />
        </Container>
      </section>

      <CtaBand
        title="See Caseproof on your own MER forms"
        body="Book a 30-minute demo, or send de-identified sample cases for a pilot under NDA."
        href={cta.demo.href}
        label={cta.demo.label}
      />

      <JsonLd data={software} />
      <JsonLd data={faqSchema(cp.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Products", url: absoluteUrl("/products") },
          { name: cp.name, url: absoluteUrl("/products/caseproof") },
        ])}
      />
    </>
  );
}
