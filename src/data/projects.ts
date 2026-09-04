import type { CaseStudy } from "@/types/content";

/**
 * Sanitized descriptions only — no internal URLs, credentials, client names,
 * confidential business data or proprietary schema details.
 *
 * `outcome` entries are qualitative by design. No numeric performance claims
 * appear anywhere in this file because none are verifiable.
 */
export const projects: CaseStudy[] = [
  {
    slug: "auction-management-platform",
    name: "Auction Management Platform",
    category: "Enterprise Platform",
    tagline: "Enterprise online vehicle auction platform",
    summary:
      "An online vehicle auction platform operating at enterprise scale. I work across web and backend development — account security, agent approval, the live and proxy bidding workflows, and the seller and inventory APIs behind them.",
    tech: ["Angular", "TypeScript", "Python", "REST APIs"],
    overview:
      "An enterprise online vehicle auction platform where sellers list inventory, approved agents bid, and administrators oversee the process. I contribute to both the web frontend and the backend services.",
    context: [
      "Auction software carries requirements that ordinary CRUD applications do not. A bid is a financial commitment, so bid integrity and validation matter as much as the interface around them.",
      "Access is not uniform: sellers, bidding agents and administrators each see a different slice of the platform, and agents must be approved before they can participate at all.",
      "Account security is a first-class concern rather than a login form — the platform needs OTP verification, administrator two-factor authentication and controlled password workflows.",
    ],
    contributions: [
      {
        label: "Authentication & account security",
        items: [
          "Authentication and OTP verification",
          "Admin two-factor authentication",
          "Password workflows",
          "Agent approval before auction participation",
          "Session and device management",
        ],
      },
      {
        label: "Bidding",
        items: [
          "Auction visibility rules",
          "Bidding workflows and live bid status",
          "Proxy bidding",
          "Bid validation",
        ],
      },
      {
        label: "APIs & data",
        items: [
          "Seller APIs",
          "Inventory APIs",
          "Dashboard metrics",
          "File validation on upload",
        ],
      },
      {
        label: "Platform",
        items: [
          "Chat and unread-message functionality",
          "Access control across roles",
        ],
      },
    ],
    engineeringAreas: [
      "Authentication",
      "OTP / 2FA",
      "Access control",
      "Session & device management",
      "Live bidding",
      "Proxy bidding",
      "Bid validation",
      "REST API development",
      "File validation",
      "Dashboard metrics",
    ],
    outcome: [
      "The platform supports the auction lifecycle end to end: account security and agent approval, auction visibility, live and proxy bidding with validation, and dashboard metrics for oversight.",
      "Security-sensitive flows — OTP verification, admin two-factor authentication, password workflows and session/device management — are handled as platform concerns rather than per-screen afterthoughts.",
    ],
  },
  {
    slug: "advaita-bi-syntheta",
    name: "Advaita BI / Syntheta",
    category: "Business Intelligence",
    tagline: "Enterprise business intelligence & data visualization",
    summary:
      "A dashboard-authoring and data-visualization platform for enterprise BI. I carried the application five major Angular versions forward — 14 to 19 — modernized the UI, and work across Django and FastAPI services underneath it.",
    tech: [
      "Angular",
      "PrimeNG",
      "TypeScript",
      "Python",
      "Django",
      "FastAPI",
      "MongoDB",
      "REST APIs",
    ],
    highlight: {
      label: "Framework modernization",
      from: "Angular 14",
      to: "Angular 19",
    },
    overview:
      "An enterprise business intelligence application for authoring dashboards and visualizing data. My work spans the Angular frontend, the Python backend services, and the migration effort that brought the application up to a current framework baseline.",
    context: [
      "The application had drifted several major versions behind on Angular. Staying there meant an ageing dependency surface and a UI that no longer matched the rest of the product.",
      "Modernization had to happen without pausing feature work or destabilizing an application already in enterprise use.",
      "Dashboarding sits on top of user, role and permission management, so migration work could not be treated as purely cosmetic — it touched the access model too.",
    ],
    contributions: [
      {
        label: "Framework modernization",
        items: [
          "Angular 14 to Angular 19 migration",
          "UI modernization across the application",
          "Application stabilization through and after the upgrade",
        ],
      },
      {
        label: "Application features",
        items: [
          "Dashboard functionality",
          "User management",
          "Role management and permissions",
        ],
      },
      {
        label: "Backend & data",
        items: [
          "Python/Django and FastAPI backend work",
          "Database connectivity and integration",
          "Contributed to the migration from MySQL to MongoDB",
          "REST API integration",
        ],
      },
      {
        label: "Maintenance",
        items: [
          "Bug fixing",
          "Application workflow improvements",
        ],
      },
    ],
    engineeringAreas: [
      "Angular 14 → 19 migration",
      "UI modernization",
      "Dashboard functionality",
      "User & role management",
      "Permissions",
      "REST API integration",
      "Database integration",
      "MySQL → MongoDB migration",
      "Application stabilization",
    ],
    outcome: [
      "The application was carried five major versions forward, from Angular 14 to Angular 19, with the UI modernized alongside the upgrade rather than deferred behind it.",
      "Dashboarding, user management, role management and permissions are supported by REST API and database integration work across the stack.",
      "The platform was stabilized through the migration and remains in enterprise use.",
    ],
  },
  {
    slug: "waterfall",
    name: "Waterfall",
    category: "Enterprise Reporting",
    tagline: "Enterprise sales reporting & analytics platform",
    summary:
      "An enterprise platform automating sales reporting — Excel upload workflows, business-rule validation, ROL processing, and weekly, monthly, quarterly and QTD reporting, built on Django with region-scoped access control.",
    tech: ["Django", "Python", "Angular", "TypeScript", "SQL"],
    overview:
      "An internal enterprise platform that automates sales reporting and waterfall analytics. I worked on the Django backend and the Angular frontend: the business logic, the data-processing workflows, the reporting cycles, and the access model that scopes what each user can see.",
    context: [
      "Sales reporting arrived as spreadsheets and had to become trustworthy, queryable reporting output — which makes upload handling, validation and exception handling the core of the problem, not incidental plumbing.",
      "Reporting runs on fixed business cycles: weekly, monthly, quarterly and quarter-to-date. Each cycle has its own expectations of the same underlying data.",
      "Users should only see the data belonging to them and their region, so access control had to be enforced in the data layer rather than hidden in the UI.",
    ],
    contributions: [
      {
        label: "Backend & business logic",
        items: [
          "Django backend development",
          "Core business logic",
          "Database-driven workflows",
        ],
      },
      {
        label: "Reporting & analytics",
        items: [
          "Sales reporting",
          "Waterfall analytics",
          "ROL processing",
          "Weekly, monthly, quarterly and QTD reporting workflows",
        ],
      },
      {
        label: "Data workflows",
        items: [
          "Excel/file upload workflows",
          "Data validation and exception handling",
          "Filtering, pagination and download functionality",
        ],
      },
      {
        label: "Access control",
        items: [
          "User-based access control",
          "Region-based access control",
        ],
      },
      {
        label: "Frontend & stabilization",
        items: [
          "Angular frontend development",
          "Dashboard functionality",
          "Bug fixing and stabilization",
        ],
      },
    ],
    engineeringAreas: [
      "Django",
      "Business logic",
      "ROL processing",
      "Excel upload workflows",
      "Data validation",
      "Exception handling",
      "Access control",
      "Region-based permissions",
      "Reporting workflows",
      "Data processing",
      "Dashboard functionality",
    ],
    outcome: [
      "Sales reporting is automated end to end across weekly, monthly, quarterly and QTD cycles, with upload, validation, filtering, pagination and download handled inside the platform.",
      "Access is scoped per user and per region, so the same reporting surface serves different audiences without exposing data across boundaries.",
    ],
    aiExtension: {
      title: "AI Extension",
      description:
        "AI arrived on Waterfall later, as a separate workstream layered onto an already-working platform. The reporting engine itself is conventional Django and Angular engineering — the AI work below is an addition to it, not the substance of it.",
      items: [
        "MCP",
        "LangChain",
        "AI-powered chatbot / agent workflow implemented into the application",
      ],
    },
  },
  {
    slug: "mcp-ai-application-development",
    name: "MCP / AI Application Development",
    category: "AI Engineering",
    tagline: "MCP data bridge & AI agent workflows",
    summary:
      "AI shipped as product surface rather than tooling: MCP-based development with an Angular MCP UI and MongoDB data transfer, plus a LangChain-driven chatbot and agent workflow built into an existing enterprise application.",
    tech: ["MCP", "LangChain", "Angular", "Python", "MongoDB"],
    overview:
      "My AI work divides into two concrete deliverables: Advaita Data Bridge, where MCP moves data between systems through an Angular interface backed by MongoDB, and an AI-powered chatbot/agent workflow built into the Waterfall application using MCP and LangChain. Both are application features, not experiments.",
    context: [
      "Data-transfer work is normally invisible — a script someone runs and hopes finished correctly. Putting it behind MCP with a real interface makes it something an operator can drive and observe.",
      "An enterprise reporting platform holds answers that users cannot easily reach: knowing what to ask is easy, knowing which filter, cycle and region combination produces it is not. A chatbot/agent workflow is a practical route into data that already exists.",
      "Both cases required the AI layer to integrate with an existing Angular frontend and existing backend services, rather than being built as a standalone product.",
    ],
    contributions: [
      {
        label: "Advaita Data Bridge (MCP)",
        items: [
          "MCP-based development",
          "MCP UI development",
          "Angular integration",
          "Backend integration",
          "MongoDB data-transfer functionality",
        ],
      },
      {
        label: "AI agent & chatbot workflow",
        items: [
          "LangChain development",
          "AI-powered chatbot / AI-agent workflow",
          "AI chatbot/agent implementation for the Waterfall application",
        ],
      },
    ],
    engineeringAreas: [
      "MCP-based development",
      "MCP UI development",
      "LangChain",
      "AI agents",
      "AI chatbots",
      "Generative AI",
      "Angular integration",
      "Backend integration",
      "MongoDB data transfer",
    ],
    outcome: [
      "The data bridge is driven through an Angular MCP UI backed by MongoDB data-transfer functionality, integrated with existing backend services.",
      "An AI-powered chatbot/agent workflow was implemented into the Waterfall application using MCP and LangChain, added to a working platform rather than replacing it.",
    ],
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((project) => project.slug === slug);
}
