import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { games, statusMeta } from "@/data/games";
import { Users, Activity, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Supported Games — Pegasus.Tech" },
      { name: "description", content: "Full list of games supported by the Pegasus.Tech scripting utility, with live status, feature breakdowns and detection history." },
      { property: "og:title", content: "Supported Games — Pegasus.Tech" },
      { property: "og:description", content: "Live status across every supported title." },
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (pathname !== "/games") {
    return <Outlet />;
  }

  const operational = games.filter((g) => g.status === "operational").length;
  const totalUsers = games.reduce((sum, g) => sum + g.activeUsers, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-20 flex-1">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.74_0.16_155)] animate-pulse" />
              {operational}/{games.length} titles online
            </div>
            <h1 className="font-display text-5xl font-bold tracking-tighter">
              Supported <span className="text-gradient-frost">titles</span>
            </h1>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Click any game for the full feature list, detection history, and live telemetry.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="glass rounded-lg px-4 py-3">
              <div className="font-mono text-xl font-bold text-frost">{games.length}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Titles</div>
            </div>
            <div className="glass rounded-lg px-4 py-3">
              <div className="font-mono text-xl font-bold text-success">{operational}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Online</div>
            </div>
            <div className="glass rounded-lg px-4 py-3">
              <div className="font-mono text-xl font-bold text-gradient-frost">{(totalUsers / 1000).toFixed(1)}k</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Active</div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {games.map((g, i) => {
            const m = statusMeta[g.status];
            return (
              <Link
                key={g.slug}
                to="/games/$slug"
                params={{ slug: g.slug }}
                className={`group relative frost-pop glass rounded-xl overflow-hidden block transition-all hover:shadow-glow ${
                  i % 2 === 0 ? "tilt-right" : ""
                }`}
              >
                {/* Image banner */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={g.image}
                    alt={`${g.name} cover art`}
                    loading="lazy"
                    width={1024}
                    height={512}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[10px] px-2 py-1 rounded bg-background/70 backdrop-blur text-frost border border-border/40">{g.tag}</span>
                  </div>
                </div>

                <div className="relative p-6 pt-4">
                  <div className="absolute inset-0 bg-gradient-frost opacity-0 group-hover:opacity-[0.06] transition-opacity pointer-events-none" />

                  <h3 className="font-display text-lg font-semibold">{g.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{g.tagline}</p>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${m.dot} ${g.status === "operational" ? "animate-pulse" : ""}`} />
                      <span className={m.color}>{m.label}</span>
                    </div>
                    <span className="font-mono text-muted-foreground">{g.version}</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50 grid grid-cols-3 gap-2 text-[10px]">
                    <div className="flex flex-col items-center gap-0.5">
                      <Users className="h-3 w-3 text-frost" />
                      <span className="font-mono">{g.activeUsers}</span>
                      <span className="text-muted-foreground uppercase tracking-wide">users</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Activity className="h-3 w-3 text-frost" />
                      <span className="font-mono">{g.uptimeDays}d</span>
                      <span className="text-muted-foreground uppercase tracking-wide">uptime</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <ShieldCheck className="h-3 w-3 text-frost" />
                      <span className="font-mono truncate max-w-full">{g.anticheat.split(" ")[0]}</span>
                      <span className="text-muted-foreground uppercase tracking-wide">ac</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
