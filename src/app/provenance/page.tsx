import Link from "next/link";

import ProvenanceTimeline from "@/components/provenance/ProvenanceTimeline";
import { provenanceEvents } from "@/data/provenance";

export default function ProvenancePage() {
  return (
    <main className="min-h-screen bg-(--archive-black) text-(--archive-white)">
      {/* =========================================================
          NAVIGATION
      ========================================================== */}
      <header className="border-b border-white/10 px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.25em] transition-opacity duration-300 hover:opacity-50"
          >
            Archive
          </Link>

          <Link
            href="/explore"
            className="text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50"
          >
            Explore
          </Link>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                Archive / Provenance
              </p>

              <h1 className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.78] tracking-[-0.065em]">
                Provenance
              </h1>
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <p className="text-sm leading-7 text-white/50">
                A record of ownership, movement, documentation, and historical
                context surrounding the objects and places preserved within the
                Archive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              01 / Record
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-4xl text-2xl font-light leading-tight tracking-tight md:text-4xl">
              Provenance provides the historical trail behind an object,
              building, collection, or record — preserving the context needed
              to understand where it came from and how it arrived here.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              {String(provenanceEvents.length).padStart(2, "0")} events
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          TIMELINE
      ========================================================== */}
      <ProvenanceTimeline events={provenanceEvents} />

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-white/10 px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link
            href="/explore"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            <span>Back to explore</span>
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