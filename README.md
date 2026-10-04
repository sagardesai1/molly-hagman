# Molly Hagman Landing Page

High-converting landing page for private salsa lessons with Molly Hagman — NYC-based professional dancer, performer, and instructor.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Run locally

```bash
npm install
npm run dev -- --port 4321
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

Scroll to **Watch** — the four reel posters should load from `public/images/reels/*.jpg` (each ~85–127KB). If a poster is missing, check that those files are committed (not gitignored).

## Deploy to Vercel (production)

From the project root, with the [Vercel CLI](https://vercel.com/docs/cli) logged into your account:

```bash
npm install
npm run build
npx vercel --prod --yes
```

Or push `main` to the GitHub repo linked to the `molly-hagman` Vercel project and let the Git integration deploy.

After deploy, hard-refresh the Watch section and open:
`https://<your-domain>/images/reels/performance.jpg` — it should show a full dance photo (~109KB), not a tiny/broken image.

## Booking form

The `/api/book` route validates lesson requests and logs them locally. Connect it to email, a CRM, or a calendar tool when you are ready for production.

## Content notes

Copy and photos are based on [mollyhagman.com](https://www.mollyhagman.com/). Update contact routing, pricing, and testimonials when you have final business details.
