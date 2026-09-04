import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

import {
  BulletList,
  CaseStudyBlock,
} from "@/components/case-study/case-study-block";
import { ChipList } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import type { CaseStudy as CaseStudyType } from "@/types/content";

/** In-page navigation; entries are filtered to the blocks actually rendered. */
function buildToc(project: CaseStudyType) {
  return [
    { id: "overview", label: "Overview" },
    { id: "context", label: "Problem / Context" },
    { id: "contribution", label: "My Contribution" },
    { id: "technologies", label: "Technologies" },
    { id: "engineering-areas", label: "Key Engineering Areas" },
    ...(project.aiExtension
      ? [{ id: "ai-extension", label: project.aiExtension.title }]
      : []),
    { id: "outcome", label: "Outcome" },
  ];
}

/**
 * Reusable case-study layout. Every project renders through this component —
 * there is no per-project markup anywhere in the codebase.
 */
export function CaseStudy({ project }: { project: CaseStudyType }) {
  const toc = buildToc(project);

  return (
    <article className="px-5 pb-24 pt-12 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent-strong"
        >
          <ArrowLeft aria-hidden="true" className="size-3.5" />
          Back to selected work
        </Link>

        <header className="mt-8 border-b border-border-soft pb-10">
          <p className="eyebrow mb-4 text-accent-2-strong">
            {project.category}
          </p>
          <h1 className="max-w-4xl text-[clamp(2rem,5vw,3.25rem)] text-balance">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{project.tagline}</p>

          {project.highlight ? (
            <p className="mt-7 inline-flex flex-wrap items-center gap-2.5 rounded-lg border border-accent-strong/25 bg-accent-soft px-4 py-3">
              <Sparkles
                aria-hidden="true"
                className="size-4 shrink-0 text-accent-strong"
              />
              <span className="font-mono text-sm font-medium text-accent-strong">
                {project.highlight.from} → {project.highlight.to}
              </span>
              <span className="text-sm text-muted">
                {project.highlight.label}
              </span>
            </p>
          ) : null}
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_220px] lg:gap-16">
          <div className="order-2 space-y-12 lg:order-1">
            <CaseStudyBlock id="overview" eyebrow="01" title="Overview">
              <p className="max-w-[72ch] text-muted">{project.overview}</p>
            </CaseStudyBlock>

            <CaseStudyBlock id="context" eyebrow="02" title="Problem / Context">
              <BulletList items={project.context} />
            </CaseStudyBlock>

            <CaseStudyBlock
              id="contribution"
              eyebrow="03"
              title="My Contribution"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                {project.contributions.map((group) => (
                  <section key={group.label}>
                    <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-accent-2-strong">
                      {group.label}
                    </h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-4 text-sm text-muted before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-faint"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </CaseStudyBlock>

            <CaseStudyBlock id="technologies" eyebrow="04" title="Technologies">
              <ChipList
                items={project.tech}
                label={`Technologies used on ${project.name}`}
              />
            </CaseStudyBlock>

            <CaseStudyBlock
              id="engineering-areas"
              eyebrow="05"
              title="Key Engineering Areas"
            >
              <ChipList
                items={project.engineeringAreas}
                size="sm"
                tone="accent-2"
                label={`Engineering areas on ${project.name}`}
              />
            </CaseStudyBlock>

            {/*
              Rendered as a visually distinct, clearly-labelled add-on so an AI
              workstream is never mistaken for the whole project.
            */}
            {project.aiExtension ? (
              <CaseStudyBlock
                id="ai-extension"
                eyebrow="06"
                title={project.aiExtension.title}
              >
                <div className="rounded-xl border border-dashed border-accent-2-strong/40 bg-accent-2-soft/40 p-6">
                  <p className="mb-5 max-w-[72ch] text-sm text-muted">
                    {project.aiExtension.description}
                  </p>
                  <ChipList
                    items={project.aiExtension.items}
                    size="sm"
                    tone="accent-2"
                    label="AI extension technologies"
                  />
                </div>
              </CaseStudyBlock>
            ) : null}

            <CaseStudyBlock
              id="outcome"
              eyebrow={project.aiExtension ? "07" : "06"}
              title="Outcome"
            >
              <BulletList items={project.outcome} />
            </CaseStudyBlock>
          </div>

          {/* Sticky in-page navigation; large screens only. */}
          <Reveal className="order-1 lg:order-2">
            <nav
              aria-label="On this page"
              className="lg:sticky lg:top-24 lg:pt-10"
            >
              <p className="eyebrow mb-4 hidden lg:block">On this page</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-y-2.5">
                {toc.map((entry) => (
                  <li key={entry.id}>
                    <a
                      href={`#${entry.id}`}
                      className="font-mono text-xs text-muted transition-colors hover:text-accent-strong"
                    >
                      {entry.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
