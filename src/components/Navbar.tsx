import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/games", label: "Supported Games" },
  { to: "/media", label: "Media" },
  { to: "/reviews", label: "Reviews" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
] as const;

const DISCORD_URL = "https://discord.gg/pegasustech";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Pegasus.Tech" className="h-9 w-9 transition-transform group-hover:scale-110 drop-shadow-[0_0_8px_oklch(0.85_0.1_220/0.4)]" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Pegasus<span className="text-frost">.Tech</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all rounded-md hover:bg-secondary/50"
              activeProps={{
                className:
                  "px-4 py-2 text-sm font-semibold rounded-md bg-gradient-frost text-primary-foreground shadow-frost",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-gradient-frost px-4 py-2 text-sm font-medium text-primary-foreground shadow-frost hover:shadow-glow transition-shadow"
          >
            Discord
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md transition-all"
              activeProps={{
                className:
                  "px-3 py-2 text-sm font-semibold rounded-md bg-gradient-frost text-primary-foreground",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center rounded-md bg-gradient-frost px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Join Discord
          </a>
        </div>
      )}
    </header>
  );
}

export { DISCORD_URL };
