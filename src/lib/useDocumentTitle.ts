import { useEffect } from "react";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ARCH STUDIO` : "ARCH STUDIO · Arquitetura";
  }, [title]);
}
