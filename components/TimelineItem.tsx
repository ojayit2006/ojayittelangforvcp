interface TimelineEntry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export default function TimelineItem({
  entry,
  isLast,
}: {
  entry: TimelineEntry;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-6 md:gap-10">
      <div className="flex flex-col items-center">
        <div className="mt-1.5 size-4 border-4 border-ink bg-accent shrink-0" />
        {!isLast && <div className="flex-1 w-1 bg-border-soft mt-2" />}
      </div>

      <div className={`${isLast ? "pb-0" : "pb-14"} flex-1`}>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
          <h3
            className="font-display font-black uppercase tracking-tighter text-text"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)" }}
          >
            {entry.role}
          </h3>
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest px-2 py-1 border-2 border-border-soft text-muted">
            {entry.period}
          </span>
        </div>
        <p className="font-sans text-muted text-sm mb-4">{entry.org}</p>
        <ul className="space-y-2">
          {entry.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 font-sans text-sm text-muted leading-relaxed">
              <span className="text-accent mt-0.5 shrink-0">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
