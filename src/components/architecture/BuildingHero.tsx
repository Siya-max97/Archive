import Image from "next/image";
import type { Building } from "@/types/architecture";

interface BuildingHeroProps {
  building: Building;
}

export default function BuildingHero({
  building,
}: BuildingHeroProps) {
  return (
    <section className="relative min-h-[92svh] overflow-hidden">
      <Image
        src={building.image}
        alt={`${building.title}, designed by ${building.architect}`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-[1600px] px-6 pb-10 md:px-10 md:pb-14 lg:px-16 lg:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                {building.id} / {building.category}
              </p>

              <h1 className="max-w-5xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.78] tracking-[-0.065em]">
                {building.title}
              </h1>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                {building.location}
              </p>

              <p className="mt-3 text-sm leading-6 text-white/90">
                {building.architect}
              </p>

              <p className="mt-1 text-sm text-white/60">
                {building.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}