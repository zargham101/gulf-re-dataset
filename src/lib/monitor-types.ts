export type MonitorProbeResult = {
  url: string;
  slug: string;
  name: string;
  country: string;
  host: string;
  ok: boolean;
  status: number | null;
  finalUrl: string | null;
  title: string | null;
  error: string | null;
  checkedAt: string;
};

export type MonitorChange = {
  type: "down" | "up" | "status" | "title" | "url";
  url: string;
  name: string;
  country: string;
  message: string;
};

export type MonitorSnapshot = {
  version: 1;
  checkedAt: string;
  deskResearchedOn: string;
  targetCount: number;
  okCount: number;
  failCount: number;
  entries: MonitorProbeResult[];
  changesSinceLastRun: MonitorChange[];
};
