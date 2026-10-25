import Link from "next/link";
import WorldMap from "@/components/map/WorldMap";

export default function WorldSection() {
  return (
    <section
      id="world"
      className="relative min-h-screen overflow-hidden bg-(--archive-white) text-(--archive-black)"
    >
      {/* =========================================================
          MAIN INTRO
      ========================================================== */}
      <div className="mx-auto flex min-h-[78vh] max-w-[1600px] flex-col px-6 pb-16 pt-32 md:px-10 md:pt-36 lg:px-16 lg:pt-40">
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-12 lg:gap-8">
          {/* =====================================================
              SECTION LABEL
          ====================================================== */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-(--archive-black)" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                01 / World
              </span>
            </div>
          </div>

          {/* =====================================================
              MAIN STATEMENT
          ====================================================== */}
          <div className="mt-16 lg:col-span-7 lg:mt-0">
            <h1 className="max-w-[1000px] text-[clamp(4.5rem,10.5vw,10rem)] font-medium leading-[0.78] tracking-[-0.075em]">
              THE WORLD
              <br />
              IS OUR
              <br />
              <span className="text-(--archive-grey)">ARCHIVE.</span>
            </h1>
          </div>

          {/* =====================================================
              EDITORIAL INTRO / CTA
          ====================================================== */}
          <div className="mt-16 flex items-end lg:col-span-3 lg:mt-0">
            <div className="border-l border-(--archive-line) pl-6 md:pl-8">
              <p className="max-w-[260px] text-[11px] font-medium uppercase leading-[1.8] tracking-[0.16em] text-(--archive-grey)">
                A global archive
                <br />
                of architecture,
                <br />
                places and stories.
              </p>

              <Link
                href="/architecture"
                className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-(--archive-black)/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50"
              >
                <span>Explore the collection</span>

                <span
                  aria-hidden="true"
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================
            LOWER INTRO META
        ========================================================== */}
        <div className="mt-20 flex items-end justify-between border-t border-(--archive-line) pt-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-(--archive-grey)">
          <span>Architecture · Culture · Place</span>

          <span className="hidden md:block">
            A living record of the built world
          </span>

          <span>Scroll ↓</span>
        </div>
      </div>

      {/* =========================================================
          WORLD MAP
      ========================================================== */}
      <div className="border-y border-(--archive-line)">
        <WorldMap />
      </div>

      {/* =========================================================
          ARCHIVE FOOTER STRIP
      ========================================================== */}
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-6 py-6 text-[9px] font-semibold uppercase tracking-[0.2em] md:flex-row md:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-(--archive-black) text-[9px] font-medium text-(--archive-white)">
            N
          </span>

          <span>Global Archive</span>
        </div>

        <span>04 / 24 Locations</span>

        <Link
          href="/architecture"
          className="group inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-50"
        >
          <span>Explore Architecture</span>

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}