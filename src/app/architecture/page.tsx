import Image from "next/image";
import Link from "next/link";

import { buildings } from "@/data/buildings";

export default function ArchitecturePage() {
  const featuredBuilding = buildings[0];
  const remainingBuildings = buildings.slice(1);

  return (
    <main className="min-h-screen bg-[var(--archive-black)] text-[var(--archive-white)]">
      {/* =========================================================
          HEADER
      ========================================================== */}
      <section className="px-6 pb-20 pt-32 md:px-10 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                Archive / Architecture
              </p>

              <h1 className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.78] tracking-[-0.065em]">
                Architecture
              </h1>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <p className="text-sm leading-6 text-white/60">
                A growing archive of buildings, architects, movements, and
                places that have shaped the built environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED
      ========================================================== */}
      {featuredBuilding && (
        <section className="border-t border-white/10 px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                01 / Featured
              </p>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                {featuredBuilding.id}
              </p>
            </div>

            <Link
              href={`/architecture/${featuredBuilding.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white/10">
                <Image
                  src={featuredBuilding.image}
                  alt={`${featuredBuilding.title}, designed by ${featuredBuilding.architect}`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/20 transition-opacity duration-700 group-hover:opacity-0" />

                <span className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  ↗
                </span>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-start">
                <div className="md:col-span-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {featuredBuilding.category}
                  </p>

                  <h2 className="mt-3 text-5xl font-medium tracking-[-0.05em] md:text-7xl lg:text-8xl">
                    {featuredBuilding.title}
                  </h2>
                </div>

                <div className="md:col-span-4 md:pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {featuredBuilding.location}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {featuredBuilding.description}
                  </p>

                  <p className="mt-5 text-[10px] uppercase tracking-[0.15em] text-white/40">
                    {featuredBuilding.architect} · {featuredBuilding.year}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* =========================================================
          ARCHIVE GRID
      ========================================================== */}
      {remainingBuildings.length > 0 && (
        <section className="border-t border-white/10 px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-16 grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                  02 / Archive
                </p>

                <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
                  Explore the
                  <br />
                  collection.
                </h2>
              </div>

              <div className="md:col-span-4 md:flex md:justify-end">
                <Link
                  href="/building"
                  className="group inline-flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
                >
                  <span>View all buildings</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {remainingBuildings.map((building) => (
                <Link
                  key={building.slug}
                  href={`/architecture/${building.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/10">
                    <Image
                      src={building.image}
                      alt={`${building.title}, designed by ${building.architect}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />

                    <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-bold text-black">
                      {building.id}
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                      {building.location}
                    </p>

                    <div className="mt-3 flex items-start justify-between gap-6">
                      <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                        {building.title}
                      </h3>

                      <span
                        aria-hidden="true"
                        className="mt-1 text-sm transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-white/40">
                      {building.architect} · {building.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-white/10 px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            <span>Back to Archive</span>
          </Link>

          <Link
            href="/building"
            className="text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
          >
            Buildings →
          </Link>
        </div>
      </footer>
    </main>
  );
}