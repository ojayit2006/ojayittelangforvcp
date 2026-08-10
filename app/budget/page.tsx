import { Fragment } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import BudgetPieChart from "@/components/BudgetPieChart";
import { budget } from "@/data/content";

export const metadata: Metadata = { title: "Budget" };

const statTints = [
  "bg-surface text-text",
  "bg-surface text-text",
  "bg-violet text-black",
  "bg-accent text-accent-fg",
] as const;

export default function BudgetPage() {
  return (
    <>
      <PageHero eyebrow={budget.eyebrow} title={budget.title} subtitle={budget.subtitle} />

      <section className="px-6 md:px-10 py-16 md:py-20">
        {/* Allocation overview */}
        <div className="mb-16">
          <BudgetPieChart />
        </div>

        {/* Prominent headline figures */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16">
          {budget.stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-4 border-ink p-5 md:p-6 shadow-hard-sm md:shadow-hard ${statTints[i]}`}
            >
              <p className="font-mono text-[11px] md:text-xs uppercase tracking-widest opacity-70 mb-2">
                {s.label}
              </p>
              <p className="font-figures font-bold tracking-tight text-2xl md:text-4xl leading-none">
                {s.value}
              </p>
              {"note" in s && s.note && (
                <p className="font-figures text-[11px] md:text-xs opacity-70 mt-2">{s.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: grouped cards — a 5-column table has no good mobile form */}
        <div className="grid gap-6 md:hidden">
          {budget.groups.map((group) => (
            <div key={group.category} className="border-4 border-ink bg-surface overflow-hidden">
              <div className="bg-ink text-bg font-table-serif font-bold uppercase tracking-widest text-xs px-5 py-3">
                {group.category}
              </div>
              <div>
                {group.items.map((item, i) => (
                  <div
                    key={item.particular}
                    className={`px-5 py-4 ${i > 0 ? "border-t-2 border-border-soft" : ""}`}
                  >
                    <p className="font-table-serif font-bold text-sm mb-2">{item.particular}</p>
                    <div className="flex items-center justify-between font-figures text-xs text-muted">
                      <span>
                        Cash <span className="text-text">{item.cash}</span>
                      </span>
                      <span>
                        In-Kind <span className="text-text">{item.inKind}</span>
                      </span>
                      <span className="text-accent">{item.total}</span>
                    </div>
                  </div>
                ))}
                {group.subtotal && (
                  <div className="px-5 py-4 border-t-4 border-ink bg-surface-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-table-serif font-bold text-sm">{group.subtotal.particular}</p>
                      <p className="font-figures text-sm text-accent shrink-0">{group.subtotal.total}</p>
                    </div>
                    <div className="flex items-center gap-4 font-figures text-[11px] text-muted mt-1">
                      <span>
                        Cash <span className="text-text">{group.subtotal.cash}</span>
                      </span>
                      <span>
                        In-Kind <span className="text-text">{group.subtotal.inKind}</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="border-4 border-ink bg-accent text-accent-fg p-6 shadow-hard">
            <p className="font-table-serif font-bold uppercase tracking-widest text-xs mb-3">
              {budget.grandTotal.particular}
            </p>
            <p className="font-figures font-bold tracking-tight text-3xl mb-3">
              {budget.grandTotal.total}
            </p>
            <div className="flex items-center gap-5 font-figures text-xs">
              <span>Cash {budget.grandTotal.cash}</span>
              <span>In-Kind {budget.grandTotal.inKind}</span>
            </div>
          </div>
        </div>

        {/* Desktop: one continuous table */}
        <div className="hidden md:block border-4 border-ink overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="bg-accent text-accent-fg">
                <th className="text-left font-table-serif font-bold uppercase tracking-widest text-xs md:text-sm px-4 md:px-6 py-4 border-r-2 border-ink w-[16%]">
                  Category
                </th>
                <th className="text-left font-table-serif font-bold uppercase tracking-widest text-xs md:text-sm px-4 md:px-6 py-4 border-r-2 border-ink">
                  Particular
                </th>
                <th className="text-right font-table-serif font-bold uppercase tracking-widest text-xs md:text-sm px-4 md:px-6 py-4 border-r-2 border-ink w-[15%]">
                  Cash
                </th>
                <th className="text-right font-table-serif font-bold uppercase tracking-widest text-xs md:text-sm px-4 md:px-6 py-4 border-r-2 border-ink w-[15%]">
                  In-Kind
                </th>
                <th className="text-right font-table-serif font-bold uppercase tracking-widest text-xs md:text-sm px-4 md:px-6 py-4 w-[15%]">
                  Total Value
                </th>
              </tr>
            </thead>
            <tbody>
              {budget.groups.map((group, gi) => (
                <Fragment key={group.category}>
                  {group.items.map((item, i) => (
                    <tr
                      key={`${group.category}-${item.particular}`}
                      className={gi % 2 === 1 ? "bg-surface" : ""}
                    >
                      {i === 0 && (
                        <td
                          rowSpan={group.items.length + (group.subtotal ? 1 : 0)}
                          className="font-table-serif font-bold uppercase tracking-wide text-xs md:text-sm px-4 md:px-6 py-5 border-t-4 border-ink border-r-2 align-top bg-surface-2"
                        >
                          {group.category}
                        </td>
                      )}
                      <td
                        className={`font-table-serif text-sm px-4 md:px-6 py-4 border-r-2 border-border-soft align-top ${
                          i === 0 ? "border-t-4 border-ink" : "border-t-2 border-border-soft"
                        }`}
                      >
                        {item.particular}
                      </td>
                      <td
                        className={`font-figures text-sm px-4 md:px-6 py-4 border-r-2 border-border-soft text-right align-top text-muted ${
                          i === 0 ? "border-t-4 border-ink" : "border-t-2 border-border-soft"
                        }`}
                      >
                        {item.cash}
                      </td>
                      <td
                        className={`font-figures text-sm px-4 md:px-6 py-4 border-r-2 border-border-soft text-right align-top text-muted ${
                          i === 0 ? "border-t-4 border-ink" : "border-t-2 border-border-soft"
                        }`}
                      >
                        {item.inKind}
                      </td>
                      <td
                        className={`font-figures text-sm px-4 md:px-6 py-4 text-right align-top text-accent ${
                          i === 0 ? "border-t-4 border-ink" : "border-t-2 border-border-soft"
                        }`}
                      >
                        {item.total}
                      </td>
                    </tr>
                  ))}
                  {group.subtotal && (
                    <tr key={`${group.category}-subtotal`} className="bg-surface-2">
                      <td className="font-table-serif font-bold text-sm px-4 md:px-6 py-4 border-t-2 border-border-soft border-r-2 border-border-soft text-right" colSpan={1}>
                        {group.subtotal.particular}
                      </td>
                      <td className="font-figures text-sm px-4 md:px-6 py-4 border-t-2 border-border-soft border-r-2 border-border-soft text-right text-text">
                        {group.subtotal.cash}
                      </td>
                      <td className="font-figures text-sm px-4 md:px-6 py-4 border-t-2 border-border-soft border-r-2 border-border-soft text-right text-text">
                        {group.subtotal.inKind}
                      </td>
                      <td className="font-figures font-bold text-sm px-4 md:px-6 py-4 border-t-2 border-border-soft text-right text-accent">
                        {group.subtotal.total}
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
              <tr className="bg-accent text-accent-fg">
                <td
                  colSpan={2}
                  className="font-table-serif font-bold uppercase tracking-widest text-sm md:text-base px-4 md:px-6 py-6 border-t-4 border-ink"
                >
                  {budget.grandTotal.particular}
                </td>
                <td className="font-figures font-bold text-base px-4 md:px-6 py-6 border-t-4 border-ink text-right">
                  {budget.grandTotal.cash}
                </td>
                <td className="font-figures font-bold text-base px-4 md:px-6 py-6 border-t-4 border-ink text-right">
                  {budget.grandTotal.inKind}
                </td>
                <td className="font-figures font-bold text-lg md:text-xl px-4 md:px-6 py-6 border-t-4 border-ink text-right">
                  {budget.grandTotal.total}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-14">
          <Button href="/testimonials" variant="primary">
            See Testimonials
          </Button>
        </div>
      </section>
    </>
  );
}
