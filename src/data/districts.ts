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
  },
  // Chittagong Districts
  chittagong: {
    title: "Chittagong District",
    description: "Chittagong is a historic port city known for its rich maritime heritage, diverse culture, and significant role in Bangladesh's trade and commerce.",
    traditions: [
      {
        name: "Bali Khela",
        description: "Traditional wrestling competition held annually, showcasing strength and community bonding."
      },
      {
        name: "Mezban",
        description: "A traditional community feast where hundreds gather to share a meal, symbolizing unity and generosity."
      },
      {
        name: "Semai Festival",
        description: "Celebration featuring vermicelli desserts during Eid, with unique regional variations."
      }
    ],
    products: [
      {
        name: "Shital Pati",
        image: "shital-pati.jpg",
        description: "Intricate mats woven from murta plants, used for sitting and sleeping.",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 500, max: 2000 }
      },
      {
        name: "Bamboo Crafts",
        image: "bamboo-crafts.jpg",
        description: "Various household items and decorative pieces made from locally sourced bamboo.",
        rating: 4.5,
        discount: 10,
        priceRange: { min: 300, max: 1500 }
      },
      {
        name: "Dried Fish",
        image: "dried-fish.jpg",
        description: "Various types of dried fish, a specialty of the coastal region.",
        rating: 4.7,
        discount: 5,
        priceRange: { min: 200, max: 1000 }
      }
    ]
  },
  coxsbazar: {
    title: "Cox's Bazar District",
    description: "Cox's Bazar is famous for having the world's longest natural sea beach and is a major tourist destination in Bangladesh.",
    traditions: [
      {
        name: "Beach Culture",
        description: "Unique coastal traditions and festivals celebrated by the local communities."
      },
      {
        name: "Fishing Heritage",
        description: "Traditional fishing methods and maritime practices passed down through generations."
      },
      {
        name: "Rakhine Culture",
        description: "Rich cultural heritage of the Rakhine community, including traditional festivals and customs."
      }
    ],
    products: [
      {
        name: "Sea Fish",
        image: "sea-fish.jpg",
        description: "Fresh seafood and dried fish products from the Bay of Bengal.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 300, max: 1500 }
      },
      {
        name: "Pearl Jewelry",
        image: "pearl-jewelry.jpg",
        description: "Handcrafted jewelry made from natural pearls.",
        rating: 4.6,
        discount: 15,
        priceRange: { min: 1000, max: 5000 }
      },
      {
        name: "Coconut Products",
        image: "coconut-products.jpg",
        description: "Various products made from coconuts, including oil and sweets.",
        rating: 4.5,
        discount: 12,
        priceRange: { min: 200, max: 1000 }
      }
    ]
  },
  comilla: {
    title: "Comilla District",
    description: "Comilla is known for its rich cultural heritage, traditional crafts, and historical significance.",
    traditions: [
      {
        name: "Rasmalai Making",
        description: "Traditional sweet-making techniques, especially famous for Rasmalai."
      },
      {
        name: "Handloom Weaving",
        description: "Traditional weaving practices producing distinctive textiles."
      },
      {
        name: "Folk Music",
        description: "Rich tradition of folk songs and cultural performances."
      }
    ],
    products: [
      {
        name: "Rasmalai",
        image: "rasmalai.jpg",
        description: "Famous sweet dish made from cottage cheese and milk.",
        rating: 4.9,
        discount: 5,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "Handloom Textiles",
        image: "handloom-textiles.jpg",
        description: "Traditional handwoven fabrics with unique patterns.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Traditional Crafts",
        image: "traditional-crafts.jpg",
        description: "Handcrafted items made using traditional techniques.",
        rating: 4.5,
        discount: 10,
        priceRange: { min: 200, max: 1500 }
      }
    ]
  },
  chandpur: {
    title: "Chandpur District",
    description: "Chandpur is renowned for its riverine culture, traditional fishing communities, and unique crafts that reflect life along the Meghna River.",
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
        image: "dried-fish-2.jpg",
        description: "Traditionally processed dried fish products.",
        rating: 4.6,
        discount: 12,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Wooden Boats",
        image: "wooden-boats-2.jpg",
        description: "Miniature traditional wooden boats and decorative items.",
        rating: 4.4,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "River Fish",
        image: "river-fish-3.jpg",
        description: "Fresh fish from local rivers and water bodies.",
        rating: 4.7,
        discount: 10,
        priceRange: { min: 150, max: 800 }
      }
    ]
  },
  feni: {
    title: "Feni District",
    description: "Feni is known for its agricultural heritage, traditional crafts, and unique cultural practices.",
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
        image: "handloom-4.jpg",
        description: "Traditional handwoven textiles with local patterns.",
        rating: 4.6,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Jute Products",
        image: "jute-products-2.jpg",
        description: "Eco-friendly items made from local jute.",
        rating: 4.4,
        discount: 20,
        priceRange: { min: 200, max: 1500 }
      },
      {
        name: "Agricultural Goods",
        image: "agri-goods-2.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  lakshmipur: {
    title: "Lakshmipur District",
    description: "Lakshmipur is characterized by its coastal culture, traditional crafts, and rich agricultural heritage.",
    traditions: [
      {
        name: "Coastal Culture",
        description: "Unique traditions and festivals of the coastal communities."
      },
      {
        name: "Fishing Heritage",
        description: "Traditional fishing methods and maritime practices."
      },
      {
        name: "Agricultural Festivals",
        description: "Celebrations marking different phases of the agricultural calendar."
      }
    ],
    products: [
      {
        name: "Sea Fish",
        image: "sea-fish-2.jpg",
        description: "Fresh seafood and dried fish products.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 300, max: 1500 }
      },
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-2.jpg",
        description: "Handcrafted items reflecting local heritage.",
        rating: 4.5,
        discount: 15,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "agri-products-2.jpg",
        description: "Local vegetables and fruits.",
        rating: 4.7,
        discount: 12,
        priceRange: { min: 100, max: 500 }
      }
    ]
  },
  brahmanbaria: {
    title: "Brahmanbaria District",
    description: "Brahmanbaria is known for its rich cultural heritage, traditional music, and historical significance.",
    traditions: [
      {
        name: "Folk Music",
        description: "Traditional folk music and cultural performances."
      },
      {
        name: "Handloom Weaving",
        description: "Traditional weaving techniques producing distinctive textiles."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating traditional arts and crafts."
      }
    ],
    products: [
      {
        name: "Handloom Fabrics",
        image: "handloom-5.jpg",
        description: "Traditional handwoven textiles with unique patterns.",
        rating: 4.6,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-3.jpg",
        description: "Handcrafted items reflecting local heritage.",
        rating: 4.5,
        discount: 20,
        priceRange: { min: 200, max: 1500 }
      },
      {
        name: "Local Products",
        image: "local-products.jpg",
        description: "Traditional food and craft products.",
        rating: 4.7,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  noakhali: {
    title: "Noakhali District",
    description: "Noakhali is characterized by its coastal culture, traditional crafts, and rich agricultural heritage.",
    traditions: [
      {
        name: "Coastal Culture",
        description: "Unique traditions and festivals of the coastal communities."
      },
      {
        name: "Fishing Heritage",
        description: "Traditional fishing methods and maritime practices."
      },
      {
        name: "Agricultural Festivals",
        description: "Celebrations marking different phases of the agricultural calendar."
      }
    ],
    products: [
      {
        name: "Sea Fish",
        image: "sea-fish-3.jpg",
        description: "Fresh seafood and dried fish products.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 300, max: 1500 }
      },
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-4.jpg",
        description: "Handcrafted items reflecting local heritage.",
        rating: 4.5,
        discount: 15,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "agri-products-3.jpg",
        description: "Local vegetables and fruits.",
        rating: 4.7,
        discount: 12,
        priceRange: { min: 100, max: 500 }
      }
    ]
  },
  rangamati: {
    title: "Rangamati District",
    description: "Rangamati is known for its indigenous culture, traditional crafts, and natural beauty of the Chittagong Hill Tracts.",
    traditions: [
      {
        name: "Indigenous Culture",
        description: "Rich cultural heritage of indigenous communities."
      },
      {
        name: "Traditional Crafts",
        description: "Handcrafted items made using traditional techniques."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating indigenous traditions."
      }
    ],
    products: [
      {
        name: "Handicrafts",
        image: "handicrafts-2.jpg",
        description: "Traditional handicrafts made by indigenous artisans.",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Traditional Textiles",
        image: "textiles-2.jpg",
        description: "Handwoven textiles with indigenous patterns.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Local Products",
        image: "local-products-2.jpg",
        description: "Traditional food and craft products.",
        rating: 4.7,
        discount: 10,
        priceRange: { min: 200, max: 1000 }
      }
    ]
  },
  bandarban: {
    title: "Bandarban District",
    description: "Bandarban is famous for its indigenous culture, traditional crafts, and natural beauty of the Chittagong Hill Tracts.",
    traditions: [
      {
        name: "Indigenous Culture",
        description: "Rich cultural heritage of indigenous communities."
      },
      {
        name: "Traditional Crafts",
        description: "Handcrafted items made using traditional techniques."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating indigenous traditions."
      }
    ],
    products: [
      {
        name: "Handicrafts",
        image: "handicrafts-3.jpg",
        description: "Traditional handicrafts made by indigenous artisans.",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Traditional Textiles",
        image: "textiles-3.jpg",
        description: "Handwoven textiles with indigenous patterns.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Local Products",
        image: "local-products-3.jpg",
        description: "Traditional food and craft products.",
        rating: 4.7,
        discount: 10,
        priceRange: { min: 200, max: 1000 }
      }
    ]
  },
  khagrachari: {
    title: "Khagrachari District",
    description: "Khagrachari is known for its indigenous culture, traditional crafts, and natural beauty of the Chittagong Hill Tracts.",
    traditions: [
      {
        name: "Indigenous Culture",
        description: "Rich cultural heritage of indigenous communities."
      },
      {
        name: "Traditional Crafts",
        description: "Handcrafted items made using traditional techniques."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating indigenous traditions."
      }
    ],
    products: [
      {
        name: "Handicrafts",
        image: "handicrafts-4.jpg",
        description: "Traditional handicrafts made by indigenous artisans.",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Traditional Textiles",
        image: "textiles-4.jpg",
        description: "Handwoven textiles with indigenous patterns.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Local Products",
        image: "local-products-4.jpg",
        description: "Traditional food and craft products.",
        rating: 4.7,
        discount: 10,
        priceRange: { min: 200, max: 1000 }
      }
    ]
  },
  // Sylhet Districts
  sylhet: {
    title: "Sylhet District",
    description: "Sylhet is known for its rich cultural heritage, traditional crafts, and historical significance. The district is famous for its tea gardens, traditional sweets, and unique handicrafts.",
    traditions: [
      {
        name: "Tea Culture",
        description: "Traditional tea cultivation and processing techniques passed down through generations."
      },
      {
        name: "Folk Music",
        description: "Rich tradition of folk songs and cultural performances unique to the region."
      },
      {
        name: "Traditional Crafts",
        description: "Handcrafted items made using traditional techniques and local materials."
      }
    ],
    products: [
      {
        name: "Traditional Sweets",
        image: "sylhet-sweets.jpg",
        description: "Famous traditional sweets including Zarda, Bakarkhani, and various pithas.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "Tea Products",
        image: "tea-products.jpg",
        description: "High-quality tea and tea-based products from local gardens.",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Handicrafts",
        image: "handicrafts-5.jpg",
        description: "Traditional handicrafts made by local artisans.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      }
    ]
  },
  moulvibazar: {
    title: "Moulvibazar District",
    description: "Moulvibazar is renowned for its tea gardens, traditional crafts, and rich cultural heritage. The district is home to various indigenous communities and their unique traditions.",
    traditions: [
      {
        name: "Tea Garden Culture",
        description: "Traditional practices and festivals related to tea cultivation."
      },
      {
        name: "Indigenous Crafts",
        description: "Traditional crafts and weaving techniques of local communities."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating traditional arts and crafts."
      }
    ],
    products: [
      {
        name: "Tea Products",
        image: "tea-products-2.jpg",
        description: "Premium tea and tea-based products from local gardens.",
        rating: 4.9,
        discount: 15,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Traditional Textiles",
        image: "textiles-5.jpg",
        description: "Handwoven textiles with unique local patterns.",
        rating: 4.7,
        discount: 20,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Local Products",
        image: "local-products-5.jpg",
        description: "Traditional food and craft products.",
        rating: 4.6,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  sunamganj: {
    title: "Sunamganj District",
    description: "Sunamganj is characterized by its wetlands, traditional crafts, and rich agricultural heritage. The district is known for its unique water-based culture and traditional products.",
    traditions: [
      {
        name: "Wetland Culture",
        description: "Traditional practices related to wetland resources and fishing."
      },
      {
        name: "Handloom Weaving",
        description: "Traditional weaving techniques producing distinctive textiles."
      },
      {
        name: "Agricultural Rituals",
        description: "Traditional farming practices and associated ceremonies."
      }
    ],
    products: [
      {
        name: "Handloom Fabrics",
        image: "handloom-6.jpg",
        description: "Traditional handwoven textiles with local patterns.",
        rating: 4.6,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "Wetland Products",
        image: "wetland-products.jpg",
        description: "Products made from wetland resources.",
        rating: 4.5,
        discount: 20,
        priceRange: { min: 200, max: 1500 }
      },
      {
        name: "Agricultural Goods",
        image: "agri-goods-3.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  habiganj: {
    title: "Habiganj District",
    description: "Habiganj is known for its rich cultural heritage, traditional crafts, and agricultural abundance. The district is famous for its traditional sweets and unique handicrafts.",
    traditions: [
      {
        name: "Traditional Crafts",
        description: "Handcrafted items made using traditional techniques."
      },
      {
        name: "Folk Music",
        description: "Rich tradition of folk songs and cultural performances."
      },
      {
        name: "Agricultural Festivals",
        description: "Celebrations marking different phases of the agricultural calendar."
      }
    ],
    products: [
      {
        name: "Traditional Sweets",
        image: "sweets-2.jpg",
        description: "Famous traditional sweets and confectioneries.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "Handicrafts",
        image: "handicrafts-6.jpg",
        description: "Traditional handicrafts made by local artisans.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "agri-products-4.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  // Rajshahi Districts
  rajshahi: {
    title: "Rajshahi District",
    description: "Rajshahi is known for its rich cultural heritage, traditional silk industry, and historical significance. The district is famous for its silk production, mango cultivation, and traditional crafts.",
    traditions: [
      {
        name: "Silk Weaving",
        description: "Traditional silk weaving techniques producing high-quality silk fabrics."
      },
      {
        name: "Mango Culture",
        description: "Traditional mango cultivation and processing methods."
      },
      {
        name: "Folk Music",
        description: "Rich tradition of folk songs and cultural performances."
      }
    ],
    products: [
      {
        name: "Silk Sarees",
        image: "silk-saree.jpg",
        description: "Exquisitely woven silk sarees with traditional patterns.",
        rating: 4.9,
        discount: 15,
        priceRange: { min: 2000, max: 8000 }
      },
      {
        name: "Mango Products",
        image: "mango-products.jpg",
        description: "Various products made from locally grown mangoes.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-5.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      }
    ]
  },
  bogra: {
    title: "Bogra District",
    description: "Bogra is renowned for its historical significance, traditional crafts, and agricultural heritage. The district is famous for its historical sites and traditional food products.",
    traditions: [
      {
        name: "Historical Crafts",
        description: "Traditional crafts inspired by ancient archaeological sites."
      },
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and agricultural rituals."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating traditional arts and crafts."
      }
    ],
    products: [
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-6.jpg",
        description: "Handcrafted items reflecting historical heritage.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 400, max: 2500 }
      },
      {
        name: "Agricultural Products",
        image: "agri-products-5.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      },
      {
        name: "Historical Replicas",
        image: "historical-replicas.jpg",
        description: "Replicas of historical artifacts and decorative items.",
        rating: 4.5,
        discount: 20,
        priceRange: { min: 500, max: 3000 }
      }
    ]
  },
  pabna: {
    title: "Pabna District",
    description: "Pabna is known for its agricultural prosperity, traditional handloom industry, and rich cultural heritage. The district is famous for its handloom products and traditional sweets.",
    traditions: [
      {
        name: "Agricultural Rituals",
        description: "Traditional farming practices and associated ceremonies."
      },
      {
        name: "Handloom Weaving",
        description: "Traditional weaving techniques producing distinctive textiles."
      },
      {
        name: "Folk Music",
        description: "Rich tradition of folk songs and cultural performances."
      }
    ],
    products: [
      {
        name: "Handloom Fabrics",
        image: "handloom-7.jpg",
        description: "Traditional handwoven textiles with local patterns.",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 600, max: 3500 }
      },
      {
        name: "Agricultural Goods",
        image: "agri-goods-4.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.7,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      },
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-7.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      }
    ]
  },
  sirajganj: {
    title: "Sirajganj District",
    description: "Sirajganj is characterized by its handloom culture, traditional crafts, and river-based heritage. The district is famous for its handloom products and traditional fishing practices.",
    traditions: [
      {
        name: "Handloom Culture",
        description: "Traditional weaving practices producing distinctive textiles."
      },
      {
        name: "River Culture",
        description: "Traditional practices related to river life and fishing."
      },
      {
        name: "Folk Theater",
        description: "Local theatrical traditions depicting historical and social stories."
      }
    ],
    products: [
      {
        name: "Handloom Textiles",
        image: "handloom-8.jpg",
        description: "Traditional handwoven textiles with unique patterns.",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 500, max: 3000 }
      },
      {
        name: "River Fish",
        image: "river-fish-4.jpg",
        description: "Fresh fish from local rivers and water bodies.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-8.jpg",
        description: "Handcrafted items reflecting local heritage.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      }
    ]
  },
  natore: {
    title: "Natore District",
    description: "Natore is known for its cultural heritage, traditional crafts, and historical significance. The district is famous for its traditional sweets and handicrafts.",
    traditions: [
      {
        name: "Cultural Heritage",
        description: "Rich cultural traditions and historical practices."
      },
      {
        name: "Handicrafts",
        description: "Traditional craft-making techniques passed through generations."
      },
      {
        name: "Folk Music",
        description: "Local musical traditions and performances."
      }
    ],
    products: [
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-9.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 400, max: 2500 }
      },
      {
        name: "Cultural Items",
        image: "cultural-items.jpg",
        description: "Items reflecting local cultural heritage.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Local Products",
        image: "local-products-6.jpg",
        description: "Traditional food and craft products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  chapainawabganj: {
    title: "Chapainawabganj District",
    description: "Chapainawabganj is renowned for its mango cultivation, traditional crafts, and agricultural heritage. The district is famous for its mango products and traditional sweets.",
    traditions: [
      {
        name: "Mango Culture",
        description: "Traditional mango cultivation and processing methods."
      },
      {
        name: "Agricultural Rituals",
        description: "Traditional farming practices and associated ceremonies."
      },
      {
        name: "Folk Music",
        description: "Rich tradition of folk songs and cultural performances."
      }
    ],
    products: [
      {
        name: "Mango Products",
        image: "mango-products-2.jpg",
        description: "Various products made from locally grown mangoes.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Agricultural Goods",
        image: "agri-goods-5.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 100, max: 800 }
      },
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-10.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      }
    ]
  },
  joypurhat: {
    title: "Joypurhat District",
    description: "Joypurhat is known for its agricultural heritage, traditional crafts, and cultural significance. The district is famous for its traditional crafts and agricultural products.",
    traditions: [
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and agricultural rituals."
      },
      {
        name: "Handicrafts",
        description: "Traditional craft-making techniques passed through generations."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating traditional arts and crafts."
      }
    ],
    products: [
      {
        name: "Agricultural Products",
        image: "agri-products-6.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      },
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-11.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Local Products",
        image: "local-products-7.jpg",
        description: "Traditional food and craft products.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  naogaon: {
    title: "Naogaon District",
    description: "Naogaon is characterized by its cultural heritage, traditional crafts, and agricultural abundance. The district is famous for its traditional crafts and agricultural products.",
    traditions: [
      {
        name: "Cultural Heritage",
        description: "Rich cultural traditions and historical practices."
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
        name: "Traditional Crafts",
        image: "traditional-crafts-12.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 400, max: 2500 }
      },
      {
        name: "Agricultural Goods",
        image: "agri-goods-6.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      },
      {
        name: "Local Products",
        image: "local-products-8.jpg",
        description: "Traditional food and craft products.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  // Khulna Districts
  khulna: {
    title: "Khulna District",
    description: "Khulna is known for its rich cultural heritage, traditional crafts, and historical significance. The district is famous for its traditional sweets, handicrafts, and river-based culture.",
    traditions: [
      {
        name: "Sweet Making",
        description: "Traditional sweet-making techniques producing famous local delicacies."
      },
      {
        name: "River Culture",
        description: "Traditional practices related to river life and fishing communities."
      },
      {
        name: "Folk Music",
        description: "Rich tradition of folk songs and cultural performances."
      }
    ],
    products: [
      {
        name: "Traditional Sweets",
        image: "khulna-sweets.jpg",
        description: "Famous traditional sweets including various types of pithas and confectioneries.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "River Fish",
        image: "river-fish-5.jpg",
        description: "Fresh fish from local rivers and water bodies.",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-13.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      }
    ]
  },
  bagerhat: {
    title: "Bagerhat District",
    description: "Bagerhat is renowned for its historical significance, traditional crafts, and rich cultural heritage. The district is famous for its historical sites and traditional sweets.",
    traditions: [
      {
        name: "Historical Heritage",
        description: "Traditional practices preserving historical and cultural heritage."
      },
      {
        name: "Sweet Making",
        description: "Traditional sweet-making techniques producing local delicacies."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating traditional arts and crafts."
      }
    ],
    products: [
      {
        name: "Traditional Sweets",
        image: "bagerhat-sweets.jpg",
        description: "Famous traditional sweets and confectioneries.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "Historical Crafts",
        image: "historical-crafts.jpg",
        description: "Handcrafted items reflecting historical heritage.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 400, max: 2500 }
      },
      {
        name: "Local Products",
        image: "local-products-9.jpg",
        description: "Traditional food and craft products.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  satkhira: {
    title: "Satkhira District",
    description: "Satkhira is characterized by its coastal culture, traditional crafts, and rich agricultural heritage. The district is famous for its traditional crafts and agricultural products.",
    traditions: [
      {
        name: "Coastal Culture",
        description: "Unique traditions and festivals of the coastal communities."
      },
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and agricultural rituals."
      },
      {
        name: "Folk Music",
        description: "Local musical traditions and performances."
      }
    ],
    products: [
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-14.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 400, max: 2500 }
      },
      {
        name: "Agricultural Products",
        image: "agri-products-7.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      },
      {
        name: "Local Products",
        image: "local-products-10.jpg",
        description: "Traditional food and craft products.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  jessore: {
    title: "Jessore District",
    description: "Jessore is known for its rich cultural heritage, traditional crafts, and agricultural abundance. The district is famous for its traditional sweets and handicrafts.",
    traditions: [
      {
        name: "Cultural Heritage",
        description: "Rich cultural traditions and historical practices."
      },
      {
        name: "Sweet Making",
        description: "Traditional sweet-making techniques producing local delicacies."
      },
      {
        name: "Folk Music",
        description: "Local musical traditions and performances."
      }
    ],
    products: [
      {
        name: "Traditional Sweets",
        image: "jessore-sweets.jpg",
        description: "Famous traditional sweets and confectioneries.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "Handicrafts",
        image: "handicrafts-7.jpg",
        description: "Traditional handicrafts made by local artisans.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Local Products",
        image: "local-products-11.jpg",
        description: "Traditional food and craft products.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  jhenaidah: {
    title: "Jhenaidah District",
    description: "Jhenaidah is renowned for its traditional crafts, agricultural heritage, and cultural significance. The district is famous for its traditional crafts and agricultural products.",
    traditions: [
      {
        name: "Traditional Crafts",
        description: "Handcrafted items made using traditional techniques."
      },
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and agricultural rituals."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating traditional arts and crafts."
      }
    ],
    products: [
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-15.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 400, max: 2500 }
      },
      {
        name: "Agricultural Products",
        image: "agri-products-8.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      },
      {
        name: "Local Products",
        image: "local-products-12.jpg",
        description: "Traditional food and craft products.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  kushtia: {
    title: "Kushtia District",
    description: "Kushtia is known for its cultural heritage, traditional crafts, and historical significance. The district is famous for its traditional sweets and handicrafts.",
    traditions: [
      {
        name: "Cultural Heritage",
        description: "Rich cultural traditions and historical practices."
      },
      {
        name: "Sweet Making",
        description: "Traditional sweet-making techniques producing local delicacies."
      },
      {
        name: "Folk Music",
        description: "Local musical traditions and performances."
      }
    ],
    products: [
      {
        name: "Traditional Sweets",
        image: "kushtia-sweets.jpg",
        description: "Famous traditional sweets and confectioneries.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "Handicrafts",
        image: "handicrafts-8.jpg",
        description: "Traditional handicrafts made by local artisans.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Local Products",
        image: "local-products-13.jpg",
        description: "Traditional food and craft products.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  magura: {
    title: "Magura District",
    description: "Magura is characterized by its agricultural heritage, traditional crafts, and cultural significance. The district is famous for its traditional crafts and agricultural products.",
    traditions: [
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and agricultural rituals."
      },
      {
        name: "Traditional Crafts",
        description: "Handcrafted items made using traditional techniques."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating traditional arts and crafts."
      }
    ],
    products: [
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-16.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 400, max: 2500 }
      },
      {
        name: "Agricultural Products",
        image: "agri-products-9.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      },
      {
        name: "Local Products",
        image: "local-products-14.jpg",
        description: "Traditional food and craft products.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  meherpur: {
    title: "Meherpur District",
    description: "Meherpur is known for its cultural heritage, traditional crafts, and historical significance. The district is famous for its traditional sweets and handicrafts.",
    traditions: [
      {
        name: "Cultural Heritage",
        description: "Rich cultural traditions and historical practices."
      },
      {
        name: "Sweet Making",
        description: "Traditional sweet-making techniques producing local delicacies."
      },
      {
        name: "Folk Music",
        description: "Local musical traditions and performances."
      }
    ],
    products: [
      {
        name: "Traditional Sweets",
        image: "meherpur-sweets.jpg",
        description: "Famous traditional sweets and confectioneries.",
        rating: 4.9,
        discount: 10,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "Handicrafts",
        image: "handicrafts-9.jpg",
        description: "Traditional handicrafts made by local artisans.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 300, max: 2000 }
      },
      {
        name: "Local Products",
        image: "local-products-15.jpg",
        description: "Traditional food and craft products.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  narail: {
    title: "Narail District",
    description: "Narail is renowned for its traditional crafts, agricultural heritage, and cultural significance. The district is famous for its traditional crafts and agricultural products.",
    traditions: [
      {
        name: "Traditional Crafts",
        description: "Handcrafted items made using traditional techniques."
      },
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and agricultural rituals."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating traditional arts and crafts."
      }
    ],
    products: [
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-17.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 400, max: 2500 }
      },
      {
        name: "Agricultural Products",
        image: "agri-products-10.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      },
      {
        name: "Local Products",
        image: "local-products-16.jpg",
        description: "Traditional food and craft products.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  chuadanga: {
    title: "Chuadanga District",
    description: "Chuadanga is known for its agricultural heritage, traditional crafts, and cultural significance. The district is famous for its traditional crafts and agricultural products.",
    traditions: [
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and agricultural rituals."
      },
      {
        name: "Traditional Crafts",
        description: "Handcrafted items made using traditional techniques."
      },
      {
        name: "Cultural Festivals",
        description: "Local festivals celebrating traditional arts and crafts."
      }
    ],
    products: [
      {
        name: "Traditional Crafts",
        image: "traditional-crafts-18.jpg",
        description: "Handcrafted items made by local artisans.",
        rating: 4.7,
        discount: 15,
        priceRange: { min: 400, max: 2500 }
      },
      {
        name: "Agricultural Products",
        image: "agri-products-11.jpg",
        description: "Local produce and traditional food products.",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 100, max: 800 }
      },
      {
        name: "Local Products",
        image: "local-products-17.jpg",
        description: "Traditional food and craft products.",
        rating: 4.6,
        discount: 20,
        priceRange: { min: 100, max: 800 }
      }
    ]
  },
  // Barisal Districts
  barisal: {
    title: "Barisal District",
    description: "Barisal is known for its rich river culture, traditional crafts, and agricultural heritage. The district is famous for its betel leaf cultivation, traditional boats, and river-based lifestyle.",
    traditions: [
      {
        name: "River Culture",
        description: "Traditional boat making and river-based lifestyle that has been preserved for generations."
      },
      {
        name: "Betel Leaf Cultivation",
        description: "Ancient techniques of betel leaf farming passed down through generations."
      },
      {
        name: "Folk Music",
        description: "Rich tradition of folk songs and music unique to the region."
      }
    ],
    products: [
      {
        name: "Traditional Boats",
        image: "barisal-boats.jpg",
        description: "Handcrafted traditional boats made by local artisans",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 15000, max: 25000 }
      },
      {
        name: "Betel Leaf Products",
        image: "barisal-betel.jpg",
        description: "Fresh and processed betel leaf products",
        rating: 4.5,
        discount: 5,
        priceRange: { min: 100, max: 500 }
      },
      {
        name: "River Fish Products",
        image: "barisal-fish.jpg",
        description: "Traditional dried and processed fish products",
        rating: 4.7,
        discount: 8,
        priceRange: { min: 200, max: 1000 }
      }
    ]
  },
  pirojpur: {
    title: "Pirojpur District",
    description: "Pirojpur is renowned for its agricultural products, traditional crafts, and cultural heritage.",
    traditions: [
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and crop cultivation methods."
      },
      {
        name: "Handicrafts",
        description: "Local handicraft traditions including bamboo and cane work."
      },
      {
        name: "Cultural Festivals",
        description: "Celebration of local festivals and cultural events."
      }
    ],
    products: [
      {
        name: "Agricultural Products",
        image: "pirojpur-agri.jpg",
        description: "Fresh local produce and traditional crops",
        rating: 4.6,
        discount: 7,
        priceRange: { min: 50, max: 500 }
      },
      {
        name: "Bamboo Crafts",
        image: "pirojpur-bamboo.jpg",
        description: "Traditional bamboo products and crafts",
        rating: 4.4,
        discount: 12,
        priceRange: { min: 200, max: 2000 }
      },
      {
        name: "Traditional Items",
        image: "pirojpur-crafts.jpg",
        description: "Local cultural items and handicrafts",
        rating: 4.3,
        discount: 15,
        priceRange: { min: 100, max: 1500 }
      }
    ]
  },
  bhola: {
    title: "Bhola District",
    description: "Bhola is famous for its coastal culture, fishing traditions, and unique crafts.",
    traditions: [
      {
        name: "Fishing Culture",
        description: "Traditional fishing methods and boat building techniques."
      },
      {
        name: "Coastal Crafts",
        description: "Unique crafts influenced by coastal lifestyle."
      },
      {
        name: "Maritime Heritage",
        description: "Preservation of maritime traditions and practices."
      }
    ],
    products: [
      {
        name: "Seafood Products",
        image: "bhola-seafood.jpg",
        description: "Fresh and processed seafood items",
        rating: 4.7,
        discount: 8,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Coastal Crafts",
        image: "bhola-crafts.jpg",
        description: "Traditional crafts made from local materials",
        rating: 4.5,
        discount: 10,
        priceRange: { min: 150, max: 2000 }
      },
      {
        name: "Maritime Products",
        image: "bhola-maritime.jpg",
        description: "Products related to maritime culture",
        rating: 4.4,
        discount: 12,
        priceRange: { min: 300, max: 3000 }
      }
    ]
  },
  jhalokati: {
    title: "Jhalokati District",
    description: "Jhalokati is known for its traditional crafts, agricultural products, and cultural heritage.",
    traditions: [
      {
        name: "Fishing Culture",
        description: "Traditional fishing methods and boat building techniques."
      },
      {
        name: "Coastal Crafts",
        description: "Unique crafts influenced by coastal lifestyle."
      },
      {
        name: "Maritime Heritage",
        description: "Preservation of maritime traditions and practices."
      }
    ],
    products: [
      {
        name: "Seafood Products",
        image: "bhola-seafood.jpg",
        description: "Fresh and processed seafood items",
        rating: 4.7,
        discount: 8,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Coastal Crafts",
        image: "bhola-crafts.jpg",
        description: "Traditional crafts made from local materials",
        rating: 4.5,
        discount: 10,
        priceRange: { min: 150, max: 2000 }
      },
      {
        name: "Maritime Products",
        image: "bhola-maritime.jpg",
        description: "Products related to maritime culture",
        rating: 4.4,
        discount: 12,
        priceRange: { min: 300, max: 3000 }
      }
    ]
  },
  patuakhali: {
    title: "Patuakhali District",
    description: "Patuakhali is known for its traditional crafts, agricultural products, and cultural heritage.",
    traditions: [
      {
        name: "Fishing Culture",
        description: "Traditional fishing methods and boat building techniques."
      },
      {
        name: "Coastal Crafts",
        description: "Unique crafts influenced by coastal lifestyle."
      },
      {
        name: "Maritime Heritage",
        description: "Preservation of maritime traditions and practices."
      }
    ],
    products: [
      {
        name: "Seafood Products",
        image: "bhola-seafood.jpg",
        description: "Fresh and processed seafood items",
        rating: 4.7,
        discount: 8,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Coastal Crafts",
        image: "bhola-crafts.jpg",
        description: "Traditional crafts made from local materials",
        rating: 4.5,
        discount: 10,
        priceRange: { min: 150, max: 2000 }
      },
      {
        name: "Maritime Products",
        image: "bhola-maritime.jpg",
        description: "Products related to maritime culture",
        rating: 4.4,
        discount: 12,
        priceRange: { min: 300, max: 3000 }
      }
    ]
  },
  barguna: {
    title: "Barguna District",
    description: "Barguna is known for its traditional crafts, agricultural products, and cultural heritage.",
    traditions: [
      {
        name: "Fishing Culture",
        description: "Traditional fishing methods and boat building techniques."
      },
      {
        name: "Coastal Crafts",
        description: "Unique crafts influenced by coastal lifestyle."
      },
      {
        name: "Maritime Heritage",
        description: "Preservation of maritime traditions and practices."
      }
    ],
    products: [
      {
        name: "Seafood Products",
        image: "bhola-seafood.jpg",
        description: "Fresh and processed seafood items",
        rating: 4.7,
        discount: 8,
        priceRange: { min: 200, max: 1000 }
      },
      {
        name: "Coastal Crafts",
        image: "bhola-crafts.jpg",
        description: "Traditional crafts made from local materials",
        rating: 4.5,
        discount: 10,
        priceRange: { min: 150, max: 2000 }
      },
      {
        name: "Traditional Crafts",
        image: "bhola-crafts.jpg",
        description: "Traditional crafts made from local materials",
        rating: 4.4,
        discount: 12,
        priceRange: { min: 300, max: 3000 }
      }
    ]
  },
  
  // Rangpur Districts
  rangpur: {
    title: "Rangpur District",
    description: "Rangpur is known for its rich agricultural heritage, traditional crafts, and cultural diversity.",
    traditions: [
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and tobacco cultivation."
      },
      {
        name: "Handicrafts",
        description: "Local handicraft traditions including pottery and weaving."
      },
      {
        name: "Cultural Festivals",
        description: "Celebration of local festivals and cultural events."
      }
    ],
    products: [
      {
        name: "Agricultural Products",
        image: "rangpur-agri.jpg",
        description: "Local produce and traditional crops",
        rating: 4.8,
        discount: 10,
        priceRange: { min: 50, max: 500 }
      },
      {
        name: "Traditional Crafts",
        image: "rangpur-crafts.jpg",
        description: "Handmade pottery and woven products",
        rating: 4.6,
        discount: 15,
        priceRange: { min: 200, max: 2000 }
      },
      {
        name: "Cultural Items",
        image: "rangpur-culture.jpg",
        description: "Local cultural products and artifacts",
        rating: 4.5,
        discount: 12,
        priceRange: { min: 100, max: 1500 }
      }
    ]
  },
  dinajpur: {
    title: "Dinajpur District",
    description: "Dinajpur is famous for its historical heritage, traditional crafts, and agricultural products.",
    traditions: [
      {
        name: "Historical Heritage",
        description: "Preservation of historical sites and traditions."
      },
      {
        name: "Traditional Crafts",
        description: "Local craft traditions including pottery and woodwork."
      },
      {
        name: "Agricultural Practices",
        description: "Traditional farming methods and crop cultivation."
      }
    ],
    products: [
      {
        name: "Historical Crafts",
        image: "dinajpur-crafts.jpg",
        description: "Traditional crafts with historical significance",
        rating: 4.7,
        discount: 8,
        priceRange: { min: 200, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "dinajpur-agri.jpg",
        description: "Local produce and traditional crops",
        rating: 4.6,
        discount: 10,
        priceRange: { min: 50, max: 500 }
      },
      {
        name: "Cultural Items",
        image: "dinajpur-culture.jpg",
        description: "Local cultural products and handicrafts",
        rating: 4.5,
        discount: 12,
        priceRange: { min: 100, max: 1500 }
      }
    ]
  },
  kurigram: {
    title: "Kurigram District",
    description: "Kurigram is known for its river culture, traditional crafts, and agricultural heritage.",
    traditions: [
      {
        name: "River Culture",
        description: "Traditional fishing and river-based lifestyle."
      },
      {
        name: "Handicrafts",
        description: "Local craft traditions including bamboo work."
      },
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and methods."
      }
    ],
    products: [
      {
        name: "River Products",
        image: "kurigram-river.jpg",
        description: "Traditional river fish and related items",
        rating: 4.6,
        discount: 8,
        priceRange: { min: 100, max: 1000 }
      },
      {
        name: "Bamboo Crafts",
        image: "kurigram-bamboo.jpg",
        description: "Traditional bamboo products and crafts",
        rating: 4.5,
        discount: 12,
        priceRange: { min: 200, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "kurigram-agri.jpg",
        description: "Local produce and traditional crops",
        rating: 4.4,
        discount: 10,
        priceRange: { min: 50, max: 500 }
      }
    ]
  },
  gaibandha: {
    title: "Gaibandha District",
    description: "Gaibandha is known for its traditional crafts, agricultural products, and cultural heritage.",
    traditions: [
      {
        name: "River Culture",
        description: "Traditional fishing and river-based lifestyle."
      },
      {
        name: "Handicrafts",
        description: "Local craft traditions including bamboo work."
      },
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and methods."
      }
    ],
    products: [
      {
        name: "River Products",
        image: "kurigram-river.jpg",
        description: "Traditional river fish and related items",
        rating: 4.6,
        discount: 8,
        priceRange: { min: 100, max: 1000 }
      },
      {
        name: "Bamboo Crafts",
        image: "kurigram-bamboo.jpg",
        description: "Traditional bamboo products and crafts",
        rating: 4.5,
        discount: 12,
        priceRange: { min: 200, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "kurigram-agri.jpg",
        description: "Local produce and traditional crops",
        rating: 4.4,
        discount: 10,
        priceRange: { min: 50, max: 500 }
      }
    ]
  },
  lalmonirhat: {
    title: "Lalmonirhat District",
    description: "Lalmonirhat is known for its traditional crafts, agricultural products, and cultural heritage.",
    traditions: [
      {
        name: "River Culture",
        description: "Traditional fishing and river-based lifestyle."
      },
      {
        name: "Handicrafts",
        description: "Local craft traditions including bamboo work."
      },
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and methods."
      }
    ],
    products: [
      {
        name: "River Products",
        image: "kurigram-river.jpg",
        description: "Traditional river fish and related items",
        rating: 4.6,
        discount: 8,
        priceRange: { min: 100, max: 1000 }
      },
      {
        name: "Bamboo Crafts",
        image: "kurigram-bamboo.jpg",
        description: "Traditional bamboo products and crafts",
        rating: 4.5,
        discount: 12,
        priceRange: { min: 200, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "kurigram-agri.jpg",
        description: "Local produce and traditional crops",
        rating: 4.4,
        discount: 10,
        priceRange: { min: 50, max: 500 }
      }
    ]
  },
  nilphamari: {
    title: "Nilphamari District",
    description: "Nilphamari is known for its traditional crafts, agricultural products, and cultural heritage.",
    traditions: [
      {
        name: "River Culture",
        description: "Traditional fishing and river-based lifestyle."
      },
      {
        name: "Handicrafts",
        description: "Local craft traditions including bamboo work."
      },
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and methods."
      }
    ],
    products: [
      {
        name: "River Products",
        image: "kurigram-river.jpg",
        description: "Traditional river fish and related items",
        rating: 4.6,
        discount: 8,
        priceRange: { min: 100, max: 1000 }
      },
      {
        name: "Bamboo Crafts",
        image: "kurigram-bamboo.jpg",
        description: "Traditional bamboo products and crafts",
        rating: 4.5,
        discount: 12,
        priceRange: { min: 200, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "kurigram-agri.jpg",
        description: "Local produce and traditional crops",
        rating: 4.4,
        discount: 10,
        priceRange: { min: 50, max: 500 }
      }
    ]
  },
  panchagarh: {
    title: "Panchagarh District",
    description: "Panchagarh is known for its traditional crafts, agricultural products, and cultural heritage.",
    traditions: [
      {
        name: "River Culture",
        description: "Traditional fishing and river-based lifestyle."
      },
      {
        name: "Handicrafts",
        description: "Local craft traditions including bamboo work."
      },
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and methods."
      }
    ],
    products: [
      {
        name: "River Products",
        image: "kurigram-river.jpg",
        description: "Traditional river fish and related items",
        rating: 4.6,
        discount: 8,
        priceRange: { min: 100, max: 1000 }
      },
      {
        name: "Bamboo Crafts",
        image: "kurigram-bamboo.jpg",
        description: "Traditional bamboo products and crafts",
        rating: 4.5,
        discount: 12,
        priceRange: { min: 200, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "kurigram-agri.jpg",
        description: "Local produce and traditional crops",
        rating: 4.4,
        discount: 10,
        priceRange: { min: 50, max: 500 }
      }
    ]
  },
  thakurgaon: {
    title: "Thakurgaon District",
    description: "Thakurgaon is known for its traditional crafts, agricultural products, and cultural heritage.",
    traditions: [
      {
        name: "River Culture",
        description: "Traditional fishing and river-based lifestyle."
      },
      {
        name: "Handicrafts",
        description: "Local craft traditions including bamboo work."
      },
      {
        name: "Agricultural Heritage",
        description: "Traditional farming practices and methods."
      }
    ],
    products: [
      {
        name: "River Products",
        image: "kurigram-river.jpg",
        description: "Traditional river fish and related items",
        rating: 4.6,
        discount: 8,
        priceRange: { min: 100, max: 1000 }
      },
      {
        name: "Bamboo Crafts",
        image: "kurigram-bamboo.jpg",
        description: "Traditional bamboo products and crafts",
        rating: 4.5,
        discount: 12,
        priceRange: { min: 200, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "kurigram-agri.jpg",
        description: "Local produce and traditional crops",
        rating: 4.4,
        discount: 10,
        priceRange: { min: 50, max: 500 }
      }
    ]
  },
  // Mymensingh Districts
  mymensingh: {
    title: "Mymensingh District",
    description: "Mymensingh is renowned for its rich cultural heritage, traditional crafts, and agricultural diversity. The district is famous for its handloom products, dairy industry, and cultural festivals.",
    traditions: [
      {
        name: "Handloom Weaving",
        description: "Traditional handloom techniques passed down through generations."
      },
      {
        name: "Folk Culture",
        description: "Rich tradition of folk music, dance, and storytelling."
      },
      {
        name: "Agricultural Practices",
        description: "Traditional farming methods and dairy production techniques."
      }
    ],
    products: [
      {
        name: "Handloom Textiles",
        image: "mymensingh/handloom.jpg",
        description: "Traditional handwoven fabrics and textiles",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 500, max: 5000 }
      },
      {
        name: "Dairy Products",
        image: "mymensingh/dairy.jpg",
        description: "Fresh and processed dairy products",
        rating: 4.7,
        discount: 10,
        priceRange: { min: 100, max: 1000 }
      },
      {
        name: "Traditional Crafts",
        image: "mymensingh/crafts.jpg",
        description: "Local handicrafts and artisanal products",
        rating: 4.6,
        discount: 12,
        priceRange: { min: 200, max: 2000 }
      }
    ]
  },
  netrokona: {
    title: "Netrokona District",
    description: "Netrokona is known for its traditional handicrafts, indigenous culture, and agricultural products.",
    traditions: [
      {
        name: "Indigenous Crafts",
        description: "Traditional craft techniques of indigenous communities."
      },
      {
        name: "Cultural Heritage",
        description: "Preservation of local cultural practices and festivals."
      },
      {
        name: "Agricultural Traditions",
        description: "Traditional farming and cultivation methods."
      }
    ],
    products: [
      {
        name: "Indigenous Crafts",
        image: "netrokona/crafts.jpg",
        description: "Traditional crafts from indigenous communities",
        rating: 4.7,
        discount: 10,
        priceRange: { min: 300, max: 3000 }
      },
      {
        name: "Agricultural Products",
        image: "netrokona/agri.jpg",
        description: "Local produce and traditional crops",
        rating: 4.6,
        discount: 8,
        priceRange: { min: 50, max: 500 }
      },
      {
        name: "Traditional Items",
        image: "netrokona/traditional.jpg",
        description: "Local cultural items and handicrafts",
        rating: 4.5,
        discount: 15,
        priceRange: { min: 200, max: 2000 }
      }
    ]
  },
  sherpur: {
    title: "Sherpur District",
    description: "Sherpur is famous for its traditional crafts, agricultural heritage, and cultural practices.",
    traditions: [
      {
        name: "Craft Making",
        description: "Traditional techniques of local craft production."
      },
      {
        name: "Agricultural Heritage",
        description: "Time-honored farming and cultivation practices."
      },
      {
        name: "Cultural Festivals",
        description: "Celebration of local festivals and traditions."
      }
    ],
    products: [
      {
        name: "Traditional Crafts",
        image: "sherpur/crafts.jpg",
        description: "Locally made traditional crafts",
        rating: 4.6,
        discount: 12,
        priceRange: { min: 200, max: 2000 }
      },
      {
        name: "Agricultural Products",
        image: "sherpur/agri.jpg",
        description: "Fresh local produce and crops",
        rating: 4.7,
        discount: 8,
        priceRange: { min: 50, max: 500 }
      },
      {
        name: "Cultural Items",
        image: "sherpur/cultural.jpg",
        description: "Traditional cultural products",
        rating: 4.5,
        discount: 10,
        priceRange: { min: 100, max: 1500 }
      }
    ]
  },
  jamalpur: {
    title: "Jamalpur District",
    description: "Jamalpur is known for its handloom industry, agricultural products, and traditional crafts.",
    traditions: [
      {
        name: "Handloom Weaving",
        description: "Traditional handloom techniques and patterns."
      },
      {
        name: "Agricultural Methods",
        description: "Traditional farming and cultivation practices."
      },
      {
        name: "Cultural Heritage",
        description: "Preservation of local traditions and festivals."
      }
    ],
    products: [
      {
        name: "Handloom Products",
        image: "jamalpur/handloom.jpg",
        description: "Traditional handwoven textiles",
        rating: 4.8,
        discount: 15,
        priceRange: { min: 300, max: 3000 }
      },
      {
        name: "Agricultural Goods",
        image: "jamalpur/agri.jpg",
        description: "Local produce and traditional crops",
        rating: 4.6,
        discount: 10,
        priceRange: { min: 50, max: 500 }
      },
      {
        name: "Traditional Crafts",
        image: "jamalpur/crafts.jpg",
        description: "Local handicrafts and cultural items",
        rating: 4.7,
        discount: 12,
        priceRange: { min: 200, max: 2000 }
      }
    ]
  }
};
