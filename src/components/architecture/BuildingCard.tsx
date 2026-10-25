import Image from "next/image";
import Link from "next/link";
import type { Building } from "@/types/architecture";

interface BuildingCardProps {
  building: Building;
}

export default function BuildingCard({
  building,
}: BuildingCardProps) {
  return (
    <Link
      href={`/architecture/${building.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white/10">
        <Image
          src={building.image}
          alt={`${building.title}, designed by ${building.architect}`}
          fill
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
        />

        <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-bold text-black">
          {building.id}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          {building.location}
        </p>

        <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
          {building.title}
        </h3>

        <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-white/40">
          {building.architect} · {building.year}
        </p>
      </div>
    </Link>
  );
}