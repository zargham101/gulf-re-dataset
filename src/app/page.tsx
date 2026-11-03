import { Suspense } from "react";
import Link from "next/link";
import { Directory } from "@/components/directory";
import { getMarketplace, hazards, marketplaces, retiredNames, startHere } from "@/lib/desk";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          UAE · Saudi Arabia · Qatar · Kuwait · Bahrain · Oman
        </p>
        <h1 className="mt-3 text-4xl leading-[1.05] text-balance sm:text-6xl">
          The sites people use to find a home in the Gulf, and what those sites still hide.
        </h1>
        <p className="mt-5 text-lg leading-8 text-foreground/85">
          {marketplaces.length} places, from a classifieds app full of rooms to a
          desk that only takes villas. Each one has the public website, who it is
          for, and the gap ordinary renters and buyers describe in reviews and
          forums. The same missing piece shows up everywhere: a straight answer
          on the card, before anyone calls you back.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/gaps"
            className="rounded-full bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            The one change that would matter
          </Link>
          <Link
            href="/forums"
            className="rounded-full border border-border bg-card px-4 py-2 hover:bg-muted"
          >
            Read the complaints yourself
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl">Where to start</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A short list for a real errand. Open the notes, then open the site.
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {startHere.map((item) => (
            <li key={item.title} className="rounded-2xl border border-border bg-card p-4">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                {item.slugs.map((slug) => {
                  const place = getMarketplace(slug);
                  if (!place) return null;
                  return (
                    <Link key={slug} href={`/market/${slug}`} className="text-primary hover:underline">
                      {place.name}
                    </Link>
                  );
                })}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl">The directory</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Filter from a low budget up to luxury, or by country. Smaller local
              boards sit next to the regional groups.
            </p>
          </div>
        </div>
        <Suspense fallback={<p className="text-muted-foreground">Opening the directory…</p>}>
          <Directory />
        </Suspense>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-5">
          <h2 className="text-2xl">Names that outlived the website</h2>
          <ul className="mt-3 space-y-3 text-sm leading-6">
            {retiredNames.map((item) => (
              <li key={item.name}>
                <span className="font-medium text-foreground">{item.name}. </span>
                <span className="text-muted-foreground">{item.note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5">
          <h2 className="text-2xl">Do not use right now</h2>
          <ul className="mt-3 space-y-3 text-sm leading-6">
            {hazards.map((item) => (
              <li key={item.domain}>
                <span className="font-medium text-foreground">
                  {item.name} ({item.domain}).{" "}
                </span>
                <span className="text-muted-foreground">{item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
