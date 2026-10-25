import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { buildings } from "@/data/buildings";
import { collectionExamples } from "@/data/collection-examples";
import { collections, getCollectionBySlug } from "@/data/collections";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collection not found | Archive",
    };
  }

  return {
    title: `${collection.name} — Architecture Collection | Archive`,
    description: collection.description,
    openGraph: {
      title: `${collection.name} | Archive`,
      description: collection.description,
      type: "website",
    },
  };
}

export default async function CollectionDetailPage({
  params,
}: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const examples = collectionExamples[collection.slug] ?? [];

  const collectionBuildings = collection.buildingSlugs.flatMap(
    (buildingSlug) => {
      const building = buildings.find((item) => item.slug === buildingSlug);

      return building ? [building] : [];
    },
  );

  const relatedCollections = collections.filter(
    (item) => item.slug !== collection.slug,
  );

  return (
    <main className="min-h-screen overflow-hidden bg-(--archive-white) text-(--archive-black)">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.28em]"
          >
            Archive
          </Link>

          <Link
            href="/collection"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 transition-opacity hover:opacity-60"
          >
            All collections ↗
          </Link>
        </div>
      </header>

      {/* Collection hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <Link
            href="/collection"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 transition-opacity hover:opacity-60"
          >
            ← Collections
          </Link>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
                Archive / Collection / {collection.type.replace("-", " ")}
              </p>

              <h1 className="mt-8 max-w-5xl text-[clamp(4rem,12vw,10rem)] font-medium leading-[0.78] tracking-[-0.075em]">
                <span className="block">{collection.name}</span>
                <span className="mt-3 block text-black/35">in focus.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="max-w-lg text-base leading-relaxed text-black/60 md:text-lg">
                {collection.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {collection.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-black/15 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-black/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 border-t border-black/15 pt-5 md:grid-cols-3">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                Classification
              </p>

              <p className="mt-3 text-sm capitalize">
                {collection.type.replace("-", " ")}
              </p>
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                Selected works
              </p>

              <p className="mt-3 text-sm tabular-nums">
                {String(examples.length).padStart(2, "0")}
              </p>
            </div>

            <div className="col-span-2 mt-6 md:col-span-1 md:mt-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                Period
              </p>

              <p className="mt-3 text-sm">
                {collection.period ?? "Across periods"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five-work curated gallery */}
      <section className="border-b border-black/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                01 / Selected works
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] md:text-6xl">
                Five defining examples.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/50">
                A visual study of the buildings, ideas and architectural
                decisions that give this collection its character.
              </p>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-black/40 sm:block">
              {String(examples.length).padStart(2, "0")} works
            </span>
          </div>

          {examples.length > 0 ? (
            <div className="-mx-6 mt-10 overflow-x-auto px-6 pb-5 md:-mx-10 md:px-10">
              <div className="flex w-max gap-5">
                {examples.map((example, index) => {
                  const href = example.buildingSlug
                    ? `/building/${example.buildingSlug}`
                    : example.referenceUrl;

                  const isExternal = !example.buildingSlug;

                  return (
                    <article
                      key={`${collection.slug}-${example.name}`}
                      className="group w-[76vw] max-w-85 shrink-0 sm:w-75 md:w-[320px]"
                    >
                      <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="block"
                      >
                        <div className="relative aspect-4/5 overflow-hidden bg-black/5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={example.image}
                            alt={`${example.name}, ${example.location}`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />

                          <span className="absolute left-4 top-4 bg-[#f4f0e8] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-black">
                            {String(index + 1).padStart(2, "0")} /{" "}
                            {String(examples.length).padStart(2, "0")}
                          </span>

                          <span
                            aria-hidden="true"
                            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f0e8] text-black transition-transform duration-300 group-hover:translate-x-1"
                          >
                            ↗
                          </span>
                        </div>

                        <div className="mt-5 border-t border-black/15 pt-4">
                          <h3 className="text-2xl font-medium tracking-tighter md:text-3xl">
                            {example.name}
                          </h3>

                          <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-black/50">
                            {example.architect}
                          </p>

                          <div className="mt-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.12em] text-black/40">
                            <span>{example.location}</span>
                            <span>{example.year}</span>
                          </div>
                        </div>
                      </a>

                      <a
                        href={example.imageSource}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block text-[9px] uppercase tracking-[0.12em] text-black/40 underline underline-offset-4 transition-colors hover:text-black"
                      >
                        Image source and licence ↗
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="mt-10 border-y border-black/15 py-12 text-sm text-black/50">
              Curated examples for this collection are coming soon.
            </p>
          )}

          <p className="mt-3 text-[9px] uppercase tracking-[0.15em] text-black/35">
            Scroll horizontally to explore the selected works
          </p>
        </div>
      </section>

      {/* Buildings in the Archive catalogue */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-col justify-between gap-6 border-b border-black/15 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
              02 / The archive
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-none tracking-[-0.06em] md:text-6xl">
              Architecture in context.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-black/50">
            Explore catalogue entries connected to this collection through their
            architectural ideas, materials, movements and settings.
          </p>
        </div>

        {collectionBuildings.length > 0 ? (
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {collectionBuildings.map((building, index) => (
              <article key={building.slug} className="group">
                <Link href={`/building/${building.slug}`} className="block">
                  <div className="relative aspect-4/5 overflow-hidden bg-black/5">
                    <Image
                      src={building.image}
                      alt={`${building.title} in ${building.location}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-black/15 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                      {String(index + 1).padStart(2, "0")} / Building
                    </span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-medium tracking-tighter md:text-4xl">
                    {building.title}
                  </h3>

                  <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-black/45">
                    {building.location} · {building.year}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-black/60">
                    {building.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 border-y border-black/15 py-16 md:py-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
              Catalogue status
            </p>

            <h3 className="mt-6 max-w-3xl text-3xl font-medium leading-tight tracking-tighter md:text-5xl">
              More buildings are being added to this collection.
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/55">
              Explore the curated examples above while the Archive catalogue
              continues to grow.
            </p>

            <Link
              href="/building"
              className="mt-8 inline-flex items-center gap-6 border-b border-black pb-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
            >
              Browse all buildings
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}
      </section>

      {/* Related collections */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                03 / Continue exploring
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] md:text-6xl">
                Other perspectives.
              </h2>
            </div>

            <Link
              href="/collection"
              className="hidden border-b border-black pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-50 md:inline-block"
            >
              All collections ↗
            </Link>
          </div>

          <div className="mt-10 grid gap-0 md:grid-cols-3">
            {relatedCollections.map((related, index) => (
              <Link
                key={related.slug}
                href={`/collection/${related.slug}`}
                className="group border-t border-black/15 py-7 md:px-6 md:first:pl-0 md:last:pr-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                    {String(index + 1).padStart(2, "0")} / Collection
                  </span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-medium tracking-tighter md:text-4xl">
                  {related.name}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-black/55">
                  {related.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
