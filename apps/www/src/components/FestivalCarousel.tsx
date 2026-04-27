"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type BadgeTone = "live" | "upcoming" | "closed";

const BADGE_STYLES: Record<BadgeTone, string> = {
  live: "bg-[#FFD43A] text-[#11153F]",
  upcoming: "bg-[#11153F] text-white",
  closed: "bg-gray-100 text-gray-500",
};

export default function FestivalCarousel({
  title,
  badge,
  badgeTone = "live",
  data,
}: {
  title: string;
  badge?: string;
  badgeTone?: BadgeTone;
  data: any[];
}) {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  if (!data || data.length === 0) return null;

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between gap-4 px-1 md:mb-8">
        <div className="flex items-center gap-3">
          {badge && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${BADGE_STYLES[badgeTone]}`}
            >
              {badgeTone === "live" && (
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#11153F]" />
              )}
              {badge}
            </span>
          )}
          <h2 className="firsty-title md:text-[28px]">{title}</h2>
        </div>
        <span className="hidden text-sm text-gray-400 md:block">
          좌우로 드래그하면 더 볼 수 있어요
        </span>
      </div>

      <div
        className="cursor-grab overflow-hidden active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex gap-5">
          {data.map((fest) => (
            <div
              key={fest.id}
              className="group relative flex h-72 flex-[0_0_82%] shrink-0 flex-col overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:h-80 md:flex-[0_0_calc(33.333%-14px)]"
            >
              <div className="pointer-events-none absolute inset-0 z-0">
                <Image
                  src={fest.imgUrl}
                  alt={fest.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#11153F]/85 via-[#11153F]/30 to-transparent" />

              <div className="pointer-events-none relative z-20 flex h-full flex-col p-5 md:p-6">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#11153F] backdrop-blur-md">
                    {fest.univ}
                  </span>
                </div>

                <div className="mt-auto flex flex-col text-white">
                  <span className="mb-1.5 truncate text-xl font-bold tracking-tight md:text-2xl">
                    {fest.name}
                  </span>
                  <span className="text-sm font-medium text-white/80">
                    {fest.dates}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
