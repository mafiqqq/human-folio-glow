export const PROFILE = {
  name: "Afiq",
  role: "Software Engineer",
  company: "Siemens Industry Software",
  tagline:
    "I build backend systems and AI-powered tools that are clean, scalable, and production-ready.",
  github: "https://github.com/mafiqqq",
  linkedin: "https://www.linkedin.com/in/afiqqqx/",
  email: "afiqqqx1997@email.com",
  devto: "mafiqqq",
  domain: "afiq.dev",
};

export const STATS = [
  { value: "4+", label: "years in industry", info: "Shipping production code since 2020." },
  { value: "2", label: "enterprise companies", info: "Intel and Siemens." },
  { value: "4", label: "career chapters", info: "Internships, junior, engineer, senior work." },
  { value: "3", label: "main strengths", info: "Backend · AI/LLM · Clean Code." },
] as const;

export const SKILL_GROUPS = [
  {
    label: "Languages & Frameworks",
    items: [
      "Python",
      "C#",
      "ASP.NET Core",
      "React",
      "TypeScript",
      "JavaScript",
      "SQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "AI / LLM",
    items: [
      "OpenAI",
      "Claude",
      "Llama",
      "Mistral",
      "ChromaDB",
      "RAG",
      "Prompt Engineering",
      "Model Evaluation",
    ],
  },
  {
    label: "Practices & DevOps",
    items: [
      "OOP",
      "Clean Architecture",
      "RESTful APIs",
      "Git",
      "Azure DevOps",
      "GitHub Actions",
      "CI/CD",
      "xUnit",
      "Pytest",
      "Cypress",
    ],
  },
] as const;

// Flat preview list (kept for compatibility with About page tools section)
export const TOOLS = [
  { name: "Python", tag: "CORE", emoji: "🐍" },
  { name: "C# / .NET", tag: "CORE", emoji: "🧩" },
  { name: "OpenAI / LLMs", tag: "CORE", emoji: "🤖" },
  { name: "PostgreSQL", tag: "CORE", emoji: "🗄️" },
  { name: "React", tag: "OCCASIONAL", emoji: "⚛️" },
  { name: "Azure DevOps", tag: "CORE", emoji: "☁️" },
] as const;

export const CAREER = [
  {
    company: "Siemens Industry Software",
    role: "Software Engineer",
    range: "APR 2024 – PRESENT",
    badge: "Current" as const,
    description:
      "Backend services and AI-integrated tools across .NET and Python. Owning APIs, data flows, and CI/CD on Azure DevOps.",
    stack: ["C#", "ASP.NET Core", "Python", "Azure DevOps", "SQL"],
    initial: "S",
  },
  {
    company: "Intel",
    role: "Software Development Engineer",
    range: "AUG 2020 – MAR 2024",
    badge: "Past" as const,
    description:
      "Built internal engineering tooling and data pipelines supporting silicon yield and process workflows at scale.",
    stack: ["Python", "C#", "SQL", "REST APIs"],
    initial: "I",
  },
  {
    company: "Intel",
    role: "Yield Integration Intern",
    range: "FEB 2020 – AUG 2020",
    badge: "Past" as const,
    description:
      "Automated yield reporting and statistical workflows, reducing manual analysis time for engineering teams.",
    stack: ["Python", "SQL"],
    initial: "I",
  },
  {
    company: "ViaMed Sdn. Bhd.",
    role: "Ionic App Developer",
    range: "JAN 2019 – MAY 2019",
    badge: "Past" as const,
    description:
      "First chapter — shipped a cross-platform health app prototype with Ionic and Angular.",
    stack: ["Ionic", "Angular", "TypeScript"],
    initial: "V",
  },
] as const;

export const STRENGTHS = [
  {
    title: "Backend Systems",
    icon: "🧱",
    description: "APIs, data flow, and architecture built to scale and stay maintainable.",
  },
  {
    title: "AI / LLM Integration",
    icon: "🤖",
    description: "Production-ready RAG, prompt engineering, and model evaluation pipelines.",
  },
  {
    title: "Clean Code",
    icon: "✨",
    description: "Boring, readable code on purpose — clarity over cleverness.",
  },
] as const;
