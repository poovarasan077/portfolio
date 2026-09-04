import { BadgeCheck, ExternalLink } from "lucide-react";

import { ChipList } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { verifiedCertifications } from "@/data/certifications";

/**
 * Renders nothing while every certification is still a placeholder, so no
 * unfilled entry can reach production. See `src/data/certifications.ts`.
 */
export function Certifications() {
  if (verifiedCertifications.length === 0) return null;

  return (
    <Section id="certification" headingId="certification-heading" tone="alt">
      <SectionHeading
        eyebrow="credentials / certification"
        title="Certification"
        headingId="certification-heading"
      />

      <ul className="grid gap-4 md:grid-cols-2">
        {verifiedCertifications.map((certification, index) => (
          <Reveal as="li" key={certification.id} delay={index * 0.05}>
            <article className="h-full rounded-xl border border-border-hairline bg-bg p-6">
              <div className="mb-4 flex items-start gap-3">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
                  <BadgeCheck aria-hidden="true" className="size-[18px]" />
                </span>
                <div>
                  <h3 className="text-base leading-snug">
                    {certification.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {certification.issuer}
                    {certification.issued ? ` · ${certification.issued}` : ""}
                  </p>
                </div>
              </div>

              {certification.topics.length > 0 ? (
                <ChipList
                  items={certification.topics}
                  size="sm"
                  label={`${certification.name} topics`}
                />
              ) : null}

              {certification.credentialId ? (
                <p className="mt-4 font-mono text-xs text-faint">
                  ID: {certification.credentialId}
                </p>
              ) : null}

              {certification.credentialUrl ? (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent-strong hover:underline"
                >
                  Verify credential
                  <ExternalLink aria-hidden="true" className="size-3.5" />
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
