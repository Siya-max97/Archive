export type ExhibitionStatus =
  | "Current"
  | "Upcoming"
  | "Archived";

export type ExhibitionCategory =
  | "Architecture"
  | "Urbanism"
  | "Design"
  | "Photography"
  | "Culture";

export interface Exhibition {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  city: string;
  country: string;
  year: string;
  category: ExhibitionCategory;
  startDate: string;
  endDate: string;
  status: ExhibitionStatus;
  description: string;
  image: string;
  featured?: boolean;
}

export const exhibitions: Exhibition[] = [
  {
    id: "01",
    slug: "modern-forms",
    title: "Modern Forms",
    subtitle: "Architecture after the machine age",
    location: "Archive Gallery",
    city: "Cape Town",
    country: "South Africa",
    year: "2026",
    category: "Architecture",
    startDate: "2026-09-12",
    endDate: "2026-11-30",
    status: "Current",
    description:
      "An exploration of modernist architecture and the ideas that transformed the relationship between structure, material and everyday life.",
    image:
      "/Users/siya/archive/public/images/Cities/Cape-Town/bo-kaap-21200-x-675-px.webp",
    featured: true,
  },

  {
    id: "02",
    slug: "brutalist-landscapes",
    title: "Brutalist Landscapes",
    subtitle: "Concrete, monument and memory",
    location: "Archive Gallery",
    city: "London",
    country: "United Kingdom",
    year: "2026",
    category: "Architecture",
    startDate: "2026-10-18",
    endDate: "2027-01-24",
    status: "Upcoming",
    description:
      "A study of brutalist architecture and its relationship with civic life, public space and the landscapes surrounding it.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",
    featured: true,
  },

  {
    id: "03",
    slug: "homes-of-the-modern-world",
    title: "Homes of the Modern World",
    subtitle: "Domestic architecture, 1920–1970",
    location: "Architecture Hall",
    city: "Barcelona",
    country: "Spain",
    year: "2027",
    category: "Architecture",
    startDate: "2027-02-06",
    endDate: "2027-05-16",
    status: "Upcoming",
    description:
      "A collection of domestic spaces that challenged conventional ideas of privacy, landscape, family and the modern home.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
  },

  {
    id: "04",
    slug: "cities-in-motion",
    title: "Cities in Motion",
    subtitle: "Infrastructure and the contemporary city",
    location: "Urban Futures Centre",
    city: "Tokyo",
    country: "Japan",
    year: "2027",
    category: "Urbanism",
    startDate: "2027-04-10",
    endDate: "2027-08-01",
    status: "Upcoming",
    description:
      "An examination of infrastructure, mobility and the systems that shape how contemporary cities grow and move.",
    image:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1800&q=90",
  },

  {
    id: "05",
    slug: "architecture-and-water",
    title: "Architecture & Water",
    subtitle: "Buildings at the edge",
    location: "Coastal Architecture Museum",
    city: "Lisbon",
    country: "Portugal",
    year: "2027",
    category: "Architecture",
    startDate: "2027-06-19",
    endDate: "2027-09-26",
    status: "Upcoming",
    description:
      "An investigation into architecture shaped by coastlines, rivers, oceans and the changing relationship between land and water.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=90",
  },

  {
    id: "06",
    slug: "archive-vol-01",
    title: "Archive Vol. 01",
    subtitle: "A selection from the collection",
    location: "Archive Gallery",
    city: "New York",
    country: "United States",
    year: "2025",
    category: "Culture",
    startDate: "2025-05-10",
    endDate: "2025-08-31",
    status: "Archived",
    description:
      "The first exhibition in the Archive series, bringing together buildings, drawings, photographs and stories from across the collection.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=90",
  },
];