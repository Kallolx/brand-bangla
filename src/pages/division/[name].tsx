import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/app/landing/Navbar';
import Footer from '@/components/app/landing/Footer';
import { useEffect } from 'react';

// Division-specific data
const divisionData = {
  dhaka: {
    traditions: [
      { name: "Jamdani Weaving", description: "Jamdani is a fine muslin textile with intricate patterns, recognized as a UNESCO Intangible Cultural Heritage." },
      { name: "Nakshi Kantha", description: "Traditional embroidered quilts made from old saris and fabrics, featuring intricate designs that tell stories." },
      { name: "Shokher Hari", description: "Decorative pots used in traditional ceremonies, especially popular in rural areas of Dhaka division." }
    ],
    products: [
      { name: "Jamdani Saree", image: "1.jpg", description: "Exquisite handwoven fabric with geometric and floral motifs, considered one of the finest muslins produced in Bangladesh." },
      { name: "Nakshi Kantha", image: "2.jpg", description: "Embroidered quilt made from old saris and fabrics, featuring intricate designs that tell stories." },
      { name: "Dhakai Bakarkhani", image: "3.jpg", description: "Traditional flat bread with a flaky texture, often enjoyed with tea." }
    ]
  },
  chittagong: {
    traditions: [
      { name: "Bali Khela", description: "Traditional wrestling competition held annually, showcasing strength and community bonding." },
      { name: "Mejban", description: "A traditional community feast where hundreds gather to share a meal, symbolizing unity and generosity." },
      { name: "Semai Festival", description: "Celebration featuring vermicelli desserts during Eid, with unique regional variations." }
    ],
    products: [
      { name: "Shital Pati", image: "1.jpg", description: "Intricate mats woven from murta plants, used for sitting and sleeping, especially in hot weather." },
      { name: "Bamboo Crafts", image: "2.jpg", description: "Various household items and decorative pieces made from locally sourced bamboo." },
      { name: "Dried Fish (Shutki)", image: "3.jpg", description: "Various types of dried fish, a specialty of the coastal region, used in traditional dishes." }
    ]
  },
  shylet: {
    traditions: [
      { name: "Tea Cultivation", description: "Centuries-old tradition of growing and processing some of the world's finest teas in the lush hills." },
      { name: "Manipuri Dance", description: "Classical dance form brought by the Manipuri community, featuring graceful movements and colorful attire." },
      { name: "Hason Raja's Songs", description: "Folk songs composed by the legendary mystic poet Hason Raja, deeply embedded in local culture." }
    ],
    products: [
      { name: "Sylheti Tea", image: "1.jpg", description: "Premium quality tea grown in the highlands, known for its distinctive aroma and flavor." },
      { name: "Shital Pati", image: "2.jpg", description: "Finely woven mats made from murta plants, used for sitting and sleeping." },
      { name: "Orange Honey", image: "3.jpg", description: "Pure honey collected from beehives in the orange orchards of Sylhet, known for its unique flavor." }
    ]
  },
  rajshahi: {
    traditions: [
      { name: "Silk Weaving", description: "Ancient tradition of producing fine silk fabrics, particularly the famous Rajshahi Silk." },
      { name: "Pottery Making", description: "Traditional clay pottery crafted by skilled artisans, often featuring distinctive regional designs." },
      { name: "Gambhira", description: "Folk music and dance performance that addresses social and political issues through satire." }
    ],
    products: [
      { name: "Rajshahi Silk", image: "1.jpg", description: "Luxurious silk fabric known for its softness and luster, produced using traditional techniques." },
      { name: "Mango Varieties", image: "2.jpg", description: "Over 100 varieties of mangoes grown in the region, including the famous Himsagar and Langra." },
      { name: "Black Clay Pottery", image: "3.jpg", description: "Distinctive pottery made from the region's special black clay, known for its durability." }
    ]
  },
  khulna: {
    traditions: [
      { name: "Bede Culture", description: "Traditions of the river nomads who live on boats and practice unique crafts and healing methods." },
      { name: "Jatra Pala", description: "Traditional folk theater performances that tell mythological and historical stories." },
      { name: "Sundarbans Honey Collection", description: "Dangerous but traditional practice of collecting wild honey from the Sundarbans mangrove forest." }
    ],
    products: [
      { name: "Sundarbans Honey", image: "1.jpg", description: "Wild honey collected from the Sundarbans mangrove forest, known for its medicinal properties." },
      { name: "Shrimp Products", image: "2.jpg", description: "Premium quality shrimp and prawn farmed in the region's brackish waters." },
      { name: "Pati Sharee", image: "3.jpg", description: "Traditional handloom saree with distinctive striped patterns, woven in the Narail district." }
    ]
  },
  barisal: {
    traditions: [
      { name: "Boat Racing", description: "Traditional competitive boat races held during monsoon season, showcasing teamwork and community spirit." },
      { name: "Bhatiali Songs", description: "Folk songs sung by boatmen, expressing the relationship between people and rivers." },
      { name: "Durga Puja", description: "Elaborate celebration of the Hindu festival with unique regional traditions and craftsmanship." }
    ],
    products: [
      { name: "Coconut Products", image: "1.jpg", description: "Various products made from coconuts, including oil, sweets, and handicrafts." },
      { name: "Hilsa Fish", image: "2.jpg", description: "The prized national fish of Bangladesh, with the Barisal region known for the best quality." },
      { name: "Betel Leaf", image: "3.jpg", description: "High-quality betel leaves grown in the fertile soil of Barisal, used in traditional practices." }
    ]
  }
};

const DivisionPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const name = params.name || '';
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  
  // Get division data or use default if not found
  const division = divisionData[name.toLowerCase() as keyof typeof divisionData] || {
    traditions: [
      { name: "Traditional Crafts", description: "Various handcrafted items using techniques that showcase the region's cultural heritage." },
      { name: "Folk Music", description: "Distinctive musical traditions passed down through generations." },
      { name: "Regional Festivals", description: "Unique celebrations that mark important cultural and seasonal events." }
    ],
    products: [
      { name: "Handloom Textiles", image: "1.jpg", description: "Locally produced textiles featuring regional patterns and techniques." },
      { name: "Agricultural Products", image: "2.jpg", description: "Specialty crops and foods unique to the region's climate and soil." },
      { name: "Artisanal Crafts", image: "3.jpg", description: "Handcrafted items made using traditional methods and local materials." }
    ]
  };
  
  useEffect(() => {
    console.log('Division page loaded with name:', name);
    // Scroll to top when component mounts or when division changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // If name is empty or invalid, redirect to home
    if (!name) {
      navigate('/');
    }
  }, [name, navigate]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] mt-16">
        <img
          src={`/images/locations/${name.toLowerCase()}.png`}
          alt={formattedName}
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => {
            console.error(`Failed to load image for ${name}`);
            // Fallback to a default image if the specific one doesn't exist
            const target = e.target as HTMLImageElement;
            target.src = '/images/locations/dhaka.png';
          }}
        />
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Division Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-playfair">
              {formattedName} Division
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6">About {formattedName}</h2>
              <p>
                Discover the rich heritage and cultural significance of {formattedName} division. 
                This region is known for its unique traditions, craftsmanship, and historical importance 
                in Bangladesh's cultural landscape.
              </p>
              
              {/* Traditional Practices Section */}
              <h3 className="text-xl md:text-2xl font-playfair mt-8 mb-4">Traditional Practices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
                {division.traditions.map((tradition, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">{tradition.name}</h4>
                    <p className="text-gray-700">{tradition.description}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl md:text-2xl font-playfair mt-8 mb-4">Historical Significance</h3>
              <p>
                With a rich history dating back centuries, {formattedName} has played an important role in shaping
                the cultural and historical narrative of Bangladesh. The region's historical sites and monuments
                stand as testament to its significant past.
              </p>
              
              <h3 className="text-xl md:text-2xl font-playfair mt-8 mb-4">Natural Beauty</h3>
              <p>
                From scenic landscapes to unique natural formations, {formattedName} offers breathtaking views
                and natural attractions that captivate visitors. The region's biodiversity and natural resources
                contribute to its distinctive character.
              </p>
            </div>
            
            {/* Regional Products Section */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6">Signature Products of {formattedName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {division.products.map((product, index) => (
                  <div key={index} className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gray-100 relative overflow-hidden">
                      <img 
                        src={`/images/products/${product.image}`} 
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = `/images/products/1.jpg`;
                        }}
                      />
                      <div className="absolute top-3 right-3 bg-[#0F5F38] text-white text-xs font-medium px-2 py-1 rounded">
                        {index === 0 ? "15%" : index === 1 ? "20%" : "10%"} OFF
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                      <p className="text-gray-700 text-sm mb-3">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < 5 ? "text-yellow-400" : "text-gray-300"}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-[#0F5F38] font-medium">
                          ৳{300 + index * 200} - ৳{1200 + index * 500}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-[#0F5F38] hover:bg-[#0a4a2b] text-white px-6 py-3">
                  View All Products
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-playfair mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="font-medium">Region:</span>
                  <span>{formattedName}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Famous for:</span>
                  <span>{division.traditions[0]?.name || "Traditional crafts"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Population:</span>
                  <span>Varies by district</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Climate:</span>
                  <span>Tropical monsoon</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-xl font-playfair mb-4">Visit {formattedName}</h3>
                <p className="text-gray-700 mb-4">
                  Plan your visit to discover the rich cultural heritage and natural beauty of {formattedName} division.
                </p>
                <Button className="w-full text-white bg-[#0F5F38] hover:bg-[#0a4a2b]">
                  Plan Your Trip
                </Button>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-playfair mb-4">Explore More</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-[#0F5F38] hover:underline">Traditional Festivals</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#0F5F38] hover:underline">Local Cuisine</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#0F5F38] hover:underline">Artisan Workshops</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#0F5F38] hover:underline">Historical Sites</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DivisionPage; 