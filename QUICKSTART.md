# Start Here — Vibe Coding at Moth+Flame

Welcome. The fastest way to get set up is to paste **one prompt** into
Claude in your browser. Claude walks you through everything from there —
installing the Claude Desktop app, subscribing to Pro on your Divvy card,
installing Cursor + the Claude Code extension, and then handing you off to
the full guided onboarding that creates your GitHub / Vercel / Supabase
accounts and ships your first real app.

Total effort: about 5 minutes of your active attention, then ~45 minutes
of mostly watching things install and answering simple questions.

---

## Before you paste — 30 seconds of prep

1. **Open an incognito / private browser window with no extensions.**
   (Ad blockers and old cookies break login flows. Incognito sidesteps
   the most common dead ends.)
2. **Sign in to your `@mothandflamevr.com` Google account** in that
   incognito window.
3. Go to **[claude.ai](https://claude.ai/new)** in the same window. You
   don't need to subscribe to anything yet — the free tier is enough to
   run the prompt below. Subscribing to Pro is step 3 of the prompt.

---

## Paste this into the Claude chat

```
Hi Claude. I'm on the Moth+Flame team and I need you to walk me through getting set up for AI-assisted work. I've pasted this into claude.ai in my browser because nothing else is installed yet. Please be patient, use plain English, and do this one step at a time — wait for me to reply "done" between each step. If I get stuck, stop and help me before moving on. Account or access issues → tell me to message Chris LoBello.

Step 1 — Browser prep
Confirm I'm in an incognito / private window with no extensions, signed into my @mothandflamevr.com Google account. If not, walk me through opening one. This prevents the most common signup dead-ends (stale cookies, ad blockers, CAPTCHA loops). Wait for "done."

Step 2 — Install Claude Desktop
Open https://claude.ai/download for me. Walk me through downloading and installing the Claude Desktop app. Ask me whether I'm on Mac or Windows.
  • Mac: drag the app into Applications, open it.
  • Windows: if SmartScreen warns me, tell me to click "More info → Run anyway." If that's blocked, walk me through Settings → For developers → Developer Mode → On, reboot, then install again.
Wait for "done."

Step 3 — Sign in + Pro subscription ($20/month on my Divvy card)
Once Claude Desktop is open, walk me through signing in with my @mothandflamevr.com Google account. Then subscribe to the Pro plan ($20/month — personal Pro, not Team). For payment I'll use my company Divvy card (it's a Visa). If Divvy throws a verification step (Stripe / 3D Secure / one-time code from the Divvy app), walk me through it. Confirm with me that the subscription is active before continuing.
Wait for "done."

Step 4 — Connect Mothy (the Moth+Flame Claude teammate)
Open https://mothy-mcp.vercel.app/connect for me. The page has one button: "Sign in with Google." Walk me through clicking it and picking my @mothandflamevr.com account. The page comes back with a connector URL and a Copy button.
Then walk me through pasting that URL into Claude Desktop:
  (a) Open Claude Desktop — the app, not the browser tab.
  (b) Click Settings (gear icon, top-right).
  (c) Click Connectors in the left sidebar.
  (d) Click Add custom connector.
  (e) Name it Mothy, paste the URL, click Connect.
The /connect page polls Mothy and flips to "✓ Connected" once it sees the first call. When I see that, Mothy is live.
If the page says "Wrong Google account": I'm signed in as a personal Gmail. Click the "sign out and try again" button.
If the page says "You're almost there" (not in registry): Mothy DM'd Rich already. Slack Rich the pre-filled message the page shows, wait for him to add me, then reopen /connect.
Wait for "done."

Step 5 — (Only if I'll build apps) Install Cursor + the Claude Code extension
Open https://cursor.com for me. Walk me through downloading Cursor for my OS and installing it. Tell me clearly to SKIP every prompt asking for a credit card or "Start team trial" — the free tier is fine. Once Cursor opens, walk me through:
  (a) Open the Extensions panel (Cmd+Shift+X on Mac, Ctrl+Shift+X on Windows)
  (b) Search "Claude Code" — install the one published by Anthropic
  (c) Click the Claude icon that appears in the left sidebar and sign in via the browser popup with my Moth+Flame Google account
Wait for "done."

Step 6 — Hand off to the full walkthrough
Ask me one question first: "Do you know yet whether you want to build apps, automate a Google Sheet, generate decks, or capture your expertise as a decision tree?" If I say apps OR I'm not sure → I need Cursor (Step 5 above) and you give me the Cursor handoff prompt below. If I clearly don't need apps (decks, summaries, briefs, Sheets automation) → skip Cursor, tell me I can run the rest of the walkthrough right here in Claude Desktop chat, and start Phase 0 of SKILL.md now.

If Cursor is needed, give me this prompt to paste into Cursor's Claude Code panel:

---PASTE THIS INTO CURSOR'S CLAUDE PANEL---
Please clone https://github.com/moth-flame/vibe-coding-onboarding into a folder on my computer. Then open the SKILL.md file inside it and follow it step by step — it's an interactive walkthrough that sets me up for AI-assisted work at Moth+Flame. Mothy is already connected to Claude Desktop; before any other phase, run `node templates/setup-mothy-token.mjs` to wire Mothy into Cursor too. Also copy the cloned folder into ~/.claude/skills/vibe-coding-onboarding so I can re-run it later by typing /vibe-coding-onboarding. Start the walkthrough now.
---
```

That's it. Claude takes over and walks you through the rest.

---

## If you ever want to re-run the walkthrough

Type `/vibe-coding-onboarding` in the Claude panel in Cursor anytime.

---

**Stuck on accounts or access?** → message **Chris LoBello**.
**Stuck on anything else?** → just ask Claude, in plain English.
