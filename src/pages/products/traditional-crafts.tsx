import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/app/landing/Navbar";
import CallToAction from "@/components/app/landing/CallToAction";
import Footer from "@/components/app/landing/Footer";
import CraftCard from "@/components/ui/craft-card";

const TraditionalCraftsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  // Mock products data
  const products = [
    {
      id: "nakshi-kantha-1",
      image: "/images/products/3.jpg",
      title: "Nakshi Kantha",
      description: "Intricately embroidered traditional quilt with cultural motifs.",
      rating: 5,
      discount: "15%",
      priceRange: "৳2000 - ৳5000"
    },
    {
      id: "pottery-1",
      image: "/images/products/3.jpg",
      title: "Traditional Pottery",
      description: "Handcrafted clay pottery made using ancient techniques.",
      rating: 5,
      discount: "10%",
      priceRange: "৳500 - ৳1500"
    },
    {
      id: "bamboo-craft-1",
      image: "/images/products/3.jpg",
      title: "Bamboo Basket",
      description: "Beautifully woven bamboo basket for everyday use.",
      rating: 5,
      discount: "20%",
      priceRange: "৳300 - ৳800"
    },
    {
      id: "brass-work-1",
      image: "/images/products/3.jpg",
      title: "Brass Decor",
      description: "Traditional brass decorative items with intricate designs.",
      rating: 4,
      discount: "10%",
      priceRange: "৳1000 - ৳3000"
    },
    {
      id: "jute-craft-1",
      image: "/images/products/3.jpg",
      title: "Jute Handicrafts",
      description: "Eco-friendly jute products with traditional patterns.",
      rating: 5,
      discount: "15%",
      priceRange: "৳400 - ৳1200"
    },
    {
      id: "wood-carving-1",
      image: "/images/products/3.jpg",
      title: "Wooden Artifacts",
      description: "Hand-carved wooden items showcasing Bengali artistry.",
      rating: 4,
      discount: "10%",
      priceRange: "৳800 - ৳2500"
    }
  ];

  // Add more products for pagination
  const allProducts = [
    ...products,
    ...Array.from({ length: 10 }, (_, i) => ({
      id: `traditional-craft-${i + 7}`,
      image: "/images/products/3.jpg",
      title: `Traditional Craft ${i + 7}`,
      description: "Beautiful handcrafted Bengali artifact.",
      rating: 4,
      discount: "10%",
      priceRange: "৳500 - ৳1500"
    }))
  ];

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const paginatedProducts = allProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative pt-48 pb-12">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-repeat opacity-10"
          style={{
            backgroundImage: 'url("/images/background.jpg")',
            backgroundSize: 'min(400px, 100%) auto',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-bold font-playfair text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Traditional Crafts
            </h1>
            <p className="font-inter text-gray-500 text-sm sm:text-base max-w-2xl">
              Explore the rich artistry of Bangladesh through our collection of handcrafted treasures. Each piece tells a story of tradition, skill, and cultural heritage.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CraftCard {...product} />
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, allProducts.length)} of{" "}
              {allProducts.length} entries
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

export default TraditionalCraftsPage; 