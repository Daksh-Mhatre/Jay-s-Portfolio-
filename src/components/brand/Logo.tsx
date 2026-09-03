import { cn } from "../../utils/cn";

interface LogoMarkProps {
  className?: string;
  /** Draws the red record tab. */
  accent?: boolean;
}

/**
 * PAST FORMAT mark — the geometric camera/video glyph from the brand card,
 * rebuilt as vector so it stays crisp at any size. Body + lens + motion nose.
 */
export function LogoMark({ className, accent = true }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 32"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cn("h-7 w-auto", className)}
    >
      <rect x="1.4" y="8.6" width="21.2" height="19" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="12" cy="18.1" r="4.6" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <path d="M25.6 14.4 L37.4 8.2 L37.4 28 L25.6 21.8 Z" fill="currentColor" />
      {accent ? <rect x="1.4" y="3.4" width="6.4" height="2.8" fill="#CC0000" /> : null}
      <rect x="12.4" y="3.4" width="10.2" height="2.8" fill="currentColor" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showSub?: boolean;
}

/** Mark + wordmark lockup. */
export function Logo({ className, markClassName, wordmarkClassName, showSub = true }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark className={cn("h-6 w-auto sm:h-7", markClassName)} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "type-wordmark text-[1.05rem] sm:text-xl",
            wordmarkClassName,
          )}
        >
          Past Format
        </span>
        {showSub ? (
          <span className="type-meta-sm mt-1 hidden text-grey-500 sm:block">
            PHOTOGRAPHY &amp; VIDEOGRAPHY
          </span>
        ) : null}
      </span>
    </span>
  );
}
