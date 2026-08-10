import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import { support, candidate } from "@/data/content";

export const metadata: Metadata = { title: "Feedback & Donations" };

interface Panel {
  heading: string;
  qr: string;
  qrAlt: string;
  lines: string[];
  /* The UPI image already carries its own dark card, so it skips the white mat. */
  qrOnDark?: boolean;
  upiId?: string;
}

const panels: Panel[] = [support.feedback, support.donations];

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow={support.eyebrow} title={support.title} subtitle={support.subtitle} />

      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 max-w-5xl">
          {panels.map((p) => (
            <div
              key={p.heading}
              className="border-4 border-ink bg-surface shadow-hard p-8 md:p-10 flex flex-col items-center text-center"
            >
              <h2 className="font-display font-black uppercase tracking-tighter text-2xl md:text-3xl text-text mb-8">
                {p.heading}
              </h2>

              <div
                className={`border-4 border-ink shadow-hard-sm ${
                  p.qrOnDark ? "bg-bg" : "bg-white p-3"
                }`}
              >
                <Image
                  src={p.qr}
                  alt={p.qrAlt}
                  width={280}
                  height={280}
                  className="w-44 md:w-56 h-auto"
                />
              </div>

              {p.upiId && (
                <p className="font-figures text-sm md:text-base text-accent mt-5 break-all">
                  {p.upiId}
                </p>
              )}

              <div className="mt-8 space-y-2">
                {p.lines.map((line) => (
                  <p
                    key={line}
                    className="font-display font-black uppercase tracking-tight text-lg md:text-2xl text-text leading-snug"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20 md:pb-28">
        <Button href={`mailto:${candidate.email}`} variant="primary">
          Email Feedback Directly
        </Button>
      </section>
    </>
  );
}
