"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Small stagger for siblings; keep under ~0.15s so nothing feels slow. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}

/**
 * The site's single scroll-reveal primitive — replaces the previous
 * IntersectionObserver in `script.js`.
 *
 * Deliberately restrained: an 8px rise and a fade, once, ~0.45s. It is a client
 * component but its `children` are not, so wrapped content still renders on the
 * server and ships no extra JS.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // Render a plain element so reduced-motion users get zero animation cost.
  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
