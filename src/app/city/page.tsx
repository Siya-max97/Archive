import Link from "next/link";

import { cities } from "@/data/cities";

export default function CitiesPage() {
  return (
    <main className="bg-[#111] text-white">
      <section className="mx-auto max-w-[1600px] px-6 pb-20 pt-32 md:px-10 md:pb-28 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              Archive / Cities
            </p>

            <h1 className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.78] tracking-[-0.065em]">
              Cities
            </h1>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-sm leading-6 text-white/60">
              Explore cities through their architecture, places, histories,
              and cultural identity.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="mb-12 flex items-end justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              {String(cities.length).padStart(2, "0")} Cities
            </p>

            <p className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 md:block">
              Archive Index
            </p>
          </div>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/city/${city.slug}`}
                className="group grid gap-4 py-8 transition-opacity hover:opacity-60 md:grid-cols-12 md:items-center"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 md:col-span-1">
                  {String(city.id).padStart(2, "0")}
                </span>

                <h2 className="text-4xl font-medium tracking-[-0.04em] md:col-span-7 md:text-6xl">
                  {city.name}
                </h2>

                <p className="text-sm text-white/40 md:col-span-3">
                  {city.country}
                </p>

                <span className="text-xl text-white/30 transition-transform duration-300 group-hover:translate-x-1 md:col-span-1 md:text-right">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}