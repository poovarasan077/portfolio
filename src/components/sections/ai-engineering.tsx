import { ChipList } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aiCategories, aiDistinctionNote } from "@/data/ai-engineering";

export function AiEngineering() {
  return (
    <Section id="ai-engineering" headingId="ai-engineering-heading">
      <SectionHeading
        eyebrow="ai / engineering"
        title="AI Engineering"
        headingId="ai-engineering-heading"
        description={aiDistinctionNote}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {aiCategories.map((category, index) => {
          const Icon = category.icon;
          const isApplication = category.kind === "application";

          return (
            <Reveal key={category.id} delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-border-hairline bg-surface p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={
                      isApplication
                        ? "inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-2-soft text-accent-2-strong"
                        : "inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-strong"
                    }
                  >
                    <Icon aria-hidden="true" className="size-[18px]" />
                  </span>
                  <h3 className="text-lg">{category.title}</h3>
                </div>

                <p className="mb-6 flex-1 text-sm text-muted">
                  {category.description}
                </p>

                <ChipList
                  items={category.items}
                  tone={isApplication ? "accent-2" : "accent"}
                  label={`${category.title} technologies`}
                />
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
