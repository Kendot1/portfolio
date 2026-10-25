# Kenneth Bitun — Portfolio

A lightweight Next.js portfolio presenting full-stack product work, machine-learning projects, and the engineering decisions that connect them.

## Run locally

    npm install
    npm run dev

Open http://localhost:3000.

## Checks

    npm run lint
    npm run typecheck
    npm test
    npm run build

The Playwright suite covers project filters, all case-study routes, active-section navigation, keyboard focus, reduced motion, persisted themes, automated accessibility checks, and overflow at 320, 390, 768, and 1440px. It uses an installed Chrome browser by default; set PLAYWRIGHT_CHANNEL=msedge to use Edge instead.

## Content

- Featured projects, expertise, workflow, and the verified GitHub link live in src/data/portfolio.ts.
- Project case studies are generated from that data at /work/[slug].
- Case-study copy is limited to verified project material. Foodcast and Supremo Barber include source-backed architecture and implementation details; individual roles and outcomes are qualified where evidence is incomplete. See docs/content-sources.md for provenance.
- Email, LinkedIn, and resume links are omitted until verified destinations are available.
- Project artwork is an original connected-systems illustration; it does not present unverified screenshots or metrics.

## Deployment

The app uses the Next.js App Router and can be deployed to a compatible Node.js host or Vercel.

    npm run build
    npm run start

Set NEXT_PUBLIC_SITE_URL to the verified public domain so sitemap and robots metadata use the correct host.
