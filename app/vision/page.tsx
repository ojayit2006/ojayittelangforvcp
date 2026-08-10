import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventRunner from "@/components/EventRunner";
import OrgChart from "@/components/OrgChart";
import Improvements from "@/components/Improvements";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { vision, visionRunner, orgChart, improvements } from "@/data/content";

export const metadata: Metadata = { title: "My Vision" };

export default function VisionPage() {
  return (
    <>
      <PageHero eyebrow={vision.eyebrow} title={vision.title} subtitle={vision.subtitle} />

      <section className="px-6 md:px-10 py-16 md:py-20">
        <Badge color="violet" rotate="right" className="mb-6">
          {orgChart.eyebrow}
        </Badge>
        <h2 className="font-display font-black uppercase tracking-tighter text-3xl md:text-5xl text-text mb-4">
          {orgChart.title}
        </h2>
        <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-12 md:mb-16">
          {orgChart.subtitle}
        </p>
        <OrgChart />
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

      <section className="px-6 md:px-10 py-16 md:py-20 border-t-4 border-ink">
        <Badge color="red" rotate="left" className="mb-6">
          {improvements.eyebrow}
        </Badge>
        <h2 className="font-display font-black uppercase tracking-tighter text-3xl md:text-5xl text-text mb-4">
          {improvements.title}
        </h2>
        <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-12 md:mb-16">
          {improvements.subtitle}
        </p>
        <Improvements />
      </section>

      <section className="px-6 md:px-10 py-16 md:py-20">
        <Button href="/budget" variant="primary">
          See the Budget Behind This
        </Button>
      </section>
    </>
  );
}
