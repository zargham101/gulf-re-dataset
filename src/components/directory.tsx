"use client";

import { useMemo, useState, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GradeRail } from "@/components/grade-rail";
import {
  countries,
  grades,
  gradeLabel,
  kindLabel,
  kinds,
  marketplaces,
  scaleLabel,
  type Country,
  type Grade,
  type Kind,
} from "@/lib/desk";
import { cn } from "cn";

function isCountry(value: string | null): value is Country {
  return countries.some((country) => country === value);
}

function isGrade(value: string | null): value is Grade {
  return grades.some((grade) => grade === value);
}

function isKind(value: string | null): value is Kind {
  return kinds.some((kind) => kind === value);
}

export function Directory() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const countryParam = params.get("country");
  const gradeParam = params.get("grade");
  const kindParam = params.get("kind");
  const country: Country | null = isCountry(countryParam) ? countryParam : null;
  const grade: Grade | null = isGrade(gradeParam) ? gradeParam : null;
  const kind: Kind | null = isKind(kindParam) ? kindParam : null;

  function write(next: Record<string, string | null>) {
    const data = new URLSearchParams(params.toString());
    data.delete("q");
    for (const [key, value] of Object.entries(next)) {
      if (value) data.set(key, value);
      else data.delete(key);
    }
    const search = data.toString();
    router.replace(search ? `${pathname}?${search}` : pathname, { scroll: false });
  }

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return marketplaces.filter((place) => {
      if (country && !place.countries.includes(country)) return false;
      if (grade && !place.grades.includes(grade)) return false;
      if (kind && place.kind !== kind) return false;
      if (!needle) return true;
      const haystack = [
        place.name,
        place.arabicName ?? "",
        place.summary,
        place.missing,
        place.whoItsFor,
        ...place.countries,
        ...place.flaws,
        ...place.strengths,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [country, grade, kind, query]);

  const filtersOn = Boolean(country || grade || kind || query.trim());

  return (
    <div id="directory" className="scroll-mt-24">
      <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm sm:p-5">
        <label className="relative block">
          <span className="sr-only">Search the desk</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a name, a city, or a flaw — Aqar, service charge, Lusail…"
            className="h-11 bg-background pl-9"
          />
        </label>

        <div className="mt-4 space-y-3">
          <FilterRow label="Country">
            <Chip active={!country} onClick={() => write({ country: null })}>
              All six
            </Chip>
            {countries.map((item) => (
              <Chip
                key={item}
                active={country === item}
                onClick={() => write({ country: country === item ? null : item })}
              >
                {item}
              </Chip>
            ))}
          </FilterRow>
          <FilterRow label="Grade">
            <Chip active={!grade} onClick={() => write({ grade: null })}>
              Any budget
            </Chip>
            {grades.map((item) => (
              <Chip
                key={item}
                active={grade === item}
                onClick={() => write({ grade: grade === item ? null : item })}
              >
                {gradeLabel[item]}
              </Chip>
            ))}
          </FilterRow>
          <FilterRow label="Kind">
            <Chip active={!kind} onClick={() => write({ kind: null })}>
              All kinds
            </Chip>
            {kinds.map((item) => (
              <Chip
                key={item}
                active={kind === item}
                onClick={() => write({ kind: kind === item ? null : item })}
              >
                {kindLabel[item]}
              </Chip>
            ))}
          </FilterRow>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "place" : "places"}
            {country ? ` in ${country}` : " across the Gulf"}
          </p>
          {filtersOn ? (
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              onClick={() => {
                setQuery("");
                write({ country: null, grade: null, kind: null });
              }}
            >
              <X className="size-3.5" />
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-border bg-card/60 px-5 py-10 text-center text-muted-foreground">
          Nothing on the desk matches all of that. Clear the grade or the country
          and look again — a luxury desk will rarely also be a budget noticeboard.
        </p>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {filtered.map((place) => {
            const visit =
              place.links.find((link) => link.country === country) ?? place.links[0];
            return (
              <li key={place.slug}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h2 className="text-2xl leading-tight">
                        <Link href={`/market/${place.slug}`} className="hover:text-primary">
                          {place.name}
                        </Link>
                      </h2>
                      {place.arabicName ? (
                        <p className="text-sm text-muted-foreground">
                          <span dir="rtl" lang="ar">
                            {place.arabicName}
                          </span>
                        </p>
                      ) : null}
                    </div>
                    <Badge variant="secondary">{kindLabel[place.kind]}</Badge>
                  </div>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                    {scaleLabel[place.scale]}
                  </p>
                  <div className="mt-3">
                    <GradeRail active={place.grades} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-foreground/90">{place.summary}</p>
                  <p className="mt-3 rounded-xl bg-accent/70 px-3 py-2 text-sm leading-6 text-foreground">
                    <span className="font-medium">Still missing. </span>
                    {place.missing}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {place.countries.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 pt-1">
                    <Link
                      href={`/market/${place.slug}`}
                      className={cn(buttonVariants({ variant: "default" }), "h-9 px-3")}
                    >
                      Full notes
                    </Link>
                    <a
                      href={visit.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(buttonVariants({ variant: "outline" }), "h-9 px-3")}
                    >
                      {visit.label}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <p className="w-20 shrink-0 pt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1 text-sm transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:bg-muted"
      )}
    >
      {children}
    </button>
  );
}
