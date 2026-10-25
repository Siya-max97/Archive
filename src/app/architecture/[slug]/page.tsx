import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buildings } from "@/data/buildings";

import BuildingHero from "@/components/architecture/BuildingHero";
import BuildingGallery from "@/components/architecture/BuildingGallery";

interface ArchitecturePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return buildings.map((building) => ({
    slug: building.slug,
  }));
}

export default async function ArchitecturePage({
  params,
}: ArchitecturePageProps) {
  const { slug } = await params;

  const building = buildings.find(
    (item) => item.slug === slug,
  );

  if (!building) {
    notFound();
  }

  const relatedBuildings = buildings
    .filter((item) => item.slug !== building.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[var(--archive-black)] text-[var(--archive-white)]">
      {/* =========================================================
          NAVIGATION
      ========================================================== */}
      <header className="absolute left-0 right-0 top-0 z-50 px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.25em] transition-opacity duration-300 hover:opacity-50"
          >
            Archive
          </Link>

          <Link
            href="/architecture"
            className="text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50"
          >
            Architecture
          </Link>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================== */}
      <BuildingHero building={building} />

      {/* =========================================================
          OVERVIEW
      ========================================================== */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              01 / Overview
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="max-w-3xl text-2xl font-light leading-[1.25] tracking-[-0.025em] md:text-4xl">
              {building.description}
            </p>
          </div>

          <div className="lg:col-span-3">
            <dl className="border-t border-white/20">
              <div className="flex justify-between gap-6 border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.15em]">
                <dt className="text-white/40">Architect</dt>
                <dd className="text-right">{building.architect}</dd>
              </div>

              <div className="flex justify-between gap-6 border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.15em]">
                <dt className="text-white/40">Year</dt>
                <dd className="text-right">{building.year}</dd>
              </div>

              <div className="flex justify-between gap-6 border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.15em]">
                <dt className="text-white/40">Location</dt>
                <dd className="text-right">{building.location}</dd>
              </div>

              <div className="flex justify-between gap-6 border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.15em]">
                <dt className="text-white/40">Movement</dt>
                <dd className="text-right">
                  {building.movement ?? "—"}
                </dd>
              </div>

              <div className="flex justify-between gap-6 border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.15em]">
                <dt className="text-white/40">Category</dt>
                <dd className="text-right">{building.category}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================== */}
      <BuildingGallery building={building} />

      {/* =========================================================
          RELATED ARCHITECTURE
      ========================================================== */}
      {relatedBuildings.length > 0 && (
        <section className="border-t border-white/10 px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-16 grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                  02 / Continue exploring
                </p>

                <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
                  More from
                  <br />
                  the archive.
                </h2>
              </div>

              <div className="md:col-span-4 md:flex md:justify-end">
                <Link
                  href="/architecture"
                  className="group inline-flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
                >
                  <span>View all architecture</span>

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
              {relatedBuildings.map((related) => (
                <Link
                  key={related.slug}
                  href={`/architecture/${related.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/10">
                    <Image
                      src={related.image}
                      alt={`${related.title}, designed by ${related.architect}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />

                    <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-bold text-black">
                      {related.id}
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
                      {related.location}
                    </p>

                    <div className="mt-3 flex items-start justify-between gap-6">
                      <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                        {related.title}
                      </h3>

                      <span
                        aria-hidden="true"
                        className="mt-1 text-sm transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-white/40">
                      {related.architect} · {related.year}
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
            href="/architecture"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            <span>Back to architecture</span>
          </Link>

          <Link
            href="/"
            className="text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
          >
            Archive
          </Link>
        </div>
      </footer>
    </main>
  );
}