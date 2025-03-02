export interface Product {
  image: string;
  title: string;
  description: string;
  rating: number;
  discount: string;
  priceRange: string;
}

export interface Division {
  title: string;
  description: string;
  products: Product[];
}

export const divisionData: Record<string, Division> = {
  dhaka: {
    title: "Dhaka – The Heart of Bangladesh",
    description: "Welcome to Dhaka, the bustling heart of Bangladesh! A city where rich history, vibrant culture, and modern innovation meet. Discover exquisite textiles, mouthwatering street food, and handcrafted treasures that embody Dhaka's unique charm and timeless heritage.",
    products: [
      {
        image: "/images/products/1.jpg",
        title: "Jamdani Saree",
        description: "Exquisite handwoven fabric with intricate geometric and floral patterns, a pride of Bengali heritage.",
        rating: 5,
        discount: "15%",
        priceRange: "৳15,000 - ৳50,000"
      },
      {
        image: "/images/products/2.jpg",
        title: "Traditional Nokshi katha",
        description: "Beautiful embroidered quilt that tells stories through intricate needlework, a testament to Bengali craftsmanship.",
        rating: 5,
        discount: "10%",
        priceRange: "৳2,000 - ৳15,000"
      },
      {
        image: "/images/products/3.jpg",
        title: "Banarasi Saree",
        description: "Luxurious silk saree with opulent designs, perfect for special occasions and traditional ceremonies.",
        rating: 5,
        discount: "30%",
        priceRange: "৳12,000 - ৳45,000"
      },
      {
        image: "/images/products/4.jpg",
        title: "Muslin Fabric",
        description: "Legendary fine cotton textile, once known as 'woven air', representing the pinnacle of Bengali weaving.",
        rating: 5,
        discount: "15%",
        priceRange: "৳3,000 - ৳20,000"
      },
      {
        image: "/images/products/1.jpg",
        title: "Dhakai Benaroshi",
        description: "Elegant silk saree with intricate zari work, a must-have for Bengali brides and special occasions.",
        rating: 5,
        discount: "10%",
        priceRange: "৳18,000 - ৳60,000"
      },
      {
        image: "/images/products/2.jpg",
        title: "Cotton Panjabi",
        description: "Traditional men's wear crafted from fine cotton, perfect for both daily wear and festivities.",
        rating: 5,
        discount: "30%",
        priceRange: "৳2,500 - ৳8,000"
      },
      {
        image: "/images/products/3.jpg",
        title: "Silk Scarves",
        description: "Handwoven silk scarves with traditional motifs, blending comfort with Bengali artistry.",
        rating: 5,
        discount: "15%",
        priceRange: "৳1,500 - ৳5,000"
      },
      {
        image: "/images/products/4.jpg",
        title: "Embroidered Shawl",
        description: "Intricately embroidered shawls showcasing the finest needlework from skilled artisans.",
        rating: 5,
        discount: "10%",
        priceRange: "৳3,000 - ৳12,000"
      },
      {
        image: "/images/products/1.jpg",
        title: "Designer Salwar Kameez",
        description: "Contemporary take on traditional design, featuring unique patterns and premium fabrics.",
        rating: 5,
        discount: "30%",
        priceRange: "৳4,000 - ৳15,000"
      }
    ]
  },
  chittagong: {
    title: "Chittagong – The Port City of Bangladesh",
    description: "Welcome to Chittagong, Bangladesh's bustling port city! Where ancient trade routes meet modern commerce, discover a vibrant blend of coastal culture and traditional craftsmanship. From handwoven textiles to unique seafood delicacies, explore the treasures that make Chittagong a gateway to Bengali heritage.",
    products: [
      {
        image: "/images/products/1.jpg",
        title: "Chittagong Silk",
        description: "Luxurious silk fabric with unique coastal patterns, reflecting the maritime heritage of the port city.",
        rating: 5,
        discount: "20%",
        priceRange: "৳12,000 - ৳40,000"
      },
      {
        image: "/images/products/2.jpg",
        title: "Traditional Lungi",
        description: "High-quality cotton lungis with distinctive Chittagong patterns, perfect for daily wear and special occasions.",
        rating: 5,
        discount: "15%",
        priceRange: "৳800 - ৳2,500"
      },
      {
        image: "/images/products/3.jpg",
        title: "Bamboo Crafts",
        description: "Intricately designed bamboo products, showcasing the region's expertise in sustainable craftsmanship.",
        rating: 5,
        discount: "25%",
        priceRange: "৳500 - ৳5,000"
      },
      {
        image: "/images/products/4.jpg",
        title: "Hill Tract Textiles",
        description: "Unique textiles from the Chittagong Hill Tracts, featuring traditional tribal patterns and techniques.",
        rating: 5,
        discount: "10%",
        priceRange: "৳3,000 - ৳15,000"
      },
      {
        image: "/images/products/1.jpg",
        title: "Coastal Pottery",
        description: "Handcrafted pottery inspired by maritime themes and local traditions.",
        rating: 5,
        discount: "30%",
        priceRange: "৳200 - ৳2,000"
      },
      {
        image: "/images/products/2.jpg",
        title: "Fish Scale Art",
        description: "Unique artwork created using fish scales, a distinctive craft of the coastal region.",
        rating: 5,
        discount: "15%",
        priceRange: "৳1,000 - ৳10,000"
      },
      {
        image: "/images/products/3.jpg",
        title: "Seashell Jewelry",
        description: "Beautiful jewelry pieces crafted from local seashells and pearls.",
        rating: 5,
        discount: "20%",
        priceRange: "৳500 - ৳5,000"
      },
      {
        image: "/images/products/4.jpg",
        title: "Traditional Shawls",
        description: "Warm, handwoven shawls featuring patterns inspired by the Hill Tracts.",
        rating: 5,
        discount: "15%",
        priceRange: "৳1,500 - ৳6,000"
      },
      {
        image: "/images/products/1.jpg",
        title: "Maritime Crafts",
        description: "Decorative items crafted from maritime materials, celebrating the port city's heritage.",
        rating: 5,
        discount: "25%",
        priceRange: "৳1,000 - ৳8,000"
      }
    ]
  },
  sylhet: {
    title: "Sylhet – The Land of Tea Gardens",
    description: "Welcome to Sylhet, a region blessed with rolling tea gardens and natural wonders! Experience the serene beauty of endless green landscapes while discovering unique handicrafts and traditional products. From organic tea to handloom textiles, Sylhet offers a taste of Bangladesh's most refreshing treasures.",
    products: [
        {
          image: "/images/products/1.jpg",
          title: "Chittagong Silk",
          description: "Luxurious silk fabric with unique coastal patterns, reflecting the maritime heritage of the port city.",
          rating: 5,
          discount: "20%",
          priceRange: "৳12,000 - ৳40,000"
        },
        {
          image: "/images/products/2.jpg",
          title: "Traditional Lungi",
          description: "High-quality cotton lungis with distinctive Chittagong patterns, perfect for daily wear and special occasions.",
          rating: 5,
          discount: "15%",
          priceRange: "৳800 - ৳2,500"
        },
        {
          image: "/images/products/3.jpg",
          title: "Bamboo Crafts",
          description: "Intricately designed bamboo products, showcasing the region's expertise in sustainable craftsmanship.",
          rating: 5,
          discount: "25%",
          priceRange: "৳500 - ৳5,000"
        },
        {
          image: "/images/products/4.jpg",
          title: "Hill Tract Textiles",
          description: "Unique textiles from the Chittagong Hill Tracts, featuring traditional tribal patterns and techniques.",
          rating: 5,
          discount: "10%",
          priceRange: "৳3,000 - ৳15,000"
        },
        {
          image: "/images/products/1.jpg",
          title: "Coastal Pottery",
          description: "Handcrafted pottery inspired by maritime themes and local traditions.",
          rating: 5,
          discount: "30%",
          priceRange: "৳200 - ৳2,000"
        },
        {
          image: "/images/products/2.jpg",
          title: "Fish Scale Art",
          description: "Unique artwork created using fish scales, a distinctive craft of the coastal region.",
          rating: 5,
          discount: "15%",
          priceRange: "৳1,000 - ৳10,000"
        },
        {
          image: "/images/products/3.jpg",
          title: "Seashell Jewelry",
          description: "Beautiful jewelry pieces crafted from local seashells and pearls.",
          rating: 5,
          discount: "20%",
          priceRange: "৳500 - ৳5,000"
        },
        {
          image: "/images/products/4.jpg",
          title: "Traditional Shawls",
          description: "Warm, handwoven shawls featuring patterns inspired by the Hill Tracts.",
          rating: 5,
          discount: "15%",
          priceRange: "৳1,500 - ৳6,000"
        },
        {
          image: "/images/products/1.jpg",
          title: "Maritime Crafts",
          description: "Decorative items crafted from maritime materials, celebrating the port city's heritage.",
          rating: 5,
          discount: "25%",
          priceRange: "৳1,000 - ৳8,000"
        }
      ]
  },
  rajshahi: {
    title: "Rajshahi – The Silk City",
    description: "Welcome to Rajshahi, famous for its exquisite silk and rich cultural heritage! Discover the city's renowned silk products, traditional crafts, and unique agricultural treasures. From the finest silk saris to delicious mangoes, Rajshahi showcases the best of Bengali craftsmanship and natural bounty.",
    products: [
        {
          image: "/images/products/1.jpg",
          title: "Chittagong Silk",
          description: "Luxurious silk fabric with unique coastal patterns, reflecting the maritime heritage of the port city.",
          rating: 5,
          discount: "20%",
          priceRange: "৳12,000 - ৳40,000"
        },
        {
          image: "/images/products/2.jpg",
          title: "Traditional Lungi",
          description: "High-quality cotton lungis with distinctive Chittagong patterns, perfect for daily wear and special occasions.",
          rating: 5,
          discount: "15%",
          priceRange: "৳800 - ৳2,500"
        },
        {
          image: "/images/products/3.jpg",
          title: "Bamboo Crafts",
          description: "Intricately designed bamboo products, showcasing the region's expertise in sustainable craftsmanship.",
          rating: 5,
          discount: "25%",
          priceRange: "৳500 - ৳5,000"
        },
        {
          image: "/images/products/4.jpg",
          title: "Hill Tract Textiles",
          description: "Unique textiles from the Chittagong Hill Tracts, featuring traditional tribal patterns and techniques.",
          rating: 5,
          discount: "10%",
          priceRange: "৳3,000 - ৳15,000"
        },
        {
          image: "/images/products/1.jpg",
          title: "Coastal Pottery",
          description: "Handcrafted pottery inspired by maritime themes and local traditions.",
          rating: 5,
          discount: "30%",
          priceRange: "৳200 - ৳2,000"
        },
        {
          image: "/images/products/2.jpg",
          title: "Fish Scale Art",
          description: "Unique artwork created using fish scales, a distinctive craft of the coastal region.",
          rating: 5,
          discount: "15%",
          priceRange: "৳1,000 - ৳10,000"
        },
        {
          image: "/images/products/3.jpg",
          title: "Seashell Jewelry",
          description: "Beautiful jewelry pieces crafted from local seashells and pearls.",
          rating: 5,
          discount: "20%",
          priceRange: "৳500 - ৳5,000"
        },
        {
          image: "/images/products/4.jpg",
          title: "Traditional Shawls",
          description: "Warm, handwoven shawls featuring patterns inspired by the Hill Tracts.",
          rating: 5,
          discount: "15%",
          priceRange: "৳1,500 - ৳6,000"
        },
        {
          image: "/images/products/1.jpg",
          title: "Maritime Crafts",
          description: "Decorative items crafted from maritime materials, celebrating the port city's heritage.",
          rating: 5,
          discount: "25%",
          priceRange: "৳1,000 - ৳8,000"
        }
      ]
  },
  khulna: {
    title: "Khulna – Gateway to the Sundarbans",
    description: "Welcome to Khulna, the gateway to the majestic Sundarbans! Experience the unique blend of coastal culture and mangrove forest inspiration in our local crafts and products. From traditional wood carvings to honey from the Sundarbans, discover the authentic treasures of this unique region.",
    products: [
        {
          image: "/images/products/1.jpg",
          title: "Chittagong Silk",
          description: "Luxurious silk fabric with unique coastal patterns, reflecting the maritime heritage of the port city.",
          rating: 5,
          discount: "20%",
          priceRange: "৳12,000 - ৳40,000"
        },
        {
          image: "/images/products/2.jpg",
          title: "Traditional Lungi",
          description: "High-quality cotton lungis with distinctive Chittagong patterns, perfect for daily wear and special occasions.",
          rating: 5,
          discount: "15%",
          priceRange: "৳800 - ৳2,500"
        },
        {
          image: "/images/products/3.jpg",
          title: "Bamboo Crafts",
          description: "Intricately designed bamboo products, showcasing the region's expertise in sustainable craftsmanship.",
          rating: 5,
          discount: "25%",
          priceRange: "৳500 - ৳5,000"
        },
        {
          image: "/images/products/4.jpg",
          title: "Hill Tract Textiles",
          description: "Unique textiles from the Chittagong Hill Tracts, featuring traditional tribal patterns and techniques.",
          rating: 5,
          discount: "10%",
          priceRange: "৳3,000 - ৳15,000"
        },
        {
          image: "/images/products/1.jpg",
          title: "Coastal Pottery",
          description: "Handcrafted pottery inspired by maritime themes and local traditions.",
          rating: 5,
          discount: "30%",
          priceRange: "৳200 - ৳2,000"
        },
        {
          image: "/images/products/2.jpg",
          title: "Fish Scale Art",
          description: "Unique artwork created using fish scales, a distinctive craft of the coastal region.",
          rating: 5,
          discount: "15%",
          priceRange: "৳1,000 - ৳10,000"
        },
        {
          image: "/images/products/3.jpg",
          title: "Seashell Jewelry",
          description: "Beautiful jewelry pieces crafted from local seashells and pearls.",
          rating: 5,
          discount: "20%",
          priceRange: "৳500 - ৳5,000"
        },
        {
          image: "/images/products/4.jpg",
          title: "Traditional Shawls",
          description: "Warm, handwoven shawls featuring patterns inspired by the Hill Tracts.",
          rating: 5,
          discount: "15%",
          priceRange: "৳1,500 - ৳6,000"
        },
        {
          image: "/images/products/1.jpg",
          title: "Maritime Crafts",
          description: "Decorative items crafted from maritime materials, celebrating the port city's heritage.",
          rating: 5,
          discount: "25%",
          priceRange: "৳1,000 - ৳8,000"
        }
      ]
  },
  barisal: {
    title: "Barisal – The Land of Rivers",
    description: "Welcome to Barisal, the city of rivers and traditional water culture! Explore unique handicrafts inspired by river life and local traditions. From handwoven products to distinctive pottery, Barisal offers authentic crafts that tell stories of its rich riverine heritage.",
    products: [
        {
          image: "/images/products/1.jpg",
          title: "Chittagong Silk",
          description: "Luxurious silk fabric with unique coastal patterns, reflecting the maritime heritage of the port city.",
          rating: 5,
          discount: "20%",
          priceRange: "৳12,000 - ৳40,000"
        },
        {
          image: "/images/products/2.jpg",
          title: "Traditional Lungi",
          description: "High-quality cotton lungis with distinctive Chittagong patterns, perfect for daily wear and special occasions.",
          rating: 5,
          discount: "15%",
          priceRange: "৳800 - ৳2,500"
        },
        {
          image: "/images/products/3.jpg",
          title: "Bamboo Crafts",
          description: "Intricately designed bamboo products, showcasing the region's expertise in sustainable craftsmanship.",
          rating: 5,
          discount: "25%",
          priceRange: "৳500 - ৳5,000"
        },
        {
          image: "/images/products/4.jpg",
          title: "Hill Tract Textiles",
          description: "Unique textiles from the Chittagong Hill Tracts, featuring traditional tribal patterns and techniques.",
          rating: 5,
          discount: "10%",
          priceRange: "৳3,000 - ৳15,000"
        },
        {
          image: "/images/products/1.jpg",
          title: "Coastal Pottery",
          description: "Handcrafted pottery inspired by maritime themes and local traditions.",
          rating: 5,
          discount: "30%",
          priceRange: "৳200 - ৳2,000"
        },
        {
          image: "/images/products/2.jpg",
          title: "Fish Scale Art",
          description: "Unique artwork created using fish scales, a distinctive craft of the coastal region.",
          rating: 5,
          discount: "15%",
          priceRange: "৳1,000 - ৳10,000"
        },
        {
          image: "/images/products/3.jpg",
          title: "Seashell Jewelry",
          description: "Beautiful jewelry pieces crafted from local seashells and pearls.",
          rating: 5,
          discount: "20%",
          priceRange: "৳500 - ৳5,000"
        },
        {
          image: "/images/products/4.jpg",
          title: "Traditional Shawls",
          description: "Warm, handwoven shawls featuring patterns inspired by the Hill Tracts.",
          rating: 5,
          discount: "15%",
          priceRange: "৳1,500 - ৳6,000"
        },
        {
          image: "/images/products/1.jpg",
          title: "Maritime Crafts",
          description: "Decorative items crafted from maritime materials, celebrating the port city's heritage.",
          rating: 5,
          discount: "25%",
          priceRange: "৳1,000 - ৳8,000"
        }
      ]
  },
  rangpur: {
    title: "Rangpur – The Heritage of North Bengal",
    description: "Welcome to Rangpur, where traditional craftsmanship meets agricultural abundance! Discover unique textiles, handicrafts, and agricultural products that reflect the region's rich cultural heritage. From indigenous weaving techniques to famous tobacco products, Rangpur offers a diverse range of local specialties.",
    products: [
        {
          image: "/images/products/1.jpg",
          title: "Chittagong Silk",
          description: "Luxurious silk fabric with unique coastal patterns, reflecting the maritime heritage of the port city.",
          rating: 5,
          discount: "20%",
          priceRange: "৳12,000 - ৳40,000"
        },
        {
          image: "/images/products/2.jpg",
          title: "Traditional Lungi",
          description: "High-quality cotton lungis with distinctive Chittagong patterns, perfect for daily wear and special occasions.",
          rating: 5,
          discount: "15%",
          priceRange: "৳800 - ৳2,500"
        },
        {
          image: "/images/products/3.jpg",
          title: "Bamboo Crafts",
          description: "Intricately designed bamboo products, showcasing the region's expertise in sustainable craftsmanship.",
          rating: 5,
          discount: "25%",
          priceRange: "৳500 - ৳5,000"
        },
        {
          image: "/images/products/4.jpg",
          title: "Hill Tract Textiles",
          description: "Unique textiles from the Chittagong Hill Tracts, featuring traditional tribal patterns and techniques.",
          rating: 5,
          discount: "10%",
          priceRange: "৳3,000 - ৳15,000"
        },
        {
          image: "/images/products/1.jpg",
          title: "Coastal Pottery",
          description: "Handcrafted pottery inspired by maritime themes and local traditions.",
          rating: 5,
          discount: "30%",
          priceRange: "৳200 - ৳2,000"
        },
        {
          image: "/images/products/2.jpg",
          title: "Fish Scale Art",
          description: "Unique artwork created using fish scales, a distinctive craft of the coastal region.",
          rating: 5,
          discount: "15%",
          priceRange: "৳1,000 - ৳10,000"
        },
        {
          image: "/images/products/3.jpg",
          title: "Seashell Jewelry",
          description: "Beautiful jewelry pieces crafted from local seashells and pearls.",
          rating: 5,
          discount: "20%",
          priceRange: "৳500 - ৳5,000"
        },
        {
          image: "/images/products/4.jpg",
          title: "Traditional Shawls",
          description: "Warm, handwoven shawls featuring patterns inspired by the Hill Tracts.",
          rating: 5,
          discount: "15%",
          priceRange: "৳1,500 - ৳6,000"
        },
        {
          image: "/images/products/1.jpg",
          title: "Maritime Crafts",
          description: "Decorative items crafted from maritime materials, celebrating the port city's heritage.",
          rating: 5,
          discount: "25%",
          priceRange: "৳1,000 - ৳8,000"
        }
      ]
  }
}; 