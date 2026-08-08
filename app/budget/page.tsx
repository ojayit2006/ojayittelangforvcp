import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { AlertTriangle } from "lucide-react";
import { budget } from "@/data/content";

export const metadata: Metadata = { title: "Budget" };

export default function BudgetPage() {
  return (
    <>
      <PageHero eyebrow={budget.eyebrow} title={budget.title} subtitle={budget.subtitle} />

      <section className="px-6 md:px-10 py-16 md:py-20">
        <p className="font-display font-bold text-2xl md:text-3xl leading-snug text-text max-w-2xl mb-12">
          {budget.philosophy}
        </p>

        <div className="border-4 border-ink bg-violet text-black p-6 md:p-8 flex gap-4 mb-16 max-w-2xl">
          <AlertTriangle size={28} strokeWidth={2.5} className="shrink-0" />
          <div>
            <p className="font-display font-black uppercase tracking-widest text-xs mb-2">
              Placeholder Notice
            </p>
            <p className="font-sans text-sm leading-relaxed">{budget.disclaimer}</p>
          </div>
        </div>

        {/* Stacked cards below md — a 3-column table has no good mobile form */}
        <div className="grid gap-4 md:hidden">
          {budget.lineItems.map((item) => (
            <div key={item.category} className="border-4 border-ink bg-surface p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="font-display font-bold text-base">{item.category}</p>
                <span className="font-mono text-sm text-accent shrink-0">{item.allocation}</span>
              </div>
              <p className="font-sans text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:block border-4 border-ink overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr className="bg-accent text-accent-fg">
                <th className="text-left font-display font-black uppercase tracking-widest text-xs md:text-sm px-4 md:px-6 py-4 border-r-2 border-ink">
                  Category
                </th>
                <th className="text-left font-display font-black uppercase tracking-widest text-xs md:text-sm px-4 md:px-6 py-4 border-r-2 border-ink">
                  What It Covers
                </th>
                <th className="text-right font-display font-black uppercase tracking-widest text-xs md:text-sm px-4 md:px-6 py-4">
                  Allocation
                </th>
              </tr>
            </thead>
            <tbody>
              {budget.lineItems.map((item, i) => (
                <tr
                  key={item.category}
                  className={i % 2 === 1 ? "bg-surface" : ""}
                >
                  <td className="font-display font-bold text-sm md:text-base px-4 md:px-6 py-5 border-t-2 border-border-soft border-r-2 align-top">
                    {item.category}
                  </td>
                  <td className="font-sans text-sm text-muted px-4 md:px-6 py-5 border-t-2 border-border-soft border-r-2 align-top">
                    {item.description}
                  </td>
                  <td className="font-mono text-sm px-4 md:px-6 py-5 border-t-2 border-border-soft text-right align-top text-accent">
                    {item.allocation}
                  </td>
                </tr>
              ))}
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
