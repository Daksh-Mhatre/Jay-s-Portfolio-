import type { ReactNode, Ref } from "react";
import { cn } from "../../utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Renders the 1px column rules of the editorial grid down the sides. */
  bordered?: boolean;
  ref?: Ref<HTMLDivElement>;
}

/** 1280px editorial measure. Everything on the page sits inside this. */
export function Container({ children, className, bordered = false, ref }: ContainerProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-screen-xl px-4 sm:px-6",
        bordered && "md:border-x md:border-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}
