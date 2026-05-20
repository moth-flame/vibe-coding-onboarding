# AGENTS.md — agent orchestration roles

This file is read by Claude Code and any other tool that honors the AGENTS.md
convention. It describes HOW work is split into roles for larger tasks.
Project context and coding rules live in CLAUDE.md.

When asked to plan or build something non-trivial, pick the roles that match
the task. Small one-off changes don't need roles — just make the change.

## Roles

| Role          | Responsibility                                  |
|---------------|-------------------------------------------------|
| product       | Clarify what to build and why; priorities       |
| discovery     | Research and gather facts before building       |
| architecture  | Plan the structure; data model; key decisions   |
| ux-designer   | Layout, wording, and overall feel of the UI     |
| build         | Write the code to the agreed plan               |
| validate      | Check it works; catch broken cases              |
| security      | Review for unsafe code or exposed secrets       |
| test          | Write and run tests                             |
| docs          | Update README and CLAUDE.md                     |
| github        | Commits, branches, pull requests                |

## How to use roles

- For a **big feature**: plan with `architecture` + `ux-designer` first, show
  the user the plan, then `build`, then `validate`.
- For a **bug fix**: `build` then `validate` is usually enough.
- Always finish user-facing features with a `ux-designer` pass so the result
  looks and reads well — the primary user is non-technical and visual.

Parallel-friendly pairs: discovery + product | architecture + ux-designer.
