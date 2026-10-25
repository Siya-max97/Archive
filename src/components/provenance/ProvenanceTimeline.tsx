
import type { ProvenanceEvent } from "@/types/provenance";

interface ProvenanceTimelineProps {
  events: ProvenanceEvent[];
}

export default function ProvenanceTimeline({
  events,
}: ProvenanceTimelineProps) {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* SECTION LABEL */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              02 / Provenance
            </p>
          </div>

          {/* TIMELINE */}
          <div className="lg:col-span-9 lg:col-start-4">
            <div className="relative border-l border-white/20">
              {events.map((event, index) => (
                <article
                  key={`${event.year}-${index}`}
                  className="relative pb-16 pl-8 last:pb-0 md:pl-12"
                >
                  {/* TIMELINE MARKER */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-1.25 top-1 h-2 w-2 rounded-full bg-white"
                  />

                  {/* YEAR */}
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {event.year}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                    {event.title}
                  </h3>

                  {/* DESCRIPTION */}
                  {event.description && (
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
                      {event.description}
                    </p>
                  )}

                  {/* LOCATION */}
                  {event.location && (
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                      {event.location}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}