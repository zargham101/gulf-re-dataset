import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { forums } from "@/lib/reading";

export const metadata: Metadata = {
  title: "Where people talk",
  description:
    "Forums, review sites, and app stores where Gulf renters and buyers describe what property websites get wrong.",
};

export default function ForumsPage() {
  const groups = [...new Set(forums.map((forum) => forum.where))];

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-medium tracking-wide text-primary uppercase">
        Primary sources
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        Where a normal person says what the website got wrong
      </h1>
      <p className="mt-5 text-lg leading-8">
        Skip the agency blogs. The useful writing is on Reddit, Trustpilot, the
        app stores, and a couple of long-running expat forums. Sort by new.
        A post from 2019 can still describe the building you are about to rent,
        and it can also be out of date. Read the date before you treat it as
        today.
      </p>
      <p className="mt-4 leading-7 text-muted-foreground">
        A lot of live inventory and live anger also moves through WhatsApp and
        Facebook groups. Those groups rename, fill with brokers, and disappear.
        The links below are the ones you can still open in a year.
      </p>

      <div className="mt-10 space-y-10">
        {groups.map((group) => (
          <section key={group}>
            <h2 className="text-2xl">{group}</h2>
            <ul className="mt-3 divide-y divide-border rounded-2xl border border-border bg-card">
              {forums
                .filter((forum) => forum.where === group)
                .map((forum) => (
                  <li key={forum.href} className="px-4 py-4">
                    <a
                      href={forum.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                      {forum.name}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{forum.readFor}</p>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
