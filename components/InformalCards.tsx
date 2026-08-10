import Image from "next/image";
import { whyMe } from "@/data/content";

export default function InformalCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {whyMe.informalCards.map((c) => (
        <div
          key={c.caption}
          className={`bg-bg border-4 border-ink shadow-hard p-2.5 md:p-3 pb-4 md:pb-5 ${c.rotate} transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-hard-lg`}
        >
          <div className="relative aspect-[4/5] border-2 border-ink overflow-hidden bg-surface">
            <Image
              src={c.src}
              alt={c.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 20vw, 45vw"
            />
          </div>
          <p className="mt-3 md:mt-4 text-center font-display font-black uppercase tracking-tight text-[11px] md:text-sm text-text leading-snug">
            {c.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
