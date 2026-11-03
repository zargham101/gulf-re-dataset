import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GradeRail } from "@/components/grade-rail";
import { getMarketplace, kindLabel, marketplaces, scaleLabel, type SiteLink } from "@/lib/desk";
import { cn } from "cn";

type Params = { slug: string };

function groupLinks(links: SiteLink[]) {
  const groups: { href: string; label: string; countries: string[] }[] = [];
  for (const link of links) {
    const existing = groups.find((group) => group.href === link.href);
    if (existing) existing.countries.push(link.country);
    else groups.push({ href: link.href, label: link.label, countries: [link.country] });
  }
  return groups;
}

export function generateStaticParams() {
  return marketplaces.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = getMarketplace(slug);
  if (!place) return { title: "Not on the desk" };
  return {
    title: place.name,
    description: place.summary,
  };
}

export default async function MarketPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const place = getMarketplace(slug);
  if (!place) notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Directory
        </Link>
        <span aria-hidden> / </span>
        {place.countries.join(", ")}
      </p>
      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{kindLabel[place.kind]}</Badge>
          <Badge variant="outline">{scaleLabel[place.scale]}</Badge>
        </div>
        <h1 className="mt-3 text-4xl sm:text-5xl">{place.name}</h1>
        {place.arabicName ? (
          <p className="mt-1 text-lg text-muted-foreground">
            <span dir="rtl" lang="ar">
              {place.arabicName}
            </span>
          </p>
        ) : null}
        <div className="mt-4 max-w-sm">
          <GradeRail active={place.grades} />
        </div>
        <p className="mt-5 text-lg leading-8">{place.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {groupLinks(place.links).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "default" }), "h-9 px-3")}
            >
              {link.countries.join(", ")}: {link.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </div>
      </header>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl">Who it is for</h2>
        <p className="leading-7 text-foreground/90">{place.whoItsFor}</p>
        <h2 className="pt-4 text-2xl">How it stays in business</h2>
        <p className="leading-7 text-foreground/90">{place.howMoneyWorks}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl">What it is genuinely good at</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
          {place.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl">What everyday users keep hitting</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
          {place.flaws.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-2xl bg-primary px-5 py-6 text-primary-foreground">
        <h2 className="text-2xl text-primary-foreground">The change that would matter here</h2>
        <p className="mt-2 text-lg leading-8">{place.missing}</p>
        <Link href="/gaps" className="mt-4 inline-block text-sm underline underline-offset-4">
          See the same gap across the Gulf
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl">Where this comes from</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {place.sources.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                {source.label}
                <ArrowUpRight className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
