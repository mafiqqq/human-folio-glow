import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  Copy,
  Check,
} from "lucide-react";
import { GlassCard, Pill, Label } from "@/components/GlassCard";
import { useTheme } from "@/lib/theme";
import { PROFILE, STATS, SKILL_GROUPS, CAREER } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afiq — Software Engineer · Backend & AI" },
      {
        name: "description",
        content:
          "Afiq is a software engineer at Siemens building backend systems and AI-powered tools that are clean, scalable, and production-ready.",
      },
    ],
  }),
  component: Index,
});

const tile = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};
const grid = {
  show: { transition: { staggerChildren: 0.05 } },
};

function Tile({
  className,
  children,
  delay = 0,
  hover = true,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  hover?: boolean;
}) {
  return (
    <motion.div
      variants={tile}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      <GlassCard hover={hover} className="h-full">
        {children}
      </GlassCard>
    </motion.div>
  );
}

function Index() {
  return (
    <motion.div
      variants={grid}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(0,auto)]"
    >
      {/* Hero — large */}
      <Tile className="md:col-span-4 md:row-span-2">
        <div className="flex h-full flex-col p-7 sm:p-9">
          <Label>SALAM AND HELLO EVERYONE 👋</Label>
          <h1 className="font-display mt-5 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            I am Afiq. I build{" "}
            <span className="highlight-amber font-bold">backend systems</span> and{" "}
            <span className="highlight-amber font-bold">AI-powered tools</span> that are clean,
            scalable, and production-ready.
          </h1>

          <div className="mt-7 flex flex-wrap gap-1.5">
            <Pill>Software Engineer @ Siemens</Pill>
            <Pill>Clean Architecture</Pill>
            <Pill>LLM Integration</Pill>
            <Pill>Production systems</Pill>
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-8">
            <CTA href={PROFILE.github} icon={<Github className="h-3.5 w-3.5" />}>
              GitHub
            </CTA>
            <CTA href={PROFILE.linkedin} icon={<Linkedin className="h-3.5 w-3.5" />}>
              LinkedIn
            </CTA>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-foreground/[0.02] px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
            >
              Read my writing <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Tile>

      {/* Currently */}
      <Tile className="md:col-span-2">
        <div className="p-6">
          <Label>CURRENTLY</Label>
          <h3 className="mt-3 font-display text-base font-semibold leading-snug">
            Software Engineer
            <br />
            <span className="text-foreground/70">@ Siemens Industry Software</span>
          </h3>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <Pill variant="amber">Backend</Pill>
            <Pill>AI Integration</Pill>
            <Pill>Azure DevOps</Pill>
          </div>
        </div>
      </Tile>

      {/* Social grid */}
      <Tile className="md:col-span-2">
        <div className="p-6">
          <Label>FIND ME</Label>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <SocialIcon href={PROFILE.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={PROFILE.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={`mailto:${PROFILE.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>
      </Tile>

      {/* Stat counters — 4 across, full row */}
      <motion.div
        variants={tile}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="md:col-span-6 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {STATS.map((s) => (
          <GlassCard key={s.label} className="p-5">
            <div className="font-display text-3xl font-bold tracking-tight">{s.value}</div>
            <div className="mt-1 label-mono">{s.label}</div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Skills (wide) */}
      <Tile className="md:col-span-4">
        <div className="p-7">
          <div className="flex items-center justify-between">
            <Label>SKILLS &amp; STACK</Label>
            <Link
              to="/about"
              className="inline-flex items-center gap-1 label-mono hover:text-foreground"
            >
              See all <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="mt-5 space-y-4">
            {SKILL_GROUPS.map((g) => (
              <div key={g.label}>
                <div className="label-mono accent-amber">{g.label}</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tile>

      {/* CTA */}
      <Tile className="md:col-span-2">
        <CtaCard />
      </Tile>

      {/* Experience list */}
      <Tile className="md:col-span-4">
        <div className="p-7">
          <Label>EXPERIENCE</Label>
          <ul className="mt-5 divide-y divide-border">
            {CAREER.map((c) => (
              <li
                key={c.company + c.range}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <div className="font-semibold">{c.role}</div>
                  <div className="text-xs text-muted-foreground">{c.company}</div>
                </div>
                <div className="label-mono">{c.range}</div>
              </li>
            ))}
          </ul>
        </div>
      </Tile>

      {/* Theme toggle tile */}
      <Tile className="md:col-span-2">
        <ThemeTile />
      </Tile>
    </motion.div>
  );
}

function CTA({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-foreground/[0.02] px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
    >
      {icon}
      {children}
    </a>
  );
}

function SocialIcon({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex aspect-square items-center justify-center rounded-xl border border-border bg-foreground/[0.02] text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
    >
      {children}
    </a>
  );
}

function CtaCard() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="flex h-full flex-col p-6">
      <Label>SAY HELLO 👋</Label>
      <h3 className="font-display mt-3 text-xl font-semibold leading-tight">
        Let's <span className="accent-amber">work together</span>.
      </h3>
      <p className="mt-2 text-xs text-muted-foreground">
        Open to interesting problems and collaborations.
      </p>
      <button
        onClick={copy}
        className="mt-auto inline-flex items-center justify-between gap-2 rounded-xl border border-amber/40 bg-amber-soft px-3 py-2 text-xs font-medium text-amber transition-all hover:-translate-y-0.5"
      >
        <span className="font-mono truncate">{PROFILE.email}</span>
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}

function ThemeTile() {
  const { theme, toggle } = useTheme();
  const Icon = theme === "dark" ? Moon : Sun;
  return (
    <button
      onClick={toggle}
      className="group flex h-full w-full flex-col p-6 text-left"
      aria-label="Toggle theme"
    >
      <Label>THEME</Label>
      <div className="mt-auto flex items-end justify-between">
        <span className="font-display text-xl font-semibold">
          {theme === "dark" ? "Dark" : "Light"}
        </span>
        <span className="rounded-full border border-border bg-foreground/[0.02] p-2.5 text-foreground/70 transition-colors group-hover:border-amber/50 group-hover:text-amber">
          <Icon className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}
