import cs2Img from "@/assets/games/cs2.jpg";
import valorantImg from "@/assets/games/valorant.jpg";
import apexImg from "@/assets/games/apex.jpg";
import rustImg from "@/assets/games/rust.jpg";
import eftImg from "@/assets/games/eft.jpg";
import fortniteImg from "@/assets/games/fortnite.jpg";
import warzoneImg from "@/assets/games/warzone.jpg";
import pubgImg from "@/assets/games/pubg.jpg";

export type GameStatus = "operational" | "updating" | "detected";

export interface DetectionEvent {
  date: string;
  resolvedIn: string;
  note: string;
}

export interface Game {
  slug: string;
  name: string;
  tag: string;
  status: GameStatus;
  version: string;
  image: string;
  publisher: string;
  anticheat: string;
  lastUpdated: string;
  uptimeDays: number;
  activeUsers: number;
  tagline: string;
  description: string;
  features: string[];
  detectionHistory: DetectionEvent[];
  systemRequirements: {
    os: string;
    cpu: string;
    ram: string;
    gpu: string;
  };
}

const imageMap: Record<string, string> = {
  "counter-strike-2": cs2Img,
  valorant: valorantImg,
  "apex-legends": apexImg,
  rust: rustImg,
  "escape-from-tarkov": eftImg,
  fortnite: fortniteImg,
  "call-of-duty-warzone": warzoneImg,
  pubg: pubgImg,
};

const rawGames: Omit<Game, "image">[] = [
  {
    slug: "counter-strike-2",
    name: "Counter-Strike 2",
    tag: "CS2",
    status: "operational",
    version: "v2.4.1",
    publisher: "Valve",
    anticheat: "VAC Live + VACnet 3.0",
    lastUpdated: "2 days ago",
    uptimeDays: 187,
    activeUsers: 2340,
    tagline: "Frame-perfect tap timing for the world's most-played FPS.",
    description:
      "Surgical recoil control, tick-aligned trigger logic, and stealth-grade memory hygiene tuned specifically for Source 2's networking model.",
    features: [
      "Sub-tick triggerbot",
      "Recoil compensation per weapon",
      "Smoke / flash awareness HUD",
      "Visibility-checked ESP",
      "Hot-reloadable Lua scripts",
      "Streamer-safe overlay",
    ],
    detectionHistory: [
      { date: "2024-03-12", resolvedIn: "4h", note: "VACnet signature flagged — patched same day." },
      { date: "2023-11-08", resolvedIn: "2h", note: "Memory pattern shift after Valve patch." },
    ],
    systemRequirements: {
      os: "Windows 10/11 x64",
      cpu: "Intel i5-8400 / Ryzen 5 2600",
      ram: "8 GB",
      gpu: "GTX 1060 or better",
    },
  },
  {
    slug: "valorant",
    name: "Valorant",
    tag: "VAL",
    status: "updating",
    version: "v1.9.0",
    publisher: "Riot Games",
    anticheat: "Vanguard (kernel)",
    lastUpdated: "Patching for episode rollover",
    uptimeDays: 92,
    activeUsers: 1810,
    tagline: "Kernel-aware bypass tuned for Vanguard's evolving heuristics.",
    description:
      "A dedicated kernel companion handles Vanguard's introspection while user-land logic stays minimal and signature-free.",
    features: [
      "Kernel-side memory broker",
      "Agent-aware ability prediction",
      "Spread-corrected aim assist",
      "Round-state HUD",
      "Auto-pause on tab-out",
    ],
    detectionHistory: [
      { date: "2024-02-01", resolvedIn: "11h", note: "Vanguard driver signature update." },
      { date: "2023-09-22", resolvedIn: "6h", note: "Heuristic flag on memory read pattern." },
    ],
    systemRequirements: {
      os: "Windows 10/11 x64 (Secure Boot off)",
      cpu: "Intel i5-9400 / Ryzen 5 3600",
      ram: "16 GB",
      gpu: "GTX 1650 or better",
    },
  },
  {
    slug: "apex-legends",
    name: "Apex Legends",
    tag: "APX",
    status: "operational",
    version: "v3.1.2",
    publisher: "Respawn / EA",
    anticheat: "Easy Anti-Cheat",
    lastUpdated: "5 days ago",
    uptimeDays: 211,
    activeUsers: 1432,
    tagline: "Predictive aim built for Apex's projectile-based combat.",
    description:
      "Bullet-drop and travel-time compensated targeting, paired with full legend-ability awareness and loot ESP.",
    features: [
      "Projectile prediction",
      "Legend ultimate tracker",
      "Loot tier ESP",
      "Ring damage forecast",
      "Auto-loot toggle",
    ],
    detectionHistory: [
      { date: "2023-12-04", resolvedIn: "3h", note: "EAC ruleset update — fast patch." },
    ],
    systemRequirements: {
      os: "Windows 10/11 x64",
      cpu: "Intel i5-8400 / Ryzen 5 2600",
      ram: "8 GB",
      gpu: "GTX 1060 or better",
    },
  },
  {
    slug: "rust",
    name: "Rust",
    tag: "RST",
    status: "operational",
    version: "v2.0.7",
    publisher: "Facepunch",
    anticheat: "EAC + Server-side",
    lastUpdated: "1 week ago",
    uptimeDays: 304,
    activeUsers: 980,
    tagline: "Wipe-day ready: full-loot ESP and silent-aim with recoil-perfect script firing.",
    description:
      "Built for raid windows. Heli/bradley overlays, sleeping-bag tracking, and zero-recoil per-weapon scripts.",
    features: [
      "Full player + sleeper ESP",
      "Per-weapon recoil scripts",
      "Resource node finder",
      "Patrol heli HP overlay",
      "Stash detection",
    ],
    detectionHistory: [
      { date: "2024-01-19", resolvedIn: "8h", note: "Server-side movement validation tweak." },
    ],
    systemRequirements: {
      os: "Windows 10/11 x64",
      cpu: "Intel i7-9700 / Ryzen 5 3600",
      ram: "16 GB",
      gpu: "GTX 1660 or better",
    },
  },
  {
    slug: "escape-from-tarkov",
    name: "Escape From Tarkov",
    tag: "EFT",
    status: "operational",
    version: "v4.2.0",
    publisher: "Battlestate Games",
    anticheat: "BattlEye",
    lastUpdated: "3 days ago",
    uptimeDays: 156,
    activeUsers: 1120,
    tagline: "Loot-first ESP, extract-aware navigation, BattlEye-safe injection.",
    description:
      "Engineered for the Tarkov economy: item-value ESP, raid-timer tracking, and PMC/Scav awareness.",
    features: [
      "Item value ESP (₽)",
      "Extract proximity HUD",
      "PMC vs Scav tagging",
      "Loot container scanner",
      "Raid timer overlay",
    ],
    detectionHistory: [
      { date: "2024-02-28", resolvedIn: "5h", note: "BattlEye config push — recompiled." },
      { date: "2023-10-14", resolvedIn: "9h", note: "Wipe patch broke offsets." },
    ],
    systemRequirements: {
      os: "Windows 10/11 x64",
      cpu: "Intel i7-9700 / Ryzen 7 3700X",
      ram: "16 GB",
      gpu: "GTX 1660 or better",
    },
  },
  {
    slug: "fortnite",
    name: "Fortnite",
    tag: "FN",
    status: "detected",
    version: "v0.9.3",
    publisher: "Epic Games",
    anticheat: "EAC + BattlEye",
    lastUpdated: "Currently down — rebuild in progress",
    uptimeDays: 0,
    activeUsers: 0,
    tagline: "Temporarily offline while we re-engineer for the latest chapter patch.",
    description:
      "Fortnite is currently flagged. Our team is rebuilding the loader against the new EAC ruleset. ETA in #announcements.",
    features: [
      "Build-aware ESP (queued)",
      "Mat-tier loot scanner (queued)",
      "Storm prediction (queued)",
    ],
    detectionHistory: [
      { date: "2024-04-18", resolvedIn: "Active", note: "Chapter update flipped EAC heuristics — rebuild underway." },
      { date: "2024-01-02", resolvedIn: "14h", note: "Routine EAC signature push." },
    ],
    systemRequirements: {
      os: "Windows 10/11 x64",
      cpu: "Intel i5-8400 / Ryzen 5 2600",
      ram: "8 GB",
      gpu: "GTX 1060 or better",
    },
  },
  {
    slug: "call-of-duty-warzone",
    name: "Call of Duty: Warzone",
    tag: "WZ",
    status: "updating",
    version: "v2.1.0",
    publisher: "Activision",
    anticheat: "Ricochet (kernel)",
    lastUpdated: "Mid-season patch — recompiling",
    uptimeDays: 41,
    activeUsers: 760,
    tagline: "Ricochet-tuned, gulag-aware, with full attachment recoil profiles.",
    description:
      "Warzone moves fast. We recompile within hours of every mid-season drop and ship per-weapon recoil tables on day one.",
    features: [
      "Ricochet-aware injection",
      "Per-attachment recoil profiles",
      "Gas circle predictor",
      "Loadout drop ESP",
      "Gulag spawn tracker",
    ],
    detectionHistory: [
      { date: "2024-03-30", resolvedIn: "6h", note: "Ricochet kernel module updated." },
      { date: "2024-01-25", resolvedIn: "12h", note: "Mid-season heuristic shift." },
    ],
    systemRequirements: {
      os: "Windows 10/11 x64",
      cpu: "Intel i7-9700 / Ryzen 7 3700X",
      ram: "16 GB",
      gpu: "GTX 1660 Super or better",
    },
  },
  {
    slug: "pubg",
    name: "PUBG",
    tag: "PUBG",
    status: "operational",
    version: "v1.7.4",
    publisher: "Krafton",
    anticheat: "BattlEye + Zakynthos",
    lastUpdated: "4 days ago",
    uptimeDays: 268,
    activeUsers: 540,
    tagline: "Long-range bullet-drop solver and vehicle-aware ESP.",
    description:
      "Tuned for PUBG's long sightlines: ballistic compensation, vehicle health overlays, and a discreet care-package tracker.",
    features: [
      "Bullet-drop solver",
      "Vehicle health ESP",
      "Care package scanner",
      "Blue-zone damage forecast",
      "Silent-aim with FOV cap",
    ],
    detectionHistory: [
      { date: "2023-12-19", resolvedIn: "7h", note: "BattlEye signature refresh." },
    ],
    systemRequirements: {
      os: "Windows 10/11 x64",
      cpu: "Intel i5-8400 / Ryzen 5 2600",
      ram: "8 GB",
      gpu: "GTX 1060 or better",
    },
  },
];

export const games: Game[] = rawGames.map((g) => ({ ...g, image: imageMap[g.slug] }));

export const statusMeta: Record<GameStatus, { label: string; color: string; dot: string }> = {
  operational: { label: "Operational", color: "text-success", dot: "bg-[oklch(0.74_0.16_155)]" },
  updating:    { label: "Updating",    color: "text-warning", dot: "bg-[oklch(0.80_0.16_85)]" },
  detected:    { label: "Detected",    color: "text-destructive", dot: "bg-[oklch(0.62_0.22_25)]" },
};

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
