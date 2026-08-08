import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TimelineItem from "@/components/TimelineItem";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Trophy } from "lucide-react";
import { trackRecord } from "@/data/content";

export const metadata: Metadata = { title: "Track Record" };

const badgeColors = ["accent", "violet", "red", "outline"] as const;

export default function TrackRecordPage() {
  return (
    <>
      <PageHero
        eyebrow={trackRecord.eyebrow}
        title={trackRecord.title}
        subtitle={trackRecord.subtitle}
      />

      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {trackRecord.timeline.map((entry, i) => (
            <TimelineItem
              key={entry.role}
              entry={entry}
              isLast={i === trackRecord.timeline.length - 1}
            />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-24 border-t-4 border-ink bg-surface">
        <div className="flex items-center gap-3 mb-10">
          <Trophy size={24} strokeWidth={2.5} className="text-accent" />
          <h2 className="font-display font-black uppercase tracking-tighter text-3xl md:text-5xl">
            Achievements
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {trackRecord.achievements.map((a, i) => (
            <Badge
              key={a}
              color={badgeColors[i % badgeColors.length]}
              rotate={i % 2 === 0 ? "left" : "right"}
              className="text-sm px-4 py-2.5"
            >
              {a}
            </Badge>
          ))}
        </div>

        <div className="mt-14">
          <Button href="/vision" variant="primary">
            See My Vision
          </Button>
        </div>
      </section>
    </>
  );
}
