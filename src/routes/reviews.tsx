import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReviewsSection } from "@/components/ReviewsSection";

const SITE_URL = "https://pegasuste.ch";
const OG_IMAGE = `${SITE_URL}/og/reviews.png`;

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Pegasus.Tech | Media" },
      { name: "description", content: "Verified community reviews of the scripting utility Pegasus.Tech" },

      // Discord uses theme-color for the embed strip color
      { name: "theme-color", content: "#7ad6ff" },

      // Open Graph (Discord reads these)
      { property: "og:site_name", content: "Pegasus.Tech" },
      { property: "og:title", content: "Reviews" },
      { property: "og:description", content: "What the Pegasus.Tech community is saying, verified reviews from active users." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/reviews` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1080" },
      { property: "og:image:alt", content: "Pegasus.Tech — Reviews" },

      // "Author" line in Discord embeds
      { name: "author", content: "Pegasus.Tech" },
      { property: "article:author", content: "Pegasus.Tech" },

      // Twitter / X (also picked up by some scrapers)
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Reviews" },
      { name: "twitter:description", content: "What the Pegasus.Tech community is saying, verified reviews from active users." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-20">
        <div className="mx-auto max-w-7xl px-6 pt-20 text-center">
          <h1 className="font-display text-5xl font-bold tracking-tighter">
            Community <span className="text-gradient-frost">reviews</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Real words from real Pegasus users. Want to leave one? Drop it in Discord.
          </p>
        </div>
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
