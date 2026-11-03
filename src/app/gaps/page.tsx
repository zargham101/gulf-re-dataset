import type { Metadata } from "next";
import Link from "next/link";
import { gaps, sideTools } from "@/lib/reading";

export const metadata: Metadata = {
  title: "What's missing",
  description:
    "The flaws Gulf property websites share, and the single card that would make them easier to trust.",
};

export default function GapsPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-medium tracking-wide text-primary uppercase">
        From the reviews, not from a feature wishlist
      </p>
        <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
          The listing needs a straight answer on the card.
        </h1>
      <p className="mt-5 text-lg leading-8">
        Read{" "}
        <Link href="/forums" className="text-primary underline-offset-4 hover:underline">
          the forums and the app stores
        </Link>{" "}
        and the same eight frustrations return, whether the ad is a room on
        dubizzle or a tower on Bayut. People can forgive a plain website. They
        cannot forgive spending a Thursday crossing a city for a home that was
        never free, at a price that was never the price.
      </p>

      <section className="mt-10">
        <h2 className="text-3xl">The card they are asking for</h2>
        <p className="mt-3 leading-7 text-foreground/90">
          One block on every listing, in Arabic and English, written for someone
          who does not work in property. If a portal added only this, and removed
          ads that cannot fill it in, the search would feel different the same
          week. The numbers below are a worked example so you can see the shape.
          They are not a quote and not a live home.
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/60 px-4 py-2 text-xs tracking-wide text-muted-foreground uppercase">
            <span>Example card · not a real listing</span>
            <span>Dubai rental</span>
          </div>
          <div className="space-y-4 p-5">
            <div>
              <p className="text-sm text-muted-foreground">1 bed · example tower · Dubai Marina</p>
              <p className="font-heading text-3xl">AED 90,000 a year</p>
              <p className="text-sm text-primary">Advertised rent. The cash you need is higher.</p>
            </div>
            <dl className="grid gap-2 text-sm">
              <Row label="Still free?" value="Confirmed 2 days ago by the licensed broker. Expires in 5 days if nobody confirms again." />
              <Row label="This exact home" value="One unit. Three other agency ads folded in. Their prices ran 90,000–98,000." />
              <Row label="Agency fee, about 5%" value="AED 4,500. A habit, not a tax. Ask." />
              <Row label="Deposit, about 5%" value="AED 4,500, refundable if the contract says so." />
              <Row label="Cheques" value="1 cheque means AED 90,000 leaves your account before you move." />
              <Row label="Day-one cash before utilities" value="About AED 99,000, then DEWA’s deposit and Ejari’s small registration fee." />
              <Row label="Not in the rent" value="District cooling is a separate bill in many Marina towers. DEWA is another." />
              <Row label="Building" value="Service charge on the official record. Unit not blocked. Families and singles: ask, the ad did not say." />
              <Row label="Who can say yes" value="Named RERA broker, office number visible. Owner is not on this ad." />
            </dl>
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          A purchase card has the same bones: asking price, land-department fee,
          agency fee, trustee, service charge per year, and the last recorded
          sale in the building. On an off-plan home, swap the cheque lines for
          the payment plan by date. In Saudi Arabia the proof line is the REGA
          ad licence and an Ejar contract, not Trakheesi. In Kuwait it is the
          PACI address. In Oman it is whether a foreigner can own that building.
        </p>
      </section>

      <ol className="mt-12 space-y-8">
        {gaps.map((gap, index) => (
          <li key={gap.slug} className="border-t border-border pt-6">
            <p className="text-sm font-medium text-primary">0{index + 1}</p>
            <h2 className="mt-1 text-2xl">{gap.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{gap.whoFeelsIt}</p>
            <p className="mt-3 leading-7">{gap.problem}</p>
            <p className="mt-3 leading-7">
              <span className="font-medium">What to add. </span>
              {gap.change}
            </p>
            <p className="mt-3 leading-7 text-muted-foreground">
              <span className="font-medium text-foreground">Closest thing that exists. </span>
              {gap.closest}
            </p>
            <ul className="mt-3 flex flex-col gap-1 text-sm">
              {gap.sources.map((source) => (
                <li key={source.href}>
                  <a className="text-primary hover:underline" href={source.href} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <section className="mt-12">
        <h2 className="text-2xl">Tools that appeared because the portals left a hole</h2>
        <p className="mt-2 leading-7 text-muted-foreground">
          These are not Gulf-wide marketplaces. They are evidence. Someone built
          them so a normal person could see a cost, a sale record, or a school
          run the listing page skipped.
        </p>
        <ul className="mt-4 space-y-3">
          {sideTools.map((tool) => (
            <li key={tool.href} className="rounded-xl border border-border bg-card px-4 py-3">
              <a className="font-medium text-primary hover:underline" href={tool.href} target="_blank" rel="noreferrer">
                {tool.name}
              </a>
              <p className="text-sm leading-6 text-muted-foreground">{tool.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-border/70 pb-2 sm:grid-cols-[11rem_1fr]">
      <dt className="text-muted-foreground">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
