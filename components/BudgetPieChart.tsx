"use client";

import { useState } from "react";
import { budget } from "@/data/content";

const SIZE = 240;
const CENTER = SIZE / 2;
const RADIUS = 104;

function polarToCartesian(angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CENTER + RADIUS * Math.cos(rad),
    y: CENTER + RADIUS * Math.sin(rad),
  };
}

function arcPath(startAngle: number, endAngle: number) {
  const start = polarToCartesian(endAngle);
  const end = polarToCartesian(startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${CENTER} ${CENTER} L ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
}

export default function BudgetPieChart() {
  const [active, setActive] = useState<number | null>(null);

  const total = budget.groups.reduce((sum, g) => sum + g.value, 0);

  let cursor = 0;
  const slices = budget.groups.map((g) => {
    const startAngle = (cursor / total) * 360;
    cursor += g.value;
    const endAngle = (cursor / total) * 360;
    const pct = (g.value / total) * 100;
    return { ...g, startAngle, endAngle, pct };
  });

  return (
    <div className="border-4 border-ink bg-surface p-6 md:p-10 shadow-hard flex flex-col md:flex-row items-center gap-10 md:gap-14">
      <div className="relative shrink-0">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          width={SIZE}
          height={SIZE}
          className="max-w-[240px] w-full h-auto"
        >
          {slices.map((s, i) => (
            <path
              key={s.category}
              d={arcPath(s.startAngle, s.endAngle)}
              fill={s.color}
              stroke="var(--color-surface)"
              strokeWidth={2}
              opacity={active === null || active === i ? 1 : 0.35}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="transition-opacity duration-150 cursor-pointer"
            />
          ))}
        </svg>

        {active !== null && (
          <div className="pointer-events-none absolute inset-x-0 -bottom-2 translate-y-full flex flex-col items-center">
            <div className="border-2 border-ink bg-bg px-3 py-2 text-center shadow-hard-sm min-w-[150px]">
              <p className="font-display font-black text-xs uppercase tracking-wide">
                {slices[active].category}
              </p>
              <p className="font-figures text-accent text-sm mt-1">
                {slices[active].pct.toFixed(1)}%
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="w-full grid gap-3">
        <p className="font-display font-black uppercase tracking-widest text-xs text-muted mb-1">
          Budget Allocation by Category
        </p>
        {slices.map((s, i) => (
          <button
            key={s.category}
            type="button"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            className={`flex items-center justify-between gap-4 text-left px-3 py-2 border-2 transition-colors duration-150 ${
              active === i ? "border-ink bg-surface-2" : "border-transparent"
            }`}
          >
            <span className="flex items-center gap-3 min-w-0">
              <span
                className="w-3.5 h-3.5 shrink-0 border border-ink"
                style={{ backgroundColor: s.color }}
              />
              <span className="font-sans text-sm text-text truncate">{s.category}</span>
            </span>
            <span className="flex items-baseline gap-3 shrink-0">
              <span className="font-figures text-xs text-muted">{s.pct.toFixed(1)}%</span>
              <span className="font-figures text-sm text-accent">
                {s.subtotal ? s.subtotal.total : s.items[0].total}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
