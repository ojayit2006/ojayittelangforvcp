"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  { src: "/hero-bookshelf.png", alt: "Ojayit Telang", rotate: "rotate-3" },
  { src: "/hero-neon.png", alt: "Ojayit Telang at an installation", rotate: "-rotate-2" },
  { src: "/hero-desk.png", alt: "Ojayit Telang at his desk", rotate: "-rotate-3" },
  { src: "/hero-events.png", alt: "Ojayit Telang — CSI SPIT Events", rotate: "rotate-2" },
];

export default function HeroCollage() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6">
      {photos.map((p, i) => (
        <motion.div
          key={p.src}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`relative aspect-[4/5] border-4 border-ink shadow-hard overflow-hidden ${p.rotate} hover:rotate-0 hover:-translate-y-1 transition-transform duration-200`}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 20vw, 45vw"
            priority={i === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}
