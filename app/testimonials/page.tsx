import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { Plus, Quote } from "lucide-react";
import { testimonials } from "@/data/content";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="06 — Testimonials"
        title="Testimonials"
        subtitle="What people I've actually worked with say — no quotes here until they're real."
      />

      <section className="px-6 md:px-10 py-16 md:py-24">
        {testimonials.length === 0 ? (
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="border-4 border-border-soft p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[260px]"
              >
                <span className="flex h-12 w-12 items-center justify-center border-4 border-border-soft text-muted">
                  <Plus size={20} strokeWidth={3} />
                </span>
                <p className="font-display font-bold uppercase tracking-wide text-sm text-muted">
                  Testimonial slot open
                </p>
                <p className="font-sans text-xs text-muted2 leading-relaxed">
                  Reserved for a real quote from someone you&apos;ve worked
                  with — faculty, a club member, a teammate.
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
            {testimonials.map((t) => (
              <div key={t.name} className="border-4 border-ink bg-surface p-8 shadow-hard">
                <Quote size={24} strokeWidth={2.5} className="text-accent mb-4" />
                <p className="font-sans text-sm md:text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-display font-bold uppercase tracking-tight text-sm">
                  {t.name}
                </p>
                <p className="font-mono text-xs text-muted uppercase tracking-widest">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-14">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </section>
    </>
  );
}
