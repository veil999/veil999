import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { games, statusMeta } from "@/data/games";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Supported Games — Pegasus.Tech" },
      { name: "description", content: "Full list of games supported by the Pegasus.Tech scripting utility, with live status." },
      { property: "og:title", content: "Supported Games — Pegasus.Tech" },
      { property: "og:description", content: "Live status across every supported title." },
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-20 flex-1">
        <h1 className="font-display text-5xl font-bold tracking-tighter">
          Supported <span className="text-gradient-frost">titles</span>
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Every title we currently support, with real-time status. New games added monthly.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((g) => {
            const m = statusMeta[g.status];
            return (
              <div key={g.tag} className={`frost-pop glass rounded-xl p-6 ${g.tag.length % 2 === 0 ? "tilt-right" : ""}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs px-2 py-1 rounded bg-secondary/60 text-frost">{g.tag}</span>
                  <span className="font-mono text-xs text-muted-foreground">{g.version}</span>
                </div>
                <h3 className="font-display text-lg font-semibold">{g.name}</h3>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className={`h-2 w-2 rounded-full ${m.dot}`} />
                  <span className={m.color}>{m.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
