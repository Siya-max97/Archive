import Link from "next/link";
import Image from "next/image";

import { buildings } from "@/data/buildings";
import { cities } from "@/data/cities";
import { exhibitions } from "@/data/exhibitions";

const archiveSections = [
  {
    id: "01",
    label: "Buildings",
    count: buildings.length,
    href: "/architecture",
  },
  {
    id: "02",
    label: "Cities",
    count: cities.length,
    href: "/city",
  },
  {
    id: "03",
    label: "Exhibitions",
    count: exhibitions.length,
    href: "/exhibition",
  },
];

export default function ExplorePage() {
  const totalEntries =
    buildings.length + cities.length + exhibitions.length;

  return (
    <main className="min-h-screen bg-[var(--archive-white)] text-[var(--archive-black)]">
      {/* =========================================================
          HEADER
      ========================================================== */}
      <header className="border-b border-black/10 px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.25em] transition-opacity duration-300 hover:opacity-50"
          >
            Archive
          </Link>

          <div className="flex items-center gap-6">
            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-black/30 md:block">
              {totalEntries.toString().padStart(2, "0")} entries
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
              Explore
            </span>
          </div>
        </div>
      </header>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="mx-auto max-w-[1600px] px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32 lg:px-16 lg:pt-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* LABEL */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
              05 / Explore
            </p>
          </div>

          {/* TITLE */}
          <div className="lg:col-span-7">
            <h1 className="text-[clamp(4.5rem,11vw,11rem)] font-medium leading-[0.78] tracking-[-0.075em]">
              FIND
              <br />
              YOUR
              <br />
              <span className="text-black/20">PLACE.</span>
            </h1>
          </div>

          {/* DESCRIPTION */}
          <div className="flex items-end lg:col-span-3">
            <div className="border-l border-black/10 pl-6 md:pl-8">
              <p className="max-w-[240px] text-[10px] font-medium uppercase leading-[1.8] tracking-[0.16em] text-black/50">
                Explore architecture,
                <br />
                cities and exhibitions
                <br />
                from across the archive.
              </p>

              <p className="mt-8 text-[9px] uppercase tracking-[0.18em] text-black/30">
                {totalEntries.toString().padStart(2, "0")} indexed entries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCHIVE INDEX
      ========================================================== */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          {archiveSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group grid grid-cols-12 items-center border-b border-black/10 py-8 last:border-b-0 md:py-10"
            >
              <span className="col-span-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">
                {section.id}
              </span>

              <span className="col-span-6 text-3xl font-medium tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                {section.label}
              </span>

              <span className="col-span-3 text-right text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                {section.count.toString().padStart(2, "0")} entries
              </span>

              <span className="col-span-1 text-right text-lg transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          FEATURED BUILDINGS
      ========================================================== */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mb-12 flex items-end justify-between border-b border-black/10 pb-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
              Architecture
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              From the archive.
            </h2>
          </div>

          <Link
            href="/architecture"
            className="hidden border-b border-black/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50 md:block"
          >
            View architecture ↗
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {buildings.slice(0, 3).map((building) => (
            <Link
              key={building.slug}
              href={`/architecture/${building.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                <Image
                  src={building.image}
                  alt={`${building.title}, designed by ${building.architect}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />

                <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-bold text-black">
                  {building.id}
                </span>

                <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  ↗
                </span>
              </div>

              <div className="mt-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                  {building.location}
                </p>

                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">
                    {building.title}
                  </h3>

                  <span className="text-sm opacity-30 transition-opacity duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                </div>

                <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-black/40">
                  {building.architect} · {building.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          CITIES
      ========================================================== */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                06 / Cities
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[0.9] tracking-[-0.05em] md:text-6xl">
                Places
                <br />
                within
                <br />
                places.
              </h2>
            </div>

            <div className="lg:col-span-9">
              <div className="divide-y divide-black/10 border-y border-black/10">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/city/${city.slug}`}
                    className="group grid grid-cols-12 items-center py-7"
                  >
                    <span className="col-span-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black/30">
                      {city.id}
                    </span>

                    <span className="col-span-6 text-2xl font-medium tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                      {city.name}
                    </span>

                    <span className="col-span-3 text-right text-[9px] uppercase tracking-[0.15em] text-black/40">
                      {city.country}
                    </span>

                    <span className="col-span-1 text-right transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXHIBITIONS
      ========================================================== */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mb-12 flex items-end justify-between border-b border-black/10 pb-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                07 / Exhibitions
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Current studies.
              </h2>
            </div>

            <Link
              href="/exhibition"
              className="hidden border-b border-black/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50 md:block"
            >
              View exhibitions ↗
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {exhibitions.map((exhibition) => (
              <Link
                key={exhibition.slug}
                href={`/exhibition/${exhibition.slug}`}
                className="group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <Image
                    src={exhibition.image}
                    alt={exhibition.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />

                  <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-bold text-black">
                    {exhibition.id}
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                    {exhibition.location}
                  </p>

                  <div className="mt-2 flex items-start justify-between gap-6">
                    <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                      {exhibition.title}
                    </h3>

                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <p className="mt-3 max-w-xl text-[10px] uppercase leading-[1.7] tracking-[0.12em] text-black/40">
                    {exhibition.description}
                  </p>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.15em] text-black/40">
                    {exhibition.category} · {exhibition.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-black/10 px-6 py-10 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link
            href="/"
            className="text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50"
          >
            ← Back to archive
          </Link>

          <span className="text-[9px] uppercase tracking-[0.2em] text-black/30">
            Explore
          </span>
        </div>
      </footer>
    </main>
  );
}