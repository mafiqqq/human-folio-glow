import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Info } from "lucide-react";
import { GlassCard, Pill, Label } from "@/components/GlassCard";
import { PROFILE, STATS, TOOLS, CAREER } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afiq — Software Engineer building frontend products" },
      {
        name: "description",
        content:
          "Afiq is a software engineer at Siemens building frontend products with strong UI/UX and scalable systems.",
      },
    ],
  }),
  component: Index,
});

const heroWords = [
  { text: "I am Afiq.", className: "font-light" },
  { text: " I build", className: "font-light" },
  { text: " frontend products", className: "font-bold highlight-coral" },
  { text: " with strong", className: "font-light" },
  { text: " UI/UX", className: "font-bold highlight-sky" },
  { text: " and scalable systems.", className: "font-light" },
];

function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Hero */}
        <GlassCard className="p-8 sm:p-10 lg:col-span-3">
          <Label className="text-coral">SALAM AND HELLO EVERYONE 👋</Label>
          <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {heroWords.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className={w.className}
              >
                {w.text}
              </motion.span>
            ))}
          </h1>

          <div className="mt-8 flex flex-wrap gap-2">
            <Pill>{`${PROFILE.role} @ ${PROFILE.company}`}</Pill>
            <Pill>Frontend architecture</Pill>
            <Pill>Pixel-perfect UI</Pill>
            <Pill>Product delivery</Pill>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <CTA href={PROFILE.github}>GitHub</CTA>
            <CTA href={PROFILE.linkedin}>LinkedIn</CTA>
            <CTA href={PROFILE.twitter}>X (Twitter)</CTA>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/40 px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-foreground/40"
            >
              Read my writing <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </GlassCard>

        {/* Right column */}
        <div className="space-y-6 lg:col-span-2">
          <GlassCard className="p-6">
            <Label>CURRENTLY</Label>
            <h3 className="mt-3 text-lg font-semibold leading-snug">
              {PROFILE.role} <span className="text-muted-foreground">@</span> {PROFILE.company}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <Pill>UI/UX systems</Pill>
              <Pill>CI/CD</Pill>
              <Pill>Frontend leadership</Pill>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <Label>FEATURED TOOLS</Label>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                See all <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {TOOLS.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-border/50 bg-background/40 p-3 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="text-xl">{t.emoji}</div>
                  <div className="mt-1.5 text-xs font-semibold">{t.name}</div>
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground">
                    {t.tag}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <GlassCard key={s.label} className="group relative p-6">
            <div className="text-3xl font-bold tracking-tight">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            <div className="absolute right-3 top-3" title={s.info}>
              <Info className="h-3.5 w-3.5 text-muted-foreground/60" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Career snapshot */}
      <GlassCard className="p-8">
        <Label>CAREER SNAPSHOT</Label>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">Recent roles</h2>
        <div className="mt-6 space-y-3">
          {CAREER.map((c) => (
            <div
              key={c.company + c.range}
              className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-background/30 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-coral/40 to-sky/40 text-base font-bold">
                {c.initial}
              </div>
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {c.range}
                </div>
                <div className="mt-0.5 font-semibold">{c.role}</div>
                <div className="text-sm text-muted-foreground">{c.company}</div>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <Pill variant={c.badge === "Current" ? "filled" : "outline"}>{c.badge}</Pill>
                {c.stack.slice(0, 3).map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

function CTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/40 px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-foreground/40"
    >
      {children}
    </a>
  );
}
