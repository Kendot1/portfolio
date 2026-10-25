# Portfolio content provenance

The portfolio data is maintained in `src/data/portfolio.ts`. These are local source references, not public repository URLs. Do not publish repository links, benchmark claims, or sole-authorship claims without verification.

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

## Other projects and professional links

Daddy Bons Kitchen and Lucent retain existing limited project notes; their implementation details remain unverified.

`https://github.com/Kendot1` and `https://foodcastt.vercel.app/` returned HTTP 200 during this task. No personal email, LinkedIn or resume was verified. The adjacent portfolio portrait is documented as an illustration, not a professional headshot; it was not reused.

Legacy portfolio accuracy/commodity metrics and unrelated Supremo automation copy are not evidence and must not be republished.
