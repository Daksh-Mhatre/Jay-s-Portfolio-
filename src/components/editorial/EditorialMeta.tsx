import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface MetaLineProps {
  label: string;
  value: ReactNode;
  className?: string;
}

/** label ————— value, printed in mono. The site's connective tissue. */
export function MetaLine({ label, value, className }: MetaLineProps) {
  return (
    <div className={cn("flex items-baseline justify-between gap-4 py-2", className)}>
      <span className="type-meta-sm text-grey-500">{label}</span>
      <span className="type-meta text-ink">{value}</span>
    </div>
  );
}

interface MetaBlockProps {
  items: { label: string; value: ReactNode }[];
  className?: string;
  divided?: boolean;
}

export function MetaBlock({ items, className, divided = true }: MetaBlockProps) {
  return (
    <dl className={cn("w-full", className)}>
      {items.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            "flex items-baseline justify-between gap-4 py-2.5",
            divided && index !== items.length - 1 && "border-b border-ink/15",
          )}
        >
          <dt className="type-meta-sm text-grey-500">{item.label}</dt>
          <dd className="type-meta text-right text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Small red editorial marker. Used sparingly. */
export function AccentMark({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("inline-block h-2 w-2 bg-accent", className)} />;
}

export function AccentRule({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("block h-0.5 w-10 bg-accent", className)} />;
}
