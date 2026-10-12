import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { ButtonLink, Container, ImageSlot } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { caseproof } from "@/lib/caseproof";
import { process, services } from "@/lib/services";
import { cta } from "@/lib/site";

const principles = [
  {
    title: "People stay in control",
    body: "AI does the reading and typing. Your team, or ours, checks the result before it counts.",
  },
  {
    title: "We run what we build",
    body: "Caseproof is in production every day. You get the same engineering on your project.",
  },
  {
    title: "Your data stays separate",
    body: "Isolated environments, role-based access and a full audit trail as standard.",
  },
  {
    title: "Start with one process",
    body: "A scoped first phase on your real data, before any larger commitment.",
  },
];

export default function Home() {
  const [main, ...rest] = services;
  return (
    <>
      <section>
        <Container className="grid items-center gap-12 pb-20 pt-14 md:pt-20 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-24">
          <Reveal>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tighter text-ink md:text-5xl lg:text-6xl">
              We build AI workflows and software that run your operations
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
              Custom workflow automation, AI systems and software for teams across India, from the makers of Caseproof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={cta.consult.href}>{cta.consult.label}</ButtonLink>
              <ButtonLink href="/products/caseproof" variant="secondary">
                See Caseproof
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageSlot label="Caseproof review workspace screenshot, synthetic data, 1600x1200" />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="py-20">
        <Container>
          <h2 id="services-heading" className="max-w-[20ch] text-3xl font-semibold tracking-tight md:text-4xl">
            Three ways we help
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 md:grid-rows-2">
            <Reveal className="md:row-span-2">
              <Link
                href={`/services/${main.slug}`}
                className="group flex h-full min-h-72 flex-col justify-between rounded-2xl bg-accent-soft p-8 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <ArrowUpRight size={24} className="self-end text-accent" aria-hidden />
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{main.name}</h3>
                  <p className="mt-3 max-w-[42ch] leading-relaxed text-muted">{main.short}</p>
                </div>
              </Link>
            </Reveal>
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={0.08 * (i + 1)}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`group flex h-full flex-col justify-between gap-8 rounded-2xl p-8 transition-transform duration-200 hover:-translate-y-0.5 ${
                    i === 0 ? "bg-surface-strong" : "bg-surface"
                  }`}
                >
                  <ArrowUpRight size={22} className="self-end text-muted group-hover:text-accent" aria-hidden />
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{s.name}</h3>
                    <p className="mt-2 max-w-[48ch] leading-relaxed text-muted">{s.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="product-heading" className="border-y border-line bg-surface py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">Our product</p>
            <h2 id="product-heading" className="mt-4 max-w-[24ch] text-3xl font-semibold tracking-tight md:text-5xl">
              Caseproof turns handwritten MER forms into verified data
            </h2>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted">
              Built for life and health insurers and TPAs that still receive physical medical examination reports. AI
              extracts every field, then reviewers check it against the scan.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Documents Caseproof reads">
              {caseproof.documents.map((d) => (
                <li key={d} className="rounded-full border border-line bg-bg px-4 py-2 text-sm text-ink">
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={cta.demo.href}>{cta.demo.label}</ButtonLink>
              <ButtonLink href="/products/caseproof" variant="secondary">
                See Caseproof
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="process-heading" className="py-20">
        <Container>
          <h2 id="process-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
            How a project runs
          </h2>
          <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((p, i) => (
              <li key={p.title} className="border-t-2 border-ink pt-5">
                <Reveal delay={0.06 * i}>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="principles-heading" className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[5fr_7fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="principles-heading" className="max-w-[16ch] text-3xl font-semibold tracking-tight md:text-4xl">
              Why teams work with us
            </h2>
          </div>
          <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {principles.map((p) => (
              <Reveal key={p.title}>
                <dt className="text-lg font-semibold">{p.title}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{p.body}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand
        title="Tell us about the process you want to fix"
        body="A 30-minute call to understand it. If we are not the right fit, we will say so."
        href={cta.consult.href}
        label={cta.consult.label}
      />
    </>
  );
}
