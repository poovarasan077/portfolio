import { Bot, TerminalSquare } from "lucide-react";

import type { AiCategory } from "@/types/content";

/**
 * Two categories, deliberately not merged:
 *  - `assisted`    — AI as an engineering tool (how the work gets done)
 *  - `application` — AI as the product surface (what gets built)
 */
export const aiCategories: AiCategory[] = [
  {
    id: "ai-assisted-development",
    kind: "assisted",
    title: "AI-Assisted Development",
    description:
      "Used as engineering tools for feature development, debugging, refactoring, UI/UX implementation, documentation, and development workflows.",
    icon: TerminalSquare,
    items: ["Claude", "Gemini CLI", "GitHub Copilot"],
  },
  {
    id: "ai-application-development",
    kind: "application",
    title: "AI Application Development",
    description:
      "Practical implementation of AI-powered workflows and application features, including MCP/LangChain development and an AI-powered chatbot/agent workflow.",
    icon: Bot,
    items: ["MCP", "LangChain", "AI Agents", "Generative AI", "AI Chatbots"],
  },
];

export const aiDistinctionNote =
  "These are two different things. The first is how I work; the second is what I ship. Not every project I have worked on is an AI project.";
