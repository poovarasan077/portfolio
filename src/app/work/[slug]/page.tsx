import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudy } from "@/components/case-study/case-study";
import { getProjectBySlug, projects } from "@/data/projects";

interface PageProps {
  // Next 16 delivers route params as a promise.
  params: Promise<{ slug: string }>;
}

/** Renders all four case studies at build time; no runtime rendering. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/** Unknown slugs 404 rather than rendering on demand. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  const title = `${project.name} — ${project.category}`;

  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <CaseStudy project={project} />;
}
