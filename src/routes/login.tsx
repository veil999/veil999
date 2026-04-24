import { createFileRoute } from "@tanstack/react-router";
import { Navbar, DISCORD_URL } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Wrench, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Pegasus.Tech" },
      { name: "description", content: "Pegasus.Tech login is currently under maintenance. Join our Discord for access." },
      { property: "og:title", content: "Log in — Pegasus.Tech" },
      { property: "og:description", content: "Login is under maintenance. Join the Discord." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 py-24 flex-1 text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-gradient-frost flex items-center justify-center shadow-frost mb-6">
          <Wrench className="h-7 w-7 text-primary-foreground" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
          Login is under <span className="text-gradient-frost">maintenance</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Our login system is currently being worked on. In the meantime, please join our
          Discord for access, support, and updates.
        </p>
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-frost px-6 py-3 text-sm font-semibold text-primary-foreground shadow-frost hover:shadow-glow transition-all"
        >
          Visit our Discord
          <ArrowRight className="h-4 w-4" />
        </a>
      </main>
      <Footer />
    </div>
  );
}
