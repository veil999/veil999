import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "frostbyte_42", role: "CS2 player", rating: 5, text: "Smoothest scripting suite I've ever used. The Lua API is unreal — got my custom recoil pattern up in 10 minutes." },
  { name: "ApexHunter", role: "Apex Predator", rating: 5, text: "Been with Pegasus for 6 months. Zero issues, instant updates after every patch. Worth every penny." },
  { name: "midnight_gg", role: "Valorant", rating: 5, text: "The cold UI matches the precision. Discord support replied in under 2 minutes when I had a setup question." },
  { name: "rust_chad", role: "Rust solo", rating: 5, text: "Lifetime key user. The team actually cares — they polled the community on which game to add next." },
  { name: "0xPolarBear", role: "Tarkov raider", rating: 4, text: "Solid product, very stable. Would love a few more in-game UI customization options." },
  { name: "NovaStrike", role: "Warzone", rating: 5, text: "Clean. Fast. Undetected. The shimmer on the cards is a nice touch too 😄" },
];

export function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 mt-32">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-frost mb-3">
          <Star className="h-3 w-3 fill-current" /> REVIEWS
        </div>
        <h2 className="font-display text-4xl font-bold tracking-tight">
          Trusted by the <span className="text-gradient-frost">cold-blooded</span>
        </h2>
        <p className="mt-3 text-muted-foreground">What our community is saying.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <div
            key={r.name}
            className={`frost-pop glass rounded-xl p-6 ${i % 2 === 0 ? "tilt-right" : ""}`}
          >
            <Quote className="h-6 w-6 text-frost/40 mb-3" />
            <p className="text-sm text-foreground/90 leading-relaxed">"{r.text}"</p>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <div className="font-display text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-3.5 w-3.5 ${idx < r.rating ? "fill-frost text-frost" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
