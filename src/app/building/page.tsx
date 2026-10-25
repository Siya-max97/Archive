import Image from "next/image";
import Link from "next/link";

import { buildings } from "@/data/buildings";

export default function BuildingPage() {
  return (
    <main className="bg-[#111] text-white">
      <section className="mx-auto max-w-[1600px] px-6 pb-20 pt-32 md:px-10 md:pb-28 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              Archive / Buildings
            </p>

            <h1 className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.78] tracking-[-0.065em]">
              Buildings
            </h1>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-sm leading-6 text-white/60">
              A growing archive of significant buildings, their architects,
              movements, places, and histories.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="mb-12 flex items-end justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              {String(buildings.length).padStart(2, "0")} Buildings
            </p>

            <p className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 md:block">
              Archive Index
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {buildings.map((building) => (
              <Link
                key={building.id}
                href={`/building/${building.slug}`}
                className="group block"
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/10">
                    <Image
                      src={building.image}
                      alt={building.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        {building.id} / {building.category}
                      </p>

                      <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                        {building.title}
                      </h2>

                      <p className="mt-2 text-sm text-white/50">
                        {building.location}
                      </p>
                    </div>

                    <span className="pt-1 text-lg text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}