export type GameStatus = "operational" | "updating" | "detected" ;

export interface Game {
  name: string;
  tag: string;
  status: GameStatus;
  version: string;
}

export const games: Game[] = [
  { name: "Phantom Forces", tag: "PF", status: "operational", version: "v0.2.1" },
  { name: "Operation One", tag: "OONE", status: "updating", version: "v0.0.0" },
  { name: "Universal", tag: "UNI", status: "detected", version: "v1.0.0" },
];

export const statusMeta: Record<GameStatus, { label: string; color: string; dot: string }> = {
  operational: { label: "Operational", color: "text-success", dot: "bg-[oklch(0.74_0.16_155)]" },
  updating:    { label: "Updating",    color: "text-warning", dot: "bg-[oklch(0.80_0.16_85)]" },
  detected:    { label: "Detected",    color: "text-destructive", dot: "bg-[oklch(0.62_0.22_25)]" },
};
