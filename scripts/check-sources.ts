import fs from "node:fs";
import path from "node:path";
import type { MonitorSnapshot } from "../src/lib/monitor-types";
import { runMonitorCheck } from "../src/lib/run-monitor-check";

const snapshotPath = path.join(process.cwd(), "src/data/monitor-snapshot.json");

async function main() {
  let previous: MonitorSnapshot | undefined;
  if (fs.existsSync(snapshotPath)) {
    const raw = JSON.parse(fs.readFileSync(snapshotPath, "utf8")) as MonitorSnapshot;
    if (raw.entries?.length) previous = raw;
  }

  console.log("Probing property sites listed on the desk…");
  const next = await runMonitorCheck(previous);
  fs.writeFileSync(snapshotPath, `${JSON.stringify(next, null, 2)}\n`, "utf8");

  console.log(
    `Done. ${next.okCount}/${next.targetCount} responded OK. ${next.failCount} failed. ${next.changesSinceLastRun.length} change(s) since last run.`
  );
  if (next.changesSinceLastRun.length) {
    for (const change of next.changesSinceLastRun.slice(0, 20)) {
      console.log(`  [${change.type}] ${change.country} — ${change.name}: ${change.message}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
