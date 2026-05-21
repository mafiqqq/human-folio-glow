import { H as jsxRuntimeExports } from "./server-DNt25jvZ.js";
import { m as motion, G as GlassCard, L as Label, C as CAREER, a as Pill, T as TOOLS, b as STRENGTHS } from "./content-CoyqOmUs.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-Bo3Ips-P.js";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, transition: {
    duration: 0.4
  }, className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-8 sm:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "CAREER" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl", children: [
        "A few chapters of my ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-amber font-bold", children: "journey" }),
        " so far."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-sm text-muted-foreground", children: "Different teams, different problems, same curiosity to make things work right at scale." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-4", children: CAREER.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 rounded-2xl border border-border/50 bg-background/40 p-5 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-amber/30 bg-amber-soft font-display text-lg font-bold accent-amber", children: c.initial }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: c.range }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { variant: c.badge === "Current" ? "filled" : "outline", children: c.badge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: c.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: c.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc space-y-1 pl-5 text-sm leading-relaxed text-foreground/100", children: c.description.map((desc) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: desc }, desc)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: c.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { children: s }, s)) })
        ] })
      ] }, c.company + c.range)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-8 sm:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "TOOLSTACK" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl", children: "Tools I focused on mainly now.." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3", children: TOOLS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/50 bg-background/40 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: t.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: t.tag })
      ] }, t.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-8 sm:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "STRENGTHS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl", children: "What I bring to a team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-3", children: STRENGTHS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/50 bg-background/40 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: s.description })
      ] }, s.title)) })
    ] })
  ] });
}
export {
  About as component
};
