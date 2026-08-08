import Image from "next/image";
import Antigravity from "@/components/Antigravity";

/**
 * Persistent backdrop for every page: halftone texture, print noise,
 * the CSI SPIT mark held as a constant watermark, and a live particle
 * ring (Antigravity) that reacts to the cursor. mix-blend-mode: screen
 * drops the mark's black fill against the page's near-black background,
 * leaving only its white linework visible.
 */
export default function BackgroundLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 h-[85vmin] w-[85vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        style={{ mixBlendMode: "screen" }}
      >
        <Image
          src="/csi-spit-mark.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-halftone opacity-[0.04]" />

      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute inset-0 opacity-[0.55]">
        <Antigravity
          count={220}
          magnetRadius={7}
          ringRadius={8}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.1}
          lerpSpeed={0.05}
          color="#DFE104"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0.05}
        />
      </div>
    </div>
  );
}
