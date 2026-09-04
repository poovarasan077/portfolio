type ClassValue = string | false | null | undefined;

/** Minimal class joiner — avoids pulling in clsx for what is a one-liner. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
