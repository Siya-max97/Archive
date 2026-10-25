export type CollectionType =
  | "movement"
  | "environmental"
  | "conceptual";

export interface Collection {
  slug: string;
  name: string;
  type: CollectionType;
  description: string;
  period?: string;
  tags: string[];
  buildingSlugs: string[];
}