import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, Ref } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-3",
    "min-h-11 px-6 py-3",
    "type-label tracking-widest whitespace-nowrap",
    "border transition-[background-color,color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    "disabled:pointer-events-none disabled:opacity-40",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "border-ink bg-ink text-paper hover:bg-paper hover:text-ink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#111111]",
        secondary:
          "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#111111]",
        accent:
          "border-accent bg-accent text-paper hover:bg-paper hover:text-accent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#CC0000]",
        invert:
          "border-paper bg-paper text-ink hover:bg-transparent hover:text-paper hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#F9F9F7] focus-visible:ring-paper focus-visible:ring-offset-ink",
        ghost: "border-transparent bg-transparent text-ink hover:text-accent",
      },
      size: {
        md: "text-[0.6875rem]",
        lg: "min-h-14 px-8 text-xs",
        sm: "min-h-11 px-4 text-[0.625rem]",
      },
      block: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "primary", size: "md", block: false },
  },
);

type Variants = VariantProps<typeof buttonStyles>;

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    Variants {
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

export function Button({ children, className, variant, size, block, ref, ...rest }: ButtonProps) {
  return (
    <button ref={ref} className={cn(buttonStyles({ variant, size, block }), className)} {...rest}>
      {children}
    </button>
  );
}

interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">,
    Variants {
  children: ReactNode;
  to?: string;
  href?: string;
  ref?: Ref<HTMLAnchorElement>;
}

/**
 * Button-styled link. Pass `to` for an internal route (rendered through the
 * router — no page reload) or `href` for an external URL.
 */
export function ButtonLink({
  children,
  className,
  variant,
  size,
  block,
  to,
  href,
  ref,
  ...rest
}: ButtonLinkProps) {
  // Internal route: render through the router so no full page reload happens.
  if (to) {
    return (
      <Link
        ref={ref}
        to={to}
        className={cn(buttonStyles({ variant, size, block }), className)}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  // External target (tel:, mailto:, instagram …).
  return (
    <a ref={ref} href={href} className={cn(buttonStyles({ variant, size, block }), className)} {...rest}>
      {children}
    </a>
  );
}
