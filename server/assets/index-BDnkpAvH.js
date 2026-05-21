import { P as reactExports, H as jsxRuntimeExports } from "./server-DNt25jvZ.js";
import { a as createLucideIcon, L as Link } from "./router-Bo3Ips-P.js";
import { m as motion, a as Pill, L as Label, S as SKILL_GROUPS, C as CAREER, P as PROFILE, G as GlassCard } from "./content-CoyqOmUs.js";
import { A as ArrowUpRight } from "./arrow-up-right-D-ghEccq.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$5 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$5);
const __iconNode$4 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$1);
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
const tile = {
  hidden: {
    opacity: 0,
    y: 14
  },
  show: {
    opacity: 1,
    y: 0
  }
};
const grid = {
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
};
function Tile({
  className,
  children,
  delay = 0,
  hover = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: tile, transition: {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
    delay
  }, className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { hover, className: "h-full", children }) });
}
function Index() {
  const [copied, setCopied] = reactExports.useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: grid, initial: "hidden", animate: "show", className: "grid gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:col-span-3 lg:[grid-template-rows:1fr_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col p-7 sm:p-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl", children: [
          "I am Afiq. I build",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-amber font-bold", children: "backend systems" }),
          " and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-amber font-bold", children: "AI-powered tools" }),
          " that are clean, scalable, and production-ready."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 border-l-2 border-amber/60 pl-3 text-[14px] text-foreground/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label-mono accent-amber", children: "Exploring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI agents, prompt engineering, and production LLM tooling" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-wrap items-center gap-2 pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { children: "Software Engineer @ Siemens" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { variant: "amber", children: "6 years of coffee, code & console logs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-amber/70 px-3 py-1.5 text-xs font-medium text-amber transition-all hover:-translate-y-0.5 hover:border-amber hover:bg-amber-soft", children: [
            "Read my writing ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "SKILLS & STACK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "inline-flex items-center gap-1 label-mono hover:text-foreground", children: [
            "See all ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-4", children: SKILL_GROUPS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-mono accent-amber", children: g.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1.5", children: g.items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { children: s }, s)) })
        ] }, g.label)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:col-span-2 lg:[grid-template-rows:auto_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "EXPERIENCE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "inline-flex items-center gap-1 label-mono hover:text-foreground", children: [
            "View all ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 divide-y divide-border", children: CAREER.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col gap-1 py-2.5 sm:flex-row sm:items-baseline sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: c.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: c.company })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-mono", children: c.range })
        ] }, c.company + c.range)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "SAY HELLO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display mt-3 text-2xl font-semibold leading-tight", children: [
          "Let's work ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-amber font-bold", children: "together." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Open to interesting problems and collaborations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialTile, { href: PROFILE.github, label: "GitHub", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialTile, { href: PROFILE.linkedin, label: "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialTile, { href: `mailto:${PROFILE.email}`, label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-col gap-3 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: copyEmail, className: "group flex w-full items-center justify-between gap-3 rounded-full border border-amber/40 bg-amber-soft px-4 py-2.5 text-sm font-medium text-amber transition-all hover:-translate-y-0.5 hover:border-amber/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: PROFILE.email }),
            copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4 opacity-70 group-hover:opacity-100" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://drive.google.com/file/d/1UGmFDaDFQB7PIptccMMXPsq0O4dZ0v9o/view?usp=sharing", target: "_blank", rel: "noreferrer", className: "inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-foreground/[0.02] px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
            "Download Resume"
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}
function SocialTile({
  href,
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noreferrer", "aria-label": label, className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-foreground/[0.02] text-foreground/75 transition-all hover:-translate-y-0.5 hover:border-amber/60 hover:text-amber hover:bg-amber-soft hover:shadow-[0_6px_18px_-8px_var(--amber)]", children });
}
export {
  Index as component
};
