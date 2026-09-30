-- Esquema do site ARCH STUDIO
-- Conteúdo público (somente leitura para visitantes) e mensagens do formulário de contato
-- (visitantes podem apenas inserir; ninguém lê pela API pública).

-- ---------------------------------------------------------------------------
-- Projetos
-- ---------------------------------------------------------------------------
create table public.projects (
  id bigint generated always as identity primary key,
  slug text not null unique,
  name text not null,
  category text not null check (category in ('Residencial', 'Comercial', 'Cultural', 'Interiores')),
  year integer not null,
  location text not null,
  area integer not null check (area > 0),
  client text not null,
  summary text not null,
  description text[] not null default '{}',
  -- { src, alt, orientation, caption? }
  cover jsonb not null,
  -- [{ src, alt, orientation, caption? }]
  gallery jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  sort_order integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index projects_published_sort_idx on public.projects (sort_order) where published;

-- ---------------------------------------------------------------------------
-- Blog
-- ---------------------------------------------------------------------------
create table public.posts (
  id bigint generated always as identity primary key,
  slug text not null unique,
  title text not null,
  excerpt text not null,
  category text not null,
  published_on date not null,
  reading_time integer not null default 5 check (reading_time > 0),
  author text not null,
  cover jsonb not null,
  -- [{ heading?, paragraphs: string[], quote? }]
  body jsonb not null default '[]'::jsonb,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index posts_published_date_idx on public.posts (published_on desc) where published;

-- ---------------------------------------------------------------------------
-- Serviços, equipe, prêmios e clientes
-- ---------------------------------------------------------------------------
create table public.services (
  id bigint generated always as identity primary key,
  slug text not null unique,
  title text not null,
  lead text not null,
  description text not null,
  deliverables text[] not null default '{}',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.team_members (
  id bigint generated always as identity primary key,
  name text not null,
  role text not null,
  photo_url text not null,
  bio text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.awards (
  id bigint generated always as identity primary key,
  year integer not null,
  title text not null,
  project text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.clients (
  id bigint generated always as identity primary key,
  name text not null,
  kind text not null default 'client' check (kind in ('client', 'publication')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Mensagens do formulário de contato
-- ---------------------------------------------------------------------------
create table public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null check (char_length(btrim(name)) between 2 and 80),
  email text not null check (char_length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  subject text not null check (char_length(btrim(subject)) between 3 and 120),
  message text not null check (char_length(btrim(message)) between 20 and 2000),
  status text not null default 'new' check (status in ('new', 'read', 'answered', 'archived')),
  created_at timestamptz not null default now()
);

create index contact_messages_created_at_idx on public.contact_messages (created_at desc);

-- ---------------------------------------------------------------------------
-- updated_at automático
-- ---------------------------------------------------------------------------
create function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger projects_set_updated_at before update on public.projects
  for each row execute function public.set_updated_at();
create trigger posts_set_updated_at before update on public.posts
  for each row execute function public.set_updated_at();

revoke execute on function public.set_updated_at() from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- Acesso pela Data API + RLS
-- ---------------------------------------------------------------------------
alter table public.projects enable row level security;
alter table public.posts enable row level security;
alter table public.services enable row level security;
alter table public.team_members enable row level security;
alter table public.awards enable row level security;
alter table public.clients enable row level security;
alter table public.contact_messages enable row level security;

-- Garante que os visitantes só tenham o que as políticas abaixo permitem
revoke all on public.projects, public.posts, public.services, public.team_members,
  public.awards, public.clients, public.contact_messages from anon, authenticated;

-- Conteúdo: leitura pública
grant select on public.projects, public.posts, public.services, public.team_members,
  public.awards, public.clients to anon, authenticated;

create policy "Projetos publicados são públicos" on public.projects
  for select to anon, authenticated using (published);
create policy "Posts publicados são públicos" on public.posts
  for select to anon, authenticated using (published);
create policy "Serviços são públicos" on public.services
  for select to anon, authenticated using (true);
create policy "Equipe é pública" on public.team_members
  for select to anon, authenticated using (true);
create policy "Prêmios são públicos" on public.awards
  for select to anon, authenticated using (true);
create policy "Clientes são públicos" on public.clients
  for select to anon, authenticated using (true);

-- Formulário: qualquer visitante pode enviar, ninguém lê pela API pública
grant insert (name, email, subject, message) on public.contact_messages to anon, authenticated;

create policy "Visitantes podem enviar mensagens" on public.contact_messages
  for insert to anon, authenticated with check (status = 'new');
