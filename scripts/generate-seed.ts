/**
 * Gera supabase/seed.sql a partir dos dados mockados em src/data.
 * Uso: npm run db:seed-sql
 * Depois aplique o arquivo no SQL Editor do Supabase (ou com `supabase db reset` localmente).
 */
import { writeFileSync } from "node:fs";

import { awards, clients, publications } from "../src/data/awards";
import { posts } from "../src/data/posts";
import { projects } from "../src/data/projects";
import { services } from "../src/data/services";
import { team } from "../src/data/team";

const str = (v: string) => `'${v.replace(/'/g, "''")}'`;
const json = (v: unknown) => `${str(JSON.stringify(v))}::jsonb`;
const arr = (v: string[]) => (v.length ? `array[${v.map(str).join(", ")}]::text[]` : `'{}'::text[]`);

const lines: string[] = [
  "-- Gerado por scripts/generate-seed.ts. Não edite à mão.",
  "begin;",
  "truncate public.projects, public.posts, public.services, public.team_members, public.awards, public.clients restart identity;",
  "",
];

lines.push(
  "insert into public.projects (slug, name, category, year, location, area, client, summary, description, cover, gallery, featured, sort_order) values",
  projects
    .map(
      (p, i) =>
        `  (${[
          str(p.slug),
          str(p.name),
          str(p.category),
          p.year,
          str(p.location),
          p.area,
          str(p.client),
          str(p.summary),
          arr(p.description),
          json(p.cover),
          json(p.gallery),
          p.featured ? "true" : "false",
          i + 1,
        ].join(", ")})`,
    )
    .join(",\n") + ";",
  "",
);

lines.push(
  "insert into public.posts (slug, title, excerpt, category, published_on, reading_time, author, cover, body) values",
  posts
    .map(
      (p) =>
        `  (${[
          str(p.slug),
          str(p.title),
          str(p.excerpt),
          str(p.category),
          str(p.date),
          p.readingTime,
          str(p.author),
          json(p.cover),
          json(p.body),
        ].join(", ")})`,
    )
    .join(",\n") + ";",
  "",
);

lines.push(
  "insert into public.services (slug, title, lead, description, deliverables, sort_order) values",
  services
    .map((s, i) => `  (${[str(s.id), str(s.title), str(s.lead), str(s.description), arr(s.deliverables), i + 1].join(", ")})`)
    .join(",\n") + ";",
  "",
);

lines.push(
  "insert into public.team_members (name, role, photo_url, bio, sort_order) values",
  team.map((m, i) => `  (${[str(m.name), str(m.role), str(m.photo), str(m.bio), i + 1].join(", ")})`).join(",\n") + ";",
  "",
);

lines.push(
  "insert into public.awards (year, title, project, sort_order) values",
  awards.map((a, i) => `  (${[a.year, str(a.title), str(a.project), i + 1].join(", ")})`).join(",\n") + ";",
  "",
);

lines.push(
  "insert into public.clients (name, kind, sort_order) values",
  [
    ...clients.map((c, i) => `  (${str(c)}, 'client', ${i + 1})`),
    ...publications.map((c, i) => `  (${str(c)}, 'publication', ${i + 1})`),
  ].join(",\n") + ";",
  "",
  "commit;",
  "",
);

writeFileSync(new URL("../supabase/seed.sql", import.meta.url), lines.join("\n"));
console.log("supabase/seed.sql gerado.");
