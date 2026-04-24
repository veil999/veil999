import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MediaSection } from "@/components/MediaSection";

const SITE_URL = "https://pegasuste.ch";
const OG_IMAGE = `${SITE_URL}/og/media.png`;

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Pegasus.Tech | Media" },
      { name: "description", content: "Watch Pegasus.Tech in action — community showcases, tutorials, and gameplay." },

      // Discord uses theme-color for the embed strip color
      { name: "theme-color", content: "#7ad6ff" },

      // Open Graph (Discord reads these)
      { property: "og:site_name", content: "Pegasus.Tech" },
      { property: "og:title", content: "Media" },
      { property: "og:description", content: "Showcases and tutorials from the Pegasus.Tech community." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/media` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1080" },
      { property: "og:image:alt", content: "Pegasus.Tech — Media" },

      // "Author" line in Discord embeds
      { name: "author", content: "Pegasus.Tech" },
      { property: "article:author", content: "Pegasus.Tech" },

      // Twitter / X (also picked up by some scrapers)
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Media" },
      { name: "twitter:description", content: "Showcases and tutorials from the Pegasus.Tech community." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-20">
        <div className="mx-auto max-w-7xl px-6 pt-20 text-center">
          <h1 className="font-display text-5xl font-bold tracking-tighter">
            <span className="text-gradient-frost">Media</span> vault
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Recent showcases, tutorials, and highlight reels from the Pegasus community.
          </p>
        </div>
        <MediaSection />
      </main>
      <Footer />
    </div>
  );
}
