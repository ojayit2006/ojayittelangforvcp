"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/data/content";

type Role = (typeof experience.eras)[number]["roles"][number];

/* Frosted card. Leadership roles get the accent-lit treatment so they read
   as the peaks of the progression, not just two more entries. */
function RoleCard({ role }: { role: Role }) {
  const lead = role.lead;
  return (
    <div
      className={`relative rounded-xl border backdrop-blur-xl p-6 md:p-7 transition-transform duration-200 ease-out hover:-translate-y-1 ${
        lead
          ? "border-accent/50 bg-black/70 shadow-[0_0_34px_-10px_var(--color-accent)]"
          : "border-ink/10 bg-black/60 shadow-[0_10px_36px_-14px_rgba(0,0,0,1)]"
      }`}
    >
      {lead && (
        <span className="inline-block mb-3 rounded-full border border-accent/60 bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
          Leadership
        </span>
      )}

      <h4
        className={`font-display font-black uppercase tracking-tight leading-tight ${
          lead ? "text-accent text-2xl md:text-3xl" : "text-text text-xl md:text-2xl"
        }`}
      >
        {role.role}
      </h4>

      <p className="font-sans text-base md:text-lg text-text/90 mt-1.5">{role.org}</p>
      <p className="font-mono text-[11px] md:text-xs uppercase tracking-widest text-muted2 mt-2">
        {role.period}
      </p>

      <p className="font-sans text-[15px] md:text-base text-muted leading-relaxed mt-4">
        {role.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {role.focus.map((f) => (
          <span
            key={f}
            className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
              lead
                ? "border-accent/40 text-accent/90"
                : "border-ink/20 text-muted2"
            }`}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

function Node({ lead }: { lead: boolean }) {
  return (
    <span
      className={`block rounded-full border-2 ${
        lead
          ? "h-4 w-4 border-accent bg-accent shadow-[0_0_16px_2px_var(--color-accent)]"
          : "h-3 w-3 border-ink/50 bg-bg"
      }`}
      aria-hidden
    />
  );
}

function EraHeading({ year, label }: { year: string; label: string }) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center py-10 md:py-14">
      <span
        className="font-display font-black tracking-tighter text-ink/15 leading-none"
        style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)" }}
      >
        {year}
      </span>
      <span className="rounded-full border border-accent/50 bg-black/70 backdrop-blur-xl px-5 py-2 font-display font-bold uppercase tracking-widest text-xs md:text-sm text-accent -mt-2 md:-mt-4">
        {label}
      </span>
    </div>
  );
}

export default function ExperienceTimeline() {
  let index = 0;

  const wrapRef = useRef<HTMLDivElement>(null);
  // Fill the spine in step with how far the timeline has been read.
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 65%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={wrapRef} className="relative max-w-5xl mx-auto">
      {/* the spine: a dim track with an accent fill that follows the scroll */}
      <div
        className="absolute top-0 bottom-0 w-px bg-ink/12 left-[11px] md:left-1/2 md:-translate-x-1/2"
        aria-hidden
      />
      <motion.div
        className="absolute top-0 bottom-0 w-px left-[11px] md:left-1/2 md:-translate-x-1/2 origin-top bg-gradient-to-b from-accent/70 via-accent to-accent/70 shadow-[0_0_12px_1px_var(--color-accent)]"
        style={{ scaleY: fill }}
        aria-hidden
      />

      {experience.eras.map((era) => (
        <Fragment key={era.year}>
          <EraHeading year={era.year} label={era.label} />

          {era.roles.map((role) => {
            const right = index++ % 2 === 1;
            return (
              <div key={`${role.role}-${role.org}`} className="relative pl-9 md:pl-0 pb-8 md:pb-10">
                {/* node sits on the spine */}
                <span className="absolute left-0 top-6 flex w-[23px] justify-center md:left-1/2 md:-translate-x-1/2">
                  <Node lead={role.lead} />
                </span>

                <div
                  className={`md:w-[calc(50%-2.5rem)] ${right ? "md:ml-auto" : ""}`}
                >
                  <RoleCard role={role} />
                </div>
              </div>
            );
          })}
        </Fragment>
      ))}

      <p className="relative z-10 text-center pt-6 font-display font-black uppercase tracking-tight text-lg md:text-2xl text-text">
        {experience.closing}
      </p>
    </div>
  );
}
