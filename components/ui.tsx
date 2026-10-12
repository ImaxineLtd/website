import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/ssr";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type ButtonProps = { href: string; children: ReactNode; variant?: "primary" | "secondary"; className?: string };

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition-[transform,background-color,border-color] duration-200 active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-ink hover:bg-accent-hover"
      : "border border-line text-ink hover:border-muted";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {variant === "primary" && <ArrowRight size={16} weight="bold" aria-hidden />}
    </Link>
  );
}

// Labeled slot for a real image. Replace with next/image once the asset exists.
// Kept deliberately plain: it must never pass as a fake screenshot.
export function ImageSlot({ label, ratio = "aspect-[4/3]", className = "" }: { label: string; ratio?: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`${ratio} flex w-full items-center justify-center rounded-2xl border border-dashed border-line bg-surface p-6 text-center text-sm text-muted ${className}`}
    >
      Image to add: {label}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium text-ink">
            {f.q}
            <span
              aria-hidden
              className="mt-1 text-muted transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-[65ch] leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}
