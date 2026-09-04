import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  /** Wired to `aria-labelledby` on the section landmark. */
  headingId: string;
  children: ReactNode;
  /** Alternating surface treatment, as in the previous site's panel rhythm. */
  tone?: "base" | "alt";
  className?: string;
}

/** Shared section shell: landmark, vertical rhythm and max width in one place. */
export function Section({
  id,
  headingId,
  children,
  tone = "base",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "scroll-mt-24 border-t border-border-soft px-5 py-20 sm:px-8 md:py-24 lg:px-12",
        tone === "alt" && "bg-surface",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
