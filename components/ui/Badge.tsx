import type { ReactNode } from "react";

type Color = "accent" | "red" | "violet" | "outline";

const colors: Record<Color, string> = {
  accent: "bg-accent text-accent-fg border-ink",
  red: "bg-red text-black border-ink",
  violet: "bg-violet text-black border-ink",
  outline: "bg-transparent text-text border-ink",
};

interface BadgeProps {
  children: ReactNode;
  color?: Color;
  rotate?: "none" | "left" | "right";
  className?: string;
}

const rotateClass = {
  none: "",
  left: "-rotate-2",
  right: "rotate-2",
};

export default function Badge({
  children,
  color = "accent",
  rotate = "none",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block border-2 px-3 py-1.5 font-display text-[11px] md:text-xs font-bold uppercase tracking-widest ${colors[color]} ${rotateClass[rotate]} ${className}`}
    >
      {children}
    </span>
  );
}
