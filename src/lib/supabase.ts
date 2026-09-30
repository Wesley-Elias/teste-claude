import { createBrowserClient } from "@supabase/ssr";

import type { Database } from "./database.types";

// As variáveis usam o prefixo NEXT_PUBLIC_ (liberado no vite.config.ts via envPrefix).
const url = import.meta.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
const key = import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string | undefined;

/**
 * Cliente público do Supabase para o navegador. Usa apenas a chave publishable;
 * o que cada visitante pode ler ou gravar é definido pelas políticas de RLS do banco.
 * Se as variáveis de ambiente não estiverem definidas, o site usa os dados locais de src/data.
 */
export const supabase = url && key ? createBrowserClient<Database>(url, key) : null;

export const isSupabaseConfigured = supabase !== null;
