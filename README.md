# Gulf Property Desk

A reading desk for real-estate websites across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. It runs from budget classifieds to luxury brokerages, and it collects the public complaints ordinary renters and buyers repeat: bait prices, dead ads, hidden fees, and filters that ignore how life in these cities actually works.

It does not list homes for sale or rent. Open the linked website for inventory. Confirm permits, contracts, and fees with the official body in that country.

## Run it

```bash
npm install
npm run dev
```

The dev server listens on port **4317**. Then open [http://127.0.0.1:4317](http://127.0.0.1:4317).

```bash
npm run lint
npm run build
```

## What is inside

- **Directory** — each site, its countries, the grade of home it covers, the public URL, and the gap users describe.
- **What’s missing** — the shared flaws, and a specimen of the plain-language card that would make a listing easier to trust.
- **Where people talk** — Reddit, Trustpilot, app stores, and expat forums.
- **How the rules work** — permits, cheques, Ejar, service charges, and ownership limits, written for a newcomer.

Figures that come from a company’s own marketing are labeled as claims. Review scores are tied to the store page that was read when the desk was compiled (3 November 2026). Portals open, close, and get bought. Houza, JustProperty, and Bahrain Property World are called out so old articles do not send you to a dead brand.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
