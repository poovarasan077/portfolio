import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";
import { site, socials } from "@/data/site";

const coreStack = [
  "Angular",
  "Python",
  "Django",
  "FastAPI",
  "MCP",
  "LangChain",
];

export function Hero() {
  const linkedin = socials.find((social) => social.icon === "linkedin");
  const github = socials.find((social) => social.icon === "github");

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-24 px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="grid-backdrop pointer-events-none absolute inset-0 -z-10"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/*
          Portrait comes first in the DOM on small screens via `order`, but the
          text block stays first for reading order on large screens.
        */}
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow mb-5 text-accent-strong">
            {site.company} · {site.location}
          </p>

          <h1
            id="hero-heading"
            className="text-[clamp(2.5rem,7vw,4.25rem)] font-bold uppercase tracking-[-0.02em]"
          >
            {site.name}
          </h1>

          <p className="mt-4 font-display text-[clamp(1.15rem,2.4vw,1.6rem)] font-medium text-fg">
            {site.role}
            <span aria-hidden="true" className="mx-2.5 text-accent-strong">
              /
            </span>
            <span className="text-accent-2-strong">{site.specialism}</span>
          </p>

          <p className="mt-6 max-w-xl text-pretty text-muted">{site.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projects" variant="primary">
              View Projects
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>

            <ButtonLink href={site.resumePath} variant="outline" download>
              <Download aria-hidden="true" className="size-4" />
              Download Resume
            </ButtonLink>

            {linkedin ? (
              <ButtonLink href={linkedin.href} variant="outline" external>
                <SocialIcon icon="linkedin" className="size-4" />
                LinkedIn
              </ButtonLink>
            ) : null}

            {github ? (
              <ButtonLink href={github.href} variant="outline" external>
                <SocialIcon icon="github" className="size-4" />
                GitHub
              </ButtonLink>
            ) : null}
          </div>

          <ul
            aria-label="Core technologies"
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-faint"
          >
            {coreStack.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 ? <span aria-hidden="true">·</span> : null}
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="order-1 flex justify-center lg:order-2">
          <figure className="w-full max-w-[300px] rounded-xl border border-border-hairline bg-surface p-2.5 shadow-[var(--shadow-card)]">
            <figcaption className="flex items-center gap-2 px-1.5 pb-3 pt-1 font-mono text-[0.7rem] text-faint">
              <span
                aria-hidden="true"
                className="size-[7px] rounded-full bg-faint"
              />
              profile.png
            </figcaption>

            <Image
              src={site.profileImage}
              alt={`Portrait of ${site.name}`}
              width={600}
              height={750}
              priority
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 300px, 70vw"
              className="aspect-4/5 w-full rounded-md object-cover object-[50%_20%]"
            />

            {/* Decorative nod to the BI/dashboard work. */}
            <svg
              viewBox="0 0 320 60"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="mt-2 h-10 w-full text-accent-2"
            >
              <polyline
                className="spark-line"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points="0,45 30,38 60,42 90,20 120,28 150,10 180,24 210,14 240,26 270,8 300,18 320,12"
              />
            </svg>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
