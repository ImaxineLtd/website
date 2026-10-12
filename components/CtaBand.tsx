import { ButtonLink, Container } from "./ui";
import { Reveal } from "./Reveal";

export function CtaBand({ title, body, href, label }: { title: string; body: string; href: string; label: string }) {
  return (
    <section className="py-12">
      <Container>
        <Reveal className="rounded-2xl bg-accent-soft px-6 py-14 text-center md:px-12 md:py-20">
          <h2 className="mx-auto max-w-[22ch] text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-[52ch] leading-relaxed text-muted">{body}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={href}>{label}</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
