import { cn } from "../../utils/cn";

interface FigureCaptionProps {
  fig?: string;
  text: string;
  meta?: string;
  tone?: "ink" | "paper";
  className?: string;
  accent?: boolean;
}

/** figcaption in mono: FIG. 01 — caption text ————— meta */
export function FigureCaption({
  fig,
  text,
  meta,
  tone = "ink",
  className,
  accent = false,
}: FigureCaptionProps) {
  const isPaper = tone === "paper";

  return (
    <figcaption
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 border-t px-3 py-2.5",
        isPaper ? "border-paper/30 text-paper/70" : "border-ink text-grey-600",
        className,
      )}
    >
      {accent ? <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-accent" /> : null}
      {fig ? (
        <span className={cn("type-meta-sm", isPaper ? "text-paper" : "text-ink")}>{fig}</span>
      ) : null}
      <span className="type-meta-sm">{text}</span>
      {meta ? <span className="type-meta-sm ml-auto hidden sm:block">{meta}</span> : null}
    </figcaption>
  );
}
