import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

/** Link minimalista sublinhado com seta que desliza no hover. */
export function ArrowLink({
  to,
  children,
  className,
  direction = "right",
}: {
  to: string;
  children: ReactNode;
  className?: string;
  direction?: "right" | "left";
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-3 font-sans text-[0.72rem] uppercase tracking-label text-ink transition-colors duration-300 ease-out hover:text-earth",
        className,
      )}
    >
      {direction === "left" && (
        <span aria-hidden className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
          ←
        </span>
      )}
      <span className="border-b border-current pb-1">{children}</span>
      {direction === "right" && (
        <span aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
