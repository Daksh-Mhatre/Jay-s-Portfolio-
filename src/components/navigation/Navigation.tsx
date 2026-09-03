import { Link } from "react-router-dom";
import { navLinks } from "../../data/site";
import { cn } from "../../utils/cn";

interface NavigationProps {
  activeId: string | null;
  className?: string;
}

/**
 * Three editorial tabs, divided by rules rather than floated pills.
 * The active tab fills black; a red rule sits under the one being hovered.
 */
export function Navigation({ activeId, className }: NavigationProps) {
  return (
    <nav aria-label="Primary" className={cn("hidden h-full items-stretch md:flex", className)}>
      <ul className="flex h-full items-stretch">
        {navLinks.map((link, index) => {
          const isActive = activeId === link.id;
          return (
            <li key={link.id} className="flex">
              <Link
                to={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative flex h-full items-center border-r border-ink px-5 lg:px-7",
                  "type-label text-[0.6875rem] tracking-[0.2em] transition-colors duration-200",
                  index === 0 && "border-l border-ink",
                  isActive ? "bg-ink text-paper" : "bg-transparent text-ink hover:bg-muted",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-950",
                )}
              >
                <span className="relative">
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-200",
                      "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                    )}
                  />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "type-meta-sm absolute top-1.5 right-1.5 text-[0.5rem] leading-none",
                    isActive ? "text-paper/50" : "text-grey-500",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
