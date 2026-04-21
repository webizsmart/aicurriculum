# CLAUDE.md (gStack-Antigravity Edition)

This file provides guidance to Antigravity (AI) when working with this AI Curriculum business repository.

## Project Overview
AI Education Business focused on "NotebookLM & AI Second Brain" methodology. Includes a premium landing page, a lead capture server, and curriculum assets.

## Essential Commands
```bash
# Development
bun run leads_server.js      # Start local lead capture server
git push origin main         # Push changes to GitHub (webizsmart/aicurriculum)

# gStack Skills
/office-hours               # Business strategy & Design Doc generation
/cso                        # Security scan & leak prevention
/qa                         # Test the landing page functionality
/graphify                   # Build a knowledge graph (Skill: .antigravity/skills/graphify/SKILL.md)
```

## Security & Ethics (CRITICAL)
- **PII PROTECTION**: NEVER commit `leads.csv` or any file containing customer emails.
- **NO HARDCODED SECRETS**: All API keys must go into `.env` (managed via `process.env`).
- **RELATIVE PATHS**: Always use relative paths (`./`, `../`) to protect local system history.
- **CREDIT**: Acknowledge original sources when reusing templates (e.g., davila7, Garry Tan).

## Code Style
- **HTML/CSS**: Premium aesthetics, glassmorphism, responsive design, Semantic HTML5.
- **JavaScript**: Functional programming, modern ES6+ syntax, asynchronous error handling.
- **Naming**: `kebab-case` for files/folders, `camelCase` for variables/functions.

## Workflow Patterns
1. **Plan first**: Use `/office-hours` or Design Docs before large code changes.
2. **Security second**: Run `/cso` before any `git push`.
3. **QA third**: Verify UI/UX via native browser or browse skill.
