import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { education } from "@/data/education";
import { site, siteUrl, socials } from "@/data/site";

import "./globals.css";

/*
 * Self-hosted at build time by next/font — the previous site loaded these from
 * the Google Fonts CDN, which cost two render-blocking round trips.
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const title = `${site.name} | ${site.role} | ${site.specialism}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  keywords: [
    site.name,
    "Full-Stack Developer",
    "AI Application Development",
    "Angular Developer",
    "Django Developer",
    "FastAPI",
    "Python Developer",
    "MCP",
    "LangChain",
    "Bangalore",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: `${site.name} — Portfolio`,
    title,
    description: site.description,
    url: siteUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e1a" },
  ],
};

/** Structured data — verified facts only. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.description,
  url: siteUrl,
  email: `mailto:${site.email}`,
  telephone: site.phoneHref,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: site.company },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.institution,
  },
  knowsLanguage: site.languages,
  knowsAbout: [
    "Angular",
    "Python",
    "Django",
    "FastAPI",
    "REST APIs",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "TypeScript",
    "MCP",
    "LangChain",
  ],
  sameAs: socials.map((social) => social.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: next-themes sets `class` before React hydrates.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <ThemeProvider>
          <SkipLink />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>

        <script
          type="application/ld+json"
          // Static, author-controlled object — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
