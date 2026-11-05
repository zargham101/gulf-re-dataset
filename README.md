# Gulf Property Desk

A reading desk for real-estate websites across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. It runs from budget classifieds to luxury brokerages, and it collects the public complaints ordinary renters and buyers repeat: bait prices, dead ads, hidden fees, and filters that ignore how life in these cities actually works.

It does not list homes for sale or rent. Open the linked website for inventory. Confirm permits, contracts, and fees with the official body in that country.

You need Node.js 20 or newer. There is no database and no API key.

## Run it locally

```bash
npm install
npm run dev
```

The dev server listens on port **4317**. Then open [http://127.0.0.1:4317](http://127.0.0.1:4317).

Check the production build before you deploy:

```bash
npm run lint
npm run build
npm start
```

`npm start` serves the production build on port 3000.

## Deploy on Vercel

Nothing extra has to be configured. Vercel detects Next.js.

1. Put this folder in a Git repository you own. In this chat, use **Create repo** if the project is not in your GitHub yet.
2. On [vercel.com/new](https://vercel.com/new), import that repository. Or use **Publish** in this chat.
3. Leave the defaults:
   - Framework preset: **Next.js**
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: leave blank (Next.js sets this)
4. Do not add environment variables. Deploy.

The site is static pages plus one small client filter. Vercel’s free hobby plan can host it. After deploy, every push to the connected branch redeploys.

## What is inside

- **Directory** — each site, its countries, the grade of home it covers, the public URL, and the gap users describe.
- **What’s missing** — the shared flaws, and a specimen of the plain-language card that would make a listing easier to trust.
- **Where people talk** — Reddit, Trustpilot, app stores, and expat forums.
- **How the rules work** — permits, cheques, Ejar, service charges, and ownership limits, written for a newcomer.

Figures that come from a company’s own marketing are labeled as claims. Review scores are tied to the store page that was read when the desk was compiled (3 November 2026). Portals open, close, and get bought. Houza, JustProperty, and Bahrain Property World are called out so old articles do not send you to a dead brand.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
