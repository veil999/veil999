import { createFileRoute } from "@tanstack/react-router";
import { Navbar, DISCORD_URL } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Pegasus.Tech" },
      { name: "description", content: "Simple, cold pricing for the Pegasus.Tech scripting utility. Day, week, month and lifetime keys." },
      { property: "og:title", content: "Pricing — Pegasus.Tech" },
      { property: "og:description", content: "Day, week, month and lifetime access." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Day", price: "5", period: "24h", features: ["Full feature access", "All supported games", "Community support"] },
  { name: "Week", price: "15", period: "7 days", features: ["Full feature access", "All supported games", "Priority Discord roles"], highlight: false },
  { name: "Month", price: "35", period: "30 days", features: ["Everything in Week", "Early loader access", "Premium support channel"], highlight: true },
  { name: "Lifetime", price: "199", period: "forever", features: ["Everything in Month", "Lifetime updates", "Beta program access"] },
];

function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-20 flex-1">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="font-display text-5xl font-bold tracking-tighter">
            Pricing as <span className="text-gradient-frost">cold</span> as the product
          </h1>
          <p className="mt-3 text-muted-foreground">
            Pay for what you need. Keys are delivered instantly via Discord.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((t) => (
            <div key={t.name} className={`relative ${t.highlight ? "md:-mt-4" : ""}`}>
              <div
                className={`frost-pop glass rounded-2xl p-6 flex flex-col h-full ${
                  t.highlight
                    ? "border-[oklch(0.85_0.1_220/0.5)] shadow-frost overflow-visible"
                    : "tilt-right"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-gradient-frost text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-glow whitespace-nowrap">
                    Most popular
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gradient-frost">${t.price}</span>
                  <span className="text-sm text-muted-foreground">/ {t.period}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-frost shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 text-center rounded-md py-2.5 text-sm font-semibold transition-all ${
                    t.highlight
                      ? "bg-gradient-frost text-primary-foreground shadow-frost hover:shadow-glow"
                      : "border border-border hover:bg-secondary/60"
                  }`}
                >
                  Get {t.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
