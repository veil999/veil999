export type GameStatus = "operational" | "updating" | "detected";

export interface Game {
  name: string;
  tag: string;
  status: GameStatus;
  version: string;
}

export const games: Game[] = [
  { name: "Counter-Strike 2", tag: "CS2", status: "operational", version: "v2.4.1" },
  { name: "Valorant", tag: "VAL", status: "updating", version: "v1.9.0" },
  { name: "Apex Legends", tag: "APX", status: "operational", version: "v3.1.2" },
  { name: "Rust", tag: "RST", status: "operational", version: "v2.0.7" },
  { name: "Escape From Tarkov", tag: "EFT", status: "operational", version: "v4.2.0" },
  { name: "Fortnite", tag: "FN", status: "detected", version: "v0.9.3" },
  { name: "Call of Duty: Warzone", tag: "WZ", status: "updating", version: "v2.1.0" },
  { name: "PUBG", tag: "PUBG", status: "operational", version: "v1.7.4" },
];

export const statusMeta: Record<GameStatus, { label: string; color: string; dot: string }> = {
  operational: { label: "Operational", color: "text-success", dot: "bg-[oklch(0.74_0.16_155)]" },
  updating:    { label: "Updating",    color: "text-warning", dot: "bg-[oklch(0.80_0.16_85)]" },
  detected:    { label: "Detected",    color: "text-destructive", dot: "bg-[oklch(0.62_0.22_25)]" },
};
