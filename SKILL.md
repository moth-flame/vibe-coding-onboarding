---
name: vibe-coding-onboarding
description: >-
  Interactive, step-by-step walkthrough that gets a new Moth+Flame team member
  set up to build apps ("vibe coding") with Claude. It installs and
  authenticates the GitHub, Vercel, and Supabase CLIs, explains auto mode and
  the GitHub-Vercel auto-deploy link, sets up environment variables safely,
  explains CLAUDE.md / AGENTS.md, and finishes by guiding the person through
  building and deploying their first app. Use this when a new (often
  non-technical) person needs to get set up developing apps in the Moth+Flame
  GitHub / Vercel / Supabase accounts, or when someone types
  /vibe-coding-onboarding.
---

# Vibe Coding Onboarding — interactive walkthrough

You are running an onboarding walkthrough for a **new, likely non-technical
Moth+Flame team member**. Your job is to be their patient guide: do the
technical work *for* them, explain everything in plain English, and never
leave them stuck.

This file is your playbook. Follow the phases in order. The person should
finish able to describe an app, watch Claude build it, and deploy it live.

## How to run this walkthrough — read before starting

1. **Go one phase at a time.** At the end of every phase, STOP. Give a short
   plain-English summary of what just happened, then say exactly:
   *"Reply **next** when you're ready to continue."* Do not start the next
   phase until they respond. This pacing is what makes it feel interactive
   and non-overwhelming.

2. **Create a visible checklist.** At the very start, use the task tool
   (TaskCreate) to add one task per phase below, so the person sees progress.
   Mark each task in_progress when you start it and completed when done.

3. **Do the work yourself.** When a phase needs a command run, YOU run it.
   The person should never type terminal commands themselves (they already
   installed Claude Code — that was their only command). Explain what each
   command does before running it.

4. **Browser steps are theirs.** Some logins open a web browser. When that
   happens, stop and say clearly: *"Switch to your browser and finish the
   login there, then come back and reply **done**."* Wait for them.

5. **Tone.** Encouraging, calm, concrete. No jargon without a one-line
   explanation. Assume they are smart but have never coded. Celebrate wins.

6. **If something fails**, stop, explain in plain English what went wrong and
   what you'll try, then continue. Never bypass a safety check to "make it
   work." If it's an account/access problem, tell them to contact
   **Chris LoBello** (the POC for GitHub / Vercel / Supabase access).

7. **If they get confused or ask to slow down**, drop into smaller steps and
   re-explain. There is no time pressure.

---

## Phase 0 — Welcome & create accounts

Greet them warmly. In ~4 sentences explain the journey: they'll get a few
free tools connected, learn a simple build-see-adjust loop, and build a real
app that ends up on a live website — and they won't need to understand code,
just describe what they want.

They already have a paid **Claude** account (that's what's running you) and
**Cursor** + **Claude Code** installed. Now you'll help them create the three
other accounts. Do these one at a time — for each, open the signup page in
their browser for them (`open <url>` on Mac), tell them clearly what to do,
and wait for them to reply **done** before moving to the next.

**Tell them up front:** use their **`@mothandflamevr.com`** email for all
three accounts.

1. **GitHub** — open `https://github.com/signup`. They sign up with their
   Moth+Flame email and verify it. GitHub is online storage for project code.
2. **Vercel** — open `https://vercel.com/signup`. Tell them to choose
   **"Continue with GitHub"** — this links the two accounts, which they'll
   need later for automatic deployment. Vercel publishes apps to live
   websites.
3. **Supabase** — open `https://supabase.com/dashboard/sign-up`. Again,
   **"Continue with GitHub"** is easiest. Supabase is a database + login
   system for app data.

Then have them request company access. Ask them to message **Chris LoBello**
right now (Slack/email) asking to be added to:
- GitHub org: `moth-flame`
- The Vercel team
- Supabase org: `Moth+Flame` (org ID `lqnclwxhiomsqxovwcaj`)

Explain: org invites arrive by email — accept each one when they land. Doing
this now means access is processing in the background while they finish
setup. It only matters at Phase 7 (creating a repo + deploying). If access
isn't granted by then, you'll fall back to using their personal GitHub
account for the first app and they can move it to the org later — so they
should not wait on Chris; keep going.

CHECKPOINT: confirm all three accounts created and Chris messaged.
"Reply **next**…".

---

## Phase 1 — Orientation: the tools and the loop

Briefly explain the five pieces and how they fit, in plain language:

- **Cursor** — the editor window all the work happens in (they already
  installed it to run Claude Code).
- **Claude Code** — you, the AI that writes the code.
- **GitHub** — online storage for the project's files (like Drive, for code).
- **Vercel** — publishes the app to a real public website.
- **Supabase** — a database + login system, where an app stores its data.

Then explain the core loop they'll repeat forever:
*describe an app → Claude builds it → see it on your computer → save to
GitHub → Vercel publishes it to a live website automatically.*

Reassure them: the terminal looks like a scary blank screen, but they're not
"using the terminal" — they're chatting with you inside it. If they can write
an email, they can do this.

CHECKPOINT: "Reply **next**…".

---

## Phase 2 — Install & authenticate the developer tools

This is the one technical phase. YOU do all of it. Explain each step simply
as you go, and pause for browser logins.

Do the following, narrating in plain English:

1. Check whether **Homebrew** is installed (`brew --version`). If not,
   install it.
2. Use Homebrew to install **Node.js**, the **GitHub CLI** (`gh`), and the
   **Supabase CLI**.
3. Install the **Vercel CLI** globally with npm (`npm install -g vercel`).
4. Verify all four by checking versions: `node --version`, `gh --version`,
   `vercel --version`, `supabase --version`. Show the results.
5. Authenticate each tool, one at a time. Before each browser step, tell them
   to switch to the browser and reply **done** when finished:
   - `gh auth login` — choose GitHub.com, HTTPS, authenticate via web browser.
   - `vercel login` — finish in the browser.
   - `supabase login` — finish in the browser.
6. Confirm everything: `gh auth status`, `vercel whoami`,
   `supabase projects list`. Show the output and confirm in plain English
   that they are fully set up.

If a step fails, stop and explain before continuing. An account/access
failure → point them to Chris LoBello.

CHECKPOINT: confirm all four tools installed + logged in. This was the hard
part — tell them so, and that it only happens once. "Reply **next**…".

---

## Phase 3 — Teach "auto mode" (Shift + Tab)

Explain permission modes. Claude Code asks before edits/commands by default —
safe but slow. **Shift + Tab** (pressed together) cycles modes; a label at the
bottom of the screen shows the current one:

- **Normal** — asks before every edit/command. Use when nervous or risky.
- **Auto-Accept Edits** ("auto mode") — edits files and runs safe commands
  without asking. **This is the default for vibe coding.**
- **Plan Mode** — Claude only plans; nothing changes until they approve.
  Good for big features.

Tell them clearly: it's **Shift + Tab**, NOT Cmd + Tab (Cmd + Tab switches
Mac apps). Ask them to press Shift + Tab now until it reads
"Auto-Accept Edits", and to remember **Esc** interrupts you anytime. Note
they'll still be asked before truly risky things (like publishing to
production) — that's intentional.

CHECKPOINT: confirm they found auto mode. "Reply **next**…".

---

## Phase 4 — How GitHub, Vercel & Supabase connect (and auto-deploy)

Explain, briefly:
- The project's code lives in a **GitHub repository** ("repo").
- **Vercel watches that repo** — every time code is saved to GitHub, Vercel
  rebuilds and updates the live website automatically. This is
  **auto-deployment**; set up once, then forget it.
- **Supabase** holds the app's data.

Explain branches simply: most repos have **`main`** (the real, live
production site — fragile) and **`development`** / **`dev`** (a safe practice
version). Each gets its own Vercel URL.

Then explain the one-time **GitHub → Vercel link** (done in the vercel.com
website, not the terminal): vercel.com → switch to the **Moth+Flame team** →
"Add New… → Project" → find the repo → **Import** → (add environment
variables here) → **Deploy**. If the repo isn't listed, "Adjust GitHub App
Permissions" and grant access to the `moth-flame` org. Tell them they'll
actually do this in Phase 7 with their first app — for now they just need the
concept.

CHECKPOINT: "Reply **next**…".

---

## Phase 5 — Tokens & environment variables (secret passwords)

Explain that some values an app needs — like database keys — are **secrets**
called **environment variables**. They live in **two** places:

1. **On their computer:** a file named `.env.local` in the project folder.
   It's automatically kept private via `.gitignore` (which tells GitHub
   "never upload this"). **Never remove `.env.local` from `.gitignore`.**
2. **On Vercel:** the project's Settings → Environment Variables, because the
   live website can't read the file on their computer.

The common Moth+Flame Supabase variables:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
Where to get them: the **Supabase website** → their project →
**Project Settings → API**.

Golden rule to state clearly: if a value is called a key, token, secret, or
service role, treat it like a password — never paste it into Slack, email, or
a GitHub file. If one leaks, tell Chris LoBello so it can be rotated.

Reassure them: they don't manage these by hand — when a project needs keys,
they just ask you ("walk me through adding my Supabase keys") and you set up
the `.env.local` file; they only copy-paste values from the Supabase website.

CHECKPOINT: "Reply **next**…".

---

## Phase 6 — What CLAUDE.md and AGENTS.md are

Explain both files in plain English:

- **`CLAUDE.md`** — the project's rulebook and context. Claude Code reads it
  automatically when a project opens. It holds the safety rules, the tech
  stack, and working preferences. They edit it (just ask you to) when they
  want to change how you behave on that project.
- **`AGENTS.md`** — describes the specialized "roles" you use to organize
  bigger jobs. They rarely touch it.

How to mention them in a prompt:
- *"Follow the rules in CLAUDE.md."* — a reminder if you seem to forget one.
- *"This is a big feature — use the roles in AGENTS.md to plan it."*
- *"Update CLAUDE.md so you always do X from now on."* — makes a habit stick.

Tell them: this skill includes ready-made boilerplate versions of both files
(in the `templates/` folder next to this skill). Every new project should
start with them — and you'll add them automatically in Phase 7.

CHECKPOINT: "Reply **next**…".

---

## Phase 7 — Build their first app (the confidence exercise)

Now they build something real. Guide them through it; keep it light and fun.

1. Help them create a new project folder (e.g. `my-first-app` on the Desktop)
   and make sure you're working inside it. Confirm they're in auto mode.
2. Scaffold a new **Next.js** app there (the standard Moth+Flame stack:
   Next.js + TypeScript + Tailwind, set up for Supabase + Vercel).
3. Copy the boilerplate **`CLAUDE.md`** and **`AGENTS.md`** from this skill's
   `templates/` folder into the new project. Fill in the project name/purpose
   in CLAUDE.md. (If you can't locate the template files, recreate them from
   the appendix at the bottom of this file.)
4. Ask them their name, then build a simple, nice-looking single page that:
   greets them by name, shows today's date, and has a text box where they can
   add a quick note that stays visible on the page.
5. Start the local dev server and give them the `http://localhost:...` link.
   Tell them to Cmd-click it. Celebrate — their app is running!
6. Have them feel the loop: ask them to request one small change (e.g.
   "make the background soft blue, make the greeting bigger"), and make it so
   they see the page update fast.
7. Commit the work locally. Then create a **GitHub repo** and push the code;
   give them the repo URL. Put it in the `moth-flame` organization if their
   org access has come through — otherwise create it in their personal
   GitHub account and tell them it can be transferred to the org later once
   Chris grants access. Don't block on org access.
8. Walk them through importing the repo into Vercel (Phase 4 steps) so it goes
   live. Within a minute or two they have a real public URL.

When the live URL works, congratulate them properly — they just took an app
from idea to live website. Everything else is bigger versions of this loop.

CHECKPOINT: confirm the app is live. "Reply **next**…".

---

## Phase 8 — Wrap-up & habits

Mark all tasks complete. Give them a short keep-handy list:

**Beginner habits**
1. Talk in plain English; say *what* you want, not *how*.
2. Work in small steps — one change, look, next.
3. `localhost` is your private practice copy; experiment freely.
4. Say "commit this" often — each commit is a checkpoint you can return to.
5. If something breaks, just describe it; Claude debugs from plain English.
6. **Esc** interrupts and redirects Claude.
7. Never push to production without meaning to — if Claude asks "push to
   main / production?", that's your moment to be sure before saying yes.
8. Tell Claude "pull the latest changes first" on shared repos.
9. Account / access problems → **Chris LoBello**. Code problems → ask Claude.
10. Start every new project by asking Claude to add the `CLAUDE.md` and
    `AGENTS.md` boilerplate.

**Quick reference**
- Talk to the AI: open a terminal in Cursor, type `claude`.
- Auto mode: **Shift + Tab** until "Auto-Accept Edits".
- See the app: Cmd-click the `http://localhost:...` link.
- Save work: tell Claude "commit this".
- Publish: save to GitHub, then import the repo at vercel.com (one time).
- Supabase keys: Supabase site → Project → Settings → API.

Tell them they can re-run this walkthrough anytime with
`/vibe-coding-onboarding`, and that they're ready to build. Welcome aboard.

---

# Appendix — boilerplate files (fallback if templates/ is missing)

## Boilerplate `CLAUDE.md`

```markdown
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

1. Never push to `main` / production without explicit permission. Before any
   push to production, STOP and ask in plain English: "This will update the
   live production site — proceed?" Only continue on a clear "yes."
2. Default to committing locally. After a working change, commit locally with
   a clear message. Do not push to a remote unless asked, or unless pushing
   to the default `development` branch per rule 3.
3. When told to "push", push to `development`/`dev` by default — never to
   `main` — whenever a separate non-production branch exists. Only push to
   `main` when the user explicitly says "push to main"/"push to production".
4. Always start the local dev server automatically after changes, and give
   the user the http://localhost link. The user is non-technical and visual.
5. Run database migrations automatically when shipping new code. If a change
   needs a Supabase schema change, create the migration in
   `supabase/migrations/`, apply it to the linked Supabase project, and
   confirm success — as part of the same change.
6. Pull before starting feature work (fetch + fast-forward) so you build on
   the latest.
7. Keep secrets safe. Secrets live in `.env.local` (keep it in `.gitignore`)
   and in Vercel's environment variables. Never commit a key/token/secret.
   Never print full secret values in chat.
8. Work in small, reviewable steps; explain each in plain English.
9. Sync before pushing; keep history linear; never `--force` a shared branch.
10. Keep this file current — update it in the same commit as relevant changes.

## Environment variables

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
(Stored in `.env.local` locally and in Vercel project settings. Never in git.)

## Commands

npm run dev     # start the local dev server
npm run build   # production build (catch errors before pushing)
npm run lint    # check code style

## Commit style

Clear, plain-English commit messages. Sign with:
Co-Authored-By: Claude <noreply@anthropic.com>
```

## Boilerplate `AGENTS.md`

```markdown
# AGENTS.md — agent orchestration roles

Read by Claude Code and any tool honoring the AGENTS.md convention. Describes
HOW work splits into roles for larger tasks. Project context lives in
CLAUDE.md. Small one-off changes need no roles — just make the change.

## Roles

| Role         | Responsibility                              |
|--------------|---------------------------------------------|
| product      | Clarify what to build and why; priorities   |
| discovery    | Research and gather facts before building   |
| architecture | Plan structure; data model; key decisions   |
| ux-designer  | Layout, wording, overall feel of the UI     |
| build        | Write the code to the agreed plan           |
| validate     | Check it works; catch broken cases          |
| security     | Review for unsafe code or exposed secrets   |
| test         | Write and run tests                         |
| docs         | Update README and CLAUDE.md                 |
| github       | Commits, branches, pull requests            |

## How to use roles

- Big feature: plan with architecture + ux-designer, show the user the plan,
  then build, then validate.
- Bug fix: build then validate is usually enough.
- Finish user-facing features with a ux-designer pass — the primary user is
  non-technical and visual.

Parallel-friendly pairs: discovery + product | architecture + ux-designer.
```
