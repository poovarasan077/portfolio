/**
 * About copy. Written around actual engineering work — no "passionate
 * developer", "quick learner" or "team player" filler.
 *
 * The closing paragraph is preserved from the previous portfolio.
 */
export const aboutParagraphs = [
  "I'm a full-stack developer based in Bengaluru, originally from Tamil Nadu, working at Wyzmindz Solutions. My work spans enterprise application development end to end — Angular on the frontend, Python with Django and FastAPI behind it, and the REST APIs and database layers that connect the two.",
  "Most of what I build is business-critical: business intelligence and dashboarding, enterprise sales reporting and analytics, and a large-scale online auction platform. In practice that has meant framework modernization from Angular 14 to 19, a MySQL to MongoDB migration, authentication and authorization workflows, role and permission systems, and keeping production systems stable while all of it happens.",
  "Alongside that I work on AI application development — MCP and LangChain — building AI-powered chatbot and agent workflows into existing enterprise products. I also use Claude, Gemini CLI and GitHub Copilot as everyday engineering tools. I keep those two things separate: one is what I ship, the other is how I build it.",
  "I hold a B.E. in Computer Science and Engineering, and I care about writing code that's clear enough for the next person — including future me — to pick up without a handoff meeting.",
] as const;

/** Key/value panel beside the About copy; carried over from the previous site. */
export const aboutFacts = [
  { term: "role", value: "Full-Stack Developer" },
  { term: "company", value: "Wyzmindz Solutions" },
  { term: "based in", value: "Bengaluru, IN" },
  { term: "education", value: "B.E. CSE, 2025" },
  { term: "languages", value: "English, Tamil" },
] as const;
