import type { ReactNode } from "react";

// Fades content up as it scrolls into view, using CSS scroll-driven animation (see .reveal in globals.css).
// Content is fully visible in the HTML, without JavaScript, and under reduced motion.
export function Reveal({ children, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
