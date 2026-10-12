import Link from "next/link";
import { List } from "@phosphor-icons/react/ssr";
import { cta, nav, site } from "@/lib/site";
import { ButtonLink, Container } from "./ui";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-ink">
      <span aria-hidden className="grid size-7 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-ink">
        {site.name.charAt(0)}
      </span>
      {site.name}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
          <ButtonLink href={cta.consult.href} className="px-4 py-2">
            {cta.consult.label}
          </ButtonLink>
        </nav>
        <details className="relative md:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-line text-ink">
            <List size={20} aria-hidden />
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-line bg-bg p-2 shadow-lg shadow-zinc-900/10">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2.5 text-sm text-ink hover:bg-surface">
                {item.label}
              </Link>
            ))}
            <Link
              href={cta.consult.href}
              className="mt-1 block rounded-xl bg-accent px-3 py-2.5 text-sm font-medium text-accent-ink"
            >
              {cta.consult.label}
            </Link>
          </div>
        </details>
      </Container>
    </header>
  );
}
