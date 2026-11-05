import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import type { MonitorSnapshot } from "@/lib/monitor-types";
import { runMonitorCheck } from "@/lib/run-monitor-check";
import { getMonitorSnapshot } from "@/lib/monitor-store";

export const maxDuration = 300;
export const dynamic = "force-dynamic";

function authorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return process.env.NODE_ENV !== "production";
  const header = request.headers.get("authorization");
  return header === `Bearer ${secret}`;
}

async function commitSnapshotToGitHub(snapshot: MonitorSnapshot) {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPOSITORY;
  if (!token || !repo) return { committed: false as const, reason: "missing_github_env" };

  const [owner, name] = repo.split("/");
  if (!owner || !name) return { committed: false as const, reason: "bad_github_repository" };

  const filePath = "src/data/monitor-snapshot.json";
  const content = Buffer.from(`${JSON.stringify(snapshot, null, 2)}\n`).toString("base64");
  const apiBase = `https://api.github.com/repos/${owner}/${name}/contents/${filePath}`;

  let sha: string | undefined;
  const existing = await fetch(`${apiBase}?ref=main`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (existing.ok) {
    const body = (await existing.json()) as { sha?: string };
    sha = body.sha;
  }

  const put = await fetch(apiBase, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `chore(monitor): refresh site checks (${snapshot.okCount}/${snapshot.targetCount} OK)`,
      content,
      sha,
      branch: "main",
    }),
  });

  if (!put.ok) {
    const text = await put.text();
    return { committed: false as const, reason: text.slice(0, 200) };
  }
  return { committed: true as const };
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let previous: MonitorSnapshot | undefined;
  try {
    const current = getMonitorSnapshot();
    if (current.entries.length) previous = current;
  } catch {
    /* empty snapshot */
  }

  const snapshot = await runMonitorCheck(previous);

  if (process.env.VERCEL !== "1") {
    const snapshotPath = path.join(process.cwd(), "src/data/monitor-snapshot.json");
    fs.writeFileSync(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
  }

  const git = await commitSnapshotToGitHub(snapshot);

  return NextResponse.json({
    ok: true,
    checkedAt: snapshot.checkedAt,
    okCount: snapshot.okCount,
    failCount: snapshot.failCount,
    targetCount: snapshot.targetCount,
    changes: snapshot.changesSinceLastRun.length,
    github: git,
    note:
      process.env.VERCEL === "1" && !git.committed
        ? "On Vercel, set GITHUB_TOKEN and GITHUB_REPOSITORY (and CRON_SECRET) so cron can commit monitor-snapshot.json, or rely on the GitHub Actions schedule in this repo."
        : undefined,
  });
}
