import type { Collection } from "@/types/collection";

export const collections: Collection[] = [
  {
    slug: "modernism",
    name: "Modernism",
    type: "movement",
    description:
      "Radical ideas, new materials and architecture that reshaped the twentieth century.",
    period: "20th century",
    tags: [
      "modernism",
      "modern-movement",
      "mid-century",
      "functionalism",
    ],
    buildingSlugs: ["casa-malaparte"],
  },
  {
    slug: "brutalism",
    name: "Brutalism",
    type: "movement",
    description:
      "Concrete, monumentality and buildings that refuse to disappear into the background.",
    period: "1950s–1980s",
    tags: ["brutalism", "concrete", "béton-brut", "post-war"],
    buildingSlugs: [],
  },
  {
    slug: "coastal",
    name: "Coastal",
    type: "environmental",
    description:
      "Architecture shaped by water, landscape, climate and the edge of the world.",
    tags: [
      "coastal",
      "ocean",
      "landscape",
      "seafront",
      "maritime",
    ],
    buildingSlugs: [],
  },
  {
    slug: "future",
    name: "Future",
    type: "conceptual",
    description:
      "Experimental spaces and new ideas about how architecture might shape tomorrow.",
    period: "Contemporary",
    tags: [
      "future",
      "experimental",
      "contemporary",
      "innovation",
    ],
    buildingSlugs: ["casa-da-musica"],
  },
];

export function getCollectionBySlug(
  slug: string,
): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}