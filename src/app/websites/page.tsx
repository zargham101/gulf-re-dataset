import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { countries } from "@/lib/desk";
import { getMonitorByUrl } from "@/lib/monitor-store";
import { rowsByCountry } from "@/lib/website-rows";

export const metadata: Metadata = {
  title: "All websites by country",
  description:
    "Every Gulf property portal, classifieds board, agency, developer, and official tool on this desk — grouped by country from luxury down to budget.",
};

export default function WebsitesPage() {
  const grouped = rowsByCountry();

  return (
    <div className="mx-auto max-w-6xl">
      <p className="text-sm font-medium tracking-wide text-primary uppercase">
        Direct links · top tier to basic
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        Property websites by country
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground/90">
        One table per country: listing portals, classifieds, agencies and
        dealerships, developer sales offices, luxury desks, and government
        tools. Sorted from luxury / upper tier down to budget boards within each
        country. Status comes from the{" "}
        <Link href="/monitor" className="text-primary underline-offset-4 hover:underline">
          weekly monitor
        </Link>
        .
      </p>

      <div className="mt-10 space-y-12">
        {countries.map((country) => {
          const rows = grouped.get(country) ?? [];
          return (
            <section key={country} id={country.replace(/\s+/g, "-").toLowerCase()}>
              <div className="flex flex-wrap items-end justify-between gap-2 border-b border-border pb-3">
                <h2 className="text-3xl">{country}</h2>
                <p className="text-sm text-muted-foreground">
                  {rows.length} {rows.length === 1 ? "site" : "sites"}
                </p>
              </div>

              <div className="mt-3 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full min-w-[720px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50 text-left text-xs tracking-wide text-muted-foreground uppercase">
                      <th className="px-4 py-3 font-medium">Tier</th>
                      <th className="px-4 py-3 font-medium">Website</th>
                      <th className="px-4 py-3 font-medium">What it is</th>
                      <th className="px-4 py-3 font-medium">Link</th>
                      <th className="px-4 py-3 font-medium">Monitor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      const probe = getMonitorByUrl(row.href);
                      return (
                        <tr
                          key={`${row.country}-${row.slug}-${row.href}`}
                          className="border-b border-border/70 last:border-0"
                        >
                          <td className="px-4 py-3 align-top whitespace-nowrap">
                            <Badge variant="secondary" className="font-normal">
                              {row.tierLabel}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 align-top">
                            <Link
                              href={`/market/${row.slug}`}
                              className="font-medium text-foreground hover:text-primary"
                            >
                              {row.name}
                            </Link>
                            <p className="mt-0.5 text-xs text-muted-foreground capitalize">
                              {row.scale.replace("-", " ")}
                            </p>
                          </td>
                          <td className="px-4 py-3 align-top text-muted-foreground">
                            {row.kindLabel}
                          </td>
                          <td className="px-4 py-3 align-top">
                            <a
                              href={row.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-primary hover:underline"
                            >
                              {row.host}
                              <ArrowUpRight className="size-3.5 shrink-0" />
                            </a>
                          </td>
                          <td className="px-4 py-3 align-top">
                            {!probe ? (
                              <span className="text-muted-foreground">Not checked yet</span>
                            ) : probe.ok ? (
                              <span className="text-primary">
                                OK {probe.status ?? ""}
                              </span>
                            ) : (
                              <span className="text-destructive" title={probe.error ?? undefined}>
                                Issue {probe.status ?? ""}
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
