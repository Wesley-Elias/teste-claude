import type { CSSProperties, ElementType, ReactNode } from "react";

import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Atraso em milissegundos, útil para escalonar elementos vizinhos */
  delay?: number;
  id?: string;
}

/**
 * Seção com reveal animado: fade + leve translateY ao entrar na viewport.
 * Respeita prefers-reduced-motion via CSS global.
 */
export function Reveal({ children, as: Tag = "div", className, delay = 0, id }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };

  return (
    <Tag
      ref={ref}
      id={id}
      style={style}
      className={cn(
        "transition-[opacity,transform] duration-1200 ease-out will-change-transform",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
