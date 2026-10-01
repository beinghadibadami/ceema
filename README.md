# Ceema

Next.js App Router + TypeScript + Tailwind storefront for Ceem Healthcare Private Limited. Designed as a client demo, with a typed Shopify adapter ready for credentials.

## Run locally

Use Node.js 22 LTS or newer.

```powershell
npm install
npm run dev
```

Open the localhost URL printed in the terminal. No environment variables are required for demo mode. Demo prices are ₹349 / 500 ml and ₹599 / 1 litre; these are not approved commercial prices.

## Deploy the demo to Vercel

From this project folder:

```powershell
npx vercel login
npx vercel --prod
```

Choose your account, create a new project named `ceema-demo`, use `./` as the directory, and accept detected Next.js settings. Build command: `npm run build`. Leave output directory at the Next.js default. Do not select a static export or `public` as the output directory.

Leave both Shopify credentials unset. The site automatically uses mock product data and a cookie-persisted demo cart. Vercel prints the deployed URL, which you can send to your client. If the project has deployment protection enabled, use Vercel's share access controls for the client.

Optional: set `NEXT_PUBLIC_SITE_URL` to your final HTTPS Vercel URL and redeploy for canonical social-image URLs. The default also recognizes Vercel's production hostname.

Alternative: push the project to a GitHub repository and import it at https://vercel.com/new. Framework: Next.js. Root directory: project root. No demo environment variables required.

Official deployment reference: https://vercel.com/docs/cli/deploying-from-cli

## Connect Shopify later

Copy `.env.example` to `.env.local` locally, or enter the values in Vercel → Project → Settings → Environment Variables:

- `SHOPIFY_STORE_DOMAIN`: `your-store.myshopify.com`, without scheme or slash.
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`: Storefront API token, not the Admin API secret.
- `SHOPIFY_API_VERSION`: `2026-07`.
- `SHOPIFY_PRODUCT_HANDLE`: defaults to `ceema-coconut-hair-oil`.
- `NEXT_PUBLIC_SITE_URL`: public HTTPS site URL.

Publish the product to the Storefront sales channel and create size options recognizable as `500 ml` and `1 litre` (or `1000 ml`). The adapter reads product text, availability, prices and currency from Shopify. Cart creation, additions, quantity changes and removal use Shopify Storefront mutations. Checkout redirects to the returned Shopify-hosted URL. Redeploy after setting variables. Existing demo cookies recover to a new live cart when a live item is added.

The adapter is `src/lib/commerce.ts`; both mock and live implementations implement `Commerce`. Credentials are only used in server-rendered pages and route handlers, never sent to the browser.

## Forms

Set `CONTACT_WEBHOOK_URL` and `NEWSLETTER_WEBHOOK_URL` to HTTPS services that accept JSON. The route sends validated fields with explicit consent. With no endpoint configured, the form honestly explains that nothing was sent or saved. Protect production endpoints with the provider's abuse controls before launch. Do not present a demo submission as a real subscription.

## Content and assets

- `DESIGN.md`: design plan, review and self-critique.
- `CONTENT_TODO.md`: all brand approvals and launch replacements.
- `assets/PROMPTS.md`: asset filenames, generation instructions and video replacement brief.
- `src/lib/assets.ts`: site image manifest.
- `src/data/reviews.json`: editable demo Hair Wall data; replace with genuine consented reviews.
- `public/images`: generated PNG masters and optimized WebP assets, SVG wordmarks and social preview.
- `scripts/prepare-assets.mjs`: deterministic label overlays, canvas extension, optimization and OG generation. Run `node scripts/prepare-assets.mjs` after changing source assets.

The hero currently shows its finished poster. The cinematic video and intermediate frames are not completed. The video player is implemented but disabled, so the demo makes no requests for missing media. Add both hero-reveal.mp4 and hero-reveal.webm, then set NEXT_PUBLIC_HERO_VIDEO_READY=true to enable the once-only, muted, inline reveal. Reduced-motion users always receive the still. Generation prompts and an optional storyboard-rendering script are supplied.

## What the demo does not do

No real payment, delivery availability lookup, email delivery or newsletter signup without corresponding integrations. Review video tiles are explicitly labeled thumbnails awaiting genuine customer clips; add `videoSrc` to a JSON review to enable its player. Certifications and lab report downloads are clearly labeled placeholder text files. Packaging and sourcing imagery are concepts, not evidence of the real product or supply chain.

## Checks completed before handoff

The production build, TypeScript check and three mock-commerce tests passed during development. Later asset integration and small size-link changes were not retested at the user's request. Browser testing was stopped when requested. No claim of a completed Lighthouse or comprehensive accessibility audit is made.

Commands available: `npm run build`, `npm run typecheck`, `npm test`.

