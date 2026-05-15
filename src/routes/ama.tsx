import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { GlassCard, Label } from "@/components/GlassCard";
import { FAQS } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ama")({
  head: () => ({
    meta: [
      { title: "Ask me anything — Afiq" },
      { name: "description", content: "Ask me anything about my career, tools, or how I work." },
    ],
  }),
  component: AMA,
});

function AMA() {
  const [name, setName] = useState("");
  const [q, setQ] = useState("");
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    setSent(true);
    setName("");
    setQ("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <GlassCard className="p-8 sm:p-10">
        <Label>AMA</Label>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Ask me <span className="highlight-coral font-bold">anything</span>.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Curious about my career, tools, or how I approach frontend work? Drop a question.
        </p>

        <form onSubmit={submit} className="mt-8 max-w-xl space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
          />
          <textarea
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="What's on your mind?"
            rows={4}
            className="w-full resize-none rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background transition-all hover:-translate-y-0.5"
          >
            {sent ? (
              <>
                <Check className="h-3.5 w-3.5" /> Sent — thanks!
              </>
            ) : (
              "Send question"
            )}
          </button>
        </form>
      </GlassCard>

      <GlassCard className="p-8 sm:p-10">
        <Label>FEATURED Q&A</Label>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Past questions
        </h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border/50 bg-background/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium hover:bg-foreground/[0.03]"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </GlassCard>
    </motion.div>
  );
}
