import { GraduationCap } from "lucide-react";

import { ChipList } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { academicProject, education } from "@/data/education";

/**
 * The academic project is intentionally rendered as a secondary sub-card —
 * smaller type, muted framing — so it never competes with professional work.
 */
export function EducationSection() {
  return (
    <Section id="education" headingId="education-heading" tone="alt">
      <SectionHeading
        eyebrow="background / education"
        title="Education"
        headingId="education-heading"
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <article className="h-full rounded-xl border border-border-hairline bg-bg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
                <GraduationCap aria-hidden="true" className="size-5" />
              </span>

              <div>
                <h3 className="text-lg leading-snug">
                  {education.degree}
                  <span className="block text-base font-normal text-muted">
                    {education.field}
                  </span>
                </h3>

                <p className="mt-3 text-sm text-fg">{education.institution}</p>

                <p className="mt-1 font-mono text-xs text-faint">
                  {education.start} — {education.end}
                  <span aria-hidden="true"> · </span>
                  <span className="text-accent-2-strong">
                    {education.score}
                  </span>
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.06}>
          <article className="h-full rounded-xl border border-dashed border-border-hairline bg-transparent p-6 md:p-8">
            <p className="eyebrow mb-3">Academic project</p>
            <h3 className="mb-3 text-base leading-snug text-fg">
              {academicProject.name}
            </h3>
            <p className="mb-5 text-sm text-muted">
              {academicProject.description}
            </p>
            <ChipList
              items={academicProject.tech}
              size="sm"
              label="Academic project technologies"
            />
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
