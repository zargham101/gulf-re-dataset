import {
  countries,
  gradeLabel,
  grades,
  kindLabel,
  marketplaces,
  type Country,
  type Grade,
  type Kind,
  type Marketplace,
} from "./desk";

const gradeRank: Record<Grade, number> = {
  luxury: 4,
  upper: 3,
  mid: 2,
  budget: 1,
};

const kindRank: Record<Kind, number> = {
  portal: 1,
  luxury: 2,
  brokerage: 3,
  developer: 4,
  classifieds: 5,
  official: 6,
};

/** Shorter label for the country table (dealerships / agencies grouped with brokerages). */
export const kindTableLabel: Record<Kind, string> = {
  portal: "Listing portal",
  classifieds: "Classifieds / marketplace",
  luxury: "Luxury desk",
  brokerage: "Agency / dealership",
  developer: "Developer (buy direct)",
  official: "Government / regulator",
};

export type WebsiteRow = {
  country: Country;
  name: string;
  slug: string;
  href: string;
  host: string;
  kind: Kind;
  kindLabel: string;
  grades: Grade[];
  tierLabel: string;
  tierRank: number;
  scale: Marketplace["scale"];
};

function tierRankFromGrades(gradesOn: Grade[]) {
  return Math.max(...gradesOn.map((g) => gradeRank[g]));
}

function tierLabelFromGrades(gradesOn: Grade[]) {
  const sorted = [...gradesOn].sort((a, b) => gradeRank[b] - gradeRank[a]);
  return sorted.map((g) => gradeLabel[g]).join(" · ");
}

export function listWebsiteRows(): WebsiteRow[] {
  const rows: WebsiteRow[] = [];

  for (const place of marketplaces) {
    for (const link of place.links) {
      let host = link.href;
      try {
        host = new URL(link.href).hostname.replace(/^www\./, "");
      } catch {
        /* keep href */
      }
      rows.push({
        country: link.country,
        name: place.name,
        slug: place.slug,
        href: link.href,
        host,
        kind: place.kind,
        kindLabel: kindTableLabel[place.kind],
        grades: place.grades,
        tierLabel: tierLabelFromGrades(place.grades),
        tierRank: tierRankFromGrades(place.grades),
        scale: place.scale,
      });
    }
  }

  return rows.sort((a, b) => {
    const countryDelta = countries.indexOf(a.country) - countries.indexOf(b.country);
    if (countryDelta !== 0) return countryDelta;
    if (b.tierRank !== a.tierRank) return b.tierRank - a.tierRank;
    if (kindRank[a.kind] !== kindRank[b.kind]) return kindRank[a.kind] - kindRank[b.kind];
    return a.name.localeCompare(b.name);
  });
}

export function rowsByCountry() {
  const map = new Map<Country, WebsiteRow[]>();
  for (const country of countries) {
    map.set(country, []);
  }
  for (const row of listWebsiteRows()) {
    map.get(row.country)?.push(row);
  }
  return map;
}

export function monitorTargetCount() {
  return listWebsiteRows().length;
}

/** For scripts and cron: flat list of URLs to probe. */
export function listMonitorTargets() {
  return listWebsiteRows().map((row) => ({
    url: row.href,
    slug: row.slug,
    name: row.name,
    country: row.country,
    host: row.host,
  }));
}

export { kindLabel, gradeLabel, grades };
