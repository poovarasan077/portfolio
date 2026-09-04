import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { ChipList } from "@/components/ui/chip";
import type { CaseStudy } from "@/types/content";

/** Card shown in the Projects grid; the whole card is one link target. */
export function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <article className="group h-full">
      <Link
        href={`/work/${project.slug}`}
        className="flex h-full flex-col rounded-xl border border-border-hairline bg-bg p-7 transition-colors hover:border-accent-strong"
      >
        <p className="eyebrow mb-3 text-accent-2-strong">{project.category}</p>

        <h3 className="mb-2 flex items-start justify-between gap-3 text-lg leading-snug">
          <span>{project.name}</span>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-faint transition-colors group-hover:text-accent-strong"
          />
        </h3>

        <p className="mb-4 font-mono text-xs text-faint">{project.tagline}</p>

        {/* Framework modernization reads as the headline achievement. */}
        {project.highlight ? (
          <p className="mb-4 inline-flex flex-wrap items-center gap-2 self-start rounded-lg border border-accent-strong/25 bg-accent-soft px-3 py-2 text-xs">
            <Sparkles
              aria-hidden="true"
              className="size-3.5 shrink-0 text-accent-strong"
            />
            <span className="font-mono text-accent-strong">
              {project.highlight.from} → {project.highlight.to}
            </span>
            <span className="text-muted">{project.highlight.label}</span>
          </p>
        ) : null}

        <p className="mb-6 flex-1 text-sm text-muted">{project.summary}</p>

        <ChipList
          items={project.tech}
          size="sm"
          label={`${project.name} technologies`}
        />

        <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-accent-strong">
          Read case study
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </span>
      </Link>
    </article>
  );
}
