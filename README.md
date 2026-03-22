# gStack-Antigravity v1.0.0

**The Antigravity Port of gStack** — Bringing Gary Tan's Senior Engineer Brain to the Gemini/Antigravity IDE.

gStack-Antigravity is a high-performance, persona-driven automation layer designed for the Antigravity environment. It ports 25 specialized engineering personas and execution workflows from the original gStack project, optimized for maximum speed and literal logic parity.

## 🚀 The 'Turbo' Quick Start

Antigravity workflows are pre-configured with `// turbo-all` for minimal latency. Run these directly from your command palette:

### 1. `/gstack` (The Driver)
Native browser automation and visual testing. 
> **Prerequisite:** Run `./setup` in the `gstack-source/browse` directory to enable visual capabilities and headless Chrome.

### 2. `/office-hours` (Strategy & Planning)
YC-style brainstorming and diagnostic loops. Use this to challenge premises, generate 10x ideas, and build deep design partner context.

### 3. `/qa` (The Fix Loop)
An autonomous, systematic fix loop. Navigate the site, document issues, apply minimal fixes, and re-test with visual snapshots.

### 4. `/ship` (Release Engine)
Automated PR and Merge management with Atomic Merge Guards. Handles Pre-flight checks, Dashboard reporting, and test failure triage.

---

## 🧠 Core Personas
The project includes 25 sanitized personas in `/.antigravity/rules/`, each mapping to an execution workflow in `/.agents/workflows/`:
- **Code & Design:** `/review`, `/design-review`, `/codex`.
- **Planning Tiers:** `/plan-ceo-review`, `/plan-eng-review`, `/plan-design-review`.
- **Safety & Ops:** `/careful`, `/guard`, `/canary`, `/land-and-deploy`.
- **Growth & Culture:** `/office-hours`, `/retro`.

## 🛠 Infrastructure Setup
To enable the full visual suite (snapshots, interaction, and E2E testing):
1. Navigate to the `gstack-source/browse` directory.
2. Execute the setup script:
   ```bash
   ./setup
   ```
3. Verify the installation by running `/gstack snapshot google.com`.

---

## 📜 Philosophy
This is a **Mirror Port**. It preserves 100% of the literal checklists, decision frameworks, and identity logic of the original gStack, while scrubbing telemetry and legacy "plumbing" to ensure a clean, portable Antigravity experience.

**Built for Speed. Optimized for Quality.**
