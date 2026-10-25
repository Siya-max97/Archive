"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-5 mix-blend-difference text-white md:px-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-[0.25em]">
          ARCHIVE
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]"
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>

          <span className="flex w-6 flex-col gap-1">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
        </button>
      </div>
    </header>
  );
}