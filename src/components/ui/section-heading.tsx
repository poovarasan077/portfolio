import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  /** Mono label above the title, e.g. `profile / about`. */
  eyebrow: string;
  title: string;
  /** Must match the parent Section's `headingId`. */
  headingId: string;
  description?: ReactNode;
  className?: string;
}

/**
 * Section header: mono eyebrow with a hairline rule, then the h2. Structure
 * comes from the rule and the type scale rather than decoration.
 */
export function SectionHeading({
  eyebrow,
  title,
  headingId,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("mb-10 md:mb-14", className)}>
      <div className="mb-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="size-[7px] shrink-0 rounded-full bg-accent-2 ring-3 ring-accent-2-soft"
        />
        <span className="eyebrow">{eyebrow}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-border-hairline" />
      </div>

      <h2
        id={headingId}
        className="text-[clamp(1.6rem,3.2vw,2.25rem)] text-balance"
      >
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-pretty text-muted">{description}</p>
      ) : null}
    </header>
  );
}
