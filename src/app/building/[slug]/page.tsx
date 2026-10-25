import Link from "next/link";
import { notFound } from "next/navigation";

import BuildingGallery from "@/components/architecture/BuildingGallery";
import BuildingHero from "@/components/architecture/BuildingHero";
import { buildings } from "@/data/buildings";

interface BuildingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return buildings.map((building) => ({
    slug: building.slug,
  }));
}

export default async function BuildingPage({
  params,
}: BuildingPageProps) {
  const { slug } = await params;

  const building = buildings.find((item) => item.slug === slug);

  if (!building) {
    notFound();
  }

  return (
    <main className="bg-[#111] text-white">
      <BuildingHero building={building} />

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                01 / Overview
              </p>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-4xl font-medium leading-[0.9] tracking-[-0.05em] md:text-6xl">
                {building.title}
                <br />
                <span className="text-white/40">
                  {building.movement ?? building.category}
                </span>
              </h2>

              {building.description && (
                <p className="mt-10 max-w-2xl text-base leading-7 text-white/60">
                  {building.description}
                </p>
              )}
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <dl className="space-y-6">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Architect
                  </dt>
                  <dd className="mt-2 text-sm text-white/80">
                    {building.architect}
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Location
                  </dt>
                  <dd className="mt-2 text-sm text-white/80">
                    {building.location}
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Country
                  </dt>
                  <dd className="mt-2 text-sm text-white/80">
                    {building.country}
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Completed
                  </dt>
                  <dd className="mt-2 text-sm text-white/80">
                    {building.year}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <BuildingGallery building={building} />

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-10 md:px-10 lg:px-16">
          <Link
            href="/explore"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
          >
            ← Explore
          </Link>

          <Link
            href="/architecture"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
          >
            Architecture →
          </Link>
        </div>
      </section>
    </main>
  );
}