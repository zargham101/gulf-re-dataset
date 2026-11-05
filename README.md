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

## Put it on your GitHub (private)

This cloud session cannot create a GitHub repository for you (no GitHub login here). Two minutes on your side:

1. On [github.com/new](https://github.com/new), create a **private** repository named `gulf-property-desk`. Do **not** add a README, `.gitignore`, or license (this project already has them).
2. On your computer, get the code either way:
   - **Clone from this agent’s git remote** (if Cursor linked a repo for you), or
   - **Download** the zip from this chat’s artifacts: `gulf-property-desk-source.zip`, unzip it, then `cd` into the folder.
3. Point Git at your new GitHub repo and push:

```bash
cd gulf-property-desk
git init
git add .
git commit -m "Initial commit: Gulf Property Desk"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gulf-property-desk.git
git push -u origin main
```

If you already have a git history from Cursor, skip `git init` / the first commit and only run:

```bash
git remote add github https://github.com/YOUR_USERNAME/gulf-property-desk.git
git push -u github main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Deploy on Vercel

Nothing extra has to be configured. Vercel detects Next.js.

1. Import the **private GitHub repository** you just created.
2. On [vercel.com/new](https://vercel.com/new), choose that repo.
3. Leave the defaults:
   - Framework preset: **Next.js**
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: leave blank (Next.js sets this)
4. Optional for **Vercel cron** (see Monitor below): add `CRON_SECRET` in Vercel → Settings → Environment Variables. Vercel sets this automatically on Pro; on Hobby you can define your own secret and use the same value in the project.

The site is mostly static pages plus a weekly cron route. After deploy, every push to the connected branch redeploys.

### Monitor cron (optional)

- **All websites** — `/websites` — country tables with direct links (luxury → budget).
- **Monitor** — `/monitor` — last automated URL check.
- **GitHub Actions** — runs every Monday (`monitor-sources.yml`), commits `src/data/monitor-snapshot.json`.
- **Local / CI** — `npm run monitor:check`
- **Vercel** — `vercel.json` calls `/api/cron/check-sources` weekly; set `CRON_SECRET`. To commit results from Vercel, also set `GITHUB_TOKEN` (repo `contents: write`) and `GITHUB_REPOSITORY` (`owner/repo`).

## What is inside

- **Directory** — each site, its countries, the grade of home it covers, the public URL, and the gap users describe.
- **All websites** — one table per country for quick access to every portal, classifieds site, agency, developer, and official tool.
- **Monitor** — scheduled checks that a listed homepage still responds and whether the title changed.
- **What’s missing** — the shared flaws, and a specimen of the plain-language card that would make a listing easier to trust.
- **Where people talk** — Reddit, Trustpilot, app stores, and expat forums.
- **How the rules work** — permits, cheques, Ejar, service charges, and ownership limits, written for a newcomer.

Figures that come from a company’s own marketing are labeled as claims. Review scores are tied to the store page that was read when the desk was compiled (3 November 2026). Portals open, close, and get bought. Houza, JustProperty, and Bahrain Property World are called out so old articles do not send you to a dead brand.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
