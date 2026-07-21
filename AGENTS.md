# Brain Boost Buddy website agent guide

## Product boundary

This repository is the static marketing, download, and policy website for Brain Boost Buddy. The Electron application, licensing Worker, packaging, and release checklist live in `/Users/segzy/dev/brain-boost`; do not edit that sibling repository unless the task explicitly includes it.

There is no package/build system here. The deployable source is the HTML and public assets in the repository root.

## Working safely

- Preserve existing uncommitted work. Check `git status --short --branch` before editing.
- Keep `index.html`, `privacy.html`, `terms.html`, and `refund.html` internally consistent when the purchase, trial, subscription, refund, download, analytics, or data-handling flow changes.
- Treat legal/policy wording as sensitive product copy. Flag substantive legal claims for owner review rather than inventing assurances.
- Never add secret keys or private customer data to static files; everything committed here is public.
- Do not deploy, change DNS/CNAME, upload installers, or change checkout/download destinations unless explicitly asked.

## Validation

Serve the repository locally with a simple static server and test the affected pages at mobile and desktop widths. Verify navigation, keyboard focus, contrast, reduced motion, policy links, checkout links, and Mac/Windows download URLs when touched.

Cross-check product claims, versioned artifact names, and release links against `/Users/segzy/dev/brain-boost/docs/RELEASE-CHECKLIST.md`; do not assume an installer exists merely because copy mentions it.
