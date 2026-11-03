import type { Metadata } from "next";
import Link from "next/link";
import { rules } from "@/lib/reading";

export const metadata: Metadata = {
  title: "How the rules work",
  description:
    "Plain-language notes on how renting and buying actually works on Gulf property websites, country by country.",
};

export default function SystemPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-medium tracking-wide text-primary uppercase">
        So the website stops feeling like a private language
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        The local rules, in the order a person meets them
      </h1>
      <p className="mt-5 text-lg leading-8">
        Portals assume you already know what a permit, a cheque, a chiller, and
        a housing program are. That assumption is why a newcomer can use the
        filters perfectly and still get the deal wrong. These notes are the
        missing manual. They are not legal advice. Fees and eligibility change.
        The official site named on each{" "}
        <Link href="/" className="text-primary underline-offset-4 hover:underline">
          directory entry
        </Link>{" "}
        is the one to confirm against.
      </p>

      <div className="mt-10 space-y-12">
        {rules.map((block) => (
          <section key={block.country}>
            <h2 className="text-3xl">{block.country}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{block.lede}</p>
            <ol className="mt-5 space-y-5">
              {block.points.map((point, index) => (
                <li key={point.title} className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl">{point.title}</h3>
                  <p className="mt-2 leading-7">{point.body}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
