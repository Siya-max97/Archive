"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Map, {
  Marker,
  NavigationControl,
  type MapRef,
} from "react-map-gl/mapbox";

import { cities } from "@/data/cities";

import "mapbox-gl/dist/mapbox-gl.css";

interface LocationDetails {
  latitude: number;
  longitude: number;
  history: string;
  focus: string;
}

const locationDetails: Record<string, LocationDetails> = {
  "cape-town": {
    latitude: -33.9249,
    longitude: 18.4241,
    history:
      "A port city shaped by Indigenous histories, colonialism, slavery, forced removals, resistance, and continuing cultural exchange.",
    focus: "Landscape, heritage and contemporary culture",
  },
  barcelona: {
    latitude: 41.3874,
    longitude: 2.1686,
    history:
      "A Catalan city whose urban identity reflects medieval streets, industrial expansion, modernisme, and contemporary urban change.",
    focus: "Modernisme, public space and urban form",
  },
  tokyo: {
    latitude: 35.6762,
    longitude: 139.6503,
    history:
      "A metropolis transformed by political change, earthquakes, war, reconstruction, and successive waves of architectural experimentation.",
    focus: "Urban density, tradition and innovation",
  },
  "new-york": {
    latitude: 40.7128,
    longitude: -74.006,
    history:
      "A global port and immigrant city shaped by Indigenous displacement, colonial settlement, industrial growth, and vertical urban development.",
    focus: "Skyscrapers, infrastructure and city life",
  },
  paris: {
    latitude: 48.8566,
    longitude: 2.3522,
    history:
      "A city shaped by centuries of political transformation, changing street plans, monumental architecture, and modern urban planning.",
    focus: "Boulevards, monuments and domestic architecture",
  },
  lisbon: {
    latitude: 38.7223,
    longitude: -9.1393,
    history:
      "A Portuguese port city shaped by maritime trade, imperial expansion, the 1755 earthquake, and ongoing architectural transformation.",
    focus: "Tilework, urban topography and Atlantic identity",
  },
  "mexico-city": {
    latitude: 19.4326,
    longitude: -99.1332,
    history:
      "A metropolis built over the Mexica capital of Tenochtitlan, shaped by colonial rule, modernism, and rapid urban expansion.",
    focus: "Indigenous heritage, modernism and urban scale",
  },
  marrakech: {
    latitude: 31.6295,
    longitude: -7.9811,
    history:
      "A historic Moroccan city shaped by dynastic history, trans-Saharan exchange, craft traditions, gardens, and its medina.",
    focus: "Courtyards, material culture and urban heritage",
  },
};

const locations = cities.flatMap((city) => {
  const details = locationDetails[city.slug];

  return details ? [{ ...city, ...details }] : [];
});

type Location = (typeof locations)[number];

export default function WorldMap() {
  const mapRef = useRef<MapRef>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const selectedLocation = locations.find(
    (location) => location.slug === selectedCity,
  );

  function handleLocationSelect(location: Location) {
    setSelectedCity(location.slug);

    mapRef.current?.flyTo({
      center: [location.longitude, location.latitude],
      zoom: location.slug === "cape-town" ? 5.5 : 4,
      duration: 1400,
      essential: true,
    });
  }

  function handleClose() {
    setSelectedCity(null);

    mapRef.current?.flyTo({
      center: [20, 10],
      zoom: 1.35,
      duration: 1200,
      essential: true,
    });
  }

  return (
    <section
      aria-label="Explore cities around the world"
      className="relative h-[70vh] min-h-150 w-full overflow-hidden bg-white"
    >
      <Map
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 20,
          latitude: 10,
          zoom: 1.35,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        attributionControl={false}
        dragRotate={false}
        pitchWithRotate={false}
        touchPitch={false}
        doubleClickZoom={false}
        cooperativeGestures
      >
        <NavigationControl
          position="bottom-right"
          showCompass={false}
        />

        {locations.map((location) => (
          <Marker
            key={location.slug}
            longitude={location.longitude}
            latitude={location.latitude}
            anchor="center"
          >
            <CityMarker
              location={location}
              selected={selectedCity === location.slug}
              onSelect={() => handleLocationSelect(location)}
            />
          </Marker>
        ))}
      </Map>

      <div className="pointer-events-none absolute left-5 top-5 z-20 md:left-8 md:top-8">
        <div className="flex items-center gap-3 bg-white px-3 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
          <span className="h-2 w-2 rounded-full bg-black" />
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black">
            Global Archive
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 right-5 z-20 md:bottom-8 md:right-8">
        <p className="bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
          {String(locations.length).padStart(2, "0")} / 24 Locations
        </p>
      </div>

      {selectedLocation && (
        <CityPreview city={selectedLocation} onClose={handleClose} />
      )}
    </section>
  );
}

function CityMarker({
  location,
  selected,
  onSelect,
}: {
  location: Location;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Explore ${location.name}, ${location.country}`}
      aria-pressed={selected}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      className="group flex min-h-12 items-center gap-2 rounded-full p-1 outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        <span
          className={`absolute inset-0 rounded-full bg-black transition-transform duration-300 ${
            selected ? "scale-125" : "group-hover:scale-110"
          }`}
        />
        <span className="absolute h-7 w-7 rounded-full bg-white" />
        <span
          className={`relative h-5 w-5 rounded-full bg-black transition-transform duration-300 ${
            selected ? "scale-125" : "group-hover:scale-110"
          }`}
        />
      </span>

      <span
        className={`whitespace-nowrap border-2 border-black px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-all duration-300 ${
          selected
            ? "translate-x-1 bg-black text-white"
            : "bg-white text-black group-hover:translate-x-1"
        }`}
      >
        {location.name}
      </span>
    </button>
  );
}

function CityPreview({
  city,
  onClose,
}: {
  city: Location;
  onClose: () => void;
}) {
  return (
    <aside
      aria-label={`${city.name} destination information`}
      aria-live="polite"
      className="absolute bottom-5 left-5 z-30 max-h-[calc(100%-2.5rem)] w-[min(calc(100%-2.5rem),440px)] overflow-y-auto bg-black text-white shadow-2xl md:bottom-8 md:left-8"
    >
      <div className="relative aspect-video w-full bg-neutral-900">
        <Image
          src={city.image}
          alt={`View of ${city.name}, ${city.country}`}
          fill
          sizes="(max-width: 768px) calc(100vw - 2.5rem), 440px"
          className="object-cover"
          priority
        />

        <button
          type="button"
          onClick={onClose}
          aria-label={`Close ${city.name} preview`}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center border border-white/50 bg-black text-2xl text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          ×
        </button>

        <span className="absolute bottom-3 left-4 bg-black px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em]">
          Destination / {city.id}
        </span>
      </div>

      <div className="p-6 md:p-7">
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/50">
          {city.region} / {city.country}
        </p>

        <h3 className="mt-4 text-4xl font-medium leading-none tracking-tighter md:text-5xl">
          {city.name}
        </h3>

        <p className="mt-4 text-sm leading-6 text-white/70">
          {city.description}
        </p>

        <div className="mt-6 border-t border-white/20 pt-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
            Historical context
          </p>

          <p className="mt-3 text-sm leading-6 text-white/70">
            {city.history}
          </p>
        </div>

        <div className="mt-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
            Archive focus
          </p>

          <p className="mt-2 text-sm text-white/80">{city.focus}</p>
        </div>

        <Link
          href={`/city/${city.slug}`}
          className="mt-7 flex w-full items-center justify-between border-t border-white/20 pt-5 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span>Explore City</span>
          <span aria-hidden="true" className="text-base">
            ↗
          </span>
        </Link>
      </div>
    </aside>
  );
}