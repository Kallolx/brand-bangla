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
      <div className="relative h-[350px] md:h-[450px] lg:h-[600px] mt-16">
        <img
          src={`/images/locations/${name.toLowerCase()}.webp`}
          alt={formattedName}
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `/images/locations/${divisionName.toLowerCase()}.webp`;
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
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
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center md:items-center">
              <span className="text-white/80 text-sm md:text-base uppercase tracking-wider mb-2">Welcome to</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-playfair text-center">
                {formattedName}
              </h1>
              <div className="h-1 w-20 bg-[#0F5F38] mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* About Section */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm text-[#0F5F38] font-medium uppercase tracking-wider mb-2 inline-block">District Overview</span>
            <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-center">Discover {formattedName}</h2>
            <div className="h-0.5 w-16 bg-[#0F5F38] mx-auto mb-8"></div>
            <p className="text-center text-gray-700 leading-relaxed mb-8">{data.description}</p>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm w-28">
                <span className="text-sm text-gray-500">Division</span>
                <span className="font-semibold text-gray-800">{formattedDivisionName}</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm w-28">
                <span className="text-sm text-gray-500">Famous for</span>
                <span className="font-semibold text-gray-800">{data.traditions[0]?.name || "Crafts"}</span>
              </div>
            </div>
          </div>
        </div>
            
        {/* Traditional Practices Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-sm text-[#0F5F38] font-medium uppercase tracking-wider mb-2 inline-block">Cultural Heritage</span>
            <h3 className="text-2xl md:text-3xl font-playfair mb-4 text-center">Traditional Practices</h3>
            <div className="h-0.5 w-16 bg-[#0F5F38] mx-auto mb-6"></div>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Explore the rich cultural traditions that have been preserved through generations in {formattedName}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.traditions.map((tradition, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0F5F38]/10 text-[#0F5F38] rounded-full mb-4">
                  {index + 1}
                </div>
                <h4 className="font-playfair text-xl mb-3">{tradition.name}</h4>
                <p className="text-gray-700">{tradition.description}</p>
              </div>
            ))}
          </div>
        </div>
          
        {/* Regional Products Section */}
        <div>
          <div className="text-center mb-10">
            <span className="text-sm text-[#0F5F38] font-medium uppercase tracking-wider mb-2 inline-block">Artisanal Treasures</span>
            <h2 className="text-2xl md:text-3xl font-playfair mb-4 text-center">Local Products</h2>
            <div className="h-0.5 w-16 bg-[#0F5F38] mx-auto mb-6"></div>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Discover authentic crafts and products that showcase the skilled artisanship of {formattedName}'s local communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {data.products.map((product, index) => (
              <div key={index} className="flex justify-center">
                <CraftCard
                  id={product.id || `${name.toLowerCase()}-product-${index}`}
                  image={productImages[index % productImages.length]}
                  title={product.name}
                  description={product.description}
                  rating={product.rating}
                  discount={`${product.discount}% Off`}
                  priceRange={`৳${product.priceRange.min} - ৳${product.priceRange.max}`}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center bg-gray-50 p-8 sm:p-10 md:p-12 rounded-xl">
          <h3 className="text-xl md:text-2xl font-playfair mb-4">Ready to Experience {formattedName}?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Plan your cultural journey to discover the traditions, crafts, and warm hospitality of {formattedName}.
          </p>
          <Button className="bg-[#0F5F38] hover:bg-[#0a4a2b] text-white px-8 py-2">
            Plan Your Visit
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DistrictTemplate; 