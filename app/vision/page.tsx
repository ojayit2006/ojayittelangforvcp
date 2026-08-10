import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventRunner from "@/components/EventRunner";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { vision, visionRunner } from "@/data/content";

export const metadata: Metadata = { title: "My Vision" };

export default function VisionPage() {
  return (
    <>
      <PageHero eyebrow={vision.eyebrow} title={vision.title} subtitle={vision.subtitle} />

      <section className="px-6 md:px-10">
        {vision.pillars.map((p, i) => (
          <div
            key={p.title}
            className={`flex flex-col md:flex-row gap-4 md:gap-12 py-12 md:py-16 ${
              i !== vision.pillars.length - 1 ? "border-b-4 border-ink" : ""
            }`}
          >
            <span
              aria-hidden
              className="font-display font-black text-muted2 leading-none shrink-0 select-none"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              {`0${i + 1}`}
            </span>
            <div className="md:pt-3">
              <h3 className="font-display font-black uppercase tracking-tighter text-2xl md:text-4xl mb-4 text-text">
                {p.title}
              </h3>
              <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="px-6 md:px-10 py-16 md:py-20 border-t-4 border-ink">
        <Badge color="accent" rotate="left" className="mb-6">
          {visionRunner.eyebrow}
        </Badge>
        <h2 className="font-display font-black uppercase tracking-tighter text-3xl md:text-5xl text-text mb-4">
          {visionRunner.title}
        </h2>
        <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-10">
          {visionRunner.subtitle}
        </p>
        <EventRunner />
      </section>

      <section className="px-6 md:px-10 py-16 md:py-20">
        <Button href="/budget" variant="primary">
          See the Budget Behind This
        </Button>
      </section>
    </>
  );
}
