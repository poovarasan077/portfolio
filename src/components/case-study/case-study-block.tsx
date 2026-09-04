import type { ReactNode } from "react";

interface CaseStudyBlockProps {
  /** Slugified id so the sticky ToC can link to it. */
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

/** One titled section of a case study. */
export function CaseStudyBlock({
  id,
  eyebrow,
  title,
  children,
}: CaseStudyBlockProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-t border-border-soft pt-10"
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 id={headingId} className="mb-6 text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Bulleted prose list used throughout the case-study body. */
export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="relative max-w-[72ch] pl-5 text-muted before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-accent-strong/50"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
