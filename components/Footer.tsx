import Link from "next/link";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { Container } from "./ui";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Workflow automation, AI and software for businesses in India. Makers of Caseproof.
          </p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-block text-sm text-ink underline-offset-4 hover:underline">
            {site.email}
          </a>
        </div>
        <div>
          <h2 className="text-sm font-medium text-ink">Services</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-muted hover:text-ink">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium text-ink">Product</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/products/caseproof" className="text-muted hover:text-ink">
                Caseproof
              </Link>
            </li>
            <li>
              <Link href="/products/caseproof/security" className="text-muted hover:text-ink">
                Caseproof security
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-line py-6 text-xs text-muted">
        &copy; {new Date().getFullYear()} {site.legalName}
      </Container>
    </footer>
  );
}
