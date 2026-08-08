"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Asterisk } from "lucide-react";

interface MarqueeBarProps {
  items: string[];
  speed?: number;
  tone?: "accent" | "ink";
  className?: string;
}

export default function MarqueeBar({
  items,
  speed = 60,
  tone = "accent",
  className = "",
}: MarqueeBarProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const iconColor = tone === "accent" ? "text-accent-fg/70" : "text-muted";
  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 md:gap-10 px-3 md:px-5">
          <span>{item}</span>
          <Asterisk className={iconColor} size={18} strokeWidth={3} />
        </span>
      ))}
    </>
  );

  const wrapperTone =
    tone === "accent" ? "bg-accent text-accent-fg" : "bg-bg text-text";

  if (reduceMotion) {
    return (
      <div
        className={`border-y-4 border-ink py-4 md:py-5 overflow-x-auto font-display font-black uppercase tracking-tighter text-lg md:text-2xl ${wrapperTone} ${className}`}
      >
        <div className="flex whitespace-nowrap">{content}</div>
      </div>
    );
  }

  return (
    <div
      className={`border-y-4 border-ink py-4 md:py-5 font-display font-black uppercase tracking-tighter text-lg md:text-2xl ${wrapperTone} ${className}`}
    >
      <Marquee speed={speed} gradient={false} autoFill>
        {content}
      </Marquee>
    </div>
  );
}
