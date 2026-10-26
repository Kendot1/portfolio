# Kenneth Bitun — Portfolio

A lightweight Next.js portfolio presenting full-stack product work, machine-learning projects, and the engineering decisions that connect them.

The portfolio includes an introduction, two case studies, an engineering console and playable feature lab, an evidence-linked Stack section, a concise About, and contact. No education or certifications were found in verified materials.

## Run locally

    npm install
    npm run dev

Open http://localhost:3000.

## Checks

    npm run lint
    npm run typecheck
    npm test
    npm run build

- The homepage features a compact introduction and portrait slot, followed by project case studies and an evidence-linked Stack section. The bounded console follows the projects and is linked from the navigation and introduction.

## Content

The Playwright suite covers both curated case studies, their not-found behavior, project filters, keyboard focus, reduced motion, persisted themes, automated accessibility checks, and overflow at 320, 390, 768, and 1440px. It also exercises the optional console. Use Chrome by default; set PLAYWRIGHT_CHANNEL=msedge to use Edge instead.
- Project case studies are generated from that data at /work/[slug].
- Case-study copy is limited to verified project material. Foodcast and Supremo Barber include source-backed architecture and implementation details; individual roles and outcomes are qualified where evidence is incomplete. See docs/content-sources.md for provenance.
- Email, LinkedIn, and resume links are omitted until verified destinations are available.
- A portrait slot is included; no verified personal photograph was available during this pass. Add an approved photo at `public/portrait.jpg` as described in docs/personal-content-placeholder.md.
- `public/foodcast-cover.webp` is a compressed crop of the first-party Foodcast repository background asset `foodcast/public/Bg-2.jpg`; it is source artwork, not a screenshot or metric.

## Deployment

The app uses the Next.js App Router and can be deployed to a compatible Node.js host or Vercel.

    npm run build
    npm run start

Set NEXT_PUBLIC_SITE_URL to the verified public domain so sitemap and robots metadata use the correct host.
