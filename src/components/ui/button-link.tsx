import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  /** Set for cross-origin links; adds target/rel and is announced to AT. */
  external?: boolean;
  download?: boolean;
  className?: string;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium " +
  "transition-colors duration-200 border";

const variants = {
  primary:
    "border-transparent bg-accent-strong text-white hover:bg-accent dark:text-[#14100a]",
  outline:
    "border-border-hairline bg-transparent text-fg hover:border-accent-2-strong hover:text-accent-2-strong",
  ghost:
    "border-transparent bg-transparent text-muted hover:text-fg hover:bg-surface-2",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);

  // Downloads and cross-origin links bypass the client router.
  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        {...(download ? { download: "" } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
