import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}, ${site.specialism}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time. Deliberately typographic — no fabricated logos,
 * metrics or imagery.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0E1A",
          padding: "72px 80px",
          color: "#E8EBF3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "#F0A93A",
              color: "#14100A",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            PG
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#8D96B3" }}>
            {site.company} · {site.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>

          <div style={{ display: "flex", marginTop: 20, fontSize: 36 }}>
            <span>{site.role}</span>
            <span style={{ color: "#F0A93A", margin: "0 16px" }}>/</span>
            <span style={{ color: "#46D1C6" }}>{site.specialism}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 20,
            fontSize: 22,
            color: "#737DA0",
            borderTop: "1px solid #26315A",
            paddingTop: 28,
          }}
        >
          {["Angular", "Python", "Django", "FastAPI", "MCP", "LangChain"].map(
            (item) => (
              <span key={item}>{item}</span>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
