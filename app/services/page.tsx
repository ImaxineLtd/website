import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/services";
import { cta, site } from "@/lib/site";

const title = `Workflow Automation, AI & Software Consulting Services | ${site.name}`;
const description =
  "Custom workflow automation, AI consulting and development, and software consulting for businesses in India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section>
        <Container className="pb-12 pt-14 md:pt-20 lg:pt-24">
          <h1 className="max-w-[20ch] text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl">
            Services for teams that run on process
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
            Workflow automation, AI and custom software, built and run by the team behind Caseproof.
          </p>
        </Container>
      </section>
      <section className="pb-16">
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={0.05 * i}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid gap-4 py-10 md:grid-cols-[1fr_1.3fr_auto] md:items-center md:gap-10"
                >
                  <h2 className="text-2xl font-semibold tracking-tight group-hover:text-accent">{s.name}</h2>
                  <p className="max-w-[52ch] leading-relaxed text-muted">{s.short}</p>
                  <ArrowRight size={24} className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand
        title="Not sure which one you need?"
        body="Describe the problem. We will tell you whether it needs automation, AI, custom software, or none of them."
        href={cta.consult.href}
        label={cta.consult.label}
      />
    </>
  );
}
