/** Visible only on keyboard focus; first tab stop on every page. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-border-hairline focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-fg"
    >
      Skip to main content
    </a>
  );
}
