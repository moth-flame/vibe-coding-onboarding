#!/usr/bin/env node
/**
 * setup-mothy-token.mjs — connect Mothy MCP to Cursor + Claude Code.
 *
 * The walkthrough Claude runs this from inside Cursor when a Track A/D
 * onboardee needs Mothy access in their editor. The script:
 *
 *   1. Generates a client state nonce (kept in memory only).
 *   2. Opens the user's default browser to
 *      mothy-mcp.vercel.app/auth/vibe/start?mode=cursor&state_client=<nonce>.
 *   3. User signs in with their @mothandflamevr.com Google account.
 *   4. After OAuth, the mothy-mcp callback stores the minted token at
 *      `rendezvous:<nonce>` (5-min TTL, one-shot).
 *   5. This script polls /auth/vibe/rendezvous?state=<nonce> until it
 *      receives the token (or times out at 5 minutes).
 *   6. Writes the connector URL into ~/.cursor/mcp.json and ~/.claude.json
 *      under mcpServers.mothy — preserves any existing MCP servers; never
 *      logs the raw token.
 *
 * Public, auditable. No secrets — only the public mothy-mcp URL. Node 18+
 * stdlib only (http/https/crypto/fs/path/os/child_process).
 *
 * Usage:
 *   node setup-mothy-token.mjs
 *
 * Exit codes:
 *   0 — success (token written)
 *   1 — timeout (re-run to retry)
 *   2 — unrecoverable error (network, config write, etc.)
 */

import { randomBytes } from 'crypto';
import { spawn } from 'child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { homedir, platform } from 'os';
import { join, dirname } from 'path';

const MOTHY_BASE = process.env.MOTHY_BASE_URL || 'https://mothy-mcp.vercel.app';
const POLL_INTERVAL_MS = 2000;
const TIMEOUT_MS = 5 * 60 * 1000;

function log(msg) { process.stdout.write(msg + '\n'); }
function err(msg) { process.stderr.write(msg + '\n'); }

function openBrowser(url) {
  const cmd = platform() === 'darwin' ? 'open' :
              platform() === 'win32' ? 'start' :
              'xdg-open';
  // On Windows, `start` is a cmd builtin and needs shell.
  const opts = platform() === 'win32' ? { shell: true, detached: true, stdio: 'ignore' } : { detached: true, stdio: 'ignore' };
  try {
    const child = spawn(cmd, [url], opts);
    child.unref();
    return true;
  } catch {
    return false;
  }
}

async function pollRendezvous(state) {
  const url = `${MOTHY_BASE}/auth/vibe/rendezvous?state=${state}`;
  const started = Date.now();
  while (Date.now() - started < TIMEOUT_MS) {
    try {
      const res = await fetch(url, { method: 'GET' });
      if (res.status === 200) {
        const data = await res.json();
        if (data.token) return data;
      }
      // 404 = pending; keep polling.
    } catch {
      // Network blip; keep polling.
    }
    await new Promise(r => setTimeout(r, POLL_INTERVAL_MS));
  }
  return null;
}

function mergeMcpConfig(path, token) {
  let existing = { mcpServers: {} };
  if (existsSync(path)) {
    try {
      existing = JSON.parse(readFileSync(path, 'utf-8'));
    } catch {
      // Corrupt file — back it up before overwriting.
      const backup = `${path}.broken.${Date.now()}`;
      try { writeFileSync(backup, readFileSync(path)); } catch {}
      err(`Existing config at ${path} was unreadable; backed up to ${backup}.`);
      existing = { mcpServers: {} };
    }
  }
  if (!existing.mcpServers || typeof existing.mcpServers !== 'object') {
    existing.mcpServers = {};
  }
  const connectorUrl = `${MOTHY_BASE}/mcp?token=${token}`;
  existing.mcpServers.mothy = {
    type: 'http',
    url: connectorUrl,
  };
  // Ensure dir exists.
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(existing, null, 2));
}

async function main() {
  log('Connecting Mothy for Cursor and Claude Code…');

  const stateClient = randomBytes(16).toString('hex');
  const startUrl = `${MOTHY_BASE}/auth/vibe/start?mode=cursor&state_client=${stateClient}`;

  const opened = openBrowser(startUrl);
  if (opened) {
    log('Opened your browser. Sign in with your @mothandflamevr.com Google account.');
  } else {
    log('Could not open your browser automatically. Please open this URL:');
    log(`  ${startUrl}`);
  }

  log('Waiting for sign-in (up to 5 minutes)…');
  const result = await pollRendezvous(stateClient);
  if (!result) {
    err('VIBE_AUTH_TIMEOUT: sign-in did not complete in 5 minutes. Re-run this script to retry.');
    process.exit(1);
  }

  try {
    const cursorPath = join(homedir(), '.cursor', 'mcp.json');
    const claudePath = join(homedir(), '.claude.json');
    mergeMcpConfig(cursorPath, result.token);
    mergeMcpConfig(claudePath, result.token);
    log(`Mothy connected as ${result.email}.`);
    log('Mothy is now available to Cursor and Claude Code.');
    log('You may need to restart Cursor (or reload its MCP server) once for the new connector to register.');
    process.exit(0);
  } catch (e) {
    err(`Config write failed: ${e.message}`);
    process.exit(2);
  }
}

main().catch(e => {
  err(`Unexpected error: ${e.message}`);
  process.exit(2);
});
