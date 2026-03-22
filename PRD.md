# PRD: gStack-Antigravity (The Perfect Mirror)
**Version:** 1.1
**Status:** Master Specification
**Target Platform:** Google Antigravity IDE
**Source Authority:** https://github.com/garrytan/gstack

---

## 1. Objective: The Bit-for-Bit "Garry Tan" Port
To perform an exact 1:1 transport of the **garrytan/gstack** framework. This project rejects "translations" or "summaries." We are building a system that adopts the specialized identities found in the source files, optimized for the Antigravity IDE.

---

## 2. Structural Architecture (The Mirror Paths)

### 2.1 The Reference Source (`gstack-source/`)
* **Primary Target Path:** `gstack-source/.agents/skills/`
* **Discovery Logic:** Every sub-directory in this path containing a `SKILL.md` is a Core Skill (e.g., `gstack-office-hours`, `gstack-document-release`).

### 2.2 The Persona Rules (`.antigravity/rules/`)
* **Purpose**: Acts as the persistent "Internal Monologue" and professional mindset.
* **Naming Convention**: `persona-[skill-name].md` (e.g., `persona-design-review.md`).
* **Mandatory Content**:
    * **Identity**: Bit-for-bit copy of the "You are a..." or "Act as a..." definitions.
    * **Standards**: Full inclusion of all checklists, such as the 80-item Design Audit or AI Slop Detection logic.
    * **Principles**: The "Completeness Principle" (Boil the Lake) and the 1-10 scoring calibration.
    * **Communication**: The 4-part **AskUserQuestion** structure (Re-ground, Simplify, Recommend, Options).

### 2.3 The Execution Workflows (`.agents/workflows/`)
* **Purpose**: Contains the "Execution Manual" and technical tool sequences.
* **Mandatory Content**:
    * **Phases**: The literal sequence of operations (e.g., Phase 1: First Impression, Phase 2: System Extraction).
    * **Tool Mapping**: Direct mapping of original bash/terminal calls to Antigravity's native `terminal` and `browser` tools.
    * **Output**: All reports, scores, and visual audits must be rendered as **Antigravity Artifacts** (Side-panel UI).

### 2.4 Portability & security
* **Zero Absolute Paths**: All internal references between Rules and Workflows must use project-relative paths (e.g., /.antigravity/rules/global-gstack.md).
* **Privacy Scrubbing**: No local system paths (e.g., /Users/kimjin/...) or personal email addresses may be written into the repository.
---

## 3. High-Fidelity Features & Decoupling
* **Literal Protocol:** No paraphrasing. If the original prompt is 100 lines, the workflow is 100 lines.
* **Plumbing Removal:** Do **NOT** port the bash preambles, telemetry scripts, or session "touches." Antigravity handles these natively.
* **The Communication Protocol**: Every interaction requiring user input must use the 4-part **AskUserQuestion** format (Re-ground, Simplify, Recommend, Options) with 1-10 completeness scores.
* **State Transparency**: Every response must begin with a role header: `[ROLE: gStack <Specialist Name>]`.

---

## 4. Operational "Founder Gates"
The Agent is restricted by two mandatory hard stops:
* **GATE 1 (Plan Approval):** After a `/` command, the Agent MUST present the gStack-derived plan and wait for: `"Proceed."`
* **GATE 2 (Visual Verification):** Before any code changes are finalized, the Agent MUST show the result in the **Antigravity Browser** and wait for: `"Approve."`

---

## 5. Definition of Done (DoD)
* [ ] All 21+ original commands (e.g., `/office-hours`, `/design-review`, `/document-release`) are functional.
* [ ] Every workflow successfully loads its corresponding `persona-*.md` rule.
* [ ] The 10-category Design Audit and AI Slop detection logic are operational.
* [ ] All telemetry and gstack-specific update checks have been successfully decoupled.

---

## Changelog
* **2026-03-22 (v1.1)**: Added '2.4 Portability & security' section.
* **2026-03-22 (v1.0)**: Initial PRD creation.