"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/motivation", label: "Motivation" },
  { href: "/why-me", label: "Why Me" },
  { href: "/track-record", label: "Track Record" },
  { href: "/vision", label: "Vision" },
  { href: "/budget", label: "Budget" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-bg/95 backdrop-blur-sm border-b-4 border-ink" : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex h-9 w-9 items-center justify-center border-4 border-ink bg-accent font-display text-sm font-black text-accent-fg">
            OT
          </span>
          <span className="hidden sm:block font-display font-black text-sm uppercase tracking-tighter text-text group-hover:text-accent transition-colors">
            for VCP
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-0">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-display font-bold text-xs uppercase tracking-widest px-4 h-20 flex items-center transition-colors duration-150 ${
                  active ? "text-accent" : "text-muted hover:text-text"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <button
          className="lg:hidden flex h-11 w-11 items-center justify-center border-4 border-ink bg-surface text-text"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-bg border-b-4 border-ink px-6 pb-6 pt-2 flex flex-col gap-0">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-display font-bold text-sm uppercase tracking-widest py-4 border-b-2 border-border-soft transition-colors ${
                  active ? "text-accent" : "text-muted hover:text-text"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
