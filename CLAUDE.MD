# CommitPT Landing Page

## Project Overview

This is the landing page for **CommitPT** — a Portuguese programming community. The primary goal is to present the community and act as a sales funnel with two conversion targets:

1. **Whop** — paid membership platform (primary CTA)
2. **Discord** — free community entry point (secondary CTA)

Every section and design decision should serve this funnel. If a feature or section doesn't move visitors toward one of these two actions, don't add it.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Font**: Geist Sans + Geist Mono (via `geist` package)
- **Icons**: `lucide-react`
- **Language**: JavaScript (no TypeScript)
- **Package manager**: Yarn

---

## Design System

### Colors (defined in `tailwind.config.js`)

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#0B0E14` | Page background |
| `ink-light` | `#151922` | Section/card background |
| `graphite` | `#1F242C` | Elevated surfaces (terminal bars) |
| `border` | `#30363D` | All borders |
| `muted` | `#8B949E` | Secondary text |
| `text-primary` | `#F0F4F8` | Headings, body text |
| `git-add` | `#07ecec` | Primary brand color, CTAs, accents |
| `git-del` | `#F85149` | Destructive / red elements |
| `git-amber` | `#F0883E` | Section labels, warnings, "in development" badges |
| `syntax-purple` | `#D2A8FF` | Code syntax |
| `syntax-green` | `#7EE787` | Code syntax |
| `syntax-blue` | `#79C0FF` | Code syntax |

### Typography

- **Headings**: Geist Sans, bold, `text-text-primary`
- **Section labels**: Geist Mono, small, `text-git-amber`, format `01 // Label Name`
- **Code snippets / badges / numbers**: Geist Mono (`font-mono`)
- **Body**: Geist Sans, `text-muted`

### Visual Language

The design is **dev-native** — inspired by git diffs, terminal UIs, and code editors:
- Use `+`/`-` git diff notation for contrasts
- Terminal window chrome (red/amber/green dots) for code mockups
- Line numbers in code blocks
- Monospaced badges and labels
- `~/CommitPT` style logo

---

## Page Structure

Current sections in order (`app/page.js`):

1. **Header** — sticky nav with Whop + Discord CTAs
2. **Hero** — headline, primary CTA buttons, terminal code mockup
3. **About** — "What You Get" benefit cards
4. **Features** — "How It Works" 3-step flow
5. **Platform** — upcoming `app.commitpt.com` teaser with countdown
6. **Footer**

### Section numbering convention

Sections use `01 //`, `02 //`, etc. as monospaced labels above the heading.

---

## CTA Strategy

- **Primary CTA**: "Join on Whop" → green button (`bg-git-add text-ink`)
- **Secondary CTA**: "Join Discord" → outlined button (`border-border`)
- CTAs must appear in: Hero, Features (join block), Footer
- The header's "Join Now" button also links to the `#join` anchor

### CTA rules

- Whop link placeholder: `https://whop.com/` — replace when real URL is known
- Discord link placeholder: `https://discord.gg/your-invite` — replace when real invite is known
- Never remove or hide Whop as the primary CTA; it's the revenue conversion point
- `target="_blank" rel="noreferrer"` on all external links

---

## Component Conventions

All components live in `src/components/`. One component per file, named with PascalCase.

### Adding a new section

1. Create `src/components/MySectionName.jsx`
2. Import and add to `app/page.js` in the right order
3. Assign the next section number in the `01 //` label

### Interactive components

Add `'use client'` directive when using React hooks (`useState`, `useEffect`). Currently: `Header.jsx`, `Platform.jsx`.

### Cards / feature blocks

Follow the existing pattern: `border border-border bg-ink p-6 rounded-lg` with `hover:border-git-add transition-colors` for interactive hover states.

### Badge / pill style

```jsx
<div className="inline-flex items-center gap-2 rounded-full border border-border bg-ink-light px-3 py-1 font-mono text-xs text-git-add">
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-git-add opacity-75"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-git-add"></span>
  </span>
  label text
</div>
```

Use `text-git-amber` + `bg-git-amber/10 border-git-amber/30` variant for "coming soon / in development" badges.

---

## Content Guidelines

- **Tone**: Direct, builder-to-builder. No fluff, no hype. Think `git commit -m "shipped."` energy.
- **Language**: Portuguese community but English UI — keep all copy in English unless explicitly told otherwise.
- **Avoid**: motivational-poster clichés, vague promises, stock-photo language.
- **Use**: concrete outcomes (`weekly ships`, `code reviews`, `accountability threads`), developer vocabulary.

### Value proposition

CommitPT solves **isolation and procrastination** in solo developers through:
- Weekly accountability groups
- Build-in-public sessions
- Peer code reviews
- Commit streaks and challenges

---

## File Paths

```
app/
  globals.css        # global styles, CSS variables
  layout.js          # root layout, metadata, fonts
  page.js            # page composition

src/
  components/
    Header.jsx       # sticky nav
    Hero.jsx         # above the fold, primary CTAs
    About.jsx        # benefit cards — "What You Get"
    Features.jsx     # 3-step how-it-works + join CTA block
    Platform.jsx     # app.commitpt.com teaser + countdown
    Footer.jsx       # footer with links

tailwind.config.js   # design tokens
```

---

## Platform Section — `app.commitpt.com`

A dedicated learning platform is in development with a launch target of **2026-08-20**. The `Platform.jsx` component shows a live countdown to this date. Do not remove or change the launch date without confirming with the team.

---

## Things to Avoid

- Do not add sections that don't lead toward a Whop or Discord conversion
- Do not use light backgrounds — the site is dark-mode only
- Do not use colors outside the design token palette without adding them to `tailwind.config.js`
- Do not add TypeScript — keep the project in plain JavaScript
- Do not add animation libraries — use Tailwind's built-in `animate-ping`, `transition-*`, etc.
- Do not create new pages — this is a single-page landing site
- Do not install new dependencies without a strong reason
