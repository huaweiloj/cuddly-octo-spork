-- Run this in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.survey_responses (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  locale text not null check (locale in ('en','zh')),
  answers jsonb not null,
  constraint answers_is_object check (jsonb_typeof(answers) = 'object')
);

create index if not exists survey_responses_created_at_idx
  on public.survey_responses (created_at desc);

alter table public.survey_responses enable row level security;

-- Intentionally create no anon/authenticated SELECT or INSERT policies.
-- Public inserts and admin reads are performed by server routes using the
-- server-only service role key after validation/authentication. Never expose it.
revoke all on public.survey_responses from anon, authenticated;
grant all on public.survey_responses to service_role;
