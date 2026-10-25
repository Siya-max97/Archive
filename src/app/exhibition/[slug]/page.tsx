// src/app/exhibitions/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { exhibitions } from "@/data/exhibitions";

interface ExhibitionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return exhibitions.map((exhibition) => ({
    slug: exhibition.slug,
  }));
}

export default async function ExhibitionPage({
  params,
}: ExhibitionPageProps) {
  const { slug } = await params;

  const exhibition = exhibitions.find(
    (item) => item.slug === slug,
  );

  if (!exhibition) {
    notFound();
  }

  const relatedExhibitions = exhibitions
    .filter((item) => item.slug !== exhibition.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[var(--archive-black)] text-[var(--archive-white)]">
      <header className="absolute left-0 right-0 top-0 z-50 px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.25em] transition-opacity duration-300 hover:opacity-50"
          >
            Archive
          </Link>

          <Link
            href="/exhibitions"
            className="text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50"
          >
            Exhibitions
          </Link>
        </div>
      </header>

      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src={exhibition.image}
          alt={exhibition.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1600px] px-6 pb-10 md:px-10 md:pb-14 lg:px-16 lg:pb-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                  Exhibition
                </p>

                <h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.8] tracking-[-0.065em]">
                  {exhibition.title}
                </h1>
              </div>

              <div className="lg:col-span-3 lg:col-start-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  {exhibition.location}
                </p>

                <p className="mt-3 text-sm text-white/90">
                  {exhibition.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              01 / Overview
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="max-w-3xl text-2xl font-light leading-[1.25] tracking-[-0.025em] md:text-4xl">
              {exhibition.description}
            </p>
          </div>

          <div className="lg:col-span-3">
            <dl className="border-t border-white/20">
              <div className="flex justify-between gap-6 border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.15em]">
                <dt className="text-white/40">Location</dt>
                <dd className="text-right">{exhibition.location}</dd>
              </div>

              <div className="flex justify-between gap-6 border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.15em]">
                <dt className="text-white/40">Year</dt>
                <dd className="text-right">{exhibition.year}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {relatedExhibitions.length > 0 && (
        <section className="border-t border-white/10 px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-16 flex items-end justify-between gap-10">
              <div>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                  02 / Continue exploring
                </p>

                <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
                  More from
                  <br />
                  the archive.
                </h2>
              </div>

              <Link
                href="/exhibitions"
                className="hidden border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60 md:block"
              >
                View all exhibitions ↗
              </Link>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {relatedExhibitions.map((related) => (
                <Link
                  key={related.slug}
                  href={`/exhibitions/${related.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/10">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                    />

                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />
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
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-white/40">
                      {related.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-white/10 px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link
            href="/exhibitions"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            <span>Back to exhibitions</span>
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