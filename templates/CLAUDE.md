# CLAUDE.md — project context and working agreement

This file is auto-loaded by Claude Code when this repo is opened. It tells you
how this project works and the rules you must follow.

## What this project is

[One or two sentences: what the app does and who it's for.]

## Tech stack

- Framework: Next.js (App Router) + TypeScript + React
- Styling: Tailwind CSS
- Database / Auth: Supabase (PostgreSQL)
- Deployment: Vercel (auto-deploys on push)

## Branches and deployment

- `main` — PRODUCTION. The real, live site. Treat as fragile.
- `development` (or `dev`) — staging. Safe to break. Default working branch.

If a `development`/`dev` branch exists, ALL normal work goes there.

## Working agreement (follow these every session)

1. **Never push to `main` / production without explicit permission.** Before
   any push to production, STOP and ask the user in plain English: "This will
   update the live production site — do you want me to proceed?" Only continue
   on a clear "yes."
2. **Default to committing locally.** After completing a working change,
   commit it locally with a clear message. Do not push to a remote unless
   asked, or unless pushing to the default `development` branch per rule 3.
3. **When told to "push", push to `development`/`dev` by default** — never to
   `main` — whenever a separate non-production branch exists. Only push to
   `main` when the user explicitly says "push to main" or "push to production."
4. **Always start the local dev server automatically** after making changes,
   and give the user the `http://localhost:...` link so they can see the
   result immediately. The user is non-technical and works visually.
5. **Run database migrations automatically when shipping new code.** If a
   change requires a Supabase schema change, create the migration file in
   `supabase/migrations/`, apply it to the linked Supabase project, and
   confirm it succeeded — as part of the same change, not a separate ask.
6. **Pull before starting feature work.** Run a fetch + fast-forward pull on
   the working branch before writing new code, so you build on the latest.
7. **Keep secrets safe.** Secrets live in `.env.local` (which stays in
   `.gitignore` — never remove it) and in Vercel's environment variables.
   Never commit a key, token, or secret to git. Never print full secret
   values in chat.
8. **Work in small, reviewable steps.** Make one coherent change, show the
   user the result, then continue. Explain what you did in plain English.
9. **Sync before pushing.** Pull/rebase before any push so history stays
   linear. Never use `--force` on a shared branch.
10. **Keep this file current.** If the project's stack, branch setup, or
    rules change, update CLAUDE.md in the same commit.

## Environment variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
(Stored in `.env.local` locally and in Vercel project settings. Never in git.)

## Commands

```bash
npm run dev     # start the local dev server
npm run build   # production build (use to catch errors before pushing)
npm run lint    # check code style
```

## Commit style

Clear, plain-English commit messages describing what changed and why.
Sign commits with:
Co-Authored-By: Claude <noreply@anthropic.com>
