import { Fragment } from "react";
import { Equal, Plus } from "lucide-react";
import { whyMe } from "@/data/content";

type Reason = (typeof whyMe.reasons)[number];

function ReasonCard({ reason }: { reason: Reason }) {
  return (
    <article className="border-4 border-ink bg-surface shadow-hard p-8 md:p-12">
      <div className="flex items-baseline gap-4 md:gap-6 mb-6 md:mb-8 pb-6 md:pb-8 border-b-2 border-border-soft">
        <span
          className="font-display font-black text-muted2 leading-none shrink-0"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          {reason.number}
        </span>
        <h3 className="font-display font-black uppercase tracking-tighter text-2xl md:text-4xl text-text leading-tight">
          {reason.heading}
        </h3>
      </div>

      <div className="space-y-5 max-w-3xl">
        {reason.body.map((p) => (
          <p key={p} className="font-sans text-base md:text-lg text-muted leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {"stance" in reason && reason.stance && (
        <div className="grid md:grid-cols-2 gap-px bg-border-soft border-2 border-border-soft mt-8 max-w-3xl">
          {[reason.stance.left, reason.stance.right].map((s) => (
            <div key={s.label} className="bg-surface p-5 md:p-6">
              <p className="font-display font-black uppercase tracking-tight text-base md:text-lg text-text mb-2">
                {s.label}
              </p>
              <p className="font-sans text-sm md:text-base text-muted leading-relaxed">{s.note}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 pt-6 border-t-2 border-border-soft">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-2">
          {reason.proofLabel}
        </p>
        <p className="font-sans text-sm md:text-base text-text leading-relaxed">{reason.proof}</p>
      </div>
    </article>
  );
}

function Conclusion() {
  const { formula, conclusion } = whyMe;
  return (
    <div className="border-4 border-ink bg-surface shadow-hard-lg p-8 md:p-12 mt-8 md:mt-10">
      <p className="font-display font-black uppercase tracking-tight text-2xl md:text-4xl text-text leading-snug max-w-4xl mb-10">
        {conclusion}
      </p>
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        {formula.map((f, i) => (
          <Fragment key={f}>
            <span className="border-2 border-ink bg-surface-2 px-4 py-2 font-display font-bold uppercase tracking-tight text-xs md:text-sm text-text">
              {f}
            </span>
            {i < formula.length - 1 && (
              <Plus size={16} strokeWidth={3} className="text-muted2 shrink-0" aria-hidden />
            )}
          </Fragment>
        ))}
        <Equal size={16} strokeWidth={3} className="text-muted2 shrink-0" aria-hidden />
        <span className="border-2 border-ink bg-accent text-accent-fg px-4 py-2 font-display font-black uppercase tracking-tight text-xs md:text-sm">
          Why Me
        </span>
      </div>
    </div>
  );
}

export default function WhyMeCase() {
  return (
    <div>
      <div className="mb-12 md:mb-16 max-w-3xl">
        <h2
          className="font-display font-black uppercase tracking-tighter text-text leading-none mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
        >
          {whyMe.centralQuestion}
        </h2>
        <p className="font-sans text-base md:text-lg text-muted leading-relaxed">
          {whyMe.centralCaption}
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-10">
        {whyMe.reasons.map((r) => (
          <ReasonCard key={r.number} reason={r} />
        ))}
      </div>

      <Conclusion />
    </div>
  );
}
