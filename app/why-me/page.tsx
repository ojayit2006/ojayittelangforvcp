import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InformalCards from "@/components/InformalCards";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import WhyMeCase from "@/components/WhyMeCase";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { whyMe, experience } from "@/data/content";

export const metadata: Metadata = { title: "Why Me" };

export default function WhyMePage() {
  return (
    <>
      <PageHero
        eyebrow={whyMe.eyebrow}
        title={whyMe.title}
        subtitle={whyMe.subtitle}
      />

      <section className="px-6 md:px-10 pt-14 md:pt-16">
        <Button
          href="/ojayit-telang-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
        >
          Read My Full Resume
        </Button>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-20">
        <InformalCards />
      </section>

      <section className="px-6 md:px-10 py-14 md:py-20 border-t-4 border-ink">
        <Badge color="violet" rotate="right" className="mb-6">
          {whyMe.aboutLabel}
        </Badge>
        <p className="font-sans text-base md:text-xl text-muted leading-relaxed max-w-4xl">
          {whyMe.about}
        </p>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-20 border-t-4 border-ink">
        <Badge color="outline" rotate="left" className="mb-6">
          {experience.eyebrow}
        </Badge>
        <h2 className="font-display font-black uppercase tracking-tighter text-3xl md:text-5xl text-text mb-4">
          {experience.title}
        </h2>
        <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-12 md:mb-16">
          {experience.subtitle}
        </p>
        <ExperienceTimeline />
      </section>

      <section className="px-6 md:px-10 py-10 md:py-14 border-t-4 border-ink flex justify-center">
        <Badge color="outline" rotate="left">
          {whyMe.transitionLabel}
        </Badge>
      </section>

      <section className="px-6 md:px-10 pb-16 md:pb-24">
        <WhyMeCase />
      </section>

      <section className="px-6 md:px-10 pb-20 md:pb-28">
        <Button href="/testimonials" variant="primary">
          See the Receipts
        </Button>
      </section>
    </>
  );
}
