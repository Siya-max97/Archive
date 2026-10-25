import Image from "next/image";
import type { Building } from "@/types/architecture";

interface BuildingGalleryProps {
  building: Building;
}

export default function BuildingGallery({
  building,
}: BuildingGalleryProps) {
  const images = [
    building.image,
    building.image,
    building.image,
  ];

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mb-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              02 / Gallery
            </p>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-4xl font-medium leading-[0.9] tracking-[-0.05em] md:text-6xl">
              The place
              <br />
              in detail.
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative aspect-[16/9] overflow-hidden bg-white/10">
            <Image
              src={images[0]}
              alt={building.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {images.slice(1).map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative aspect-[4/5] overflow-hidden bg-white/10"
              >
                <Image
                  src={image}
                  alt={`${building.title} detail ${index + 2}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}