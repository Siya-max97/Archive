import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { cities } from "@/data/cities";

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

const capeTownGallery = [
  {
    number: "01",
    title: "Where the mountain meets the city",
    category: "Landscape",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1800&q=90",
    alt: "Panoramic view of Cape Town and its mountainous landscape",
    description:
      "Table Mountain gives Cape Town its unmistakable silhouette, shaping the city's relationship with its coastline and surrounding neighbourhoods.",
  },
  {
    number: "02",
    title: "The Atlantic edge",
    category: "Coastline",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    alt: "Ocean waves meeting the coast",
    description:
      "The meeting of mountain and ocean creates a dramatic coastal landscape that defines life around the peninsula.",
  },
  {
    number: "03",
    title: "Colour, memory and place",
    category: "Neighbourhoods",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
    alt: "Distinctive architectural forms and urban structures",
    description:
      "Cape Town's neighbourhoods hold layers of architectural character, cultural identity and living history.",
  },
  {
    number: "04",
    title: "Architecture in conversation",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=85",
    alt: "Contemporary architecture framed by light and shadow",
    description:
      "Historic structures and contemporary design reveal how buildings respond to place, material and changing ways of life.",
  },
  {
    number: "05",
    title: "A landscape of living nature",
    category: "Biodiversity",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=85",
    alt: "Wildlife in a natural landscape",
    description:
      "The Cape's extraordinary natural environment connects the city to mountain ecosystems, indigenous vegetation and coastal habitats.",
  },
];

const cityNotes = [
  {
    number: "01",
    title: "A dramatic natural setting",
    description:
      "Table Mountain, the Twelve Apostles and two distinct coastlines make geography central to Cape Town's identity.",
  },
  {
    number: "02",
    title: "Neighbourhoods with their own stories",
    description:
      "From Bo-Kaap and Woodstock to Kalk Bay and Muizenberg, each neighbourhood offers a different relationship with the city's history and landscape.",
  },
  {
    number: "03",
    title: "Culture that continues to evolve",
    description:
      "Art, music, food, language and local traditions reflect generations of cultural exchange, creativity and resilience.",
  },
  {
    number: "04",
    title: "A layered architectural identity",
    description:
      "The city's built environment reveals colonial histories, forced removals, modern development and contemporary approaches to design.",
  },
];

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);

  if (!city) {
    return { title: "City not found | Archive" };
  }

  return {
    title: `${city.name} — Architecture, Culture & Place | Archive`,
    description: city.description,
    openGraph: {
      title: `${city.name} | Archive`,
      description: city.description,
      images: [{ url: city.image, alt: city.name }],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);

  if (!city) notFound();

  const isCapeTown = city.slug === "cape-town";

  return (
    <main className="overflow-hidden bg-[#11110f] text-[#f4f0e8]">
      {/* Editorial navigation */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.28em]"
        >
          Archive
        </Link>

        <Link
          href="/city"
          className="text-[10px] uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-white"
        >
          City Index ↗
        </Link>
      </header>

      {/* Immersive hero */}
      <section className="relative flex min-h-[85svh] items-end md:min-h-svh">
        <Image
          src={city.image}
          alt={`${city.name}, ${city.country}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/15" />

        <div className="relative z-10 w-full px-6 pb-12 pt-32 md:px-12 md:pb-16 lg:px-20">
          <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-white/75">
            <span>{city.region}</span>
            <span className="h-px w-8 bg-white/50" />
            <span>{city.country}</span>
          </div>

          <h1 className="max-w-6xl text-[clamp(4.5rem,15vw,14rem)] font-medium leading-[0.76] tracking-[-0.085em]">
            {city.name}
            <span className="block text-white/65">in focus.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-7 text-white/85 md:text-lg md:leading-8">
              {city.description}
            </p>

            <a
              href="#discover"
              className="inline-flex shrink-0 items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-white/85 transition-opacity hover:opacity-60"
            >
              Discover the city
              <span aria-hidden="true" className="text-lg">
                ↓
              </span>
            </a>
          </div>
        </div>

        <p className="absolute right-6 top-1/2 hidden -rotate-90 text-[9px] uppercase tracking-[0.3em] text-white/65 md:block">
          A study of place
        </p>
      </section>

      {/* Introduction */}
      <section
        id="discover"
        className="mx-auto grid max-w-[1600px] gap-10 px-6 py-24 md:px-12 md:py-36 lg:grid-cols-12 lg:px-20"
      >
        <div className="lg:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
            01 / City index
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.055em] md:text-6xl lg:text-7xl">
            {isCapeTown
              ? "A place where mountains meet the ocean, and history lives in the streets."
              : `A closer look at ${city.name}, its architecture, culture and sense of place.`}
          </h2>

          <div className="mt-10 grid gap-8 border-t border-white/20 pt-6 sm:grid-cols-2">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                Country
              </p>
              <p className="mt-3 text-lg">{city.country}</p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                Region
              </p>
              <p className="mt-3 text-lg">{city.region}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photography-led editorial gallery */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-8 flex items-end justify-between px-2 md:px-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                {isCapeTown
                  ? "Cape Town / Visual study"
                  : `${city.name} / Visual study`}
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tighter md:text-5xl">
                The beauty of place.
              </h2>
            </div>

            <p className="hidden text-[9px] uppercase tracking-[0.2em] text-white/40 sm:block">
              Selected views / 01–05
            </p>
          </div>

          {isCapeTown ? (
            <div className="grid gap-4 md:grid-cols-12">
              <figure className="group md:col-span-8">
                <div className="relative aspect-4/5 overflow-hidden bg-white/5 md:aspect-[1.18/1]">
                  <Image
                    src={capeTownGallery[0].image}
                    alt={capeTownGallery[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 67vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                  />
                  <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.2em] text-white drop-shadow">
                    01 / Landscape
                  </span>
                </div>
                <figcaption className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-xl tracking-[-0.03em] md:text-2xl">
                    {capeTownGallery[0].title}
                  </h3>
                  <p className="max-w-sm text-xs leading-6 text-white/55">
                    {capeTownGallery[0].description}
                  </p>
                </figcaption>
              </figure>

              <figure className="group md:col-span-4 md:pt-32">
                <div className="relative aspect-4/5 overflow-hidden bg-white/5">
                  <Image
                    src={capeTownGallery[1].image}
                    alt={capeTownGallery[1].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 34vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                  />
                  <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.2em] text-white drop-shadow">
                    02 / Coastline
                  </span>
                </div>
                <figcaption className="py-5">
                  <h3 className="text-xl tracking-[-0.03em]">
                    {capeTownGallery[1].title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-white/55">
                    {capeTownGallery[1].description}
                  </p>
                </figcaption>
              </figure>

              {capeTownGallery.slice(2).map((item, index) => (
                <figure
                  key={item.number}
                  className={`group ${
                    index === 1 ? "md:col-span-7" : "md:col-span-5"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-white/5 ${
                      index === 1 ? "aspect-5/4" : "aspect-4/5"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                    />
                    <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.2em] text-white drop-shadow">
                      {item.number} / {item.category}
                    </span>
                  </div>
                  <figcaption className="py-5">
                    <h3 className="text-xl tracking-[-0.03em] md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-xs leading-6 text-white/55">
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <figure className="group">
              <div className="relative aspect-4/3 overflow-hidden bg-white/5 md:aspect-2/1">
                <Image
                  src={city.image}
                  alt={`A view of ${city.name}`}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
                />
              </div>
              <figcaption className="py-5 text-sm text-white/60">
                {city.name}, {city.country} — a study of architecture, culture
                and place.
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Editorial observations */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
              02 / Observations
            </p>
            <h2 className="mt-5 max-w-sm text-4xl font-medium leading-tight tracking-tighter md:text-5xl">
              More than a view.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {(isCapeTown
              ? cityNotes
              : [
                  {
                    number: "01",
                    title: "Architecture and urban form",
                    description:
                      "Buildings, streets and public spaces shape the identity of the city.",
                  },
                  {
                    number: "02",
                    title: "History and transformation",
                    description:
                      "Historical events and social change leave their mark on the built environment.",
                  },
                  {
                    number: "03",
                    title: "Culture and everyday life",
                    description:
                      "Neighbourhoods and creative communities reveal how people experience the city.",
                  },
                  {
                    number: "04",
                    title: "Landscape and material",
                    description:
                      "Geography, climate and local materials influence how the city is built.",
                  },
                ]
            ).map((note) => (
              <article
                key={note.number}
                className="grid gap-4 border-t border-white/20 py-7 sm:grid-cols-[48px_1fr]"
              >
                <span className="pt-1 text-[10px] tracking-[0.2em] text-white/40">
                  {note.number}
                </span>

                <div>
                  <h3 className="text-xl font-medium tracking-[-0.03em] md:text-2xl">
                    {note.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
                    {note.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing image */}
      <section className="relative flex min-h-[65svh] items-end overflow-hidden md:min-h-[85svh]">
        <Image
          src={city.image}
          alt={`A final view of ${city.name}`}
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/10" />

        <div className="relative z-10 w-full px-6 pb-10 md:px-12 md:pb-16 lg:px-20">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/65">
            Continue exploring
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
            Every place holds
            <br />
            more than one story.
          </h2>

          <Link
            href="/city"
            className="mt-9 inline-flex items-center gap-8 border-b border-white/60 pb-3 text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
          >
            Discover the archive
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
