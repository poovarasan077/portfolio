import type { Certification } from "@/types/content";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ACTION REQUIRED — MCP certification details are not present in the previous
 * portfolio or the résumé PDF, so nothing here is filled in. Rather than invent
 * a certification name or issuer, this entry ships as a gated placeholder.
 *
 * To publish it:
 *   1. Replace every TODO below with the exact text on the certificate.
 *   2. Change `status` to "verified".
 *
 * The Certification section and its navigation entry then appear automatically.
 * While `status` is "placeholder", neither is rendered — no TODO text can leak
 * into production.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const certifications: Certification[] = [
  {
    id: "mcp-certification",
    name: "TODO — exact certification name as printed on the certificate",
    issuer: "TODO — issuing organization",
    issued: null, // TODO — e.g. "Jun 2026"
    credentialId: null, // TODO — if the certificate carries one
    credentialUrl: null, // TODO — public verification URL, if one exists
    topics: ["MCP"],
    status: "placeholder",
  },
];

/** The only list any component should render. */
export const verifiedCertifications = certifications.filter(
  (certification) => certification.status === "verified",
);

export const hasCertifications = verifiedCertifications.length > 0;
