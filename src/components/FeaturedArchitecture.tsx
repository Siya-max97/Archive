"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    slug: "casa-malaparte",
    title: "Casa Malaparte",
    location: "Capri, Italy",
    architect: "Adalberto Libera",
    year: "1942",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "02",
    slug: "fallingwater",
    title: "Fallingwater",
    location: "Pennsylvania, USA",
    architect: "Frank Lloyd Wright",
    year: "1939",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "03",
    slug: "casa-da-musica",
    title: "Casa da Música",
    location: "Porto, Portugal",
    architect: "OMA",
    year: "2005",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=90",
  },
];

export default function FeaturedArchitecture() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll(".architecture-card");

      cards.forEach((card) => {
        const image = card.querySelector(".architecture-image");
        const content = card.querySelector(".architecture-content");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
        });

        timeline.from(image, {
          clipPath: "inset(100% 0 0 0)",
          duration: 1.2,
          ease: "power4.inOut",
        });

        timeline.from(
          content,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.7",
        );
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="architecture"
      ref={sectionRef}
      className="relative bg-(--archive-black) text-(--archive-white)"
    >
      {/* =========================================================
          HEADER
      ========================================================== */}
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* SECTION NUMBER */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-(--archive-white)" />

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                02 / Architecture
              </p>
            </div>
          </div>

          {/* HEADING */}
          <div className="lg:col-span-7">
            <h2 className="max-w-5xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.8] tracking-[-0.07em]">
              PLACES
              <br />
              WORTH
              <br />
              <span className="text-white/30">REMEMBERING.</span>
            </h2>
          </div>

          {/* INTRO */}
          <div className="flex items-end lg:col-span-3">
            <div className="border-l border-white/20 pl-6 md:pl-8">
              <p className="max-w-[260px] text-[11px] font-medium uppercase leading-[1.8] tracking-[0.16em] text-white/50">
                A selection of places,
                <br />
                buildings and ideas
                <br />
                worth returning to.
              </p>

              <Link
                href="/architecture"
                className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50"
              >
                <span>View architecture archive</span>

                <span
                  aria-hidden="true"
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          PROJECTS
      ========================================================== */}
      <div className="mx-auto max-w-[1600px] space-y-32 px-6 pb-32 md:px-10 lg:px-16">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`architecture-card grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 ${
              index % 2 === 1 ? "lg:translate-y-24" : ""
            }`}
          >
            {/* ===================================================
                IMAGE
            ==================================================== */}
            <Link
              href={`/architecture/${project.slug}`}
              aria-label={`View ${project.title}`}
              className={`architecture-image group relative block aspect-4/3 overflow-hidden bg-white/5 ${
                index % 2 === 0
                  ? "lg:col-span-8"
                  : "lg:col-span-7 lg:col-start-6"
              }`}
            >
              <Image
                src={project.image}
                alt={`${project.title} — ${project.architect}`}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:bg-black/0" />

              {/* PROJECT NUMBER */}
              <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] font-bold text-black">
                {project.id}
              </span>
            </Link>

            {/* ===================================================
                INFORMATION
            ==================================================== */}
            <div
              className={`architecture-content flex flex-col justify-end ${
                index % 2 === 0
                  ? "lg:col-span-3 lg:col-start-10"
                  : "lg:col-span-4 lg:col-start-1 lg:row-start-1"
              }`}
            >
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  {project.location}
                </p>

                <h3 className="mt-4 text-4xl font-medium leading-none tracking-[-0.04em] md:text-5xl">
                  {project.title}
                </h3>

                <div className="mt-8 space-y-2 border-t border-white/20 pt-4 text-[10px] uppercase tracking-[0.15em] text-white/50">
                  <p>{project.architect}</p>
                  <p>{project.year}</p>
                </div>

                <Link
                  href={`/architecture/${project.slug}`}
                  className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50"
                >
                  <span>View project</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* =========================================================
          ARCHIVE FOOTER
      ========================================================== */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-6 py-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 md:flex-row md:px-10 lg:px-16">
          <span>02 / Architecture</span>

          <span>Architecture · Culture · Place</span>

          <Link
            href="/architecture"
            className="group inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-100"
          >
            <span>Enter the archive</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}