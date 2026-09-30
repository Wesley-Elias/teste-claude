import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formata número de índice com dois dígitos: 1 -> "01" */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Formata data ISO (AAAA-MM-DD) em português: "12 mar 2026" */
export function formatDate(iso: string) {
  const date = new Date(`${iso}T12:00:00`);
  return date
    .toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })
    .replace(/\./g, "")
    .replace(/ de /g, " ");
}
