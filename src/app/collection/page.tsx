import Link from "next/link";

import { collections } from "@/data/collections";

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-(--archive-white) text-(--archive-black)">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <Link
            href="/explore"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 transition-opacity hover:opacity-60"
          >
            ← Explore
          </Link>

          <div className="mt-16 max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em]">
              03 / Collections
            </p>

            <h1 className="mt-6 text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.8] tracking-[-0.07em]">
              Collections
            </h1>

            <p className="mt-10 max-w-xl text-base leading-relaxed text-black/50 md:text-lg">
              Themes, movements and ideas that offer different ways of reading
              the built world.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {collections.map((collection, index) => (
              <article key={collection.slug} className="group">
                <Link
                  href={`/collection/${collection.slug}`}
                  className="mt-10 inline-block border-b border-black pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-40"
                >
                  Explore collection ↗
                </Link>

                <div className="mt-8">
                  <div className="flex items-start justify-between border-t border-black/10 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                      {String(index + 1).padStart(2, "0")} / Collection
                    </span>

                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <h2 className="mt-8 text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.85] tracking-[-0.06em]">
                    {collection.name}
                  </h2>

                  <p className="mt-8 max-w-md text-sm leading-relaxed text-black/50">
                    {collection.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-b border-black/10 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                      {collection.buildingSlugs.length}{" "}
                      {collection.buildingSlugs.length === 1
                        ? "Building"
                        : "Buildings"}
                    </span>

                    {collection.period && (
                      <span className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                        {collection.period}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}