"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { collections } from "@/data/collections";

gsap.registerPlugin(ScrollTrigger);

const collectionImages: Record<string, string> = {
  modernism:
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=90",
  brutalism:
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2000&q=90",
  coastal:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
  future:
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2000&q=90",
};

export default function Collections() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="collections"
      ref={sectionRef}
      aria-labelledby="collections-heading"
      className="relative h-screen overflow-hidden bg-(--archive-white) text-(--archive-black)"
    >
      <div className="pointer-events-none absolute left-6 top-6 z-30 md:left-10 md:top-10 lg:left-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em]">
          03 / Collections
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-6 z-30 md:bottom-10 md:left-10 lg:left-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
          {collections.length.toString().padStart(2, "0")} Collections
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex h-full w-max items-center gap-[8vw] px-[12vw]"
      >
        {collections.map((collection, index) => {
          const number = String(index + 1).padStart(2, "0");
          const image = collectionImages[collection.slug];

          return (
            <article
              key={collection.slug}
              className="relative flex h-[70vh] w-[78vw] shrink-0 items-center gap-[5vw] md:w-[65vw]"
            >
              <div className="group relative h-full w-[55%] overflow-hidden bg-black">
                <Image
                  src={image}
                  alt={collection.name}
                  fill
                  sizes="55vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/5" />

                <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-bold">
                  {number}
                </span>
              </div>

              <div className="flex w-[35%] flex-col justify-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Collection
                </p>

                <h2
                  id={index === 0 ? "collections-heading" : undefined}
                  className="mt-5 text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.8] tracking-[-0.06em]"
                >
                  {collection.name}
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-relaxed text-black/50">
                  {collection.description}
                </p>

                <Link
                  href={`/collection/${collection.slug}`}
                  className="mt-10 w-fit border-b border-black pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-40"
                >
                  Explore collection ↗
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
