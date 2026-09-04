import { cn } from "@/lib/cn";

interface ChipProps {
  children: string;
  size?: "sm" | "md";
  tone?: "default" | "accent" | "accent-2";
  className?: string;
}

/** Technology / keyword pill. */
export function Chip({
  children,
  size = "md",
  tone = "default",
  className,
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-mono leading-none",
        size === "sm" ? "px-2.5 py-1.5 text-[0.7rem]" : "px-3 py-1.5 text-xs",
        tone === "default" &&
          "border-border-hairline bg-surface-2 text-muted",
        tone === "accent" &&
          "border-transparent bg-accent-soft text-accent-strong",
        tone === "accent-2" &&
          "border-transparent bg-accent-2-soft text-accent-2-strong",
        className,
      )}
    >
      {children}
    </span>
  );
}

interface ChipListProps {
  items: readonly string[];
  size?: "sm" | "md";
  tone?: "default" | "accent" | "accent-2";
  className?: string;
  /** Accessible name for the list, e.g. "Technologies used". */
  label?: string;
}

export function ChipList({
  items,
  size,
  tone,
  className,
  label,
}: ChipListProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Chip size={size} tone={tone}>
            {item}
          </Chip>
        </li>
      ))}
    </ul>
  );
}
