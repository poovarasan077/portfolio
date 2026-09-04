import { Code2, Database, Layers, Server, Wrench } from "lucide-react";

import type { SkillGroup } from "@/types/content";

/**
 * Verified stack only. AI tooling lives in `aiEngineering.ts` so that
 * "tools I use" and "things I build" stay clearly separated.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Layers,
    items: ["Angular", "PrimeNG"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    items: ["Django", "FastAPI", "REST APIs"],
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "Docker", "n8n"],
  },
];
