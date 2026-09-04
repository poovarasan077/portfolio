import Link from "next/link";

import { SocialIcon } from "@/components/ui/social-icon";
import { site, socials } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-soft px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 font-mono text-xs text-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>

        <ul className="flex items-center gap-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on ${social.label}`}
                className="inline-flex text-faint transition-colors hover:text-accent-2-strong"
              >
                <SocialIcon icon={social.icon} className="size-4" />
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/#home"
          className="transition-colors hover:text-accent-2-strong"
        >
          back to top ↑
        </Link>
      </div>
    </footer>
  );
}
