import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://pegasuste.ch";
const OG_IMAGE = `${SITE_URL}/og/tos.png`;

export const Route = createFileRoute("/tos")({
  head: () => ({
    meta: [
      { title: "Pegasus.Tech | TOS" },
      { name: "description", content: "Terms of Service for Pegasus.Tech scripting utility." },

      // Discord uses theme-color for the embed strip color
      { name: "theme-color", content: "#7ad6ff" },

      // Open Graph (Discord reads these)
      { property: "og:site_name", content: "Pegasus.Tech" },
      { property: "og:title", content: "TOS" },
      { property: "og:description", content: "Terms of Service for Pegasus.Tech scripting utility." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/tos` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1080" },
      { property: "og:image:alt", content: "Pegasus.Tech — TOS" },

      // "Author" line in Discord embeds
      { name: "author", content: "Pegasus.Tech" },
      { property: "article:author", content: "Pegasus.Tech" },

      // Twitter / X (also picked up by some scrapers)
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TOS" },
      { name: "twitter:description", content: "Terms of Service for Pegasus.Tech scripting utility." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: MediaPage,
});

function TosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20 flex-1">
        <h1 className="font-display text-5xl font-bold tracking-tighter">
          Terms of <span className="text-gradient-frost">Service</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
            <p>
              By purchasing, accessing, or using any Pegasus.Tech product or service, you agree to be
              bound by these Terms of Service. If you do not agree, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">2. License</h2>
            <p>
              Pegasus.Tech grants you a personal, non-transferable, non-exclusive, revocable license
              to use the software for the duration of your active subscription. You do not own the
              software — you are licensing it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">3. Restrictions</h2>
            <p>You agree NOT to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Reverse engineer, decompile, disassemble, or attempt to extract the source code of any Pegasus.Tech product.</li>
              <li>Resell, redistribute, share, leak, or sublicense your access or keys</li>
              <li>Modify, crack, patch, or create derivative works of the software.</li>
              <li>Use the software to harm, harass, or attack other users or third-party systems.</li>
              <li>Bypass or attempt to bypass any authentication, key validation, or anti-piracy measure.</li>
              <li>Stream, record, or publish the loader, chat, or proprietary feature implementations publicly.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">4. No Refunds</h2>
            <p>
              Due to the digital nature of our product, all sales are final. Refunds are only issued
              at the sole discretion of Pegasus.Tech staff in exceptional cases.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">5. Account Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access at any time, without refund,
              for violating these Terms — including but not limited to leaking, sharing, or reverse
              engineering the product.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">6. Disclaimer & Risk</h2>
            <p>
              The software is provided "as is" without warranty of any kind. You acknowledge that
              use of third-party scripting utilities in online games may violate the terms of those
              games and may result in account action by the game publisher. You assume all risk.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">7. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of the service after changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">8. Contact</h2>
            <p>
              For questions about these Terms, contact us through our official Discord server.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
