export interface District {
  title: string;
  description: string;
  traditions: Array<{
    name: string;
    description: string;
  }>;
  products: Array<{
    name: string;
    image: string;
    description: string;
    rating?: number;
    discount?: number;
    priceRange?: {
      min: number;
      max: number;
    };
  }>;
}

export const districtData: Record<string, District> = {
  kishoreganj: {
    title: "Kishoreganj District",
    description: "Kishoreganj is a district rich in cultural heritage and historical significance, known for its traditional crafts, agricultural products, and historical sites.",
    traditions: [
      {
        name: "Nakshi Kantha",
        description: "Traditional embroidered quilts made by local artisans, featuring intricate patterns and designs."
      },
      {
        name: "Pottery Making",
        description: "Traditional pottery crafts passed down through generations, creating unique designs and patterns."
      },
      {
        name: "Folk Music",
        description: "Rich tradition of folk music and Baul songs that tell stories of local culture and heritage."
      }
    ],
    products: [
      {
        name: "Nakshi Kantha",
        image: "nakshi-kantha.jpg",
        description: "Handmade embroidered quilts featuring traditional Bengali motifs and patterns.",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 1500, max: 5000 }
      },
      {
        name: "Traditional Pottery",
        image: "pottery.jpg",
        description: "Handcrafted pottery items made using traditional techniques and local clay.",
        rating: 4.5,
        discount: 10,
        priceRange: { min: 200, max: 1500 }
      },
      {
        name: "Rice Products",
        image: "rice.jpg",
        description: "Various rice products and traditional snacks made from local rice varieties.",
        rating: 4.7,
        discount: 20,
        priceRange: { min: 100, max: 500 }
      }
    ]
  },
  gazipur: {
    title: "Gazipur District",
    description: "Gazipur is a rapidly developing district known for its industrial heritage, traditional crafts, and natural beauty, including the Bhawal National Park.",
    traditions: [
      {
        name: "Textile Weaving",
        description: "Traditional textile weaving techniques producing unique fabrics and patterns."
      },
      {
        name: "Woodcarving",
        description: "Intricate woodcarving traditions creating decorative items and furniture."
      },
      {
        name: "Forest Culture",
        description: "Traditional practices related to forest conservation and sustainable resource use."
      }
    ],
    products: [
      {
        name: "Handloom Textiles",
        image: "textiles.jpg",
        description: "Traditional handwoven textiles featuring unique local patterns.",
        rating: 4.6,
        discount: 15,
        priceRange: { min: 800, max: 3000 }
      },
      {
        name: "Wooden Crafts",
        image: "woodcraft.jpg",
        description: "Handcrafted wooden items featuring traditional designs and patterns.",
        rating: 4.4,
        discount: 10,
        priceRange: { min: 500, max: 2500 }
      },
      {
        name: "Honey",
        image: "honey.jpg",
        description: "Pure honey collected from the Bhawal National Park region.",
        rating: 4.9,
        discount: 5,
        priceRange: { min: 300, max: 1200 }
      }
    ]
  },
  rajbari: {
    title: "Rajbari District",
    description: "Rajbari is known for its rich agricultural heritage, traditional handloom industry, and vibrant cultural practices that reflect the essence of rural Bangladesh.",
    traditions: [
      {
        name: "Handloom Weaving",
        description: "Centuries-old tradition of handloom weaving, producing fine cotton and silk fabrics."
      },
      {
        name: "Jatra Performance",
        description: "Traditional folk theater that tells stories from mythology and contemporary social issues."
      },
      {
        name: "River Culture",
        description: "Traditions centered around the Padma River, including fishing techniques and boat crafting."
      }
    ],
    products: [
      {
        name: "Handloom Sarees",
        image: "handloom-saree.jpg",
        description: "Exquisitely woven cotton and silk sarees with traditional patterns.",
        rating: 4.7,
        discount: 12,
        priceRange: { min: 1200, max: 4500 }
      },
      {
        name: "Jute Products",
        image: "jute-crafts.jpg",
        description: "Eco-friendly products made from locally sourced jute.",
        rating: 4.3,
        discount: 15,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "River Fish",
        image: "river-fish.jpg",
        description: "Fresh fish varieties from the Padma River.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 200, max: 1000 }
      }
    ]
  },
  gopalganj: {
    title: "Gopalganj District",
    description: "Gopalganj is renowned for its agricultural prosperity, historical significance, and unique cultural traditions that blend religious and secular practices.",
    traditions: [
      {
        name: "Pitha Making",
        description: "Traditional rice cake making during winter, featuring unique local varieties."
      },
      {
        name: "Religious Festivals",
        description: "Unique celebration of religious festivals with local cultural elements."
      },
      {
        name: "Agricultural Rituals",
        description: "Traditional practices and ceremonies related to farming and harvesting."
      }
    ],
    products: [
      {
        name: "Traditional Pithas",
        image: "pitha.jpg",
        description: "Various types of traditional rice cakes with unique local recipes.",
        rating: 4.9,
        discount: 8,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "Date Palm Products",
        image: "date-palm.jpg",
        description: "Products made from date palm, including jaggery and sweets.",
        rating: 4.6,
        discount: 12,
        priceRange: { min: 150, max: 800 }
      },
      {
        name: "Handicrafts",
        image: "handicrafts.jpg",
        description: "Local handicrafts made from bamboo and natural materials.",
        rating: 4.4,
        discount: 15,
        priceRange: { min: 200, max: 1500 }
      }
    ]
  },
  faridpur: {
    title: "Faridpur District",
    description: "Faridpur is distinguished by its rich cultural heritage, traditional industries, and historical significance in Bangladesh's independence movement.",
    traditions: [
      {
        name: "Ghee Making",
        description: "Traditional method of making pure ghee, famous throughout Bangladesh."
      },
      {
        name: "Folk Music",
        description: "Rich tradition of folk songs and Baul music unique to the region."
      },
      {
        name: "Weaving Culture",
        description: "Traditional weaving practices producing distinctive textiles."
      }
    ],
    products: [
      {
        name: "Pure Ghee",
        image: "ghee.jpg",
        description: "Traditional clarified butter made using age-old techniques.",
        rating: 4.9,
        discount: 5,
        priceRange: { min: 800, max: 2000 }
      },
      {
        name: "Handloom Products",
        image: "handloom.jpg",
        description: "Traditional textiles woven on handlooms.",
        rating: 4.5,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Sweet Yogurt",
        image: "yogurt.jpg",
        description: "Famous sweet yogurt made using traditional methods.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 50, max: 200 }
      }
    ]
  },
  shariatpur: {
    title: "Shariatpur District",
    description: "Shariatpur is known for its riverside culture, traditional fishing communities, and unique crafts that reflect the life along the Padma River.",
    traditions: [
      {
        name: "Fishing Traditions",
        description: "Traditional fishing methods and associated cultural practices."
      },
      {
        name: "Boat Making",
        description: "Traditional wooden boat crafting techniques passed through generations."
      },
      {
        name: "River Songs",
        description: "Folk songs that tell stories of river life and local culture."
      }
    ],
    products: [
      {
        name: "Dried Fish",
        image: "dried-fish.jpg",
        description: "Traditionally processed dried fish products.",
        rating: 4.6,
        discount: 12,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Wooden Boats",
        image: "wooden-boats.jpg",
        description: "Miniature traditional wooden boats and decorative items.",
        rating: 4.4,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "River Fish",
        image: "river-fish-2.jpg",
        description: "Fresh fish from local rivers and water bodies.",
        rating: 4.7,
        discount: 10,
        priceRange: { min: 150, max: 800 }
      }
    ]
  },
  tangail: {
    title: "Tangail District",
    description: "Tangail is famous for its distinctive handloom industry, producing the renowned Tangail saree, and its rich agricultural heritage.",
    traditions: [
      {
        name: "Tangail Weaving",
        description: "Traditional weaving of the famous Tangail saree with unique patterns."
      },
      {
        name: "Folk Dance",
        description: "Local folk dance forms that tell stories of rural life."
      },
      {
        name: "Agricultural Festivals",
        description: "Celebrations marking different phases of the agricultural calendar."
      }
    ],
    products: [
      {
        name: "Tangail Saree",
        image: "tangail-saree.jpg",
        description: "Famous handwoven sarees with distinctive designs.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 2000, max: 15000 }
      },
      {
        name: "Cotton Fabrics",
        image: "cotton-fabrics.jpg",
        description: "High-quality cotton textiles with traditional patterns.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Bamboo Crafts",
        image: "bamboo-crafts.jpg",
        description: "Traditional items made from locally sourced bamboo.",
        rating: 4.5,
        discount: 20,
        priceRange: { min: 200, max: 1500 }
      }
    ]
  },
  narsingdi: {
    title: "Narsingdi District",
    description: "Narsingdi is a major textile hub, known for its modern textile industries while maintaining traditional weaving practices and cultural heritage.",
    traditions: [
      {
        name: "Textile Crafting",
        description: "Blend of traditional and modern textile manufacturing techniques."
      },
      {
        name: "Pottery Making",
        description: "Traditional pottery making using local clay and techniques."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating textile heritage and crafts."
      }
    ],
    products: [
      {
        name: "Cotton Fabrics",
        image: "cotton-textiles.jpg",
        description: "High-quality cotton textiles from local mills.",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Traditional Pottery",
        image: "pottery-2.jpg",
        description: "Handcrafted pottery items for daily use and decoration.",
        rating: 4.4,
        discount: 20,
        priceRange: { min: 100, max: 1000 }
      },
      {
        name: "Handloom Products",
        image: "handloom-2.jpg",
        description: "Traditional handwoven textiles and garments.",
        rating: 4.6,
        discount: 12,
        priceRange: { min: 500, max: 3000 }
      }
    ]
  },
  madaripur: {
    title: "Madaripur District",
    description: "Madaripur is characterized by its agricultural abundance, traditional boat-making industry, and unique cultural practices influenced by river life.",
    traditions: [
      {
        name: "Boat Building",
        description: "Traditional wooden boat construction techniques and designs."
      },
      {
        name: "Folk Theater",
        description: "Local theatrical traditions depicting historical and social stories."
      },
      {
        name: "River Festivals",
        description: "Celebrations connected to river culture and fishing traditions."
      }
    ],
    products: [
      {
        name: "Wooden Crafts",
        image: "wooden-crafts.jpg",
        description: "Traditional wooden items and boat models.",
        rating: 4.5,
        discount: 15,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "agro-products.jpg",
        description: "Fresh local produce and processed foods.",
        rating: 4.7,
        discount: 10,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "Fishing Equipment",
        image: "fishing-tools.jpg",
        description: "Traditional fishing tools and equipment.",
        rating: 4.3,
        discount: 20,
        priceRange: { min: 200, max: 1500 }
      }
    ]
  },
  manikganj: {
    title: "Manikganj District",
    description: "Manikganj is notable for its agricultural heritage, traditional crafts, and the unique blend of rural and urban cultural practices.",
    traditions: [
      {
        name: "Handloom Weaving",
        description: "Traditional weaving techniques producing distinctive textiles."
      },
      {
        name: "Agricultural Rituals",
        description: "Traditional farming practices and associated ceremonies."
      },
      {
        name: "Folk Music",
        description: "Local musical traditions and performances."
      }
    ],
    products: [
      {
        name: "Handloom Fabrics",
        image: "handloom-3.jpg",
        description: "Traditional handwoven textiles with local patterns.",
        rating: 4.6,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Jute Products",
        image: "jute-products.jpg",
        description: "Eco-friendly items made from local jute.",
        rating: 4.4,
        discount: 20,
        priceRange: { min: 200, max: 1500 }
      },
      {
        name: "Agricultural Goods",
        image: "agri-goods.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  munshiganj: {
    title: "Munshiganj District",
    description: "Munshiganj is renowned for its historical significance, traditional fishing communities, and unique cultural practices shaped by its riverine geography.",
    traditions: [
      {
        name: "Fishing Culture",
        description: "Traditional fishing methods and associated customs."
      },
      {
        name: "Historical Crafts",
        description: "Ancient craft traditions preserved through generations."
      },
      {
        name: "River Ceremonies",
        description: "Traditional ceremonies and rituals related to river life."
      }
    ],
    products: [
      {
        name: "Fresh Fish",
        image: "fresh-fish.jpg",
        description: "Various fish species from local rivers.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Traditional Crafts",
        image: "trad-crafts.jpg",
        description: "Handmade items reflecting local heritage.",
        rating: 4.5,
        discount: 15,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "agri-products.jpg",
        description: "Local vegetables and fruits.",
        rating: 4.7,
        discount: 12,
        priceRange: { min: 100, max: 500 }
      }
    ]
  }
};

// Add similar data structures for other districts:
// rajbari, gopalganj, faridpur, shariatpur, tangail, narsingdi, madaripur, manikganj, munshiganj 