import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Bento tile — dark matte card with subtle border and hover lift. */
export function GlassCard({
  children,
  className,
  hover = true,
  ...props
}: { children: ReactNode; hover?: boolean } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bento", hover && "bento-hover", className)}
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
  variant?: "outline" | "filled" | "amber";
  className?: string;
}) {
  const styles = {
    outline:
      "border border-border/80 text-foreground/75 bg-foreground/[0.02]",
    filled: "bg-foreground text-background",
    amber: "bg-amber-soft text-amber border border-amber/30",
  }[variant];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wide font-mono uppercase",
        styles,
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("label-mono", className)}>{children}</span>;
}
