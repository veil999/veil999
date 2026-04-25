import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, DISCORD_URL } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MediaSection } from "@/components/MediaSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { games, statusMeta } from "@/data/games";
import { Activity, Shield, Zap, Flame, ArrowRight, Gamepad2 } from "lucide-react";
import { TypingText } from "@/components/TypingText";
import logo from "@/assets/logo.png";

const HERO_PHRASES = [
  "refined",
  "weaponized",
  "frostbitten",
  "undetected",
  "surgical",
  "engineered",
  "unleashed",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pegasus.Tech — Premium Scripting Utility" },
      { name: "description", content: "Frost-forged scripting utilities for competitive games. Live status, supported titles, and a thriving Discord community." },
      { property: "og:title", content: "Pegasus.Tech — Premium Scripting Utility" },
      { property: "og:description", content: "Frost-forged scripting utilities for competitive games." },
    ],
  }),
  component: Index,
});

function Index() {
  const operational = games.filter((g) => g.status === "operational").length;
  const total = games.length;
  const uptimePct = Math.round((operational / total) * 100);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.74_0.16_155)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[oklch(0.74_0.16_155)]" />
            </span>
            All systems frosted • {uptimePct}% operational
          </div>

          <img src={logo} alt="" className="mx-auto h-24 w-24 mb-6 drop-shadow-[0_0_30px_oklch(0.85_0.12_220/0.5)]" />

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">
            Scripting,{" "}
            <TypingText phrases={HERO_PHRASES} className="text-gradient-frost" />
            .
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Pegasus.Tech is a precision scripting utility for the most competitive
            titles on the market. Cold execution, surgical control, undetected.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-frost px-6 py-3 text-sm font-semibold text-primary-foreground shadow-frost hover:shadow-glow transition-all"
            >
              Join the Discord
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/games"
              className="inline-flex items-center gap-2 rounded-md border border-border glass px-6 py-3 text-sm font-semibold hover:bg-secondary/60 transition-colors"
            >
              <Gamepad2 className="h-4 w-4" />
              View supported games
            </Link>
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="mx-auto max-w-7xl px-6 -mt-16">
        <div className="glass rounded-2xl p-8 shadow-frost">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-2xl font-semibold flex items-center gap-2">
                <Activity className="h-5 w-5 text-frost" />
                Live Status
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Real-time product health across all supported titles.</p>
            </div>
            <div className="text-right hidden sm:block">
              <div className="font-mono text-3xl text-gradient-frost font-bold">{uptimePct}%</div>
              <div className="text-xs text-muted-foreground">operational</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {games.slice(0, 4).map((g) => {
              const m = statusMeta[g.status];
              return (
                <div key={g.tag} className="frost-pop rounded-lg border border-border bg-card/40 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-muted-foreground">{g.tag}</span>
                    <span className={`h-2 w-2 rounded-full ${m.dot}`} />
                  </div>
                  <div className="font-medium text-sm">{g.name}</div>
                  <div className={`text-xs ${m.color} mt-1`}>{m.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 mt-32">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-bold tracking-tight">Built for the cold edge</h2>
          <p className="mt-3 text-muted-foreground">Three pillars. Zero compromise.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Optimized Architecture", desc: "Lightweight execution layer engineered to maintain high frame rates and zero lag." },
            { icon: Shield, title: "Undetected Core", desc: "Advanced evasion logic keeps your account safe through every anti-cheat update." },
            { icon: Flame, title: "Customization", desc: "Infinite visual options ensure your unique look always stands out." },
          ].map((f) => (
            <div key={f.title} className={`frost-pop glass rounded-xl p-6 ${f.title === "Stealth-first" ? "tilt-right" : ""}`}>
              <div className="h-10 w-10 rounded-md bg-gradient-frost flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORTED GAMES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 mt-32">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight">Supported titles</h2>
            <p className="mt-2 text-muted-foreground">A growing arsenal of supported games.</p>
          </div>
          <Link to="/games" className="hidden md:inline-flex items-center gap-1 text-sm text-frost hover:text-ice">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {games.map((g) => {
            const m = statusMeta[g.status];
            return (
              <Link
                key={g.tag}
                to="/games/$slug"
                params={{ slug: g.slug }}
                className={`frost-pop glass rounded-xl p-5 group hover:shadow-glow transition-shadow ${g.tag.length % 2 === 0 ? "tilt-right" : ""}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="font-mono text-xs px-2 py-0.5 rounded bg-secondary/60 text-frost">{g.tag}</div>
                  <span className="font-mono text-[10px] text-muted-foreground">{g.version}</span>
                </div>
                <div className="font-medium group-hover:text-frost transition-colors">{g.name}</div>
                <div className="mt-3 flex items-center gap-1.5 text-xs">
                  <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
                  <span className={m.color}>{m.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MEDIA */}
      <MediaSection />

      {/* REVIEWS */}
      <ReviewsSection />

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 mt-32">
        <div className="relative overflow-hidden glass rounded-xl p-6 text-center">
          <div className="absolute inset-0 bg-gradient-frost opacity-10" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Step into the <span className="text-gradient-frost">frost</span>.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Get update pings, early loaders, and direct support. The community moves fast — join us.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-frost px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow"
            >
              Join the Pegasus Discord
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
