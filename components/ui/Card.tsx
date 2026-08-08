import type { ReactNode } from "react";

type Tint = "surface" | "violet" | "red" | "accent";
type Tilt = "none" | "left" | "right";

const tints: Record<Tint, string> = {
  surface: "bg-surface",
  violet: "bg-violet text-black",
  red: "bg-red text-black",
  accent: "bg-accent text-accent-fg",
};

const tilts: Record<Tilt, string> = {
  none: "",
  left: "-rotate-1",
  right: "rotate-1",
};

interface CardProps {
  children: ReactNode;
  tint?: Tint;
  tilt?: Tilt;
  hover?: boolean;
  className?: string;
}

export default function Card({
  children,
  tint = "surface",
  tilt = "none",
  hover = true,
  className = "",
}: CardProps) {
  return (
    <div
      className={`border-4 border-ink p-8 shadow-hard ${tints[tint]} ${tilts[tilt]} ${
        hover
          ? "transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-hard-lg"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
