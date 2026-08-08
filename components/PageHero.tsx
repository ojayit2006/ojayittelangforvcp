"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <div className="pt-32 md:pt-40 pb-14 md:pb-20 px-6 md:px-10 border-b-4 border-ink">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <Badge color="outline" rotate="left">
          {eyebrow}
        </Badge>
      </motion.div>

      <div className="overflow-hidden">
        <motion.h1
          className="font-display font-black uppercase leading-[0.85] tracking-tighter text-text"
          style={{ fontSize: "clamp(2.75rem, 9vw, 8rem)" }}
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        >
          {title}
        </motion.h1>
      </div>

      {subtitle && (
        <motion.p
          className="mt-6 font-sans text-muted text-base md:text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
