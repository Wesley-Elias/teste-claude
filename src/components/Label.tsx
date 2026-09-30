import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Rótulo editorial pequeno: "01 · RESIDENCIAL" */
export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string | number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("label flex items-center gap-3", className)}>
      {index !== undefined && (
        <>
          <span className="text-earth">{typeof index === "number" ? String(index).padStart(2, "0") : index}</span>
          <span aria-hidden className="inline-block h-px w-6 bg-stone/60" />
        </>
      )}
      <span>{children}</span>
    </p>
  );
}
