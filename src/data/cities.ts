export interface City {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const cities: City[] = [
  {
    id: "01",
    slug: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    region: "Africa",
    description:
      "A city shaped by mountains, ocean, layered histories and an evolving architectural identity.",
    image: "/images/Cities/Cape-Town/cape-town-view-1200-x-675-px.webp",
    featured: true,
  },
  {
    id: "02",
    slug: "barcelona",
    name: "Barcelona",
    country: "Spain",
    region: "Europe",
    description:
      "A Mediterranean city where modernisme, civic space and contemporary architecture exist in constant conversation.",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1800&q=90",
    featured: true,
  },
  {
    id: "03",
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    region: "Asia",
    description:
      "A dense architectural landscape where tradition, technology and radical experimentation overlap.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1800&q=90",
    featured: true,
  },
  {
    id: "04",
    slug: "new-york",
    name: "New York",
    country: "United States",
    region: "North America",
    description:
      "A vertical city defined by density, infrastructure, iconic buildings and an ever-changing urban fabric.",
    image:
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1800&q=90",
    featured: true,
  },
  {
    id: "05",
    slug: "paris",
    name: "Paris",
    country: "France",
    region: "Europe",
    description:
      "An urban archive of boulevards, monuments, domestic architecture and centuries of architectural transformation.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "06",
    slug: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    region: "Europe",
    description:
      "A city of tiled facades, steep streets, modern interventions and architecture shaped by the Atlantic.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "07",
    slug: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    region: "North America",
    description:
      "A vast urban landscape where pre-colonial history, modernism and contemporary architecture collide.",
    image:
      "https://images.unsplash.com/photo-1518659526054-190340b32735?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "08",
    slug: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    region: "Africa",
    description:
      "An architectural environment defined by courtyards, earth, craft, gardens and centuries of cultural exchange.",
    image:
      "https://images.unsplash.com/photo-1597212720386-0f0b7b4f8c4b?auto=format&fit=crop&w=1800&q=90",
  },
];