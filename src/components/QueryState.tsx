import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Estado de carregamento discreto: blocos em tom de areia que pulsam suavemente. */
export function LoadingBlock({ className, label = "Carregando" }: { className?: string; label?: string }) {
  return (
    <div role="status" aria-live="polite" className={cn("container py-24 md:py-32", className)}>
      <span className="sr-only">{label}</span>
      <div aria-hidden className="grid gap-8 md:grid-cols-12">
        <div className="aspect-[4/3] animate-pulse bg-sand/50 md:col-span-7" />
        <div className="aspect-[4/5] animate-pulse bg-sand/40 md:col-span-4 md:col-start-9 md:mt-24" />
      </div>
    </div>
  );
}

/** Mensagem de erro com opção de tentar de novo. */
export function ErrorBlock({
  onRetry,
  children = "Não foi possível carregar este conteúdo.",
  className,
}: {
  onRetry?: () => void;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div role="alert" className={cn("container py-24 md:py-32", className)}>
      <p className="label text-destructive">Erro de conexão</p>
      <p className="mt-4 max-w-md font-serif text-2xl font-light leading-snug md:text-3xl">{children}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="link-underline mt-8 font-sans text-[0.72rem] uppercase tracking-label"
        >
          Tentar novamente
        </button>
      )}
    </div>
  );
}
