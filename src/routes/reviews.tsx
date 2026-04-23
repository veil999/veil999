import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReviewsSection } from "@/components/ReviewsSection";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Pegasus.Tech" },
      { name: "description", content: "What the Pegasus.Tech community is saying — verified reviews from active users." },
      { property: "og:title", content: "Reviews — Pegasus.Tech" },
      { property: "og:description", content: "Verified community reviews of the Pegasus.Tech scripting utility." },
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
