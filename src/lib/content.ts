export const PROFILE = {
  name: "Afiq",
  role: "Software Engineer",
  company: "Siemens",
  tagline: "I build frontend products with strong UI/UX and scalable systems.",
  github: "https://github.com/mafiqqq",
  linkedin: "https://www.linkedin.com/in/afiqqqx/",
  twitter: "https://x.com/",
  email: "afiqqqx1997@email.com",
  devto: "mafiqqq",
  domain: "afiq.dev",
};

export const STATS = [
  { value: "6+", label: "years in production", info: "Shipping production code since 2019." },
  { value: "6", label: "core tools", info: "The stack I reach for daily." },
  { value: "2", label: "career chapters", info: "Companies and teams I've grown with." },
  { value: "3", label: "main strengths", info: "What I bring to a team." },
] as const;

export const TOOLS = [
  { name: "C# / .NET", tag: "CORE TOOL", emoji: "🧩" },
  { name: "API Design", tag: "CORE TOOL", emoji: "🔌" },
  { name: "Python", tag: "CORE TOOL", emoji: "🐍" },
  { name: "SQL", tag: "CORE TOOL", emoji: "🗄️" },
  { name: "React", tag: "CORE TOOL", emoji: "⚛️" },
  { name: "TypeScript", tag: "OCCASIONALLY USED", emoji: "🔷" },
] as const;

export const CAREER = [
  {
    company: "Siemens",
    role: "Software Engineer",
    range: "SEPTEMBER 2023 – PRESENT",
    badge: "Current" as const,
    description:
      "Building internal platforms and customer-facing tools across .NET and React. Leading frontend architecture decisions, owning component systems and CI/CD for delivery pipelines.",
    stack: ["C# / .NET", "React", "TypeScript", "SQL", "Azure"],
    initial: "S",
  },
  {
    company: "Previous Company",
    role: "Software Engineer",
    range: "MAY 2022 – AUGUST 2023",
    badge: "Past" as const,
    description:
      "Shipped API integrations and dashboards. Worked closely with product to refine UX flows and reduce friction in core user journeys.",
    stack: ["Python", "React", "PostgreSQL", "REST"],
    initial: "P",
  },
  {
    company: "Earlier Company",
    role: "Junior Engineer",
    range: "AUGUST 2021 – APRIL 2022",
    badge: "Past" as const,
    description:
      "First chapter — learned the craft, paired with senior engineers, and contributed to a multi-tenant SaaS product.",
    stack: ["JavaScript", "Node.js", "MySQL"],
    initial: "E",
  },
] as const;

export const STRENGTHS = [
  {
    title: "Product UI",
    icon: "🎨",
    description: "Pixel-perfect interfaces with a strong design sensibility and an eye for detail.",
  },
  {
    title: "Systems Thinking",
    icon: "🧠",
    description: "Scalable architecture, clean code practices, and decisions that age well.",
  },
  {
    title: "Delivery",
    icon: "🚀",
    description: "Consistent, reliable shipping in production environments — quality on a deadline.",
  },
] as const;

export const FAQS = [
  {
    q: "What's your favorite part of frontend?",
    a: "The moment a tricky interaction finally feels right — when motion, layout, and timing all click into place.",
  },
  {
    q: "How do you approach a new codebase?",
    a: "Read first. Map the boundaries — data flow, state, build pipeline — before touching anything. Then ship something tiny.",
  },
  {
    q: "Best advice for junior devs?",
    a: "Write boring code on purpose. Save your cleverness for the problems that actually require it.",
  },
];
