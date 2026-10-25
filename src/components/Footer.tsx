import BackToTop from "@/components/ui/BackToTop";



export default function Footer() {
  return (
    <footer className="bg-[--archive-black] text-[--archive-white]">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        {/* TOP */}

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              ARCHIVE
            </p>

            <h2 className="mt-8 text-[clamp(4rem,10vw,11rem)] font-medium leading-[0.75] tracking-[-0.08em]">
              KEEP
              <br />
              EXPLORING.
            </h2>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              A digital archive exploring architecture, culture
              and the places that shape how we experience the
              world.
            </p>

            <BackToTop />
          </div>
        </div>

        {/* BOTTOM */}

        <div className="mt-32 flex flex-col justify-between gap-6 border-t border-white/20 pt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 md:flex-row">
          <span>© 2026 Archive</span>

          <span>Architecture · Culture · Place</span>

          <span>Built with curiosity.</span>
        </div>
      </div>
    </footer>
  );
}