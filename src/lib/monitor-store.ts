import snapshot from "@/data/monitor-snapshot.json";
import type { MonitorSnapshot } from "./monitor-types";

export function getMonitorSnapshot(): MonitorSnapshot {
  return snapshot as MonitorSnapshot;
}

export function getMonitorByUrl(url: string) {
  const snap = getMonitorSnapshot();
  return snap.entries.find((entry) => entry.url === url);
}
