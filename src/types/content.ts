/**
 * Single source of truth for every content shape rendered on the site.
 *
 * Content rule: nothing in `src/data` may state an experience, metric, client,
 * technology, certification or achievement that is not traceable to the
 * previous portfolio, the résumé, or verified professional information.
 */

import type { LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  /** Anchor target on the home page, e.g. `#about`. */
  href: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** `lucide` uses a Lucide glyph; `x` uses the inline X mark (Lucide has no brand glyph). */
  icon: "github" | "linkedin" | "x";
}

/* -------------------------------------------------------------------------- */
/* Skills                                                                      */
/* -------------------------------------------------------------------------- */

export interface SkillGroup {
  id: string;
  label: string;
  icon: LucideIcon;
  items: string[];
}

/* -------------------------------------------------------------------------- */
/* AI engineering                                                              */
/* -------------------------------------------------------------------------- */

/**
 * The two categories are deliberately separate: `assisted` is how the work gets
 * done, `application` is what gets built. Collapsing them would misrepresent
 * both.
 */
export interface AiCategory {
  id: string;
  kind: "assisted" | "application";
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

/* -------------------------------------------------------------------------- */
/* Experience                                                                  */
/* -------------------------------------------------------------------------- */

export interface ExperienceGroup {
  label: string;
  items: string[];
  /** Clarifying qualifier rendered under the group, e.g. AI-assistance scope. */
  note?: string;
}

export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  /** `null` renders as "Present". */
  end: string | null;
  summary: string;
  groups: ExperienceGroup[];
}

/* -------------------------------------------------------------------------- */
/* Projects / case studies                                                     */
/* -------------------------------------------------------------------------- */

export interface ContributionGroup {
  label: string;
  items: string[];
}

/** Visually prominent "before → after" achievement, e.g. Angular 14 → 19. */
export interface CaseStudyHighlight {
  label: string;
  from: string;
  to: string;
}

/**
 * Work presented as a distinct AI workstream on an otherwise conventional
 * platform. Kept separate so an AI extension is never mistaken for the whole
 * project having been AI-built.
 */
export interface AiExtension {
  title: string;
  description: string;
  items: string[];
}

export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  /** One-paragraph card blurb on the home page. */
  summary: string;
  /** Chips on the card; keep to technologies actually used on this project. */
  tech: string[];
  highlight?: CaseStudyHighlight;

  /* Case-study page body */
  overview: string;
  context: string[];
  contributions: ContributionGroup[];
  engineeringAreas: string[];
  /** Qualitative only — no invented numbers or performance percentages. */
  outcome: string[];
  aiExtension?: AiExtension;
}

/* -------------------------------------------------------------------------- */
/* Certifications                                                              */
/* -------------------------------------------------------------------------- */

/**
 * `placeholder` entries are never rendered. The Certifications section and its
 * nav entry appear automatically once an entry is switched to `verified`.
 */
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issued: string | null;
  credentialId: string | null;
  credentialUrl: string | null;
  topics: string[];
  status: "verified" | "placeholder";
}

/* -------------------------------------------------------------------------- */
/* Education                                                                   */
/* -------------------------------------------------------------------------- */

export interface Education {
  degree: string;
  field: string;
  institution: string;
  start: string;
  end: string;
  score: string;
}

export interface AcademicProject {
  name: string;
  description: string;
  tech: string[];
}
