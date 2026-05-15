import { Link, useRouterState } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Sun, Moon, Menu, X, Home, User, BookOpen } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/about", label: "About", Icon: User },
  { to: "/blog", label: "Blog", Icon: BookOpen },
] as const;

const SOCIAL = [
  { href: "mailto:afiqqqx1997@email.com", icon: Mail, label: "Email" },
  { href: "https://github.com/mafiqqq", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/afiqqqx/", icon: Linkedin, label: "LinkedIn" },
];

function NavLinks({ pathname, onNav }: { pathname: string; onNav?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {NAV.map(({ to, label, Icon }) => {
        const active = pathname === to;
        return (
          <Link
            key={to}
            to={to}
            onClick={onNav}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all",
              active
                ? "bg-foreground/[0.06] font-semibold text-foreground"
                : "text-foreground/65 hover:bg-foreground/[0.04] hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
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
      <div className="flex items-center gap-1">
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
        aria-label="Toggle theme"
        className="flex items-center justify-between rounded-xl border border-border bg-foreground/[0.02] px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-foreground/65 transition-colors hover:bg-foreground/5 hover:text-foreground"
      >
        <span>{theme === "dark" ? "Dark" : "Light"}</span>
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
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[220px] flex-col justify-between p-6 lg:flex">
        <div className="flex flex-col gap-10">
          <Link to="/" className="font-display text-lg font-bold tracking-tight">
            afiq<span className="accent-amber">.dev</span>
          </Link>
          <NavLinks pathname={pathname} />
        </div>
        <Footer />
      </aside>

      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur lg:hidden">
        <Link to="/" className="font-display text-base font-bold tracking-tight">
          afiq<span className="accent-amber">.dev</span>
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
