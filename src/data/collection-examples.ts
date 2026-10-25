export interface CollectionExample {
  name: string;
  architect: string;
  location: string;
  year: string;
  image: string;
  imageSource: string;
  referenceUrl: string;
  buildingSlug?: string;
}

export const collectionExamples: Record<string, CollectionExample[]> = {
  modernism: [
    {
      name: "Casa Malaparte",
      architect: "Adalberto Libera / Curzio Malaparte",
      location: "Capri, Italy",
      year: "1942",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Villa_Malaparte.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/File:Villa_Malaparte.jpg",
      referenceUrl: "https://en.wikipedia.org/wiki/Villa_Malaparte",
      buildingSlug: "casa-malaparte",
    },
    {
      name: "Villa Savoye",
      architect: "Le Corbusier",
      location: "Poissy, France",
      year: "1931",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Villa_Savoye_(8237925975).jpg",
      imageSource: "https://commons.wikimedia.org/wiki/Category:Villa_Savoye",
      referenceUrl: "https://en.wikipedia.org/wiki/Villa_Savoye",
    },
    {
      name: "Farnsworth House",
      architect: "Ludwig Mies van der Rohe",
      location: "Illinois, United States",
      year: "1951",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Farnsworth_House.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/Category:Farnsworth_House",
      referenceUrl: "https://en.wikipedia.org/wiki/Farnsworth_House",
    },
    {
      name: "Barcelona Pavilion",
      architect: "Ludwig Mies van der Rohe",
      location: "Barcelona, Spain",
      year: "1929",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Barcelona_Pavilion.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/Category:Barcelona_Pavilion",
      referenceUrl: "https://en.wikipedia.org/wiki/Barcelona_Pavilion",
    },
    {
      name: "Fallingwater",
      architect: "Frank Lloyd Wright",
      location: "Pennsylvania, United States",
      year: "1939",
      image:
        "https://images.unsplash.com/photo-1549274092-75e864fe7703?w=1200&auto=format&fit=crop&q=80",
      imageSource: "https://commons.wikimedia.org/wiki/Category:Fallingwater",
      referenceUrl: "https://en.wikipedia.org/wiki/Fallingwater",
      buildingSlug: "fallingwater",
    },
  ],

  brutalism: [
    {
      name: "Habitat 67",
      architect: "Moshe Safdie",
      location: "Montreal, Canada",
      year: "1967",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Habitat_67.jpg",
      imageSource: "https://commons.wikimedia.org/wiki/File:Habitat_67.jpg",
      referenceUrl: "https://en.wikipedia.org/wiki/Habitat_67",
    },
    {
      name: "Barbican Estate",
      architect: "Chamberlin, Powell and Bon",
      location: "London, England",
      year: "1965–1976",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/London_-_Barbican_Estate.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/File:London_-_Barbican_Estate.jpg",
      referenceUrl: "https://en.wikipedia.org/wiki/Barbican_Estate",
    },
    {
      name: "Boston City Hall",
      architect: "Kallmann, McKinnell & Knowles",
      location: "Boston, United States",
      year: "1968",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Boston_city_hall.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/File:Boston_city_hall.jpg",
      referenceUrl: "https://en.wikipedia.org/wiki/Boston_City_Hall",
    },
    {
      name: "Geisel Library",
      architect: "William Pereira",
      location: "San Diego, United States",
      year: "1970",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Geisel_library.jpg",
      imageSource: "https://commons.wikimedia.org/wiki/File:Geisel_library.jpg",
      referenceUrl: "https://en.wikipedia.org/wiki/Geisel_Library",
    },
    {
      name: "National Theatre",
      architect: "Denys Lasdun",
      location: "London, England",
      year: "1976",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/National_Theatre,_London_-_2025-01-25.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/File:National_Theatre,_London_-_2025-01-25.jpg",
      referenceUrl: "https://en.wikipedia.org/wiki/Royal_National_Theatre",
    },
  ],

  coastal: [
    {
      name: "Casa Malaparte",
      architect: "Adalberto Libera / Curzio Malaparte",
      location: "Capri, Italy",
      year: "1942",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Villa_Malaparte.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/File:Villa_Malaparte.jpg",
      referenceUrl: "https://en.wikipedia.org/wiki/Villa_Malaparte",
      buildingSlug: "casa-malaparte",
    },
    {
      name: "Salk Institute",
      architect: "Louis Kahn",
      location: "La Jolla, California",
      year: "1965",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Salk_Institute.jpg",
      imageSource: "https://commons.wikimedia.org/wiki/File:Salk_Institute.jpg",
      referenceUrl: "https://en.wikipedia.org/wiki/Salk_Institute",
    },
    {
      name: "Sydney Opera House",
      architect: "Jørn Utzon",
      location: "Sydney, Australia",
      year: "1973",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sydney_Opera_House.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/Category:Sydney_Opera_House",
      referenceUrl: "https://en.wikipedia.org/wiki/Sydney_Opera_House",
    },
    {
      name: "The Sea Ranch",
      architect: "MLTW",
      location: "California, United States",
      year: "1960s",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/The_Sea_Ranch.jpg",
      imageSource: "https://commons.wikimedia.org/wiki/Category:The_Sea_Ranch",
      referenceUrl: "https://en.wikipedia.org/wiki/The_Sea_Ranch",
    },
    {
      name: "Tjibaou Cultural Centre",
      architect: "Renzo Piano",
      location: "Nouméa, New Caledonia",
      year: "1998",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tjibaou_Cultural_Centre.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/Category:Tjibaou_Cultural_Centre",
      referenceUrl:
        "https://en.wikipedia.org/wiki/Jean-Marie_Tjibaou_Cultural_Centre",
    },
  ],

  future: [
    {
      name: "Casa da Música",
      architect: "OMA / Rem Koolhaas",
      location: "Porto, Portugal",
      year: "2005",
      image:
        "https://images.unsplash.com/photo-1755118664623-e845ff38132d?q=80&w=1374&auto=format&fit=crop",
      imageSource:
        "https://commons.wikimedia.org/wiki/Category:Casa_da_M%C3%BAsica",
      referenceUrl: "https://en.wikipedia.org/wiki/Casa_da_M%C3%BAsica",
      buildingSlug: "casa-da-musica",
    },
    {
      name: "Heydar Aliyev Center",
      architect: "Zaha Hadid Architects",
      location: "Baku, Azerbaijan",
      year: "2012",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Heydar_Aliyev_Center_1.1.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/Category:Heydar_Aliyev_Cultural_Center",
      referenceUrl: "https://en.wikipedia.org/wiki/Heydar_Aliyev_Center",
    },
    {
      name: "CCTV Headquarters",
      architect: "OMA / Rem Koolhaas",
      location: "Beijing, China",
      year: "2012",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/CCTV_Headquarters.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/File:CCTV_Headquarters.jpg",
      referenceUrl:
        "https://en.wikipedia.org/wiki/China_Central_Television_Headquarters",
    },
    {
      name: "The Eden Project",
      architect: "Nicholas Grimshaw",
      location: "Cornwall, England",
      year: "2001",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/The_Eden_Project_Biomes_from_the_Lift.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/File:The_Eden_Project_Biomes_from_the_Lift.jpg",
      referenceUrl: "https://en.wikipedia.org/wiki/Eden_Project",
    },
    {
      name: "The Interlace",
      architect: "OMA / Ole Scheeren",
      location: "Singapore",
      year: "2013",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/The_Interlace_Singapore.jpg",
      imageSource:
        "https://commons.wikimedia.org/wiki/File:The_Interlace_Singapore.jpg",
      referenceUrl: "https://en.wikipedia.org/wiki/The_Interlace",
    },
  ],
};
