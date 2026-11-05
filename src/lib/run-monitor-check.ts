import { researchedOn } from "./desk";
import type { MonitorChange, MonitorProbeResult, MonitorSnapshot } from "./monitor-types";
import { listMonitorTargets, monitorTargetCount } from "./website-rows";

const USER_AGENT =
  "GulfPropertyDesk-Monitor/1.0 (+https://cursor.com/codebase/zargham-shaukat/gulf-re-market-analysis)";

function extractTitle(html: string) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!match) return null;
  return match[1].replace(/\s+/g, " ").trim().slice(0, 200) || null;
}

async function probeOne(target: ReturnType<typeof listMonitorTargets>[number]): Promise<MonitorProbeResult> {
  const checkedAt = new Date().toISOString();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 18_000);

  try {
    const response = await fetch(target.url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml",
      },
    });
    clearTimeout(timeout);
    const status = response.status;
    const finalUrl = response.url;
    let title: string | null = null;
    if (response.headers.get("content-type")?.includes("text/html")) {
      const html = await response.text();
      title = extractTitle(html.slice(0, 80_000));
    }
    const ok = status >= 200 && status < 400;
    return {
      url: target.url,
      slug: target.slug,
      name: target.name,
      country: target.country,
      host: target.host,
      ok,
      status,
      finalUrl,
      title,
      error: ok ? null : `HTTP ${status}`,
      checkedAt,
    };
  } catch (err) {
    clearTimeout(timeout);
    const message = err instanceof Error ? err.message : "Request failed";
    return {
      url: target.url,
      slug: target.slug,
      name: target.name,
      country: target.country,
      host: target.host,
      ok: false,
      status: null,
      finalUrl: null,
      title: null,
      error: message,
      checkedAt,
    };
  }
}

function diffSnapshots(
  previous: MonitorProbeResult[] | undefined,
  current: MonitorProbeResult[]
): MonitorChange[] {
  const changes: MonitorChange[] = [];
  const prevByUrl = new Map(previous?.map((e) => [e.url, e]) ?? []);

  for (const entry of current) {
    const prev = prevByUrl.get(entry.url);
    if (!prev) {
      changes.push({
        type: "url",
        url: entry.url,
        name: entry.name,
        country: entry.country,
        message: "New target added to the desk.",
      });
      continue;
    }
    if (prev.ok && !entry.ok) {
      changes.push({
        type: "down",
        url: entry.url,
        name: entry.name,
        country: entry.country,
        message: entry.error ?? "Site unreachable",
      });
    } else if (!prev.ok && entry.ok) {
      changes.push({
        type: "up",
        url: entry.url,
        name: entry.name,
        country: entry.country,
        message: `Back online (${entry.status ?? "OK"})`,
      });
    } else if (
      prev.status !== null &&
      entry.status !== null &&
      prev.status !== entry.status &&
      entry.ok
    ) {
      changes.push({
        type: "status",
        url: entry.url,
        name: entry.name,
        country: entry.country,
        message: `HTTP status ${prev.status} → ${entry.status}`,
      });
    }
    if (
      prev.title &&
      entry.title &&
      prev.title !== entry.title &&
      entry.ok
    ) {
      changes.push({
        type: "title",
        url: entry.url,
        name: entry.name,
        country: entry.country,
        message: `Page title changed`,
      });
    }
  }

  return changes;
}

async function mapInChunks<T, R>(
  items: T[],
  chunkSize: number,
  fn: (item: T) => Promise<R>
): Promise<R[]> {
  const out: R[] = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    out.push(...(await Promise.all(chunk.map(fn))));
  }
  return out;
}

/** Probe every listed property URL (small parallel batches). */
export async function runMonitorCheck(previous?: MonitorSnapshot): Promise<MonitorSnapshot> {
  const targets = listMonitorTargets();
  const entries = await mapInChunks(targets, 4, probeOne);

  const okCount = entries.filter((e) => e.ok).length;
  const changesSinceLastRun = diffSnapshots(previous?.entries, entries);

  return {
    version: 1,
    checkedAt: new Date().toISOString(),
    deskResearchedOn: researchedOn,
    targetCount: monitorTargetCount(),
    okCount,
    failCount: entries.length - okCount,
    entries,
    changesSinceLastRun,
  };
}
