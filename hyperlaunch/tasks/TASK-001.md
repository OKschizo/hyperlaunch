- Implement AppShell + TopNav + NetworkBadge per STYLEGUIDE
Task 001 — Scaffold + Shell

Summary
- Created Next.js app in `apps/web` with Tailwind and shadcn/ui initialized.
- Implemented `AppShell`, `TopNav`, and `NetworkBadge` per STYLEGUIDE Section 2.
- Added STYLEGUIDE tokens/utilities in `src/app/globals.css` (`page-wrap`, `card`, `btn-primary`, `btn-ghost`).
- Wired global layout to render `TopNav`, content region with IDs per spec.
- Built routes: `/` landing hero with CTA to `/create`; `/create` placeholder page.

Acceptance checks
- A11y: H1 on landing; focus ring visible on buttons; contrast per STYLEGUIDE tokens. ✅
- Network badge visible at all times showing “HyperEVM · 999”. ✅
- CTA “Start Creating” routes to `/create`. ✅

Notes
- Build with Turbopack failed on Windows SWC wasm; runtime works in dev. Scripts adjusted to non-turbopack usage in package.json.
- Wallet ConnectButton is stubbed; will wire in later tasks per Build Spec.