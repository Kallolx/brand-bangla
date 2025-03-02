import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CraftCard from "@/components/ui/craft-card";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RegionalCrafts = () => {
  const swiperRef = useRef<SwiperType>();
  const [activeRegion, setActiveRegion] = useState("Khulna");
  const navigate = useNavigate();

  const regions = [
    "Khulna",
    "Chittagong",
    "Rajshahi",
    "Barisal",
    "Sylhet",
    "Dhaka",
    "Rangpur",
    "Mymansingh"
  ];

  const products = [
    {
      id: "jamdani-saree-1",
      image: "/images/products/1.jpg",
      title: "Jamdani Saree",
      description: "Exquisite handwoven fabric with intricate geometric and floral patterns.",
      rating: 5,
      discount: "15%",
      priceRange: "৳300 - ৳1200",
    },
    {
      id: "nokshi-katha-2",
      image: "/images/products/2.jpg",
      title: "Traditional Nokshi katha",
      description: "Beautiful traditional embroidered quilt that tells stories through needlework.",
      rating: 5,
      discount: "10%",
      priceRange: "৳100 - ৳1500",
    },
    {
      id: "banarasi-saree-3",
      image: "/images/products/3.jpg",
      title: "Banarasi Saree",
      description: "Luxurious silk saree with rich zari work and traditional motifs.",
      rating: 5,
      discount: "30%",
      priceRange: "৳700 - ৳1500",
    },
    {
      id: "shundorbon-honey-1",
      image: "/images/products/4.jpg",
      title: "Shundorbon Honey",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      rating: 5,
      discount: "25%",
      priceRange: "৳1200 - ৳2000"
    },
    {
      id: "jamdani-saree-2",
      image: "/images/products/2.jpg",
      title: "Jamdani Saree",
      description: "Exquisite handwoven fabric with intricate geometric and floral patterns, a pride of Bengali heritage.",
      rating: 5,
      discount: "20%",
      priceRange: "৳5000 - ৳50000"
    },
    {
      id: "bamboo-crafts-1",
      image: "/images/products/1.jpg",
      title: "Bamboo Crafts",
      description: "Beautifully crafted sustainable bamboo products showcasing traditional Bengali craftsmanship.",
      rating: 4,
      discount: "15%",
      priceRange: "৳200 - ৳2000"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-bold font-playfair text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3 sm:mb-4">
            Explore Authentic Crafts by Region
          </h2>
          <p className="font-inter text-gray-500 text-sm sm:text-base max-w-2xl">
            Explore our traditional Bangladeshi products, from Jamdani sarees to handcrafted accessories. Choose your favorite today!
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          {/* Mobile Tabs */}
          <div className="relative sm:hidden w-full">
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#f3f3f3] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#f3f3f3] to-transparent z-10" />
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex items-center gap-6 min-w-max py-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`relative font-inter font-medium text-sm whitespace-nowrap transition-colors ${
                      activeRegion === region
                        ? "text-[#0F5F38]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {region}
                    {activeRegion === region && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0F5F38]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden sm:block flex-grow overflow-hidden">
            <div className="flex flex-wrap items-center gap-x-6 md:gap-x-8 gap-y-4">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`relative pb-2 font-inter font-medium text-base whitespace-nowrap transition-colors ${
                    activeRegion === region
                      ? "text-[#0F5F38]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span>{region}</span>
                  {activeRegion === region && (
                    <motion.div 
                      layoutId="activeTabDesktop"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F5F38]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <Button 
            onClick={() => navigate('/products/regional-crafts')}
            className="sm:flex-shrink-0 font-inter px-4 sm:px-6 py-2.5 sm:py-3 md:py-3.5 bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white text-sm sm:text-base whitespace-nowrap"
          >
            See All
          </Button>
        </div>

        {/* Products Grid */}
        <div className="relative">
          <div className="mb-6 sm:mb-8">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1.2}
              spaceBetween={16}
              speed={800}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              className="!overflow-visible py-2"
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <CraftCard {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-end mt-2 sm:mt-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalCrafts; 