import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { aboutFacts, aboutParagraphs } from "@/data/about";

export function About() {
  return (
    <Section id="about" headingId="about-heading">
      <SectionHeading
        eyebrow="profile / about"
        title="About"
        headingId="about-heading"
      />

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <Reveal className="space-y-4">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="max-w-[62ch] text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <dl className="rounded-xl border border-border-hairline bg-surface px-6 py-2 font-mono text-sm">
            {aboutFacts.map((fact) => (
              <div
                key={fact.term}
                className="flex items-baseline justify-between gap-4 border-b border-border-soft py-3 last:border-b-0"
              >
                <dt className="text-faint">{fact.term}</dt>
                <dd className="text-right text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
