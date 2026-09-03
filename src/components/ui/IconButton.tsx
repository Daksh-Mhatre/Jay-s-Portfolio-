import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import { cn } from "../../utils/cn";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required: icon-only controls must announce themselves. */
  label: string;
  children: ReactNode;
  tone?: "ink" | "paper";
  ref?: Ref<HTMLButtonElement>;
}

/** 44x44 bordered square. Sharp corners, hard states, no radius. */
export function IconButton({
  label,
  children,
  className,
  tone = "ink",
  ref,
  ...rest
}: IconButtonProps) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center border transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        tone === "ink"
          ? "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper focus-visible:ring-neutral-950 focus-visible:ring-offset-paper"
          : "border-paper/60 bg-transparent text-paper hover:bg-paper hover:text-ink focus-visible:ring-paper focus-visible:ring-offset-ink",
        "disabled:pointer-events-none disabled:opacity-30",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
