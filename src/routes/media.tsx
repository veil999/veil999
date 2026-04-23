import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MediaSection } from "@/components/MediaSection";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media — Pegasus.Tech" },
      { name: "description", content: "Watch Pegasus.Tech in action — community showcases, tutorials, and gameplay." },
      { property: "og:title", content: "Media — Pegasus.Tech" },
      { property: "og:description", content: "Showcases and tutorials from the Pegasus.Tech community." },
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
