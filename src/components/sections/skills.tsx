import { ChipList } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" headingId="skills-heading" tone="alt">
      <SectionHeading
        eyebrow="capabilities / stack"
        title="Skills"
        headingId="skills-heading"
        description="The stack I work in day to day across enterprise applications. AI tooling and AI application development are listed separately below."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <Reveal
              as="li"
              key={group.id}
              delay={index * 0.04}
              className="h-full"
            >
              <div className="h-full rounded-xl border border-border-hairline bg-bg p-6 transition-colors hover:border-accent-2-strong">
                <h3 className="mb-4 flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-accent-strong">
                  <Icon aria-hidden="true" className="size-4" />
                  {group.label}
                </h3>
                <ChipList
                  items={group.items}
                  label={`${group.label} technologies`}
                />
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
