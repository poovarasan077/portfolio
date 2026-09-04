import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialIcon } from "@/components/ui/social-icon";
import { site, socials } from "@/data/site";

const fieldClasses =
  "w-full rounded-md border border-border-hairline bg-surface-2 px-3.5 py-3 text-sm " +
  "text-fg placeholder:text-faint transition-colors focus:border-accent-2-strong";

const labelClasses =
  "mt-4 block font-mono text-[0.7rem] uppercase tracking-[0.08em] text-faint first:mt-0";

export function Contact() {
  return (
    <Section id="contact" headingId="contact-heading">
      <SectionHeading
        eyebrow="contact"
        title="Let's talk"
        headingId="contact-heading"
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <p className="mb-8 max-w-[46ch] text-muted">
            Open to software developer roles and freelance work. The fastest way
            to reach me is email — I&rsquo;ll get back to you within a day or
            two.
          </p>

          <ul className="mb-8 space-y-4 font-mono text-sm">
            <li className="flex items-center gap-3">
              <Mail
                aria-hidden="true"
                className="size-[18px] shrink-0 text-accent-strong"
              />
              <a
                href={`mailto:${site.email}`}
                className="text-fg transition-colors hover:text-accent-2-strong"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone
                aria-hidden="true"
                className="size-[18px] shrink-0 text-accent-strong"
              />
              <a
                href={`tel:${site.phoneHref}`}
                className="text-fg transition-colors hover:text-accent-2-strong"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin
                aria-hidden="true"
                className="size-[18px] shrink-0 text-accent-strong"
              />
              <span className="text-muted">{site.locationLong}</span>
            </li>
          </ul>

          <ul className="flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${social.label}`}
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-border-hairline text-muted transition-colors hover:border-accent-2-strong hover:text-accent-2-strong"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/*
          Plain HTML POST to FormSubmit, carried over from the previous site —
          keeps the portfolio fully static with no backend service.
        */}
        <Reveal delay={0.08}>
          <form
            action={site.contactFormAction}
            method="POST"
            className="rounded-xl border border-border-hairline bg-surface p-6 md:p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from portfolio site"
            />
            <input type="hidden" name="_template" value="table" />
            {/* Honeypot: hidden from sighted users and assistive tech alike. */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <label htmlFor="contact-name" className={labelClasses}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your full name"
              className={fieldClasses}
            />

            <label htmlFor="contact-email" className={labelClasses}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={fieldClasses}
            />

            <label htmlFor="contact-phone" className={labelClasses}>
              Phone{" "}
              <span className="normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91"
              className={fieldClasses}
            />

            <label htmlFor="contact-message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder="What are you looking to build?"
              className={`${fieldClasses} resize-y`}
            />

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-accent-strong px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent dark:text-[#14100a]"
            >
              Send message
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
