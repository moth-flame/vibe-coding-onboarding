# Moth+Flame repo access — who can touch what

This is the contributor-access policy. The onboarding guide states it; it does
not work around it.

## Sanctioned contributor repos (self-serve, via Chris LoBello)

New contributors are expected to work in:

- **`moth-flame/opshub`** — internal CRM-adjacent ops hub (Next.js + Vercel,
  Airtable/Vercel Blob, must-win pipeline). Branch `dev` auto-deploys.
- **`moth-flame/commandiq`** — leadership scenarios + scoring / LXP (Next.js +
  Expo, Supabase, Vercel).

Access = org **Member**. **Reach out to Chris LoBello and Rich for access or
any questions** — either can grant or unblock you. Give them your
`@mothandflamevr.com` email.

Each repo's own `CLAUDE.md` (loads automatically inside Claude Code) carries
the first-time setup: how to link the local clone to that repo's **Supabase
project** and **Vercel project**, which env vars to pull, and how to run it
locally. Once you have access and have cloned, that file is the source of
truth — not this onboarding project.

## Everything else: admin (Rich) approval first

- **`moth-flame/Mothy`** and **all other repos** in the org are **not**
  self-serve. Do not clone, fork, or request access without **Rich's**
  approval. If you think you need one, message Rich and explain why.
- This is deliberate: Mothy is the team agent / gateway and carries
  credentials and operational logic. Access is granted case by case.

## Working rules once you are in a repo

- Work on a **branch + Pull Request**. Never push to `main` of a shared repo
  without explicit permission.
- Read the repo's `CLAUDE.md` before your first change so you follow its
  conventions (branching, deploy target, env, test rules).
