# Portfolio From Scratch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual, English-first professional portfolio for Daniel Martinez that presents web development, data analysis, and AI automation/agentic workflow capabilities.

**Architecture:** Use Next.js 15 App Router with a server page that renders a focused client experience for language switching and contact form interaction. Keep profile content in typed data files, UI primitives in reusable shadcn-style components, Supabase behind a lazy server helper, and tests split between Jest unit checks and Playwright smoke flows.

**Tech Stack:** Next.js 15, React 19, TypeScript strict, Tailwind CSS v4, shadcn/Radix-style components, Zustand, React Hook Form, Zod, Supabase, pnpm, Jest, Playwright.

---

### Task 1: Scaffold And Baseline

**Files:**
- Create/modify: `package.json`, `pnpm-lock.yaml`, `src/app/*`, `src/components/*`, `src/data/*`, `src/lib/*`

- [x] Create a clean Next.js App Router project in `D:\Portafolio`.
- [x] Use pnpm through Corepack.
- [x] Pin Next.js to the latest available Next 15 line (`15.5.18`) and React 19.
- [x] Add Zustand, RHF/Zod, Supabase, Radix/shadcn-style dependencies, Jest, and Playwright.

### Task 2: Professional Content System

**Files:**
- Create: `src/data/portfolio-content.ts`

- [x] Encode English and Spanish content manually.
- [x] Include profile, metrics, career tracks, projects, skills, education, certifications, CV download targets, and AI automation positioning.
- [x] Preserve facts from the previous repo and both CV PDFs.

### Task 3: UI Foundation

**Files:**
- Create: `src/components/ui/button.tsx`, `src/components/ui/badge.tsx`, `src/components/ui/card.tsx`, `src/components/ui/input.tsx`, `src/components/ui/label.tsx`, `src/components/ui/textarea.tsx`
- Create: `src/lib/utils.ts`

- [x] Add shadcn-style primitives with `cn()`, CVA variants, accessible labels, and compact radius.
- [x] Use Tailwind v4 tokens and Geist font mapping.

### Task 4: Bilingual Experience

**Files:**
- Create: `src/stores/language-store.ts`
- Create: `src/components/portfolio/language-toggle.tsx`
- Create: `src/components/portfolio/portfolio-experience.tsx`

- [x] Use Zustand persist with a hydration-safe hook.
- [x] Add an EN/ES toggle that changes all portfolio copy.
- [x] Keep English as default and primary.

### Task 5: Contact And Supabase Readiness

**Files:**
- Create: `src/components/portfolio/contact-form.tsx`
- Create: `src/app/api/contact/route.ts`
- Create: `src/lib/supabase/server.ts`

- [x] Validate contact form data with Zod and React Hook Form.
- [x] Add API route that inserts into Supabase when environment variables exist.
- [x] Return a safe local success response when Supabase is not configured yet.

### Task 6: Verification

**Files:**
- Create: `jest.config.ts`, `jest.setup.ts`, `playwright.config.ts`
- Create: `src/data/portfolio-content.test.ts`, `tests/e2e/home.spec.ts`

- [x] Add unit tests for bilingual content integrity.
- [x] Add E2E smoke test for hero, language toggle, projects, and contact.
- [ ] Run lint.
- [ ] Run Jest.
- [ ] Run build.
- [ ] Optionally run Playwright after browsers are installed.

### Task 7: Next Iterations

**Files:**
- Future: `public/cv/*`, `src/app/cv/*`, `docs/cv/*`

- [ ] Improve the Web Developer CV.
- [ ] Improve the Data Analyst CV.
- [ ] Create the new AI Automation / Agentic Workflows CV.
- [ ] Add real downloadable CV artifacts to `public/cv`.
- [ ] Connect Supabase table `contact_messages` when project credentials are ready.
