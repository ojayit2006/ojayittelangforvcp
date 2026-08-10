import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CompetitionBlast from "@/components/CompetitionBlast";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { whyMe } from "@/data/content";

export const metadata: Metadata = { title: "Why Me" };

const tints = ["surface", "violet", "surface", "red"] as const;
const tilts = ["left", "right", "left", "right"] as const;

export default function WhyMePage() {
  return (
    <>
      <PageHero
        eyebrow={whyMe.eyebrow}
        title={whyMe.title}
        subtitle={whyMe.subtitle}
      />

      <section className="px-6 md:px-10 pt-14 md:pt-20 overflow-hidden">
        <CompetitionBlast />
      </section>

      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {whyMe.pillars.map((p, i) => (
            <Card key={p.title} tint={tints[i % tints.length]} tilt={tilts[i % tilts.length]}>
              <span className="font-mono text-sm opacity-60">{`0${i + 1}`}</span>
              <h3 className="font-display font-black uppercase tracking-tighter text-2xl md:text-3xl mt-4 mb-3">
                {p.title}
              </h3>
              <p className="font-sans text-sm md:text-base opacity-85 leading-relaxed">
                {p.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20 md:pb-28">
        <Button href="/testimonials" variant="primary">
          See the Receipts
        </Button>
      </section>
    </>
  );
}
