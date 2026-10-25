"use client";

import { useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function HeroAnimation() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });
const scrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "+=150%",
    scrub: 1,
    pin: true,
  },
});
gsap.from(".world-section button", {
  y: 60,
  opacity: 0,
  stagger: 0.12,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".world-section",
    start: "top 50%",
  },
});
gsap.from(".world-title", {
  yPercent: 30,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".world-section",
    start: "top 70%",
  },
});
scrollTimeline
  .to(".hero-image", {
    scale: 1.35,
    duration: 1,
  })
  .to(
    ".hero-title",
    {
      yPercent: -120,
      opacity: 0,
      duration: 0.8,
    },
    "<",
  )
  .to(
    ".hero-eyebrow",
    {
      y: -80,
      opacity: 0,
      duration: 0.5,
    },
    "<",
  )
  .to(
    ".hero-meta",
    {
      y: -60,
      opacity: 0,
      duration: 0.5,
    },
    "<",
  )
  .to(
    ".hero-footer",
    {
      scaleX: 0,
      duration: 0.5,
    },
    "<",
  );
      timeline
        .from(".hero-image", {
          scale: 1.15,
          duration: 2,
          ease: "power3.out",
        })
        .from(
          ".hero-overlay",
          {
            opacity: 0,
            duration: 1.2,
          },
          "-=1.4",
        )
        .from(
          ".hero-eyebrow",
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.7",
        )
        .from(
          ".hero-title",
          {
            yPercent: 100,
            opacity: 0,
            duration: 1.4,
          },
          "-=0.6",
        )
        .from(
          ".hero-meta",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.8",
        )
        .from(
          ".hero-footer",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
          },
          "-=0.5",
        );
    });

    return () => context.revert();
  }, []);

  return null;
}