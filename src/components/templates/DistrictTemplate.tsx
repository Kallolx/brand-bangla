import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/app/landing/Navbar';
import Footer from '@/components/app/landing/Footer';
import { useNavigate } from 'react-router-dom';

interface DistrictTemplateProps {
  name: string;
  data: {
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
  };
}

const DistrictTemplate = ({ name, data }: DistrictTemplateProps) => {
  const navigate = useNavigate();
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

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
            const target = e.target as HTMLImageElement;
            target.src = '/images/locations/dhaka.png';
          }}
        />
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
            onClick={() => navigate('/division/dhaka')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dhaka Division
          </Button>
        </div>

        {/* District Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-playfair">
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
              <h2 className="text-2xl md:text-3xl font-playfair mb-6">About {formattedName}</h2>
              <p>{data.description}</p>
              
              {/* Traditional Practices Section */}
              <h3 className="text-xl md:text-2xl font-playfair mt-8 mb-4">Traditional Practices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
                {data.traditions.map((tradition, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">{tradition.name}</h4>
                    <p className="text-gray-700">{tradition.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Regional Products Section */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6">Local Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.products.map((product, index) => (
                  <div key={index} className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gray-100 relative overflow-hidden">
                      <img 
                        src={`/images/products/${product.image}`} 
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `/images/products/1.jpg`;
                        }}
                      />
                      {product.discount && (
                        <div className="absolute top-3 right-3 bg-[#0F5F38] text-white text-xs font-medium px-2 py-1 rounded">
                          {product.discount}% OFF
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                      <p className="text-gray-700 text-sm mb-3">{product.description}</p>
                      <div className="flex items-center justify-between">
                        {product.rating && (
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-4 h-4 ${i < product.rating! ? "text-yellow-400" : "text-gray-300"}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        )}
                        {product.priceRange && (
                          <span className="text-[#0F5F38] font-medium">
                            ৳{product.priceRange.min} - ৳{product.priceRange.max}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-playfair mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="font-medium">District:</span>
                  <span>{formattedName}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Division:</span>
                  <span>Dhaka</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Famous for:</span>
                  <span>{data.traditions[0]?.name || "Traditional crafts"}</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-xl font-playfair mb-4">Visit {formattedName}</h3>
                <p className="text-gray-700 mb-4">
                  Plan your visit to discover the rich cultural heritage and natural beauty of {formattedName}.
                </p>
                <Button className="w-full text-white bg-[#0F5F38] hover:bg-[#0a4a2b]">
                  Plan Your Trip
                </Button>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-playfair mb-4">Explore More</h3>
                <ul className="space-y-2">
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