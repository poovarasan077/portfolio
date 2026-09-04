import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience, timeline } from "@/data/experience";
import type { ExperienceRole } from "@/types/content";

/** Compact progression rail: horizontal on md+, vertical below. */
function ProgressionRail() {
  return (
    <div className="relative mb-14">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-[3px] hidden h-px bg-border-hairline md:block"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-3 left-[3px] top-2 w-px bg-border-hairline md:hidden"
      />

      <ol className="grid gap-6 md:grid-cols-3">
        {timeline.map((node) => (
          <li key={node.date} className="relative pl-6 md:pl-0 md:pt-7">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 size-[7px] rounded-full bg-accent ring-3 ring-bg md:top-0"
            />
            <p className="font-mono text-xs text-accent-strong">{node.date}</p>
            {node.label ? (
              <p className="mt-1 text-sm text-fg">{node.label}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function RoleCard({ role }: { role: ExperienceRole }) {
  const period = `${role.start} — ${role.end ?? "Present"}`;

  return (
    <article className="rounded-xl border border-border-hairline bg-bg p-6 md:p-8">
      <header className="mb-5 flex flex-col gap-2 border-b border-border-soft pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-xl">{role.title}</h3>
          <p className="mt-1 text-sm text-muted">
            {role.company} · {role.location}
          </p>
        </div>
        <p className="shrink-0 font-mono text-xs text-accent-strong">
          {period}
        </p>
      </header>

      <p className="mb-7 max-w-[70ch] text-sm text-muted">{role.summary}</p>

      <div className="grid gap-7 md:grid-cols-2">
        {role.groups.map((group) => (
          <section key={group.label}>
            <h4 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-accent-2-strong">
              {group.label}
            </h4>

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

            {/* Keeps AI-assisted tooling from reading as AI-built product. */}
            {group.note ? (
              <p className="mt-3 border-l-2 border-border-hairline pl-3 text-xs italic text-faint">
                {group.note}
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <Section id="experience" headingId="experience-heading">
      <SectionHeading
        eyebrow="professional / experience"
        title="Experience"
        headingId="experience-heading"
      />

      <Reveal>
        <ProgressionRail />
      </Reveal>

      <ol className="space-y-4">
        {experience.map((role, index) => (
          <Reveal as="li" key={role.id} delay={index * 0.05}>
            <RoleCard role={role} />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
