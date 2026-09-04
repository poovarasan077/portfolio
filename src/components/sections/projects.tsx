import { ProjectCard } from "@/components/sections/project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" headingId="projects-heading" tone="alt">
      <SectionHeading
        eyebrow="selected engineering work"
        title="Selected Engineering Work"
        headingId="projects-heading"
        description="Enterprise platforms I contribute to at Wyzmindz Solutions. Descriptions are sanitized — no client, internal or confidential detail is included."
      />

      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            as="li"
            key={project.slug}
            delay={index * 0.05}
            className="h-full"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
