# Portfolio content provenance

The portfolio data is maintained in `src/data/portfolio.ts`. Local source references below support the copy; public repository and demo links are added only where independently verified. Do not publish benchmark claims, deployment claims, or sole-authorship claims without verification.

## Featured projects

Only Foodcast and Supremo Barber are featured as case studies because these are the projects with verified implementation details. Daddy Bons Kitchen and Lucent were omitted from the public showcase until their implementation, contribution, technologies, and status are documented; their existing notes remain in repository history.

## Foodcast

Canonical sources are under `D:/THESIS`, not the separate older `D:/model_trainer` implementation.

- `foodcast/package.json:11–42`: Next.js, React, TypeScript, Supabase and SWR dependencies.
- `model_trainer/models/lstm_model.py:108–131`: PyTorch recurrent network, learned attention and multi-horizon head.
- `model_trainer/models/forecast_engine.py:1–35`: shared forecast engine wiring LSTM, LightGBM, ensemble and feature builder.
- `model_trainer/features/lag_features.py:39–74`: shifted lag/rolling features.
- `model_trainer/models/ensemble.py:20–82`: validation-tuned ensemble and persistence shrinkage.
- `model_trainer/pipeline/prediction_writer.py:259–265,332–355,702–716`: persistence-based weekly/monthly outputs and forecast persistence.
- `foodcast/app/lib/data.ts:719–769`: frontend Edge API reads.
- `foodcast/app/Predict/page.tsx:1–13,36–41` and `foodcast/app/lib/hooks.ts:25–34`: server-fetched initial data and SWR refresh.
- Git history `7628658` and `f15ade7` records changes to model files under author `Kendot1`. This supports a contribution statement, not sole authorship.

No model accuracy, production traffic, or point-in-time evaluation claims are verified. The writer and Edge API have differing horizon declarations; do not present a verified deployment contract.

## Supremo Barber

Sources are under `D:/Supremo_Barbers/SupremoBarbers`.

- `package.json:38–70`: React, Vite, TypeScript, Hono and Supabase.
- `src/services/api.service.ts:19–27`: browser calls Supabase Edge Function API.
- `src/App.tsx:16–31`: role-specific workspaces.
- `src/supabase/functions/server/index.tsx:315–340,386–419`: token and user-profile verification.
- Same server source at `5548–5654`: server-derived customer identity, pricing and overlap checks.
- `src/supabase/functions/server/appointmentRules.ts:9–21,86–139`: shared appointment rules.
- `tests/appointment-rules.test.mjs:13–41`: focused rule tests exist; this portfolio does not claim those tests were run during the redesign.
- `docs/system-architecture.md:7–30,64–70`: topology and documented deployment limitations.

Role attribution and business outcomes remain unknown. An in-memory lock does not guarantee cross-instance booking exclusion; deployed schema/RLS are not audited here.

## Independent identity and link audit — 2026-10-26

- Public GitHub API `https://api.github.com/users/Kendot1` returns `login: Kendot1`, `name: Kenneth Bitun`, and the self-description “CS Student | Full Stack Developer | Aspiring Automation Specialist”. The portfolio's local Git remote is `https://github.com/Kendot1/portfolio.git`; the two project remotes match the same account. This corroborates the displayed identity without relying on the rejected draft. The profile bio is self-reported, not degree, employment, or credential verification.
- `https://api.github.com/users/Kendot1/repos?per_page=100` independently lists the public `THESIS` and `Supremo_Barbers` repositories. Their pages, `https://github.com/Kendot1/THESIS` and `https://github.com/Kendot1/Supremo_Barbers`, both returned HTTP 200. These source links are now included in project data. Current local work may be ahead of the public revisions; links do not assert deployed parity.
- `https://foodcastt.vercel.app/` returned HTTP 200 and the HTML title `FOODCAST — AI Food Price Forecasting`. This verifies the public landing page only, not authenticated flows, model service health, data freshness, or production readiness.
- The API-listed homepages `https://thesis-nine-sigma.vercel.app` and `https://supremo-barbers-orpin.vercel.app` returned HTTP 404. Neither is published in portfolio data. Supremo is explicitly labeled “Source available · deployment unverified”, not deployed or completed.
- Removed Foodcast's unsupported `2025–present` date range. Repository creation/commit dates do not establish a personal project start date or continuous involvement. The thesis designation is supported by the canonical repository and its research instructions, but school, degree, graduation date, and certification details remain unverified and omitted.
- Replaced broad skill labels such as Accessibility, Interaction design, Performance, and System design with implementation-specific evidence: role interfaces (`src/App.tsx`), server-fetched views (`foodcast/app/Predict/page.tsx`), SWR refresh, Hono auth checks, booking validation, shared rules, typed API service, focused rule tests, and architecture documentation. These describe visible project techniques, not independently verified mastery or sole personal responsibility.
- The only verified professional destination is `https://github.com/Kendot1` (HTTP 200). The public API has `email: null`, an empty blog, and no Twitter username. No approved personal email, LinkedIn, or resume was found in the inspected material; they remain omitted. A GitHub profile is not a verified direct-message service, so do not promise visitors can send a message there.
- Local inspection was source-only and read-only in both project repositories. No environment files, customer records, restricted labels, model artifacts, training, database calls, authentication, or deployment operations were used. Existing model contribution attribution remains qualified; Supremo's individual responsibilities remain undocumented.

## Other projects and professional links

Daddy Bons Kitchen and Lucent retain existing limited project notes; their implementation details remain unverified. Public repository names or descriptions alone are not enough to add case-study claims.

The adjacent portfolio portrait is documented as an illustration, not a professional headshot; it was not reused.

Legacy portfolio accuracy/commodity metrics and unrelated Supremo automation copy are not evidence and must not be republished.
