"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import HeroCollage from "@/components/HeroCollage";

const exploreCards = [
  { num: "01", href: "/motivation", title: "Motivation", teaser: "Why I'm running, in plain terms.", tint: "surface" as const, tilt: "left" as const },
  { num: "02", href: "/why-me", title: "Why Me", teaser: "Four reasons the role fits.", tint: "violet" as const, tilt: "right" as const },
  { num: "03", href: "/track-record", title: "Track Record", teaser: "What I've actually held and shipped.", tint: "surface" as const, tilt: "right" as const },
  { num: "04", href: "/vision", title: "My Vision", teaser: "Five things I want to fix.", tint: "red" as const, tilt: "left" as const },
  { num: "05", href: "/budget", title: "Budget", teaser: "Where every rupee goes, published.", tint: "surface" as const, tilt: "left" as const },
  { num: "06", href: "/testimonials", title: "Testimonials", teaser: "What people I've worked with say.", tint: "accent" as const, tilt: "right" as const },
];

export default function Home() {
  return (
    <>
      <section className="min-h-[92vh] flex items-center px-6 md:px-10 pt-28 pb-16 border-b-4 border-ink">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center w-full">
          <div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black uppercase leading-[0.82] tracking-tighter text-text"
                style={{ fontSize: "clamp(3rem, 11vw, 9.5rem)" }}
              >
                Ojayit
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
                className="text-stroke font-display font-black uppercase leading-[0.82] tracking-tighter"
                style={{ fontSize: "clamp(3rem, 11vw, 9.5rem)" }}
              >
                Telang
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-8 max-w-xl font-sans text-lg md:text-xl text-muted leading-relaxed"
            >
              Events Head, CSI SPIT. From executing events to shaping the
              bigger picture, I&apos;m ready for the next step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/vision" variant="primary">
                Read My Vision
              </Button>
              <Button href="/track-record" variant="outline">
                See Track Record
              </Button>
            </motion.div>
          </div>

          <HeroCollage />
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
          <h2
            className="font-display font-black uppercase tracking-tighter text-text leading-[0.9]"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Explore the
            <br />
            Campaign
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-muted max-w-xs">
            Six sections. No filler. Everything here is either verified or
            clearly marked as a work in progress.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((c) => (
            <Link key={c.href} href={c.href} className="block">
              <Card tint={c.tint} tilt={c.tilt} className="h-full group">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-sm tracking-widest opacity-60">
                    {c.num}
                  </span>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={2.5}
                    className="opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
                <h3 className="font-display font-black uppercase tracking-tighter text-2xl md:text-3xl mb-3">
                  {c.title}
                </h3>
                <p className="font-sans text-sm opacity-80 leading-relaxed">
                  {c.teaser}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
