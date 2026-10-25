"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "World",
    href: "/#world",
  },
  {
    label: "Architecture",
    href: "/architecture",
  },
  {
    label: "Collections",
    href: "/#collections",
  },
  {
    label: "Stories",
    href: "/#stories",
  },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =========================================================
          HEADER
      ========================================================== */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/90 text-black backdrop-blur-md"
            : "text-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-16">
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-sm font-bold uppercase tracking-[0.25em]"
          >
            ARCHIVE
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* MENU */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative z-50 flex h-10 w-10 items-center justify-center"
          >
            <span className="relative flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-1 rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-0.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-black text-white transition-all duration-500 ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`text-[clamp(2.5rem,8vw,6rem)] font-medium leading-none tracking-[-0.05em] transition-all duration-500 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: open ? `${index * 60}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}