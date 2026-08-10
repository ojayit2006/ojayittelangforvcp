import { Fragment } from "react";
import { ArrowDown, ArrowRight, Check, Plus, Quote } from "lucide-react";
import { improvements } from "@/data/content";

type Item = (typeof improvements.items)[number];

function KeyIdeas({ ideas }: { ideas: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
      {ideas.map((idea) => (
        <li key={idea} className="flex items-start gap-2.5">
          <Check size={16} strokeWidth={3} className="text-accent shrink-0 mt-0.5" />
          <span className="font-sans text-sm text-text leading-snug">{idea}</span>
        </li>
      ))}
    </ul>
  );
}

function CoreMessage({ children }: { children: string }) {
  return (
    <div className="mt-6 pt-6 border-t-2 border-border-soft flex items-start gap-3">
      <Quote size={22} strokeWidth={2.5} className="text-accent shrink-0 mt-0.5" />
      <p className="font-display font-black uppercase tracking-tight text-lg md:text-xl text-text leading-snug">
        {children}
      </p>
    </div>
  );
}

function ImprovementCard({ item }: { item: Item }) {
  return (
    <div className="border-4 border-ink bg-surface shadow-hard p-8 md:p-10">
      <div className="flex items-start gap-5 mb-5">
        <span
          aria-hidden
          className="font-display font-black text-muted2 leading-none shrink-0 select-none"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
        >
          {item.number}
        </span>
        <h3 className="font-display font-black uppercase tracking-tighter text-2xl md:text-3xl text-text pt-1 md:pt-2">
          {item.title}
        </h3>
      </div>

      <p className="font-sans text-muted text-sm md:text-base leading-relaxed max-w-3xl mb-6">
        {item.body}
      </p>

      <KeyIdeas ideas={item.keyIdeas} />

      {"stat" in item && item.stat && (
        <div className="inline-flex flex-col items-start border-4 border-ink bg-accent text-accent-fg px-6 py-5 shadow-hard-sm mb-2">
          <span className="font-figures font-black tracking-tight text-4xl md:text-6xl leading-none">
            {item.stat.value}
          </span>
          <span className="font-display font-bold uppercase tracking-widest text-[11px] md:text-xs mt-2">
            {item.stat.label}
          </span>
        </div>
      )}

      {"philosophy" in item && item.philosophy && (
        <p className="border-l-4 border-accent pl-4 font-sans italic text-text text-sm md:text-base mb-5">
          &ldquo;{item.philosophy}&rdquo;
        </p>
      )}

      {"triad" in item && item.triad && (
        <div className="flex flex-wrap items-center gap-3 mb-2">
          {item.triad.map((t, i) => (
            <Fragment key={t}>
              <span className="border-2 border-ink bg-surface-2 px-4 py-2 font-display font-bold uppercase tracking-tight text-xs md:text-sm text-text">
                {t}
              </span>
              {i < item.triad.length - 1 && (
                <Plus size={16} strokeWidth={3} className="text-muted2 shrink-0" />
              )}
            </Fragment>
          ))}
        </div>
      )}

      {"swap" in item && item.swap && (
        <div className="border-2 border-ink bg-surface-2 p-5 md:p-6 mb-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
            <span className="font-display font-bold uppercase tracking-tight text-sm text-muted2 line-through decoration-2">
              {item.swap.from}
            </span>
            <ArrowRight size={18} strokeWidth={3} className="text-accent shrink-0 hidden md:block" />
            <ArrowDown size={18} strokeWidth={3} className="text-accent shrink-0 md:hidden" />
            <span className="font-display font-black uppercase tracking-tight text-sm md:text-base text-accent">
              {item.swap.to}
            </span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-2">
            Target: {item.swap.audience}
          </p>
          <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">{item.swap.reason}</p>
        </div>
      )}

      {"rethink" in item && item.rethink && (
        <div className="border-2 border-border-soft p-5 md:p-6 mb-2">
          <p className="font-display font-bold uppercase tracking-tight text-xs text-muted mb-2">
            Rethinking &ldquo;{item.rethink.event}&rdquo;
          </p>
          <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">{item.rethink.note}</p>
        </div>
      )}

      <CoreMessage>{item.coreMessage}</CoreMessage>
    </div>
  );
}

const roadmapTints = [
  "bg-accent text-accent-fg",
  "bg-violet text-black",
  "bg-red text-black",
  "bg-surface-2 text-text",
  "bg-ink text-bg",
];

function Roadmap({ steps }: { steps: string[] }) {
  return (
    <div className="border-4 border-ink bg-surface shadow-hard-lg p-8 md:p-12">
      <p className="font-mono text-[11px] md:text-xs uppercase tracking-widest text-muted mb-6 text-center md:text-left">
        The Roadmap for My Tenure
      </p>
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0">
        {steps.map((step, i) => (
          <Fragment key={step}>
            <div
              className={`flex-1 border-2 border-ink px-4 py-5 md:py-7 text-center font-display font-black uppercase tracking-tight text-sm md:text-base ${roadmapTints[i % roadmapTints.length]}`}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center justify-center shrink-0 py-0.5 md:py-0 md:px-2">
                <ArrowDown size={20} strokeWidth={3} className="text-ink md:hidden" />
                <ArrowRight size={20} strokeWidth={3} className="text-ink hidden md:block" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default function Improvements() {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {improvements.items.map((item) => (
        <ImprovementCard key={item.number} item={item} />
      ))}
      <Roadmap steps={improvements.roadmap} />
    </div>
  );
}
