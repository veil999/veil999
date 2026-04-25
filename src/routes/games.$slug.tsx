import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar, DISCORD_URL } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getGameBySlug, games, statusMeta } from "@/data/games";
import {
  ArrowLeft,
  Check,
  ShieldAlert,
  Activity,
  Users,
  Calendar,
  Cpu,
  HardDrive,
  MonitorPlay,
  Building2,
  Lock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/games/$slug")({
  loader: ({ params }) => {
    const game = getGameBySlug(params.slug);
    if (!game) throw notFound();
    return { game };
  },
  head: ({ loaderData }) => {
    const g = loaderData?.game;
    if (!g) return { meta: [{ title: "Game — Pegasus.Tech" }] };
    return {
      meta: [
        { title: `${g.name} — Pegasus.Tech` },
        { name: "description", content: g.tagline },
        { property: "og:title", content: `${g.name} — Pegasus.Tech` },
        { property: "og:description", content: g.tagline },
        { name: "theme-color", content: "#7ad6ff" },
        { name: "author", content: "Pegasus.Tech" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-32 flex-1 text-center">
        <h1 className="font-display text-4xl font-bold">Game not found</h1>
        <p className="mt-3 text-muted-foreground">That title isn't in our supported list.</p>
        <Link to="/games" className="mt-8 inline-flex items-center gap-2 rounded-md glass px-5 py-2.5 text-sm">
          <ArrowLeft className="h-4 w-4" /> Back to all games
        </Link>
      </main>
      <Footer />
    </div>
  ),
  component: GameDetailPage,
});

function GameDetailPage() {
  const { game: g } = Route.useLoaderData();
  const m = statusMeta[g.status];

  const related = games.filter((x) => x.slug !== g.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border/40">
          {/* Backdrop image */}
          <div className="absolute inset-0">
            <img
              src={g.image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-frost/20 blur-[120px] opacity-50" />

          <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-20">
            <Link
              to="/games"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-frost transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> All supported titles
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs px-2 py-1 rounded bg-secondary/60 text-frost">{g.tag}</span>
              <div className="flex items-center gap-1.5 text-sm">
                <span className={`h-2 w-2 rounded-full ${m.dot} ${g.status === "operational" ? "animate-pulse" : ""}`} />
                <span className={m.color}>{m.label}</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">• {g.version}</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tighter">
              {g.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{g.tagline}</p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              <Stat icon={Users} label="Active users" value={g.activeUsers.toLocaleString()} />
              <Stat icon={Activity} label="Uptime" value={`${g.uptimeDays} days`} />
              <Stat icon={Building2} label="Publisher" value={g.publisher} />
              <Stat icon={ShieldAlert} label="Anti-cheat" value={g.anticheat} />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-3 gap-8">
          {/* LEFT — main */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{g.description}</p>
            </section>

            {/* Features */}
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Feature list</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {g.features.map((f) => (
                  <div key={f} className="frost-pop glass rounded-lg p-3 flex items-start gap-3">
                    <div className="h-5 w-5 rounded-md bg-gradient-frost flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Detection history */}
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">Detection history</h2>
              {g.detectionHistory.length === 0 ? (
                <div className="glass rounded-lg p-6 text-sm text-muted-foreground">
                  No recorded detections. Clean track record since launch.
                </div>
              ) : (
                <div className="relative pl-6">
                  <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
                  <div className="space-y-5">
                    {g.detectionHistory.map((e, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[19px] top-1.5 h-3 w-3 rounded-full bg-frost ring-4 ring-background" />
                        <div className="glass rounded-lg p-4">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {e.date}
                            </div>
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-secondary/60 text-frost">
                              Resolved in {e.resolvedIn}
                            </span>
                          </div>
                          <p className="mt-2 text-sm">{e.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* RIGHT — sidebar */}
          <aside className="space-y-6">
            <div className="frost-pop glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-1">
                <Lock className="h-4 w-4 text-frost" />
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Access</span>
              </div>
              <h3 className="font-display text-xl font-semibold">Private cheat</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Pegasus.Tech is invite-only. Join the Discord to request access and check current openings for {g.name}.
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-frost px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-frost hover:shadow-glow transition-all"
              >
                Join the Discord
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="frost-pop glass rounded-xl p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                System requirements
              </h3>
              <dl className="space-y-3 text-sm">
                <Req icon={MonitorPlay} label="OS" value={g.systemRequirements.os} />
                <Req icon={Cpu} label="CPU" value={g.systemRequirements.cpu} />
                <Req icon={HardDrive} label="RAM" value={g.systemRequirements.ram} />
                <Req icon={MonitorPlay} label="GPU" value={g.systemRequirements.gpu} />
              </dl>
            </div>

            <div className="frost-pop glass rounded-xl p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Last updated
              </h3>
              <p className="text-sm">{g.lastUpdated}</p>
            </div>
          </aside>
        </div>

        {/* Related */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-display text-2xl font-semibold mb-6">Other supported titles</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r) => {
              const rm = statusMeta[r.status];
              return (
                <Link
                  key={r.slug}
                  to="/games/$slug"
                  params={{ slug: r.slug }}
                  className="frost-pop glass rounded-xl p-5 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-secondary/60 text-frost">{r.tag}</span>
                    <span className={`h-2 w-2 rounded-full ${rm.dot}`} />
                  </div>
                  <div className="font-medium group-hover:text-frost transition-colors">{r.name}</div>
                  <div className={`text-xs ${rm.color} mt-1`}>{rm.label}</div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="glass rounded-lg p-4">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
        <Icon className="h-3 w-3" />
        {label}
      </div>
      <div className="font-mono text-sm font-semibold truncate">{value}</div>
    </div>
  );
}

function Req({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-4 w-4 text-frost mt-0.5 flex-shrink-0" />
      <div className="min-w-0">
        <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</dt>
        <dd className="text-sm">{value}</dd>
      </div>
    </div>
  );
}
