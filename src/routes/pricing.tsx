import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pegasus.Tech | Pricing" },
      { name: "description", content: "Browse Pegasus.Tech's subscription offers." },

      // Discord uses theme-color for the embed strip color
      { name: "theme-color", content: "#7ad6ff" },

      // Open Graph (Discord reads these)
      { property: "og:site_name", content: "Pegasus.Tech" },
      { property: "og:title", content: "Pricing" },
      { property: "og:description", content: "Simple, cold pricing for the Pegasus.Tech scripting utility. Week, month and nightly keys." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/pricing` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1080" },
      { property: "og:image:alt", content: "Pegasus.Tech — Pricing" },

      // "Author" line in Discord embeds
      { name: "author", content: "Pegasus.Tech" },
      { property: "article:author", content: "Pegasus.Tech" },

      // Twitter / X (also picked up by some scrapers)
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Media" },
      { name: "twitter:description", content: "Simple, cold pricing for the Pegasus.Tech scripting utility. Week, month and nightly keys." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Week", price: "7", period: "7 days", features: ["Full feature access", "All supported games", "Priority Discord roles"], highlight: false },
  { name: "Month", price: "15", period: "30 days", features: ["Everything in Week", "Premium support channel"], highlight: true },
  { name: "Nightly", price: "35", period: "forever", features: ["Alpha Build Access", "Slotted Access", "Unique Build Signature"] },
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
            Pegasus.Tech is a private utility. Public sales are currently unavailable.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.name} className="relative">
              <div className="frost-pop glass rounded-2xl p-6 flex flex-col h-full opacity-60 grayscale">
                <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-muted-foreground line-through">${t.price}</span>
                  <span className="text-sm text-muted-foreground">/ {t.period}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Lock className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  disabled
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md py-2.5 text-sm font-semibold border border-border bg-secondary/30 text-muted-foreground cursor-not-allowed"
                >
                  <Lock className="h-3.5 w-3.5" />
                  Unavailable
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-2xl glass rounded-xl p-6 text-center">
          <div className="inline-flex items-center gap-2 text-frost font-display font-semibold">
            <Lock className="h-4 w-4" />
            Private access only
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Pegasus.Tech is invite-only at this time. Public purchases are disabled to protect the
            integrity of the product.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
