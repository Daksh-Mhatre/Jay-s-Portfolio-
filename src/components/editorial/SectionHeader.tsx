import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { AccentMark } from "./EditorialMeta";

interface SectionHeaderProps {
  /** e.g. "SEC. 02" */
  index: string;
  /** e.g. "THE ARCHIVE" */
  title: string;
  /** Right-hand editorial note. */
  note?: ReactNode;
  /** Optional secondary line under the title. */
  lede?: ReactNode;
  tone?: "ink" | "paper";
  className?: string;
  id?: string;
}

/**
 * Masthead-style section rule:
 * [ SEC. 02 ]  THE ARCHIVE ————————————————— note
 */
export function SectionHeader({
  index,
  title,
  note,
  lede,
  tone = "ink",
  className,
  id,
}: SectionHeaderProps) {
  const isPaper = tone === "paper";

  return (
    <header className={cn("w-full", className)}>
      <div
        className={cn(
          "flex flex-wrap items-center gap-x-4 gap-y-2 border-b py-3",
          isPaper ? "border-paper/40" : "border-ink",
        )}
      >
        <span
          className={cn(
            "type-meta-sm border px-2 py-1",
            isPaper ? "border-paper/60 text-paper" : "border-ink text-ink",
          )}
        >
          {index}
        </span>
        <AccentMark />
        {note ? (
          <span
            className={cn(
              "type-meta-sm ml-auto hidden sm:block",
              isPaper ? "text-paper/60" : "text-grey-500",
            )}
          >
            {note}
          </span>
        ) : null}
      </div>

      <h2
        id={id}
        className={cn(
          "type-display mt-5 text-[2.75rem] leading-[0.86] sm:text-6xl lg:text-7xl",
          isPaper ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>

      {lede ? (
        <p
          className={cn(
            "type-body mt-5 max-w-xl",
            isPaper ? "text-paper/70" : "text-grey-600",
          )}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}
