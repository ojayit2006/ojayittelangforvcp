import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { motivation } from "@/data/content";

export const metadata: Metadata = { title: "Motivation" };

export default function MotivationPage() {
  return (
    <>
      <PageHero
        eyebrow={motivation.eyebrow}
        title={motivation.title}
        subtitle={motivation.subtitle}
      />

      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <div className="max-w-2xl space-y-8">
              {motivation.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-display font-bold text-2xl md:text-3xl leading-snug text-text"
                      : "font-sans text-lg text-muted leading-relaxed"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-14">
              <Button href="/vision" variant="primary">
                See What I&apos;d Actually Do
              </Button>
            </div>
          </div>

          <div className="lg:sticky lg:top-32 grid grid-cols-2 gap-5 md:gap-7">
            <div className="relative -rotate-1 border-4 border-ink shadow-hard overflow-hidden">
              <Image
                src="/motivation-hackathon.png"
                alt="CSI SPIT hackathon — team photos, late nights, and the SPIT Hack '26 win"
                width={904}
                height={1600}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 26vw, 45vw"
              />
            </div>

            <div className="relative rotate-1 border-4 border-ink shadow-hard overflow-hidden">
              <Image
                src="/motivation-people-collage.png"
                alt="Certificates, teams, and CSI SPIT people from the last couple of years"
                width={1242}
                height={2306}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 26vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
