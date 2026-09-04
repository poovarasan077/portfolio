import type { ExperienceRole } from "@/types/content";

/** Most recent first. `end: null` renders as "Present". */
export const experience: ExperienceRole[] = [
  {
    id: "junior-software-developer",
    title: "Junior Software Developer",
    company: "Wyzmindz Solutions",
    location: "Bangalore, India",
    start: "May 2026",
    end: null,
    summary:
      "Full-stack delivery across two enterprise platforms — a business intelligence application and an online vehicle auction platform — alongside AI application development using MCP and LangChain.",
    groups: [
      {
        label: "Advaita BI / Syntheta",
        items: [
          "Angular frontend development, with Python/Django and FastAPI backend work",
          "Angular 14 to Angular 19 modernization",
          "UI modernization and application stabilization",
          "Dashboard functionality, user management, role management and permissions",
          "Database connectivity and REST API integration",
          "Bug fixing and application workflow improvements",
        ],
      },
      {
        label: "Auction Management System",
        items: [
          "Web and backend development on an enterprise online vehicle auction platform",
          "Authentication, OTP verification, admin two-factor authentication and password workflows",
          "Agent approval and auction visibility",
          "Bidding workflows, live bid status, proxy bidding and bid validation",
          "Seller APIs, inventory APIs and dashboard metrics",
          "Chat and unread-message functionality",
          "Access control, session/device management and file validation",
        ],
      },
      {
        label: "AI-assisted engineering",
        items: [
          "Claude, Gemini CLI and GitHub Copilot used as engineering tools",
          "Feature development, debugging and UI/UX implementation",
          "Documentation and development/code-review workflows",
        ],
        note: "Tooling that supports how the work gets built — not a description of what the products are.",
      },
      {
        label: "AI application development",
        items: [
          "MCP and LangChain development",
          "AI-powered chatbot / AI-agent workflow",
          "AI chatbot/agent implementation for the Waterfall application",
        ],
        note: "AI delivered as an application feature, distinct from AI-assisted development above.",
      },
    ],
  },
  {
    id: "trainee-software-developer",
    title: "Trainee Software Developer",
    company: "Wyzmindz Solutions",
    location: "Bangalore, India",
    start: "Nov 2025",
    end: "May 2026",
    summary:
      "Backend and frontend development on Waterfall, an enterprise sales reporting and analytics platform, plus MCP-based data-bridge work.",
    groups: [
      {
        label: "Waterfall",
        items: [
          "Django backend development and Angular frontend development",
          "Core business logic and database-driven workflows",
          "Sales reporting and waterfall analytics",
          "ROL processing",
          "Excel/file upload workflows, data validation and exception handling",
          "Filtering, pagination and download functionality",
          "User-based and region-based access control",
          "Weekly, monthly, quarterly and QTD reporting workflows",
          "Bug fixing and stabilization",
        ],
        note: "Conventional engineering work — the majority of this development was not AI-assisted.",
      },
      {
        label: "Advaita Data Bridge / MCP",
        items: [
          "MCP-based development and MCP UI development",
          "Angular integration and backend integration",
          "MongoDB data-transfer functionality",
        ],
      },
    ],
  },
];

/** Compact rail rendered above the detailed role cards. */
export const timeline = [
  { date: "Nov 2025", label: "Trainee Software Developer" },
  { date: "May 2026", label: "Junior Software Developer" },
  { date: "Present", label: null },
] as const;
