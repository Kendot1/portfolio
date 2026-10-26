# Redesign verification

## Final checks

- `npm run lint`: passed without warnings.
- `npm run typecheck`: passed.
- `npm run build`: passed on Next.js 16.4.3; homepage, both case studies, robots, and sitemap generated.
- `PLAYWRIGHT_BASE_URL=http://localhost:3100 npm test -- --reporter=line`: 19 passed against a freshly started production server.
- `npm audit --omit=dev`: found 0 vulnerabilities. Next.js and its ESLint configuration were upgraded from 16.2.4 to 16.4.3; compatible audit fixes were applied.

Tests cover project filters, case-study routes and 404s, mobile navigation and focus restoration, keyboard skip link, theme persistence, reduced motion, overflow at 320/390/768/1440px, console commands, feature arithmetic, target exclusion, partial history, invalid input and reset. Axe found no violations for the tested homepage palettes and reduced-motion phone lab using wcag2a/wcag2aa/wcag21a/wcag21aa tags. This does not establish full accessibility conformance.

## Content and links

GitHub profile, THESIS source, Supremo_Barbers source, and Foodcast live link each returned HTTP 200 in the final direct link check. Provenance is maintained in `docs/content-sources.md`. Unsupported dates and broad capability claims were removed; no accuracy, traffic, business-result, or sole-authorship metrics were invented.

Missing portrait now renders an intentional monogram without requesting a missing image. Add an approved `public/portrait.jpg` before rebuilding to use a photograph. Console is a deterministic local guide, not a model or shell. The feature lab uses editable synthetic observations, not live prices or trained-model forecasts.

## Remaining setup

- Confirm email, LinkedIn/resume, school/program/dates, and official certification links before publishing those details. They remain omitted, not fabricated.
- No persistent comment backend exists in this app. Recommended setup: approve a GitHub Discussions repository/category, enable Discussions, and install/authorize Giscus on that repository; then supply its public repo ID/category ID and approved host. GitHub handles authentication, shared storage and moderation; review privacy disclosure and moderation settings before enabling. No fake local-only guestbook or unauthenticated write endpoint was added.
- Set `NEXT_PUBLIC_SITE_URL` to the verified deployment origin before building; metadata, sitemap and robots otherwise use localhost.
- Reference browser visits at desktop and mobile sizes hit a browser-check interstitial; actual content was recovered by web extraction, not a verified responsive visual inspection. See `docs/design-direction.md`.
- Screenshots were captured, but image analysis returned a provider payment error. DOM-based layout checks passed; no image-based review or Lighthouse score is claimed.
- No deployment, commit, push, database mutation, or model training was performed. Existing dirty working-tree changes were preserved.
