import type { NavItem, SocialLink } from "@/types/content";

/**
 * Production origin, used for `metadataBase`, absolute OG/Twitter URLs and the
 * sitemap. Set `NEXT_PUBLIC_SITE_URL` in Vercel to the real domain.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://poovarasan-portfolio.vercel.app";

export const site = {
  name: "Poovarasan G",
  initials: "PG",
  role: "Full-Stack Developer",
  specialism: "AI Application Development",
  headline:
    "Full-Stack Developer building enterprise applications and AI-powered solutions.",
  intro:
    "I build enterprise applications across frontend, backend, APIs, databases, and AI-powered workflows using Angular, Python, Django, FastAPI, MCP and LangChain.",
  description:
    "Poovarasan G — Full-Stack Developer at Wyzmindz Solutions, Bangalore. Enterprise application development with Angular, Python, Django, FastAPI and REST APIs, plus AI application development using MCP and LangChain.",
  company: "Wyzmindz Solutions",
  location: "Bangalore, India",
  locationLong: "Bengaluru, Karnataka, India",
  availability: "Available for opportunities",
  email: "poovarasangandhi@gmail.com",
  phoneDisplay: "+91 88258 34973",
  phoneHref: "+918825834973",
  resumePath: "/Poovarasan_G_Resume.pdf",
  profileImage: "/profile.png",
  languages: ["English", "Tamil"],
  /** Preserved verbatim from the previous site — a plain POST, no backend. */
  contactFormAction: "https://formsubmit.co/poovarasangandhi@gmail.com",
} as const;

/** Real URLs carried over from the previous site. None of these are invented. */
export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/poovarasan077", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/poovarasan-g-32477b288/",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/PoovarasanCse", icon: "x" },
];

/**
 * Home-page sections in scroll order. The Certification entry is injected by
 * `SiteHeader` only when a verified certification exists.
 */
export const navItems: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#ai-engineering", label: "AI Engineering" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const certificationNavItem: NavItem = {
  href: "#certification",
  label: "Certification",
};
