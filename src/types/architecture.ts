export type BuildingCategory =
  | "Modernism"
  | "Brutalism"
  | "Residential"
  | "Cultural"
  | "Institutional"
  | "Religious"
  | "Landscape";

export interface Building {
  id: string;
  slug: string;
  title: string;
  location: string;
  country: string;
  architect: string;
  year: string;
  category: BuildingCategory;
  movement?: string;
  image: string;
  description?: string;
  gallery?: string[];
  video?: string;
}