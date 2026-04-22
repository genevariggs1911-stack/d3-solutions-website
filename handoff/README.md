# D3 Codebase — Claude Code Handoff

Drop-in components and tokens for the D3 Solutions Group site. This package extends the existing Next.js 15 + Tailwind v4 site with an institutional aesthetic, a light/dark theme system, and a curated set of premium editorial details.

## What this package adds

1. **D3-only wordmark.** The primary nav carries the two-character mark alone. "D3 Solutions Group, LLC" appears only in the footer legal block and the HTML `<title>`.
2. **Institutional palette** with a theme-aware accent: oxblood in light mode, ochre in dark mode. Oxblood doesn't work on deep navy; ochre doesn't work on ivory. Each earns its place.
3. **Editorial masthead** with Roman numeral volume, dateline, firm name, and office locations.
4. **Scroll hairline** — 1px accent line at the top of the viewport, width tracks scroll position.
5. **Running section indicator** — bottom-right, shows `§ 0N · Section Name`, appears only mid-scroll.
6. **Animated counters** — stats count up on entry via IntersectionObserver, tabular figures, no library.
7. **Pull quote** with oversized italic opening quotation mark.
8. **Drop cap** on the case study lede paragraph.
9. **Press strip** — typographic "As featured in" with publication names, no logos.
10. **Giant watermark D3** in the CTA block at 3% opacity, absolute-positioned.
11. **Subtle grain overlay** — SVG noise at 3-4% opacity, fixed across the viewport.
12. **Section markers** — `§ 01`, `§ 02`, etc., in italic serif.
13. **Custom text selection color** tied to the accent.
14. **Theme persistence** with `localStorage`, `prefers-color-scheme` default, flash-free hydration.

## Stack and conventions

- Next.js 15, App Router, TypeScript strict
- Tailwind CSS v4 with CSS-first `@theme`
- `next/font` for Fraunces and Inter
- GSAP optional — only needed if you later add a hero animation
- Framer Motion optional — the premium features here use native APIs (IntersectionObserver, requestAnimationFrame) to keep bundle size down
- **Zero browser-storage restrictions** outside the theme toggle. Everything else uses in-memory state or DOM observation.

## How to use this package

1. Copy `styles/tokens.css` into `app/globals.css` (or import it). These are the single source of truth for color, type, spacing, and motion tokens.
2. Copy each file from `components/` into `components/` in your Next.js project.
3. Register the `ThemeScript` in `app/layout.tsx` inside `<head>` **before** any stylesheet imports. This is the flash-of-wrong-theme fix.
4. Compose the home page using the example in `app/page.example.tsx`.
5. Keep `reference-prototype.html` somewhere accessible — it's the visual spec. If Claude Code renders something that doesn't match the prototype, the prototype wins.

## Rules of engagement for this refactor

- Do not reintroduce "Solutions Group" anywhere in the visible header, hero, or navigation. It lives in the footer and in legal contexts only.
- Do not let the accent color cross themes. Oxblood is bound to light, ochre is bound to dark, through `--accent` only.
- Do not add parallax, cursor effects, glassmorphism, or 3D anywhere.
- Do not import a UI component library. Every component here is hand-built.
- Respect `prefers-reduced-motion: reduce` everywhere animation appears. Counters should snap to final value; scroll progress should still render but without smoothing.
- All numbers use tabular figures. `font-feature-settings: "tnum" 1` is set at the body level.

## File map

```
d3-codebase/
├── README.md                           ← you are here
├── styles/
│   ├── tokens.css                      ← design tokens; paste into globals.css
│   └── typography.css                  ← base type styles and selection color
├── components/
│   ├── ThemeScript.tsx                 ← blocking script for no-flash theme
│   ├── Masthead.tsx                    ← editorial running header with theme toggle
│   ├── TopNav.tsx                      ← primary nav, D3 mark only
│   ├── GrainOverlay.tsx                ← fixed SVG noise overlay
│   ├── ScrollProgress.tsx              ← hairline scroll indicator
│   ├── SectionIndicator.tsx            ← bottom-right running section label
│   ├── AnimatedCounter.tsx             ← number that counts up on entry
│   ├── DropCap.tsx                     ← editorial drop-cap wrapper
│   ├── PullQuote.tsx                   ← oversized opening mark quote block
│   ├── PressStrip.tsx                  ← "As featured in" typographic strip
│   ├── SectionMarker.tsx               ← § 0N marker
│   └── ThemeToggle.tsx                 ← light/dark switch (used inside Masthead)
├── lib/
│   └── useReducedMotion.ts             ← hook for motion preferences
├── app/
│   └── page.example.tsx                ← reference composition of the home page
└── reference-prototype.html            ← the visual source of truth
```

## One sentence brief for any future design decision

If the choice is between "the Financial Times weekend edition" and "a boutique agency site in 2022," pick the Financial Times.
