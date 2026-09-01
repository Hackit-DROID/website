# UI & Technical Enhancement Plan: HackIT SGGSIE&T

## 1. Executive Summary & Goals
Transform the HackIT SGGSIE&T website UI into a premium, non-templated experience adhering to **Taste Skill** guidelines, while integrating production-grade **Technical & SEO Best Practices** and fluid **Framer Motion Micro-Interactions** (scroll-driven capsule dock, magnetic hover springs, route crossfades, AnimatePresence filter reordering).

---

## 2. Affected Files & Dependencies
* `src/components/Navbar.jsx` — Scroll-driven dock elevation, spring theme toggle rotation, active tab background indicator.
* `src/components/AnimatedSection.jsx` — Tactile spring hover/tap physics.
* `src/pages/Events.jsx` — `<AnimatePresence mode="popLayout">` with layout morphing grid on filter/search.
* `src/App.jsx` — Framer Motion page route crossfade transitions.
* `src/pages/Home.jsx` — Staggered hero entry animations and spring card interactions.

---

## 3. Detailed Phase Breakdown

### Phase 1: Institutional Schema.org & Meta Tags (`index.html`)
- Inject JSON-LD structured data in `index.html` (`EducationalOrganization` & `StudentSociety`).
- Add OpenGraph meta tags for social media link sharing (WhatsApp, LinkedIn, Twitter/X).

### Phase 2: Interactive Event Search & Filter (`Events.jsx`)
- Add real-time text search input and category filter pills.
- Add active search feedback count and user-friendly empty search state.

### Phase 3: Accessibility & Focus States (`index.css`)
- Add `:focus-visible` styling for interactive buttons, links, and form inputs.

### Phase 4: Micro-interactions & Fluid Animations (`Navbar.jsx`, `App.jsx`, `Events.jsx`, `AnimatedSection.jsx`)
- **Navbar Scroll Dock**: Dynamic backdrop elevation on scroll.
- **Active Route Pill**: Gliding background indicator pill on route changes.
- **Spring Hover/Tap Physics**: Reusable spring card dynamics on buttons and cards.
- **AnimatePresence Reordering**: Fluid card repositioning when filtering event categories in `Events.jsx`.
- **Page Route Transitions**: Framer Motion page crossfades in `App.jsx`.
