import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Eyebrow } from "./Label";
import { Reveal } from "./Reveal";

/** Abertura padrão das páginas internas: rótulo, título serifado grande e texto de apoio. */
export function PageIntro({
  eyebrow,
  index,
  title,
  children,
  className,
}: {
  eyebrow: string;
  index?: string | number;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("container pb-16 pt-36 md:pb-24 md:pt-52", className)}>
      <Reveal>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
      </Reveal>
      <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-12 md:items-end">
        <Reveal as="h1" delay={80} className="text-display-md text-balance md:col-span-8">
          {title}
        </Reveal>
        {children && (
          <Reveal
            delay={180}
            className="max-w-narrow text-base font-light leading-relaxed text-ink/75 md:col-span-4 md:pb-3"
          >
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
