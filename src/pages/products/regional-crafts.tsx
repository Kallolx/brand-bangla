import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/app/landing/Navbar";
import CallToAction from "@/components/app/landing/CallToAction";
import Footer from "@/components/app/landing/Footer";
import CraftCard from "@/components/ui/craft-card";

const RegionalCraftsPage = () => {
  const [activeRegion, setActiveRegion] = useState("Khulna");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const regions = [
    "Khulna",
    "Chittagong",
    "Rajshahi",
    "Barisal",
    "Sylhet",
    "Dhaka",
    "Rangpur",
    "Mymansingh",
  ];
  useEffect(() => {
    // Scroll to top when component mounts or when district changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  // This would come from your API/data source in a real app
  const products = [
    {
      id: "khejure-gur-1",
      image: "/images/products/1.jpg",
      title: "Delicious Khejure Gur",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      rating: 5,
      discount: "15%",
      priceRange: "৳300 - ৳1200",
    },
    {
      id: "nokshi-katha-1",
      image: "/images/products/2.jpg",
      title: "Traditional Nokshi katha",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      rating: 5,
      discount: "10%",
      priceRange: "৳100 - ৳1500",
    },
    {
      id: "golda-chingri-1",
      image: "/images/products/3.jpg",
      title: "Golda Chingri/Prawn",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      rating: 5,
      discount: "30%",
      priceRange: "৳700 - ৳1500",
    },
    {
      id: "shundorbon-honey-1",
      image: "/images/products/4.jpg",
      title: "Shundorbon Honey",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      rating: 5,
      discount: "25%",
      priceRange: "৳1200 - ৳2000",
    },
    {
      id: "jamdani-saree-1",
      image: "/images/products/2.jpg",
      title: "Jamdani Saree",
      description:
        "Exquisite handwoven fabric with intricate geometric and floral patterns, a pride of Bengali heritage.",
      rating: 5,
      discount: "20%",
      priceRange: "৳5000 - ৳50000",
    },
    {
      id: "bamboo-crafts-1",
      image: "/images/products/1.jpg",
      title: "Bamboo Crafts",
      description:
        "Beautifully crafted sustainable bamboo products showcasing traditional Bengali craftsmanship.",
      rating: 4,
      discount: "15%",
      priceRange: "৳200 - ৳2000",
    },
    // Add more products to test pagination
    ...Array(10)
      .fill(null)
      .map((_, i) => ({
        id: `product-${i + 7}`,
        image: `/images/products/${(i % 4) + 1}.jpg`,
        title: `Product ${i + 7}`,
        description:
          "Beautiful traditional craft showcasing Bengali heritage and craftsmanship.",
        rating: 4 + (i % 2),
        discount: `${10 + (i % 20)}%`,
        priceRange: "৳500 - ৳2500",
      })),
  ];

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-48 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-bold font-playfair text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Explore Authentic Crafts by Region
            </h1>
            <p className="font-inter text-gray-500 text-sm sm:text-base max-w-2xl">
              Explore our traditional Bangladeshi products, from Jamdani sarees
              to handcrafted accessories. Choose your favorite today!
            </p>
          </div>

          {/* Region Tabs */}
          <div className="mb-12">
            {/* Mobile Tabs */}
            <div className="relative sm:hidden w-full">
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent z-10" />
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
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden sm:block">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
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
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedProducts.map((product, index) => (
              <CraftCard key={index} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, products.length)}{" "}
              of {products.length} entries
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
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
                className="text-sm border border-gray-300 rounded-lg px-2 py-1.5 bg-white"
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
        </div>
      </main>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default RegionalCraftsPage;
