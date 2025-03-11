import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/app/landing/Navbar";
import CallToAction from "@/components/app/landing/CallToAction";
import Footer from "@/components/app/landing/Footer";
import CraftCard from "@/components/ui/craft-card";
import { Division, Product } from "@/data/divisions";

interface DivisionTemplateProps {
  data: Division;
}

const DivisionTemplate = ({ data }: DivisionTemplateProps) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Textile");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const categories = [
    { name: "Textile" },
    { name: "Food"},
    { name: "Handicrafts"}
  ];

  // Filter and paginate products
  const filteredProducts = useMemo(() => {
    // In a real app, you would filter based on category
    return data.products || [];
  }, [data.products, activeCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Title Section */}
        <div className="max-w-7xl mx-auto pt-48">
          <h1 className="text-center md:text-start font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold">
            {data.title}
          </h1>
        </div>

        {/* Video Section */}
        <div className="mx-auto px-3 mt-10 sm:px-4 md:px-10 py-[12px] sm:py-[16px] md:py-[20px]">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
            {/* Loading Animation */}
            {isVideoLoading && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-[#0F5F38] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={handleVideoLoad}
              className={`absolute inset-0 w-full h-full object-cover object-center scale-[1.25] transition-opacity duration-500 ${
                isVideoLoading ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ objectPosition: "50% 50%" }}
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="font-playfair text-3xl font-bold mb-4 text-center md:text-left">
            Explore The Local Specialties
          </h2>
          <p className="font-inter text-gray-600 max-w-3xl mb-12 text-center md:text-left">
            {data.description}
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center md:justify-start gap-8 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`relative pb-2 font-inter font-medium text-base whitespace-nowrap transition-colors ${
                  activeCategory === category.name
                    ? "text-[#0F5F38]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{category.name}</span>
                </div>
                {activeCategory === category.name && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F5F38]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 place-items-center md:place-items-start">
            {paginatedProducts.map((product: Product, index: number) => (
              <CraftCard 
                key={index}
                {...product}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between gap-4 border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 text-center md:text-left">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} entries
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                onClick={() => handlePageChange(1)}
              >
                «
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                ‹
              </button>
              {[...Array(Math.min(5, totalPages))].map((_, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                    currentPage === i + 1
                      ? "bg-[#0F5F38] text-white"
                      : "text-gray-500 hover:bg-[#0F5F38] hover:text-white"
                  } transition-colors`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                ›
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                onClick={() => handlePageChange(totalPages)}
              >
                »
              </button>
            </div>
            <select
              className="text-sm border border-gray-300 rounded-lg px-2 py-1.5 bg-white mx-auto md:mx-0"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={9}>9</option>
              <option value={18}>18</option>
              <option value={27}>27</option>
              <option value={36}>36</option>
            </select>
          </div>
        </div>

        {/* Call to Action */}
        <CallToAction />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default DivisionTemplate; 