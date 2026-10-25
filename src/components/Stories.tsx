"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    number: "01",
    category: "Architecture",
    title: "Building for the edge of the world.",
    location: "Cape Town, South Africa",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90",
  },
  {
    number: "02",
    category: "Culture",
    title: "When buildings become part of the city.",
    location: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2000&q=90",
  },
  {
    number: "03",
    category: "Place",
    title: "Architecture shaped by landscape.",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=90",
  },
];

export default function Stories() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll(".story-card");

      cards.forEach((card) => {
        const image = card.querySelector(".story-image");
        const title = card.querySelector(".story-title");
        const meta = card.querySelectorAll(".story-meta");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            once: true,
          },
        });

        timeline.from(image, {
          clipPath: "inset(100% 0 0 0)",
          duration: 1.2,
          ease: "power4.inOut",
        });

        timeline.from(
          title,
          {
            y: 70,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7",
        );

        timeline.from(
          meta,
          {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.6",
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
  id="stories"
  ref={sectionRef}
  aria-labelledby="stories-heading"
  className="bg-[var(--archive-black)] text-[var(--archive-white)]"
>
      {/* HEADER */}
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              04 / Stories
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 id="stories-heading" className="max-w-5xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.8] tracking-[-0.07em]">
              STORIES
              <br />
              BEHIND
              <br />
              <span className="text-white/30">THE PLACES.</span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-2">
            <p className="max-w-55 text-xs leading-relaxed text-white/40">
              Stories about the people, ideas and places that shape
              architecture.
            </p>
          </div>
        </div>
      </div>

      {/* STORIES */}
      <div className="mx-auto max-w-[1600px] space-y-40 px-6 pb-32 md:px-10 lg:px-16">
        {stories.map((story, index) => (
          <article
            key={story.number}
            className={`story-card grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12 ${
              index % 2 === 1 ? "lg:translate-y-20" : ""
            }`}
          >
            {/* IMAGE */}
            <div
              className={`story-image relative aspect-4/3 overflow-hidden bg-white/5 ${
                index % 2 === 0
                  ? "lg:col-span-8"
                  : "lg:col-span-7 lg:col-start-6"
              }`}
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />

              <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-bold text-black">
                {story.number}
              </span>
            </div>

            {/* TEXT */}
            <div
              className={`${
                index % 2 === 0
                  ? "lg:col-span-3 lg:col-start-10"
                  : "lg:col-span-4 lg:col-start-1 lg:row-start-1"
              }`}
            >
              <div className="story-meta">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  {story.category}
                </p>
              </div>

              <h3 className="story-title mt-5 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.85] tracking-tighter">
                {story.title}
              </h3>

              <div className="story-meta mt-8 border-t border-white/20 pt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                  {story.location}
                </p>
              </div>

              <button
                type="button"
                className="story-meta mt-8 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
              >
                Read story ↗
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}