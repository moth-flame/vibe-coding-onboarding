# Standing up the onboarding Claude Team Project (admin)

One-time setup, done by an admin (Rich). After this, onboarding a person =
invite them to the workspace and send them the project link.

## 1. Create the Team workspace

- Buy / open a **Claude Team** plan at claude.ai (Settings → Workspace).
- Team is required because **personal Pro accounts cannot share a Project.**
  Everyone who onboards through the shared project must be a member of this
  workspace. (Personal Pro is still fine for people who only code in Cursor and
  never use the shared project — but the front-door project lives in Team.)

## 2. Create the project

- New Project → name it **"Onboarding — Start Here"** (or similar).
- Paste the instruction block from `PROJECT_INSTRUCTIONS.md` into **Custom
  instructions**.

## 3. Attach project knowledge

Attach **only** the bootstrap files — the ones needed before Mothy is
connected and tools exist:

- `../QUICKSTART.md` — the pre-connection sequence (browser prep, Claude
  Desktop, Pro, connect Mothy).
- `knowledge/repo-access.md` — the contributor-repo guardrail, so it is
  authoritative even before any tool call.
- `knowledge/workspace-files.md` — the "edit Google files in place, never
  export-and-replace" rule + which Mothy action does what.

**Do NOT attach `SKILL.md`.** The full walkthrough is fetched live via
`mothy({action: "vibe_get_walkthrough"})` once Mothy connects. Attaching it as
knowledge guarantees it drifts from the GitHub source.

## 4. Invite people

- Invite the new team member to the Team workspace, then share the project.
- They open the project and say something like *"I'm new, help me get set
  up"* — the custom instructions take over from there.

## What this project does NOT replace

- **The Mothy connector** is still per-user — each person mints their own token
  at `/connect`. The project seeds instructions + knowledge, never the token.
- **Per-repo `CLAUDE.md`** in opshub / commandiq is still where the
  Supabase/Vercel wiring lives. Claude Code reads those automatically inside
  Cursor; the shared project does not follow them into the editor, and that is
  fine — it is the front door, not the coding context.

## Keeping it current

- The walkthrough body lives in `SKILL.md` and is served live — edit it there.
- The only things to maintain in the project are `PROJECT_INSTRUCTIONS.md` and
  the two thin knowledge files. Review when the connect flow or the sanctioned
  repo list changes.
