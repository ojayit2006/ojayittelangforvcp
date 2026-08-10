"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type Phase = "idle" | "pressed" | "boom";

// Long enough to actually look at the competition before they go.
const FUSE_SECONDS = 5;

const tiles = [
  { src: "/competition-1.png", tilt: -3, charred: -9 },
  { src: "/competition-2.png", tilt: 2, charred: 7 },
  { src: "/competition-3.png", tilt: -2, charred: -6 },
  { src: "/competition-4.png", tilt: 3, charred: 10 },
];

// Classic comic starburst — deterministic so SSR and client markup agree.
const burst = (spikes: number, outer: number, inner: number) =>
  Array.from({ length: spikes * 2 }, (_, i) => {
    const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
    const jitter = ((i * 17) % 16) - 8;
    const r = (i % 2 === 0 ? outer : inner) + jitter;
    return `${150 + Math.cos(a) * r},${150 + Math.sin(a) * r}`;
  }).join(" ");

const OUTER_BURST = burst(14, 148, 88);
const INNER_BURST = burst(14, 112, 62);

const debris = Array.from({ length: 34 }, (_, i) => {
  const angle = (i / 34) * Math.PI * 2 + (i % 3) * 0.25;
  const dist = 150 + ((i * 53) % 240);
  return {
    x: Math.cos(angle) * dist,
    y: Math.sin(angle) * dist * 0.75,
    size: 6 + ((i * 11) % 16),
    rotate: (i * 61) % 360,
    color: ["bg-accent", "bg-red", "bg-ink", "bg-violet"][i % 4],
  };
});

const smoke = Array.from({ length: 6 }, (_, i) => ({
  x: -110 + i * 44,
  size: 46 + ((i * 23) % 40),
  delay: 0.25 + i * 0.07,
}));

export default function CompetitionBlast() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [phase, setPhase] = useState<Phase>("idle");
  const [run, setRun] = useState(0);
  const [count, setCount] = useState(FUSE_SECONDS);

  // Let the competition sit there a while, then push the plunger by itself.
  useEffect(() => {
    if (!inView || phase !== "idle") return;
    const tick = setInterval(
      () => setCount((c) => (c > 0 ? c - 1 : 0)),
      1000,
    );
    const t = setTimeout(() => setPhase("pressed"), FUSE_SECONDS * 1000);
    return () => {
      clearInterval(tick);
      clearTimeout(t);
    };
  }, [inView, phase, run]);

  // Fuse burn between the plunger going down and the blast.
  useEffect(() => {
    if (phase !== "pressed") return;
    const t = setTimeout(() => setPhase("boom"), 520);
    return () => clearTimeout(t);
  }, [phase, run]);

  const detonate = () => {
    if (phase === "idle") setPhase("pressed");
    else {
      setPhase("idle");
      setCount(FUSE_SECONDS);
      setRun((r) => r + 1);
    }
  };

  const down = phase !== "idle";
  const blown = phase === "boom";

  return (
    <div
      ref={ref}
      className="flex flex-col-reverse md:flex-row md:items-center gap-12 md:gap-10"
    >
      <div className="flex-1 min-w-0">
      <div className="relative flex items-end justify-center gap-4 md:gap-8 min-h-[240px] md:min-h-[320px]">
        {/* shockwave */}
        {blown && (
          <motion.div
            key={`flash-${run}`}
            initial={{ scale: 0.2, opacity: 0.85 }}
            animate={{ scale: 3.4, opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent pointer-events-none"
          />
        )}

        {/* debris */}
        {blown &&
          debris.map((d, i) => (
            <motion.span
              key={`debris-${run}-${i}`}
              initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              animate={{ x: d.x, y: d.y, opacity: 0, rotate: d.rotate }}
              transition={{ duration: 1, ease: "easeOut", delay: (i % 5) * 0.02 }}
              style={{ width: d.size, height: d.size }}
              className={`absolute left-1/2 top-1/2 border-2 border-ink pointer-events-none ${d.color}`}
            />
          ))}

        {/* the competition — blown black */}
        {tiles.map((t, i) => (
          <motion.div
            key={`${t.src}-${run}`}
            animate={
              blown
                ? { x: 0, y: 0, scale: [1, 1.25, 0.94, 1], rotate: t.charred }
                : phase === "pressed"
                  ? {
                      x: [0, -5, 5, -4, 4, 0],
                      rotate: [t.tilt, t.tilt - 3, t.tilt + 3, t.tilt],
                    }
                  : { x: 0, y: 0, rotate: t.tilt, scale: 1 }
            }
            transition={
              blown
                ? { duration: 0.5, ease: "easeOut" }
                : phase === "pressed"
                  ? { duration: 0.26, repeat: 1 }
                  : { duration: 0.3 }
            }
            className="relative w-20 h-20 md:w-36 md:h-36 border-4 border-ink shadow-hard-sm overflow-hidden bg-surface shrink-0"
          >
            <Image
              src={t.src}
              alt={`Competitor ${i + 1}`}
              fill
              className="object-cover grayscale"
              sizes="(min-width: 768px) 9rem, 5rem"
            />
            {/* scorched to black */}
            <motion.span
              initial={false}
              animate={{ opacity: blown ? 1 : 0 }}
              transition={{ duration: 0.25, delay: blown ? 0.12 : 0 }}
              className="absolute inset-0 bg-black pointer-events-none"
            />
          </motion.div>
        ))}

        {/* smoke drifting off the wreckage */}
        {blown &&
          smoke.map((s, i) => (
            <motion.span
              key={`smoke-${run}-${i}`}
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              animate={{ opacity: [0, 0.35, 0], y: -120, scale: 1.6 }}
              transition={{ duration: 2.2, delay: s.delay, ease: "easeOut" }}
              style={{ width: s.size, height: s.size, marginLeft: s.x }}
              className="absolute left-1/2 bottom-6 rounded-full bg-muted2 blur-xl pointer-events-none"
            />
          ))}

        {/* KABOOM! */}
        {blown && (
          <motion.div
            key={`kaboom-${run}`}
            initial={{ scale: 0, rotate: -25 }}
            animate={{ scale: [0, 1.25, 0.95, 1.05], rotate: [-25, -6, -14, -10] }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[260px] h-[260px] md:w-[380px] md:h-[380px]"
          >
            <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
              <polygon
                points={OUTER_BURST}
                className="fill-accent stroke-black"
                strokeWidth={10}
                strokeLinejoin="round"
              />
              <polygon
                points={INNER_BURST}
                className="fill-red stroke-black"
                strokeWidth={8}
                strokeLinejoin="round"
              />
              <text
                x="150"
                y="158"
                textAnchor="middle"
                className="font-display fill-black"
                style={{
                  fontSize: 58,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  paintOrder: "stroke",
                  stroke: "#FAFAFA",
                  strokeWidth: 6,
                }}
              >
                KABOOM!
              </text>
            </svg>
          </motion.div>
        )}
      </div>

      <div className="mt-10 md:mt-12 text-center">
        <h2
          className="font-display font-black uppercase tracking-tighter text-text leading-none"
          style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}
        >
          My Competition
        </h2>
      </div>
      </div>

      {/* me, and the plunger that did it */}
      <div className="shrink-0 self-end md:self-center flex flex-col items-center gap-6">
        <div className="relative w-40 md:w-56 aspect-[938/1600] border-4 border-ink shadow-hard-accent rotate-2">
          <Image
            src="/why-me-photo.png"
            alt="Ojayit Telang"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 14rem, 10rem"
            priority
          />
        </div>

        <button
          type="button"
          onClick={detonate}
          aria-label={blown ? "Detonate again" : "Push the plunger"}
          className="relative w-28 h-24 cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-accent group"
        >
          {/* spark running up the fuse */}
          {phase === "pressed" && (
            <motion.span
              key={`spark-${run}`}
              initial={{ y: 0, opacity: 1, scale: 1 }}
              animate={{ y: -46, opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 bg-accent border-2 border-ink rounded-full"
            />
          )}

          {/* handle + rod */}
          <motion.span
            animate={{ y: down ? 26 : 0 }}
            transition={{ type: "spring", stiffness: 900, damping: 18 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center"
          >
            <span className="block w-16 h-3.5 bg-red border-4 border-ink" />
            <span className="block w-2.5 h-9 bg-ink" />
          </motion.span>

          {/* box */}
          <motion.span
            animate={blown ? { x: [0, -3, 3, 0] } : { x: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-12 bg-surface border-4 border-ink shadow-hard-sm flex items-center justify-center font-display font-black uppercase tracking-tighter text-sm text-red group-hover:bg-red group-hover:text-black transition-colors"
          >
            TNT
          </motion.span>
        </button>

        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          {blown
            ? "Run it back"
            : phase === "pressed"
              ? "…"
              : `Detonating in ${count}`}
        </span>
      </div>
    </div>
  );
}
