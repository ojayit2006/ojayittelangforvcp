import Link from "next/link";
import { Mail } from "lucide-react";
import { candidate } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t-4 border-ink bg-surface">
      <div className="px-6 md:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <span className="flex h-10 w-10 items-center justify-center border-4 border-ink bg-accent font-display text-sm font-black text-accent-fg mb-4">
            OT
          </span>
          <p className="font-display font-black uppercase tracking-tighter text-xl text-text mb-2">
            {candidate.name}
          </p>
          <p className="font-sans text-sm text-muted max-w-xs">
            Candidate for Vice Chairperson, {candidate.society} — {candidate.electionYear}.
          </p>
        </div>

        <div>
          <p className="font-display font-bold text-xs uppercase tracking-widest text-muted mb-4">
            Get Around
          </p>
          <ul className="space-y-2 font-sans text-sm">
            {[
              ["/motivation", "Motivation"],
              ["/why-me", "Why Me"],
              ["/vision", "My Vision"],
              ["/budget", "Budget"],
              ["/testimonials", "Testimonials"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-text hover:text-accent transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-xs uppercase tracking-widest text-muted mb-4">
            Reach Out
          </p>
          <a
            href={`mailto:${candidate.email}`}
            className="flex items-center gap-2 font-sans text-sm text-text hover:text-accent transition-colors break-all"
          >
            <Mail size={16} strokeWidth={2.5} className="shrink-0" />
            {candidate.email}
          </a>
        </div>
      </div>

      <div className="border-t-2 border-border-soft px-6 md:px-10 py-5 flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center font-mono text-[11px] uppercase tracking-widest text-muted">
        <span>{candidate.society} Elections — {candidate.electionYear}</span>
        <span className="hidden sm:inline">·</span>
        <span>Vote for the person already doing the work.</span>
      </div>
    </footer>
  );
}
