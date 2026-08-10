"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Badge from "@/components/ui/Badge";
import { visionRunner } from "@/data/content";

/* ── Tuning ─────────────────────────────────────────────── */
const DINO_X = 72;
const GRAVITY = 2200;
const JUMP_V = 700;
const SPEED_START = 220;
const SPEED_STEP = 5;
const SPEED_MAX = 400;
const GROUND_OFFSET = 46;
const CELL = 2.4; // dino pixel size
const CACTUS_CELL = 4;
const GATE_W = 150;

/* Dino silhouette, body only — legs are drawn separately so they can run. */
const DINO_BODY = [
  "..............######..",
  "..............######..",
  "..............##.####.",
  "..............######..",
  "..............######..",
  "..............####....",
  "..............######..",
  "..#...........#####...",
  ".###..........#####...",
  ".####.........#####...",
  ".#####.......######...",
  "..###################.",
  "..###################.",
  "...#################..",
  "....###############...",
  ".....##############...",
  "......#############...",
  "......###########.....",
];
const DINO_COLS = 22;
const DINO_ROWS = DINO_BODY.length + 6; // + legs
const DINO_W = DINO_COLS * CELL;
const DINO_H = DINO_ROWS * CELL;

type Phase = "idle" | "running" | "over" | "won";

interface Obstacle {
  kind: "event" | "finish";
  x: number;
  idx: number;
  w: number;
  h: number;
  passed: boolean;
}

interface World {
  phase: Phase;
  y: number; // dino height above the ground
  vy: number;
  speed: number;
  obstacles: Obstacle[];
  spawned: number;
  finishSpawned: boolean;
  score: number;
  legFrame: number;
  legTimer: number;
  groundX: number;
  width: number;
  height: number;
  labelFont: string;
}

const events = visionRunner.events;

/* ── Best score, kept in localStorage ─────────────────────
   Read through useSyncExternalStore so the server render and
   the first client render agree (both "0") without an effect. */
const BEST_KEY = "vcp-runner-best";
let bestSnapshot = "0";
let bestLoaded = false;
let bestListeners: Array<() => void> = [];

function subscribeBest(onChange: () => void) {
  if (!bestLoaded) {
    bestLoaded = true;
    try {
      bestSnapshot = localStorage.getItem(BEST_KEY) ?? "0";
    } catch {}
  }
  bestListeners.push(onChange);
  return () => {
    bestListeners = bestListeners.filter((l) => l !== onChange);
  };
}
const getBest = () => bestSnapshot;
const getServerBest = () => "0";

function recordBest(value: number) {
  if (value <= Number(bestSnapshot)) return;
  bestSnapshot = String(value);
  try {
    localStorage.setItem(BEST_KEY, bestSnapshot);
  } catch {}
  for (const l of bestListeners) l();
}

export default function EventRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const fontProbeRef = useRef<HTMLSpanElement>(null);

  const world = useRef<World>({
    phase: "idle",
    y: 0,
    vy: 0,
    speed: SPEED_START,
    obstacles: [],
    spawned: 0,
    finishSpawned: false,
    score: 0,
    legFrame: 0,
    legTimer: 0,
    groundX: 0,
    width: 900,
    height: 300,
    labelFont: "sans-serif",
  });

  const [phase, setPhase] = useState<Phase>("idle");
  const [score, setScore] = useState(0);
  const [cleared, setCleared] = useState<number[]>([]);
  const [hitBy, setHitBy] = useState<string | null>(null);
  const best = Number(useSyncExternalStore(subscribeBest, getBest, getServerBest));

  /* ── Drawing ──────────────────────────────────────────── */
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const g = world.current;
    const { width: W, height: H } = g;
    const groundY = H - GROUND_OFFSET;

    const css = getComputedStyle(document.documentElement);
    const ink = css.getPropertyValue("--color-ink").trim() || "#FAFAFA";
    const accent = css.getPropertyValue("--color-accent").trim() || "#DFE104";
    const bg = css.getPropertyValue("--color-bg").trim() || "#0A0A0C";
    const muted = css.getPropertyValue("--color-muted2").trim() || "#52525B";
    const red = css.getPropertyValue("--color-red").trim() || "#FF6B6B";

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Halftone dots drifting behind the action.
    ctx.fillStyle = muted;
    const drift = g.groundX * 0.25;
    for (let i = 0; i < 40; i++) {
      const dx = (i * 137.5 - drift) % (W + 40);
      const x = dx < 0 ? dx + W + 40 : dx;
      const y = 24 + ((i * 67) % Math.max(1, groundY - 110));
      ctx.fillRect(x, y, 2, 2);
    }

    // Ground: solid ink line plus scrolling grit.
    ctx.fillStyle = ink;
    ctx.fillRect(0, groundY, W, 3);
    for (let i = 0; i < 30; i++) {
      const dx = (i * 91.7 - g.groundX) % (W + 30);
      const x = dx < 0 ? dx + W + 30 : dx;
      ctx.fillRect(x, groundY + 9 + ((i * 13) % 12), i % 3 === 0 ? 8 : 4, 2);
    }

    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for (const o of g.obstacles) {
      if (o.kind === "finish") {
        drawFinish(ctx, o, groundY, g.labelFont, ink, accent, bg);
        continue;
      }

      const done = o.passed;
      ctx.fillStyle = done ? accent : ink;
      drawCactus(ctx, o.x, groundY, o.h);

      const label = events[o.idx].name.toUpperCase();
      ctx.font = `700 11px ${g.labelFont}`;
      const boxW = ctx.measureText(label).width + 18;
      const boxH = 22;
      const boxX = Math.round(o.x + o.w / 2 - boxW / 2);
      const boxY = Math.round(groundY - o.h - 12 - boxH);

      // tick connecting the label to its obstacle
      ctx.fillStyle = done ? accent : ink;
      ctx.fillRect(Math.round(o.x + o.w / 2) - 1, boxY + boxH, 2, 12);

      ctx.fillStyle = done ? accent : bg;
      ctx.fillRect(boxX, boxY, boxW, boxH);
      ctx.strokeStyle = done ? accent : ink;
      ctx.lineWidth = 2;
      ctx.strokeRect(boxX + 1, boxY + 1, boxW - 2, boxH - 2);

      ctx.fillStyle = done ? "#000000" : ink;
      ctx.fillText(label, boxX + boxW / 2, boxY + boxH / 2 + 1);
    }

    // CSI, the dinosaur.
    const legFrame =
      g.phase === "over" ? -1 : g.phase === "won" ? 0 : g.y > 0 ? 2 : g.legFrame;
    drawDino(
      ctx,
      DINO_X,
      groundY - g.y,
      legFrame,
      g.phase === "over" ? red : accent,
      bg,
    );

    // "CSI" tag riding above the dino's head.
    ctx.font = `700 10px ${g.labelFont}`;
    const tagW = ctx.measureText("CSI").width + 14;
    const tagX = DINO_X + DINO_W - tagW + 4;
    const tagY = groundY - g.y - DINO_H - 14;
    ctx.fillStyle = g.phase === "over" ? red : accent;
    ctx.fillRect(tagX, tagY, tagW, 18);
    ctx.fillStyle = "#000000";
    ctx.fillText("CSI", tagX + tagW / 2, tagY + 10);
  }, []);

  /* ── Simulation ───────────────────────────────────────── */
  const update = useCallback((dt: number) => {
    const g = world.current;
    const groundY = g.height - GROUND_OFFSET;

    g.speed = Math.min(SPEED_MAX, g.speed + SPEED_STEP * dt);
    g.groundX += g.speed * dt;

    g.vy -= GRAVITY * dt;
    g.y += g.vy * dt;
    if (g.y <= 0) {
      g.y = 0;
      g.vy = 0;
    }

    g.legTimer += dt;
    if (g.legTimer > 0.1) {
      g.legTimer = 0;
      g.legFrame = g.legFrame === 0 ? 1 : 0;
    }

    // Scroll the course, marking each event the moment CSI gets past it.
    const justCleared: number[] = [];
    g.obstacles = g.obstacles
      .map((o) => {
        const x = o.x - g.speed * dt;
        const passed = o.passed || x + o.w < DINO_X + 10;
        if (passed && !o.passed && o.kind === "event") justCleared.push(o.idx);
        return { ...o, x, passed };
      })
      .filter((o) => o.x + o.w > -240);

    if (justCleared.length > 0) {
      g.score += justCleared.length;
      setScore(g.score);
      setCleared((c) => [...c, ...justCleared.filter((i) => !c.includes(i))]);
    }

    // Spawn the next event once there's room — then the finish gate.
    const last = g.obstacles[g.obstacles.length - 1];
    const gap = Math.max(330, g.speed * (0.95 + Math.random() * 0.65));
    const roomToSpawn = !last || last.x < g.width - gap;
    if (roomToSpawn && g.spawned < events.length) {
      const idx = g.spawned;
      g.obstacles.push({
        kind: "event",
        x: g.width + 40,
        idx,
        w: 9 * CACTUS_CELL,
        h: (events[idx].tall ? 18 : 12) * CACTUS_CELL,
        passed: false,
      });
      g.spawned++;
    } else if (roomToSpawn && !g.finishSpawned) {
      g.obstacles.push({
        kind: "finish",
        x: g.width + 40,
        idx: -1,
        w: GATE_W,
        h: 0,
        passed: false,
      });
      g.finishSpawned = true;
    }

    // Crossing the gate ends the run — the whole calendar is behind you.
    const gate = g.obstacles.find((o) => o.kind === "finish");
    if (gate && gate.x + gate.w / 2 <= DINO_X + DINO_W / 2) {
      g.phase = "won";
      setPhase("won");
      recordBest(g.score);
      return;
    }

    // Collision — a forgiving box, the pixels are chunky.
    const dinoBox = {
      x: DINO_X + 10,
      y: groundY - g.y - DINO_H + 8,
      w: DINO_W - 20,
      h: DINO_H - 12,
    };
    for (const o of g.obstacles) {
      if (o.kind !== "event") continue;
      const box = { x: o.x + 5, y: groundY - o.h, w: o.w - 10, h: o.h };
      const hit =
        dinoBox.x < box.x + box.w &&
        dinoBox.x + dinoBox.w > box.x &&
        dinoBox.y < box.y + box.h &&
        dinoBox.y + dinoBox.h > box.y;
      if (hit) {
        g.phase = "over";
        setPhase("over");
        setHitBy(events[o.idx].name);
        recordBest(g.score);
        return;
      }
    }
  }, []);

  /* ── Loop ─────────────────────────────────────────────── */
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;
      if (world.current.phase === "running") update(dt);
      draw();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [draw, update]);

  /* ── Sizing ───────────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const resize = () => {
      const width = wrap.clientWidth;
      const height = window.innerWidth >= 768 ? 300 : 220;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      world.current.width = width;
      world.current.height = height;
      if (fontProbeRef.current) {
        world.current.labelFont =
          getComputedStyle(fontProbeRef.current).fontFamily || "sans-serif";
      }
      draw();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    window.addEventListener("resize", resize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [draw]);

  /* ── Input ────────────────────────────────────────────── */
  const reset = useCallback(() => {
    const g = world.current;
    g.y = 0;
    g.vy = 0;
    g.speed = SPEED_START;
    g.obstacles = [];
    g.spawned = 0;
    g.finishSpawned = false;
    g.score = 0;
    g.groundX = 0;
    g.phase = "running";
    setScore(0);
    setCleared([]);
    setHitBy(null);
    setPhase("running");
  }, []);

  const poke = useCallback(() => {
    const g = world.current;
    if (g.phase === "running") {
      if (g.y <= 0) g.vy = JUMP_V;
    } else {
      reset();
    }
  }, [reset]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "ArrowUp" || e.key === "Enter") {
      e.preventDefault();
      poke();
    }
  };

  return (
    <div>
      <span ref={fontProbeRef} aria-hidden className="font-mono hidden" />

      <div className="border-4 border-ink shadow-hard-accent bg-bg">
        {/* header bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-ink px-4 md:px-6 py-3">
          <span className="font-display font-black uppercase tracking-tighter text-sm md:text-base text-text">
            CSI vs. The Calendar
          </span>
          <div className="flex items-center gap-4 font-mono text-[11px] md:text-xs uppercase tracking-widest">
            <span className="text-muted">
              Cleared{" "}
              <span className="text-accent font-bold">
                {String(score).padStart(2, "0")}
              </span>
              /{String(events.length).padStart(2, "0")}
            </span>
            <span className="text-muted">
              Best{" "}
              <span className="text-text font-bold">
                {String(best).padStart(2, "0")}
              </span>
            </span>
          </div>
        </div>

        {/* play area */}
        <div
          ref={wrapRef}
          role="button"
          tabIndex={0}
          aria-label="Jump the events. Press space or tap to play."
          onKeyDown={onKeyDown}
          onPointerDown={(e) => {
            e.preventDefault();
            wrapRef.current?.focus();
            poke();
          }}
          className="relative w-full cursor-pointer select-none outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-inset touch-none"
        >
          <canvas ref={canvasRef} className="block w-full" />

          {phase !== "running" && (
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div
                className={`bg-bg border-4 px-5 md:px-8 py-4 md:py-5 text-center max-w-sm ${
                  phase === "won"
                    ? "border-accent shadow-hard-accent"
                    : "border-ink shadow-hard-sm"
                }`}
              >
                {phase === "idle" && (
                  <>
                    <p className="font-display font-black uppercase tracking-tighter text-lg md:text-2xl text-text">
                      Press Space to Run
                    </p>
                    <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-muted mt-2">
                      Space / Tap to jump · Seven events ahead
                    </p>
                  </>
                )}

                {phase === "over" && (
                  <>
                    <p className="font-display font-black uppercase tracking-tighter text-lg md:text-2xl text-red">
                      Tripped Over
                    </p>
                    <p className="font-display font-black uppercase tracking-tighter text-base md:text-xl text-text mt-1">
                      {hitBy}
                    </p>
                    <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-muted mt-3">
                      {score} cleared · Space / Tap to go again
                    </p>
                  </>
                )}

                {phase === "won" && (
                  <>
                    <p className="font-display font-black uppercase tracking-tighter text-xl md:text-3xl text-accent leading-none">
                      Tenure Complete
                    </p>
                    <p className="font-display font-black uppercase tracking-tighter text-base md:text-xl text-text mt-2">
                      {events.length}/{events.length} Events Delivered
                    </p>
                    <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-muted mt-3">
                      That&apos;s the whole calendar · Space / Tap to run it again
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* event roster / timeline */}
        <div className="border-t-4 border-ink px-4 md:px-6 py-4">
          <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-muted mb-3">
            Timeline
          </p>
          <div className="flex flex-wrap items-start gap-2">
            {events.map((ev, i) => (
              <span
                key={ev.name}
                className={`flex flex-col gap-1 border-2 px-2.5 py-1.5 transition-colors duration-200 ${
                  cleared.includes(i)
                    ? "bg-accent text-accent-fg border-accent font-bold"
                    : "bg-transparent text-muted border-muted2"
                }`}
              >
                <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
                  {/* fixed-width slot so the row doesn't reflow when one lights up */}
                  <span className="inline-block w-3 mr-1">
                    {cleared.includes(i) ? "✓" : ""}
                  </span>
                  {ev.name}
                </span>
                <span
                  className={`font-mono text-[9px] md:text-[10px] uppercase tracking-widest pl-4 ${
                    cleared.includes(i) ? "text-accent-fg/70" : "text-muted2"
                  }`}
                >
                  {ev.month}
                </span>
              </span>
            ))}
            {phase === "won" && (
              <Badge color="red" rotate="right" className="ml-1">
                Full Calendar Cleared
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Sprites ──────────────────────────────────────────────
   Everything is drawn on a chunky pixel grid so the game
   matches the hard-edged, no-anti-aliasing feel of the page. */

function drawDino(
  ctx: CanvasRenderingContext2D,
  x: number,
  bottomY: number,
  frame: number, // 0 | 1 running, 2 airborne, -1 dead
  color: string,
  bg: string,
) {
  const top = bottomY - DINO_H;
  ctx.fillStyle = color;

  DINO_BODY.forEach((row, r) => {
    for (let c = 0; c < DINO_COLS; c++) {
      if (row[c] === "#") {
        ctx.fillRect(x + c * CELL, top + r * CELL, CELL + 0.5, CELL + 0.5);
      }
    }
  });

  // Legs: alternate stride on the ground, tucked mid-jump, planted when dead.
  const legTop = DINO_BODY.length;
  const strides: Record<number, [number, number]> = {
    0: [6, 3],
    1: [3, 6],
    2: [4, 2],
  };
  const [backLen, frontLen] = frame === -1 ? [6, 6] : strides[frame] ?? [5, 5];

  const leg = (col: number, len: number) => {
    ctx.fillRect(x + col * CELL, top + legTop * CELL, 3 * CELL, len * CELL);
    ctx.fillRect(
      x + col * CELL,
      top + (legTop + len - 1) * CELL,
      4.5 * CELL,
      CELL,
    );
  };
  leg(6, backLen);
  leg(12, frontLen);

  // Eye: punched out of the head, crossed out when the run ends.
  const eyeX = x + 16 * CELL;
  const eyeY = top + 2 * CELL;
  if (frame === -1) {
    ctx.fillStyle = bg;
    ctx.fillRect(eyeX - CELL, eyeY - CELL, 3 * CELL, 3 * CELL);
    ctx.fillStyle = color;
    ctx.fillRect(eyeX - CELL, eyeY - CELL, CELL, CELL);
    ctx.fillRect(eyeX + CELL, eyeY + CELL, CELL, CELL);
    ctx.fillRect(eyeX + CELL, eyeY - CELL, CELL, CELL);
    ctx.fillRect(eyeX - CELL, eyeY + CELL, CELL, CELL);
  } else {
    ctx.fillStyle = bg;
    ctx.fillRect(eyeX, eyeY, CELL + 0.5, CELL + 0.5);
  }
}

function drawCactus(
  ctx: CanvasRenderingContext2D,
  x: number,
  groundY: number,
  h: number,
) {
  const c = CACTUS_CELL;
  const rows = Math.round(h / c);
  const top = groundY - h;
  const tall = rows > 14;

  ctx.fillRect(x + 4 * c, top, 3 * c, h); // trunk

  const la = tall ? 7 : 3; // left arm
  ctx.fillRect(x, top + la * c, 2 * c, 6 * c);
  ctx.fillRect(x + c, top + (la + 5) * c, 4 * c, 2 * c);

  const ra = tall ? 10 : 5; // right arm
  ctx.fillRect(x + 7 * c, top + ra * c, 2 * c, 6 * c);
  ctx.fillRect(x + 5 * c, top + (ra + 5) * c, 3 * c, 2 * c);
}

/* The end of the calendar: a checkered gate you run through, not over. */
function drawFinish(
  ctx: CanvasRenderingContext2D,
  o: Obstacle,
  groundY: number,
  font: string,
  ink: string,
  accent: string,
  bg: string,
) {
  const postW = 16;
  const height = Math.min(150, groundY - 62);
  const top = groundY - height;
  const check = 8;

  for (const px of [o.x, o.x + o.w - postW]) {
    for (let r = 0; r * check < height; r++) {
      for (let c = 0; c < postW / check; c++) {
        ctx.fillStyle = (r + c) % 2 === 0 ? ink : bg;
        ctx.fillRect(px + c * check, top + r * check, check, check);
      }
    }
    ctx.strokeStyle = ink;
    ctx.lineWidth = 2;
    ctx.strokeRect(px + 1, top + 1, postW - 2, height - 2);
  }

  const bannerH = 32;
  const bannerY = top - bannerH - 6;
  ctx.fillStyle = accent;
  ctx.fillRect(o.x - 6, bannerY, o.w + 12, bannerH);
  ctx.strokeStyle = ink;
  ctx.lineWidth = 2;
  ctx.strokeRect(o.x - 5, bannerY + 1, o.w + 10, bannerH - 2);

  ctx.fillStyle = "#000000";
  ctx.font = `700 15px ${font}`;
  ctx.fillText("TENURE END", o.x + o.w / 2, bannerY + bannerH / 2 + 1);
}
