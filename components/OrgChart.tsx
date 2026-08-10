import type { ReactNode } from "react";
import { orgChart } from "@/data/content";

/* Thin, hard connector lines — off-white on the dark base, matching the
   "ink lines carry the hard-edge job on a black page" rule used elsewhere. */
function VStem({ h = "h-6" }: { h?: string }) {
  return <div className={`w-[3px] ${h} bg-ink mx-auto shrink-0`} aria-hidden />;
}

function CountPill({ count }: { count: number }) {
  return (
    <span className="absolute -top-3 -right-3 flex items-center justify-center min-w-[1.75rem] h-7 px-1.5 border-2 border-ink bg-accent text-accent-fg font-display font-black text-[11px] leading-none">
      ×{count}
    </span>
  );
}

function TierLabel({ children, shadow }: { children: string; shadow: string }) {
  return (
    <div
      className={`relative inline-block bg-ink text-bg px-6 py-3 font-display font-black uppercase tracking-tighter text-sm md:text-base ${shadow}`}
    >
      {children}
    </div>
  );
}

function Chip({ title, count }: { title: string; count?: number }) {
  return (
    <div className="relative h-full border-2 border-ink bg-surface px-3 py-3 md:px-2 lg:px-3 shadow-hard-sm flex items-center justify-center text-center">
      {count !== undefined && <CountPill count={count} />}
      <p className="font-display font-bold uppercase tracking-tight text-text text-[11px] md:text-xs leading-snug">
        {title}
      </p>
    </div>
  );
}

function DeptCard({ title, roleLabel, count }: { title: string; roleLabel: string; count: number }) {
  return (
    <div className="relative h-full border-2 border-ink bg-surface-2 px-3 py-4 shadow-hard-sm flex flex-col items-center justify-center text-center gap-1.5">
      <CountPill count={count} />
      <p className="font-display font-black uppercase tracking-tight text-text text-xs md:text-sm">{title}</p>
      <p className="font-sans text-muted text-[10px] md:text-[11px] uppercase tracking-wide leading-tight">
        {roleLabel}
      </p>
    </div>
  );
}

/* One branching generation: a horizontal rail spanning the middle 80% of
   the row, with a short tick dropping onto each of the (fixed count-of-5)
   children below it. Desktop only — collapses to a plain stack on mobile. */
function BranchRow({ children }: { children: ReactNode[] }) {
  return (
    <div className="hidden md:block relative pt-6 w-full">
      <div className="absolute top-0 h-[3px] bg-ink" style={{ left: "10%", right: "10%" }} aria-hidden />
      <div className="grid grid-cols-5 gap-3 lg:gap-4">
        {children.map((child, i) => (
          <div key={i} className="flex flex-col items-center">
            <VStem h="h-4" />
            <div className="w-full flex-1">{child}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OrgChart() {
  const { executiveCore, coreTeam, subcommittee } = orgChart;

  return (
    <div className="w-full flex flex-col items-center">
      {/* ── Executive Core ─────────────────────────────── */}
      <TierLabel shadow="shadow-hard-accent">{executiveCore.label}</TierLabel>
      <VStem />

      {/* desktop: fan out */}
      <BranchRow>
        {executiveCore.roles.map((r) => (
          <Chip key={r.title} title={r.title} count={r.count} />
        ))}
      </BranchRow>

      {/* mobile: stacked list */}
      <div className="md:hidden grid grid-cols-2 gap-2 w-full">
        {executiveCore.roles.map((r) => (
          <Chip key={r.title} title={r.title} count={r.count} />
        ))}
      </div>

      <VStem h="h-8" />

      {/* ── Core Team ──────────────────────────────────── */}
      <TierLabel shadow="shadow-hard-violet">{coreTeam.label}</TierLabel>
      <VStem />

      <BranchRow>
        {coreTeam.departments.map((d) => (
          <DeptCard key={d.title} title={d.title} roleLabel={d.roleLabel} count={d.count} />
        ))}
      </BranchRow>

      <div className="md:hidden grid grid-cols-2 gap-2 w-full">
        {coreTeam.departments.map((d) => (
          <DeptCard key={d.title} title={d.title} roleLabel={d.roleLabel} count={d.count} />
        ))}
      </div>

      <VStem h="h-8" />

      {/* ── Subcommittee ───────────────────────────────── */}
      <div className="border-4 border-ink bg-accent text-accent-fg px-10 py-6 shadow-hard-lg text-center">
        <p className="font-display font-black uppercase tracking-tighter text-lg md:text-2xl">
          {subcommittee.label}
        </p>
        <p className="font-figures text-sm md:text-base mt-1">{subcommittee.countLabel}</p>
      </div>
    </div>
  );
}
