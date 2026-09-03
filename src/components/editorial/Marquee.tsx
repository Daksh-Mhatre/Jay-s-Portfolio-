import { cn } from "../../utils/cn";

interface MarqueeProps {
  items: string[];
  /** Seconds for one full pass. Lower = faster, mechanical. */
  duration?: number;
  reverse?: boolean;
  tone?: "ink" | "paper";
  className?: string;
  srLabel?: string;
}

function Row({ items, tone }: { items: string[]; tone: "ink" | "paper" }) {
  return (
    <ul className="flex shrink-0 items-center">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-center">
          <span
            className={cn(
              "type-meta px-6 py-3.5 text-[0.6875rem]",
              tone === "ink" ? "text-paper" : "text-ink",
            )}
          >
            {item}
          </span>
          <span aria-hidden="true" className="text-accent">
            /
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Editorial ticker. Duplicated track translated -50% for a seamless,
 * constant-velocity loop. Frozen entirely under prefers-reduced-motion.
 */
export function Marquee({
  items,
  duration = 34,
  reverse = false,
  tone = "ink",
  className,
  srLabel,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y",
        tone === "ink" ? "border-ink bg-ink newsprint-hatch" : "border-ink bg-paper",
        className,
      )}
    >
      <span className="sr-only">{srLabel ?? items.join(", ")}</span>
      <div
        aria-hidden="true"
        className="pf-marquee-track"
        data-direction={reverse ? "reverse" : "forward"}
        style={{ ["--pf-marquee-duration" as string]: `${duration}s` }}
      >
        <Row items={items} tone={tone} />
        <Row items={items} tone={tone} />
      </div>
    </div>
  );
}
