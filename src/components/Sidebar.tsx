import { Link, useRouterState } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Twitter, Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/about", label: "About", icon: "🙋" },
  { to: "/blog", label: "Blog", icon: "✍️" },
  { to: "/ama", label: "AMA", icon: "💬" },
] as const;

const SOCIAL = [
  { href: "mailto:afiqqqx1997@email.com", icon: Mail, label: "Email" },
  { href: "https://github.com/mafiqqq", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/afiqqqx/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/", icon: Twitter, label: "X" },
];

function NavLinks({ pathname, onNav }: { pathname: string; onNav?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {NAV.map((item) => {
        const active = pathname === item.to;
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNav}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all",
              active
                ? "bg-foreground/[0.06] dark:bg-foreground/[0.08] font-semibold text-foreground"
                : "text-foreground/70 hover:bg-foreground/[0.04] hover:text-foreground",
            )}
          >
            <span className="text-base leading-none">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function Footer() {
  const { theme, toggle } = useTheme();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {SOCIAL.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="rounded-lg p-2 text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            <s.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
      <button
        onClick={toggle}
        className="flex items-center justify-between rounded-xl border border-border/60 bg-background/40 px-3 py-2 text-xs text-foreground/70 transition-colors hover:bg-foreground/5"
      >
        <span>{theme === "dark" ? "Dark" : "Light"} mode</span>
        {theme === "dark" ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </button>
      <p className="text-[10px] text-muted-foreground">© 2025 afiq.dev</p>
    </div>
  );
}

export function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[220px] flex-col justify-between p-6 lg:flex">
        <div className="flex flex-col gap-8">
          <Link to="/" className="text-base font-bold tracking-tight">
            afiq<span className="text-primary">.dev</span>
          </Link>
          <NavLinks pathname={pathname} />
        </div>
        <Footer />
      </aside>

      {/* Mobile bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-border/40 bg-background/70 px-4 py-3 backdrop-blur lg:hidden">
        <Link to="/" className="text-sm font-bold tracking-tight">
          afiq<span className="text-primary">.dev</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-lg p-2 hover:bg-foreground/5"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 top-[57px] z-20 flex flex-col justify-between bg-background/95 p-6 backdrop-blur lg:hidden">
          <NavLinks pathname={pathname} onNav={() => setOpen(false)} />
          <Footer />
        </div>
      )}
    </>
  );
}
