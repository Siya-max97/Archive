import type { Building } from "@/types/architecture";

export const buildings: Building[] = [
  {
    id: "01",
    slug: "casa-malaparte",
    title: "Casa Malaparte",
    location: "Capri, Italy",
    country: "Italy",
    architect: "Adalberto Libera",
    year: "1942",
    category: "Modernism",
    movement: "Italian Modernism",
    image: "/images/casa-malaparte.jpeg",
    description:
      "A striking modernist house positioned dramatically on the cliffs of Capri.",
  },
  {
    id: "02",
    slug: "fallingwater",
    title: "Fallingwater",
    location: "Pennsylvania, USA",
    country: "United States",
    architect: "Frank Lloyd Wright",
    year: "1939",
    category: "Residential",
    movement: "Organic Architecture",
    image:
      "https://images.unsplash.com/photo-1549274092-75e864fe7703?w=1800&auto=format&fit=crop&q=80",
    description:
      "Frank Lloyd Wright's celebrated house built directly above a waterfall.",
    gallery: [
      "https://images.unsplash.com/photo-1549274092-75e864fe7703?w=1800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1769179574045-3d7c1f7fa6f9?q=80&w=2016&auto=format&fit=crop",
    ],
    video: "https://www.youtube.com/embed/q8dcnh-4I6g",
  },
  {
    id: "03",
    slug: "casa-da-musica",
    title: "Casa da Música",
    location: "Porto, Portugal",
    country: "Portugal",
    architect: "OMA",
    year: "2005",
    category: "Cultural",
    movement: "Contemporary",
    image:
      "https://images.unsplash.com/photo-1755118664623-e845ff38132d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A monumental concert hall that became one of Porto's defining contemporary landmarks.",
    gallery: [
      "https://images.unsplash.com/photo-1549274092-75e864fe7703?w=1800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1769179574045-3d7c1f7fa6f9?q=80&w=2016&auto=format&fit=crop",
    ],
    video: "https://www.youtube.com/embed/q8dcnh-4I6g",
  },
];