import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { motion } from "framer-motion";

const PopularProducts = () => {
  const swiperRef = useRef<SwiperType>();
  
  const allProducts = [
    {
      image: "/images/products/1.jpg",
      name: "Accessories",
      rating: 5,
      discount: "10%",
      priceRange: "৳100 - ৳1500"
    },
    {
      image: "/images/products/2.jpg",
      name: "Traditional T-shirt",
      rating: 5,
      discount: "12%",
      priceRange: "৳400 - ৳700"
    },
    {
      image: "/images/products/3.jpg",
      name: "Sharee",
      rating: 5,
      discount: "25%",
      priceRange: "৳1200 - ৳3000"
    },
    {
      image: "/images/products/4.jpg",
      name: "Shoes",
      rating: 5,
      discount: "32%",
      priceRange: "৳1800 - ৳2500"
    },
    {
      image: "/images/products/2.jpg",
      name: "Traditional T-shirt",
      rating: 5,
      discount: "12%",
      priceRange: "৳400 - ৳700"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="font-playfair text-3xl text-gray-900 mb-2">
            Popular products
          </h2>
          <p className="font-inter text-gray-500 max-w-2xl">
            Explore most popular products, loved by customers for their quality and value.
          </p>
        </div>
        <Button 
        asChild 
        className="bg-[#0F5F38] hover:bg-[#0D4F30] text-white font-inter px-6 py-6 rounded-lg cursor-pointer"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          Browse All
        </motion.div>
      </Button>
      </div>

      {/* Products Grid with Navigation */}
      <div className="relative">
        <div className="mb-8">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={24}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="!overflow-visible"
          >
            {allProducts.map((product, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Left side - Arrow buttons */}
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

          {/* Right side - Progress bar */}
          <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#0F5F38] transition-all duration-300 rounded-full"
              style={{
                width: `${((swiperRef.current?.activeIndex || 0) + 4) / allProducts.length * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts; 