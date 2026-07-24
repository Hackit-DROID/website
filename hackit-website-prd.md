# HackIT Club Website — PRD & Build Plan (v1)

## Goal
Replace the old HackIT site with a fast, static marketing site that establishes credibility (member count, CTF wins, event history) and drives two actions: **join the club** and **register for events**.

## Non-Goals (v1)
- Auth / member login
- RSVP backend or database
- CMS
- Member dashboard
- Search

Any of these can become a v2 decision — not v1 scope creep.

## Pages

| Page | Contents |
|---|---|
| **Home** | Hero (h1 + CTA + code-window mockup), stat-callouts, feature cards (what HackIT does), CTA band, footer |
| **Events** | Grid of `events-card`s — title, date, location, register link (can point to an external form for now since there's no backend) |
| **Team** | Member cards (photo, name, role), grouped by core team / leads |
| **Resources** | Writeups/links list, optionally categorized by tag (CTF, workshops, tools) |
| **Footer** (shared) | 4-column links, socials |

4 routed pages + shared nav/footer — small enough that React Router is sufficient. Next.js/SSR isn't needed unless SEO/crawlability becomes a real concern later.

## Tech Stack
- **Vite + React** — matches existing portfolio stack, no new tooling to learn
- **React Router** — for the 4 pages
- **Tailwind CSS** — design.md's tokens (colors, spacing, radius, typography) map cleanly onto a `tailwind.config` theme extension
- **Framer Motion** (optional) — for terminal-typewriter / stat-counter effects design.md flags as "not in scope" but nice-to-have
- **Deploy:** Vercel or Netlify — either is fine for a static Vite build; no functional difference for this use case

## Content Strategy
No real content exists yet. Build in a placeholder pass: lorem-equivalent team bios, plausible-but-fake event entries, stat numbers clearly marked `TODO: replace` so they don't accidentally ship. Placeholder polish shouldn't become a reason to delay real content collection.

## Milestones
1. Scaffold: Vite + React + Tailwind + design tokens wired in, routing skeleton
2. Build shared components: nav, footer, button variants, card variants (per design.md's component list)
3. Build pages in order: Home → Events → Team → Resources
4. Placeholder content pass
5. Deploy to Vercel/Netlify, connect domain
6. Swap placeholders for real content once HackIT provides it

## Note on Multi-Agent Build
If multiple coding agent sessions run in parallel on this, lock down component boundaries (step 2) before parallelizing — otherwise button/card implementations drift inconsistent across pages and need a cleanup pass later.
