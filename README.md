# BrightForm — bilingual survey + ad placeholders

A Next.js App Router project designed for Vercel, with English/Chinese routes, a three-step survey, Supabase persistence, and an authenticated admin dashboard.

## Requirements
- Node.js 20+
- A Supabase project
- npm

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in the Supabase project URL, anon key, service-role key, and an admin email.
3. In Supabase SQL Editor, run `supabase/schema.sql`.
4. In Supabase Authentication, create an account for the email listed in `ADMIN_EMAILS`. For a production site, configure email confirmation and secure password recovery.
5. `npm run dev`, then open `http://localhost:3000`.

Routes: `/en`, `/zh`, `/en/survey`, `/zh/survey`, `/en/complete`, `/zh/complete`, `/en/admin`, `/zh/admin`.

## Environment variables
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon/public key. Safe for browser use when RLS is enabled.
- `SUPABASE_SERVICE_ROLE_KEY`: server-only service role secret. Never expose or prefix with `NEXT_PUBLIC_`.
- `ADMIN_EMAILS`: comma-separated allowlist of admin emails, matched case-insensitively.
- `NEXT_PUBLIC_SITE_URL`: canonical site URL (reserved for deployment integrations; optional for this version).

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, import that repository and keep the detected Next.js framework settings.
3. Add all environment variables above in Project Settings → Environment Variables. Add them for Production and Preview as appropriate; do not add the service role key to client variables.
4. Run the SQL in `supabase/schema.sql` in the matching Supabase project.
5. Create the admin user in Supabase Auth, and set the same email in `ADMIN_EMAILS`.
6. Deploy. Test both `/en` and `/zh`, submit a test response, sign into `/en/admin`, and verify that the row appears.
7. Redeploy after changing environment variables.

## Ad integration
`components/AdSlot.tsx` is a placeholder. It is disabled unless `NEXT_PUBLIC_ADS_ENABLED=true` is set. That variable is not required in `.env.example`; add it only when you are ready to show the reserved placeholder. Replace the component body with the ad provider's approved integration after your account/site is approved. Do not incentivize ad clicks or place ads where they can be mistaken for survey controls. Check the ad provider's current policy before launch.

## Production hardening before public launch
- Add rate limiting to `POST /api/submissions` (e.g. a managed rate-limit service or edge/WAF rule). The included honeypot and validation are not a substitute for rate limiting or bot protection.
- Add a privacy notice, retention/deletion policy, and any required consent/cookie controls for your audience and ad provider.
- Configure Supabase Auth email confirmation, password reset, and MFA for administrators.
- Consider pagination/export controls and audit logs if response volume grows.
- Keep `SUPABASE_SERVICE_ROLE_KEY` only in server-side Vercel environment variables.

## Notes
- Survey content is currently defined in `lib/i18n.ts` and `components/SurveyForm.tsx`.
- Admin API returns up to the latest 100 responses. Stats count all rows.
- No ad network is connected by default.
