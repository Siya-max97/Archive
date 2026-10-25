// src/app/exhibitions/page.tsx

import Image from "next/image";
import Link from "next/link";

import { exhibitions } from "@/data/exhibitions";

export default function ExhibitionsPage() {
  return (
    <main className="min-h-screen bg-[var(--archive-black)] text-[var(--archive-white)]">
      <section className="px-6 pb-20 pt-32 md:px-10 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                Archive / Exhibitions
              </p>

              <h1 className="text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.78] tracking-[-0.065em]">
                Exhibitions
              </h1>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <p className="text-sm leading-6 text-white/60">
                Exhibitions, events, and cultural moments exploring
                architecture, design, and the built environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="mb-12 flex items-end justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              {String(exhibitions.length).padStart(2, "0")} Exhibitions
            </p>

            <p className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 md:block">
              Archive Index
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {exhibitions.map((exhibition) => (
              <Link
                key={exhibition.slug}
                href={`/exhibitions/${exhibition.slug}`}
                className="group block"
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/10">
                    <Image
                      src={exhibition.image}
                      alt={exhibition.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />

                    <span
                      aria-hidden="true"
                      className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      {exhibition.location}
                    </p>

                    <div className="mt-3 flex items-start justify-between gap-6">
                      <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                        {exhibition.title}
                      </h2>

                      <span
                        aria-hidden="true"
                        className="mt-1 text-sm transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-white/40">
                      {exhibition.year}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
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
            href="/explore"
            className="text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
          >
            Explore →
          </Link>
        </div>
      </footer>
    </main>
  );
}