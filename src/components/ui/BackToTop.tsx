"use client";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="mt-10 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--archive-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--archive-black)]"
    >
      Back to top ↑
    </button>
  );
}