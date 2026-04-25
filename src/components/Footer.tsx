import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { DISCORD_URL } from "./Navbar";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Pegasus.Tech" className="h-7 w-7" />
          <span className="font-display text-sm">Pegasus<span className="text-frost">.Tech</span></span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          © 2025 Pegasus.Tech — Scripting utilities forged in frost.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/tos" className="text-xs text-muted-foreground hover:text-frost transition-colors">
            Terms of Service
          </Link>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-frost hover:text-ice">
            discord.gg/pegasustech
          </a>
        </div>
      </div>
    </footer>
  );
}
