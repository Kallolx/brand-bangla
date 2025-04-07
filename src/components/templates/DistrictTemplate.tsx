import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/app/landing/Navbar';
import Footer from '@/components/app/landing/Footer';
import { useNavigate } from 'react-router-dom';
import CraftCard from '@/components/ui/craft-card';

interface DistrictTemplateProps {
  name: string;
  divisionName: string;
  data: {
    title: string;
    description: string;
    traditions: Array<{
      name: string;
      description: string;
    }>;
    products: Array<{
      id: string;
      name: string;
      description: string;
      rating: number;
      discount: number;
      priceRange: {
        min: number;
        max: number;
      };
    }>;
  };
}

const DistrictTemplate = ({ name, divisionName, data }: DistrictTemplateProps) => {
  const navigate = useNavigate();
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const formattedDivisionName = divisionName.charAt(0).toUpperCase() + divisionName.slice(1).toLowerCase();

  // Sample product images
  const productImages = [
    '/images/products/1.jpg',
    '/images/products/2.jpg',
    '/images/products/3.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] mt-16">
        <img
          src={`/images/locations/${name.toLowerCase()}.webp`}
          alt={formattedName}
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `/images/locations/${divisionName.toLowerCase()}.webp`;
          }}
        />
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
            onClick={() => navigate(`/division/${divisionName.toLowerCase()}`)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {formattedDivisionName} Division
          </Button>
        </div>

        {/* District Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-playfair text-center md:text-left">
              {formattedName}
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
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-center md:text-left">About {formattedName}</h2>
              <p className="text-center md:text-left">{data.description}</p>
              
              {/* Traditional Practices Section */}
              <h3 className="text-xl md:text-2xl font-playfair mt-8 mb-4 text-center md:text-left">Traditional Practices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
                {data.traditions.map((tradition, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg text-center md:text-left">
                    <h4 className="font-medium text-lg mb-2">{tradition.name}</h4>
                    <p className="text-gray-700">{tradition.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Regional Products Section */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-center md:text-left">Local Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center md:place-items-start">
                {data.products.map((product, index) => (
                  <CraftCard
                    key={index}
                    id={product.id || `${name.toLowerCase()}-product-${index}`}
                    image={productImages[index % productImages.length]}
                    title={product.name}
                    description={product.description}
                    rating={product.rating}
                    discount={`${product.discount}% Off`}
                    priceRange={`৳${product.priceRange.min} - ৳${product.priceRange.max}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-playfair mb-4 text-center md:text-left">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="font-medium">District:</span>
                  <span>{formattedName}</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="font-medium">Division:</span>
                  <span>{formattedDivisionName}</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="font-medium">Famous for:</span>
                  <span>{data.traditions[0]?.name || "Traditional crafts"}</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-xl font-playfair mb-4 text-center md:text-left">Visit {formattedName}</h3>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  Plan your visit to discover the rich cultural heritage and natural beauty of {formattedName}.
                </p>
                <Button className="w-full text-white bg-[#0F5F38] hover:bg-[#0a4a2b]">
                  Plan Your Trip
                </Button>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-playfair mb-4 text-center md:text-left">Explore More</h3>
                <ul className="space-y-2 text-center md:text-left">
                  <li>
                    <a href="#" className="text-[#0F5F38] hover:underline">Local Festivals</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#0F5F38] hover:underline">Traditional Food</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#0F5F38] hover:underline">Craft Markets</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#0F5F38] hover:underline">Tourist Spots</a>
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

export default DistrictTemplate; 