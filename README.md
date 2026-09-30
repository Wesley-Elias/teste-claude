# ARCH STUDIO

Site institucional do estúdio de arquitetura ARCH STUDIO.
React, Vite, TypeScript, Tailwind CSS, shadcn/ui, React Router, react-hook-form e zod.

## Como rodar

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run build     # build de produção em /dist
npm run preview   # pré-visualiza o build
```

## Publicar na Vercel

1. Em [vercel.com/new](https://vercel.com/new), importe o repositório do GitHub.
2. A Vercel detecta o Vite sozinha. As configurações ficam em `vercel.json`
   (build `npm run build`, saída `dist`), então não é preciso mudar nada na tela de importação.
3. Clique em Deploy. A cada push no branch `main` o site é publicado de novo.

O `vercel.json` redireciona todas as rotas para `index.html`, para que links diretos como
`/projetos/casa-do-vale` funcionem. Em outras hospedagens, configure o mesmo fallback
(o arquivo `public/_redirects` já faz isso na Netlify) ou gere o build com
`VITE_HASH_ROUTER=true npm run build` para usar rotas com `#`.

## Onde trocar conteúdo

| O quê | Arquivo |
| --- | --- |
| Imagens (todas) | `src/data/images.ts` (IDs do Unsplash ou caminhos em `/public`) |
| Projetos | `src/data/projects.ts` |
| Posts do blog | `src/data/posts.ts` |
| Serviços | `src/data/services.ts` |
| Prêmios, clientes e publicações | `src/data/awards.ts` |
| Equipe, valores e marcos | `src/data/team.ts` |
| Contato, endereço, redes e menu | `src/data/site.ts` |
| Paleta e fontes | `tailwind.config.ts` e `src/index.css` |

Para usar fotos próprias, coloque os arquivos em `public/images/` e troque o ID em
`src/data/images.ts` por `"/images/nome-do-arquivo.jpg"`.

## Formulário de contato

O envio é simulado em `src/pages/Contact.tsx` (função `sendContact`): registra os dados no
console e mostra um toast de sucesso. O comentário acima da função mostra onde plugar uma API
real. As regras de validação ficam em `src/lib/contact-schema.ts`.

## Estrutura

```
src/
  pages/            Home, Sobre, Projetos, Detalhe, Serviços, Blog, Post, Contato, 404
  components/       Header, Footer, Reveal, ProjectCard, SmartImage, PageIntro...
  components/ui/    componentes shadcn/ui (button, input, textarea, label, sonner)
  lib/              tipos, utilitários, hooks e schema do formulário
  data/             dados mockados e URLs das imagens
```
