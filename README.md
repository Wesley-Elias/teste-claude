# ARCH STUDIO

Site institucional do estúdio de arquitetura ARCH STUDIO.
React, Vite, TypeScript, Tailwind CSS, shadcn/ui, React Router, react-hook-form, zod e Supabase.

## Como rodar

```bash
npm install
cp .env.example .env   # credenciais públicas do Supabase
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run build     # build de produção em /dist
npm run preview   # pré-visualiza o build
```

## Supabase

O conteúdo (projetos, posts, serviços, equipe, prêmios e clientes) vem do Supabase, e o
formulário de contato grava em `contact_messages`. Não há login: visitantes só podem **ler**
o conteúdo publicado e **enviar** mensagens (não podem ler as mensagens de ninguém).

| O quê | Onde |
| --- | --- |
| Variáveis `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | `.env` (modelo em `.env.example`) |
| Cliente do navegador (`@supabase/ssr`) | `src/lib/supabase.ts` |
| Consultas e envio do formulário | `src/lib/api.ts` e `src/lib/queries.ts` |
| Esquema, RLS e permissões | `supabase/migrations/` |
| Dados iniciais | `supabase/seed.sql` (gerado de `src/data` com `npm run db:seed-sql`) |

Para editar o conteúdo, use o Table Editor do painel do Supabase. Projetos e posts com
`published = false` ficam ocultos. As mensagens do formulário ficam na tabela
`contact_messages` (coluna `status` para acompanhar o atendimento).

Sem as variáveis de ambiente, o site continua funcionando com os dados locais de `src/data`
e o formulário apenas simula o envio.

## Publicar na Vercel

1. Em [vercel.com/new](https://vercel.com/new), importe o repositório do GitHub.
2. A Vercel detecta o Vite sozinha. As configurações ficam em `vercel.json`
   (build `npm run build`, saída `dist`), então não é preciso mudar nada na tela de importação.
3. Em Environment Variables, adicione `NEXT_PUBLIC_SUPABASE_URL` e
   `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` com os valores do `.env.example`.
4. Clique em Deploy. A cada push no branch `main` o site é publicado de novo.

O `vercel.json` redireciona todas as rotas para `index.html`, para que links diretos como
`/projetos/casa-do-vale` funcionem. Em outras hospedagens, configure o mesmo fallback
(o arquivo `public/_redirects` já faz isso na Netlify) ou gere o build com
`VITE_HASH_ROUTER=true npm run build` para usar rotas com `#`.

## Onde trocar conteúdo

| O quê | Arquivo |
| --- | --- |
| Projetos, posts, serviços, equipe, prêmios e clientes | Painel do Supabase (Table Editor) |
| Imagens das páginas fixas (hero, sobre, contato) | `src/data/images.ts` |
| Dados locais usados sem Supabase e para gerar o seed | `src/data/*.ts` |
| Valores e marcos da página Sobre | `src/data/team.ts` |
| Contato, endereço, redes e menu | `src/data/site.ts` |
| Paleta e fontes | `tailwind.config.ts` e `src/index.css` |

Para usar fotos próprias, coloque os arquivos em `public/images/` e troque o ID em
`src/data/images.ts` por `"/images/nome-do-arquivo.jpg"`.

## Formulário de contato

A validação fica em `src/lib/contact-schema.ts` (zod) e é repetida no banco com `check`
constraints. O envio está em `sendContactMessage`, em `src/lib/api.ts`.

## Estrutura

```
src/
  pages/            Home, Sobre, Projetos, Detalhe, Serviços, Blog, Post, Contato, 404
  components/       Header, Footer, Reveal, ProjectCard, SmartImage, PageIntro...
  components/ui/    componentes shadcn/ui (button, input, textarea, label, sonner)
  lib/              tipos, utilitários, hooks e schema do formulário
  data/             dados mockados e URLs das imagens
```
