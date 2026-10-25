import HeroAnimation from "@/components/animation/HeroAnimation";
import WorldSection from "@/components/map/WorldSection";
import FeaturedArchitecture from "@/components/FeaturedArchitecture";
import Collections from "@/components/Collections";
import Stories from "@/components/Stories";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--archive-white) text-(--archive-black)">
      <SmoothScroll />

      <Navigation />

      {/* =========================================================
          OPENING
      ========================================================== */}
      <HeroAnimation />

      {/* =========================================================
          WORLD
      ========================================================== */}
      <WorldSection />

      {/* =========================================================
          ARCHITECTURE
      ========================================================== */}
      <FeaturedArchitecture />

      {/* =========================================================
          COLLECTIONS
      ========================================================== */}
      <Collections />

      {/* =========================================================
          STORIES
      ========================================================== */}
      <Stories />

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <Footer />
    </main>
  );
}