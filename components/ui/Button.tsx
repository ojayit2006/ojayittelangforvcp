import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "default" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-tighter " +
  "transition-transform duration-150 ease-out select-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg border-4 border-ink shadow-hard " +
    "active:translate-x-[4px] active:translate-y-[4px] active:shadow-hard-none " +
    "hover:-translate-y-[2px] hover:shadow-hard-lg",
  outline:
    "bg-transparent text-ink border-4 border-ink shadow-hard-accent " +
    "hover:bg-ink hover:text-black " +
    "active:translate-x-[4px] active:translate-y-[4px] active:shadow-hard-none",
  ghost:
    "bg-transparent text-text border-4 border-transparent hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-xs",
  default: "h-14 px-8 text-sm",
  lg: "h-20 px-12 text-base",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
