import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CraftCard from "@/components/ui/craft-card";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const RegionalCrafts = () => {
  const swiperRef = useRef<SwiperType>();
  const [activeRegion, setActiveRegion] = useState("Khulna");

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
      image: "/images/products/1.jpg",
      title: "Delicious Khejure Gur",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      rating: 5,
      discount: "15%",
      priceRange: "৳300 - ৳1200"
    },
    {
      image: "/images/products/2.jpg",
      title: "Traditional Nokshi katha",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      rating: 5,
      discount: "10%",
      priceRange: "৳100 - ৳1500"
    },
    {
      image: "/images/products/3.jpg",
      title: "Golda Chingri/Prawn",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      rating: 5,
      discount: "30%",
      priceRange: "৳700 - ৳1500"
    },
    {
      image: "/images/products/4.jpg",
      title: "Shundorbon Honey",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      rating: 5,
      discount: "25%",
      priceRange: "৳1200 - ৳2000"
    },
    {
      image: "/images/products/2.jpg",
      title: "Jamdani Saree",
      description: "Exquisite handwoven fabric with intricate geometric and floral patterns, a pride of Bengali heritage.",
      rating: 5,
      discount: "20%",
      priceRange: "৳5000 - ৳50000"
    },
    {
      image: "/images/products/1.jpg",
      title: "Bamboo Crafts",
      description: "Beautifully crafted sustainable bamboo products showcasing traditional Bengali craftsmanship.",
      rating: 4,
      discount: "15%",
      priceRange: "৳200 - ৳2000"
    }
  ];

  return (
    <section className="py-20 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-bold font-playfair text-4xl text-gray-900 mb-4">
            Explore Authentic Crafts by Region
          </h2>
          <p className="font-inter text-gray-500 max-w-2xl">
            Explore our traditional Bangladeshi products, from Jamdani sarees to handcrafted accessories. Choose your favorite today!
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex items-center justify-between mb-12">
          <div className="font-inter flex items-center gap-8 overflow-x-auto pb-4 scrollbar-hide">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`relative pb-2 font-inter font-medium transition-colors ${
                  activeRegion === region
                    ? "text-[#0F5F38]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {region}
                {activeRegion === region && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0F5F38]" />
                )}
              </button>
            ))}
          </div>
          <Button className="font-inter px-6 py-6 bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white">
            See All
          </Button>
        </div>

        {/* Products Grid */}
        <div className="relative">
          <div className="mb-8">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              spaceBetween={32}
              speed={800}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              className="!overflow-hidden py-2"
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <CraftCard {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-end mt-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalCrafts; 