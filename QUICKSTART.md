# Start Here — Vibe Coding at Moth+Flame

Welcome! This gets you set up to build apps with AI. You do **not** need to
know how to code. There are just 4 short steps below — then an interactive
guide takes over and does the rest *with* you, including creating your other
accounts.

Total time: about 5 minutes of your effort, then ~45 minutes of mostly
watching things install and following along.

---

## Step 1 — Create a Claude account

This is the only account you need before starting — it powers everything else.

1. Go to **claude.ai** and sign up with your **`@mothandflamevr.com`** email.
2. Subscribe to a paid plan with your **Divvy card** (the **Pro** plan is fine
   to start; pick **Max** if you expect to build a lot). The subscription is
   what powers your AI coding assistant — no separate purchase needed.

(You'll create GitHub, Vercel, and Supabase accounts later — the guide walks
you through those, so don't worry about them now.)

## Step 2 — Install Cursor

Go to **cursor.com**, download Cursor for Mac, and drag it into Applications.
Open it. The free account is all you need — skip any paid upgrade prompts.

Inside Cursor, open a terminal: menu **Terminal → New Terminal** (or press
**Ctrl + `** — the backtick key, top-left of the keyboard). A panel opens at
the bottom. That's the terminal.

## Step 3 — Install Claude Code

Click into the terminal panel, paste this exact line, and press Enter:

```
curl -fsSL https://claude.ai/install.sh | bash
```

When it finishes, close that terminal and open a fresh one
(**Terminal → New Terminal**). Then type:

```
claude
```

The first time, it opens your browser to log in — click "Authorize". You're
now chatting with Claude.

## Step 4 — Start the guided walkthrough

Copy the prompt below, paste it into Claude Code, and press Enter:

```
Please clone the public repo
https://github.com/moth-flame/vibe-coding-onboarding into a folder on my
computer. Then open the SKILL.md file inside it and follow it step by step —
it is an interactive walkthrough that sets me up for app development. Also
copy the cloned folder into ~/.claude/skills/vibe-coding-onboarding so I can
re-run it later by typing /vibe-coding-onboarding. Start the walkthrough now.
```

That's it. From here, Claude walks you through everything — creating your
GitHub, Vercel, and Supabase accounts, installing the remaining tools,
connecting it all together, and building your first real app that ends up on
a live website.

If you ever want to run the walkthrough again later, just type
`/vibe-coding-onboarding` in Claude Code.

---

**Stuck on accounts or access?** → message **Chris LoBello**.
**Stuck on anything else?** → just ask Claude, in plain English.
