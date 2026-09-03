import type { ElementType, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";
import { cn } from "../../utils/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger in ms. Keep small — motion here is a whisper, not a show. */
  delay?: number;
  as?: ElementType;
}

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("pf-reveal", className)}
    >
      {children}
    </Tag>
  );
}
