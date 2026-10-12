import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { ButtonLink, Container, Faq, ImageSlot, JsonLd, breadcrumbSchema, faqSchema } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { process, services } from "@/lib/services";
import { absoluteUrl, cta, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  const title = `${s.title} | ${site.name}`;
  return {
    title,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title, description: s.description, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section>
        <Container className="grid items-center gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-24">
          <Reveal>
            <p className="text-sm text-muted">
              <Link href="/services" className="hover:text-ink">
                Services
              </Link>{" "}
              / {s.name}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl">{s.h1}</h1>
            <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-muted">{s.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={cta.consult.href}>{cta.consult.label}</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageSlot label={`${s.name}: photo of a team or system at work, 1600x1200`} />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="offer-heading" className="py-20">
        <Container>
          <h2 id="offer-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
            What we build
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {s.offerings.map((o, i) => (
              <Reveal key={o.title} delay={0.05 * i}>
                <div className={`h-full rounded-2xl p-8 ${i === 0 ? "bg-accent-soft" : i === 3 ? "bg-surface-strong" : "bg-surface"}`}>
                  <h3 className="text-xl font-semibold tracking-tight">{o.title}</h3>
                  <p className="mt-3 max-w-[48ch] leading-relaxed text-muted">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="proof-heading" className="border-y border-line bg-surface py-20">
        <Container className="max-w-4xl">
          <h2 id="proof-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
            Proof we can deliver: Caseproof
          </h2>
          <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted">
            Caseproof is our own product. It takes handwritten medical forms from insurers, extracts every field with AI,
            routes each case to reviewers and delivers verified data through an API. We bring the same engineering to
            your project.
          </p>
          <Link
            href="/products/caseproof"
            className="mt-6 inline-flex items-center gap-2 font-medium text-accent underline-offset-4 hover:underline"
          >
            See how Caseproof works <ArrowRight size={16} aria-hidden />
          </Link>
        </Container>
      </section>

      <section aria-labelledby="process-heading" className="py-20">
        <Container>
          <h2 id="process-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
            How a project runs
          </h2>
          <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((p) => (
              <li key={p.title} className="border-t-2 border-ink pt-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="faq-heading" className="py-20">
        <Container className="max-w-4xl">
          <h2 id="faq-heading" className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
            Common questions
          </h2>
          <Faq items={s.faqs} />
        </Container>
      </section>

      <section aria-label="Other services" className="pb-8">
        <Container className="grid gap-4 md:grid-cols-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="flex items-center justify-between gap-6 rounded-2xl border border-line p-6 transition-colors hover:border-muted"
            >
              <span>
                <span className="block font-semibold">{o.name}</span>
                <span className="mt-1 block text-sm text-muted">{o.short}</span>
              </span>
              <ArrowRight size={20} className="shrink-0 text-muted" aria-hidden />
            </Link>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Tell us about the process you want to fix"
        body="A 30-minute call to understand it. If we are not the right fit, we will say so."
        href={cta.consult.href}
        label={cta.consult.label}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          description: s.description,
          serviceType: s.name,
          provider: { "@type": "Organization", name: site.legalName, url: site.url },
          areaServed: { "@type": "Country", name: "India" },
        }}
      />
      <JsonLd data={faqSchema(s.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Services", url: absoluteUrl("/services") },
          { name: s.name, url: absoluteUrl(`/services/${s.slug}`) },
        ])}
      />
    </>
  );
}
