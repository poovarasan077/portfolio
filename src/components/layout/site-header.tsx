"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { hasCertifications } from "@/data/certifications";
import { certificationNavItem, navItems, site } from "@/data/site";
import { cn } from "@/lib/cn";

/** Certification only joins the nav once a real certification is in the data. */
const items = hasCertifications
  ? [
      ...navItems.slice(0, 6),
      certificationNavItem,
      ...navItems.slice(6),
    ]
  : navItems;

const sectionIds = items.map((item) => item.href.replace("#", ""));

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const isHome = pathname === "/";
  // Anchors must resolve back to the home page from a case-study route.
  const hrefFor = useCallback(
    (hash: string) => (isHome ? hash : `/${hash}`),
    [isHome],
  );

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Escape to close + scroll lock while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  // Scroll-spy for the desktop nav; home page only, where the anchors exist.
  useEffect(() => {
    if (!isHome || typeof IntersectionObserver === "undefined") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-mono text-base font-semibold tracking-wide text-fg"
          aria-label={`${site.name} — home`}
        >
          [<span className="text-accent-strong">{site.initials}</span>]
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-x-4 xl:gap-x-5">
            {items.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = isHome && activeId === id;

              return (
                <li key={item.href}>
                  <Link
                    href={hrefFor(item.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "font-mono text-xs transition-colors",
                      isActive
                        ? "text-accent-strong"
                        : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-2 font-mono text-[0.7rem] text-muted md:flex lg:hidden xl:flex">
            <span
              aria-hidden="true"
              className="status-dot size-[7px] shrink-0 rounded-full bg-success"
            />
            {site.availability}
          </span>

          <ThemeToggle />

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border-hairline text-fg transition-colors hover:border-accent-2-strong lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="size-[18px]" />
            ) : (
              <Menu aria-hidden="true" className="size-[18px]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            id={menuId}
            aria-label="Primary"
            className="overflow-hidden border-t border-border-soft bg-bg lg:hidden"
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={hrefFor(item.href)}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border-soft py-3.5 font-mono text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2 py-4 font-mono text-[0.7rem] text-muted">
                <span
                  aria-hidden="true"
                  className="status-dot size-[7px] shrink-0 rounded-full bg-success"
                />
                {site.availability}
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
