import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Pill({
  children,
  variant = "outline",
  className,
}: {
  children: ReactNode;
  variant?: "outline" | "filled" | "coral" | "sky";
  className?: string;
}) {
  const styles = {
    outline: "border border-border/70 text-foreground/80 bg-background/40",
    filled: "bg-foreground text-background",
    coral: "bg-coral/20 text-coral-foreground border border-coral/30",
    sky: "bg-sky/30 text-foreground border border-sky/40",
  }[variant];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider",
        styles,
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
