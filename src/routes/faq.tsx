import { createFileRoute } from "@tanstack/react-router";
import { Navbar, DISCORD_URL } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Pegasus.Tech" },
      { name: "description", content: "Frequently asked questions about the Pegasus.Tech scripting utility." },
      { property: "og:title", content: "FAQ — Pegasus.Tech" },
      { property: "og:description", content: "Answers to the most common questions." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "What is Pegasus.Tech?", a: "Pegasus.Tech is a premium scripting utility for competitive PC games, focused on precision, stealth, and a clean user experience." },
  { q: "How do I receive my key?", a: "After payment, your key is delivered automatically inside our Discord server. You'll get a DM with download and setup instructions." },
  { q: "Which games are supported?", a: "Check the Supported Games page for the full live list. We add new titles regularly based on community demand." },
  { q: "Is it safe?", a: "We invest heavily in evasion research and ship updates immediately when game anti-cheats roll out changes. Status of every title is shown live on the homepage." },
  { q: "Do you offer refunds?", a: "Refunds are handled case-by-case in Discord. If a product is marked Detected at the time of purchase, you're entitled to a full refund or credit." },
  { q: "Can I write my own scripts?", a: "Yes. The utility ships with a hot-reload Lua API. Share scripts with the community in our Discord." },
];

function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20 flex-1">
        <h1 className="font-display text-5xl font-bold tracking-tighter text-center">
          Frequently <span className="text-gradient-frost">asked</span>
        </h1>
        <p className="mt-3 text-muted-foreground text-center">
          Can't find what you're looking for? Ask in <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-frost hover:text-ice">Discord</a>.
        </p>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-xl px-5 border-0 transition-all duration-300 ease-out hover:scale-[1.015] hover:shadow-frost hover:border-[oklch(0.85_0.1_220/0.4)] data-[state=open]:scale-[1.02] data-[state=open]:shadow-glow data-[state=open]:border-[oklch(0.85_0.1_220/0.5)]"
            >
              <AccordionTrigger className="font-display text-left hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <Footer />
    </div>
  );
}
