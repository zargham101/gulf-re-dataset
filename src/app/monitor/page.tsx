import type { Metadata } from "next";
import Link from "next/link";
import { researchedOn } from "@/lib/desk";
import { getMonitorSnapshot } from "@/lib/monitor-store";

export const metadata: Metadata = {
  title: "Site monitor",
  description:
    "Automated checks of every property website URL on the desk — uptime, HTTP status, and title changes.",
};

export default function MonitorPage() {
  const snapshot = getMonitorSnapshot();
  const hasRun = snapshot.entries.length > 0;
  const failed = snapshot.entries.filter((e) => !e.ok);

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-medium tracking-wide text-primary uppercase">
        Automated checks
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        Updates and link health
      </h1>
      <p className="mt-4 leading-8 text-foreground/90">
        A scheduled job re-visits every URL on the{" "}
        <Link href="/websites" className="text-primary underline-offset-4 hover:underline">
          country table
        </Link>
        . It records HTTP status, whether the homepage still loads, and when the
        HTML title changes. Desk copy (reviews, gaps, rules) is still updated by
        hand; the cron does not rewrite those pages.
      </p>

      <dl className="mt-8 grid gap-3 rounded-2xl border border-border bg-card p-5 sm:grid-cols-2">
        <div>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">
            Desk researched
          </dt>
          <dd className="mt-1 font-medium">{researchedOn}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">
            Last automated check
          </dt>
          <dd className="mt-1 font-medium">
            {hasRun
              ? new Date(snapshot.checkedAt).toLocaleString("en-GB", {
                  dateStyle: "medium",
                  timeStyle: "short",
                  timeZone: "Asia/Karachi",
                }) + " (PKT)"
              : "Not run yet"}
          </dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">
            URLs probed
          </dt>
          <dd className="mt-1 font-medium">
            {hasRun ? `${snapshot.okCount} OK · ${snapshot.failCount} issues` : "—"}
          </dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">
            Changes last run
          </dt>
          <dd className="mt-1 font-medium">
            {hasRun ? snapshot.changesSinceLastRun.length : "—"}
          </dd>
        </div>
      </dl>

      <section className="mt-10">
        <h2 className="text-2xl">How the cron runs</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
          <li>
            <strong>GitHub Actions</strong> — workflow{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
              .github/workflows/monitor-sources.yml
            </code>{" "}
            runs every Monday at 06:00 UTC, executes{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">npm run monitor:check</code>
            , and commits{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
              src/data/monitor-snapshot.json
            </code>{" "}
            when anything changed. Vercel redeploys on that push.
          </li>
          <li>
            <strong>Vercel cron</strong> —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">vercel.json</code> hits{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
              /api/cron/check-sources
            </code>{" "}
            on the same schedule. Set{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">CRON_SECRET</code> in Vercel.
            Optionally set{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">GITHUB_TOKEN</code> and{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">GITHUB_REPOSITORY</code> so
            the API can commit the snapshot without waiting for Monday’s GitHub Action.
          </li>
          <li>
            <strong>Local</strong> — run{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">npm run monitor:check</code>{" "}
            anytime before you push.
          </li>
        </ol>
      </section>

      {hasRun && snapshot.changesSinceLastRun.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-2xl">Latest changes detected</h2>
          <ul className="mt-3 space-y-2">
            {snapshot.changesSinceLastRun.map((change) => (
              <li
                key={`${change.type}-${change.url}-${change.message}`}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm leading-6"
              >
                <span className="font-medium text-foreground">
                  {change.country} — {change.name}
                </span>
                <span className="text-muted-foreground"> · {change.message}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {hasRun && failed.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-2xl">Sites that failed the last check</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Some block automated requests (403) even when the site works in a
            browser. Open the link yourself before you treat it as down.
          </p>
          <ul className="mt-3 divide-y divide-border rounded-2xl border border-border bg-card">
            {failed.map((entry) => (
              <li key={entry.url} className="px-4 py-3 text-sm">
                <p className="font-medium">
                  {entry.country} — {entry.name}
                </p>
                <p className="text-muted-foreground">
                  {entry.error ?? "Failed"} ·{" "}
                  <a href={entry.url} className="text-primary hover:underline" target="_blank" rel="noreferrer">
                    {entry.host}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {!hasRun ? (
        <p className="mt-10 rounded-2xl border border-dashed border-border bg-card/60 px-5 py-8 text-center text-muted-foreground">
          No snapshot yet. After you clone the repo, run{" "}
          <code className="text-foreground">npm run monitor:check</code> once, commit the
          JSON file, and push — or wait for the first GitHub Actions run.
        </p>
      ) : null}
    </div>
  );
}
