"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useIsHydrated } from "@/lib/use-is-hydrated";

const buttonClasses =
  "inline-flex size-9 items-center justify-center rounded-lg border " +
  "border-border-hairline text-muted transition-colors hover:text-fg " +
  "hover:border-accent-2-strong";

/**
 * The resolved theme is unknown during SSR, so an inert placeholder of identical
 * size renders until hydration. Without it the markup would mismatch and the
 * header would shift.
 */
export function ThemeToggle() {
  const hydrated = useIsHydrated();
  const { resolvedTheme, setTheme } = useTheme();

  if (!hydrated) {
    return (
      <div aria-hidden="true" className={buttonClasses}>
        <span className="size-[18px]" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";
  const label = `Switch to ${nextTheme} theme`;

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className={buttonClasses}
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <Sun aria-hidden="true" className="size-[18px]" />
      ) : (
        <Moon aria-hidden="true" className="size-[18px]" />
      )}
    </button>
  );
}
