import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/app/landing/Navbar";
import CallToAction from "@/components/app/landing/CallToAction";
import Footer from "@/components/app/landing/Footer";
import CraftCard from "@/components/ui/craft-card";

const TraditionalClothesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);


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
      id: "banarasi-saree-1",
      image: "/images/products/1.jpg",
      title: "Jamdani Saree",
      description: "Exquisite handwoven fabric with intricate geometric and floral patterns, a pride of Bengali heritage.",
      rating: 5,
      discount: "15%",
      priceRange: "৳300 - ৳1200",
    },
    {
      id: "nokshi-katha-1",
      image: "/images/products/2.jpg",
      title: "Traditional Nokshi katha",
      description: "Beautiful traditional embroidered quilt that tells stories through intricate needlework.",
      rating: 5,
      discount: "10%",
      priceRange: "৳100 - ৳1500",
    },
    {
      id: "banarasi-saree-2",
      image: "/images/products/3.jpg",
      title: "Banarasi Saree",
      description: "Luxurious silk saree with rich zari work and traditional motifs.",
      rating: 5,
      discount: "30%",
      priceRange: "৳700 - ৳1500",
    },
    {
      id: "katan-saree-1",
      image: "/images/products/4.jpg",
      title: "Katan Saree",
      description: "Pure silk saree with distinctive patterns and superior craftsmanship.",
      rating: 5,
      discount: "25%",
      priceRange: "৳1200 - ৳2000",
    },
    {
      id: "muslin-saree-1",
      image: "/images/products/2.jpg",
      title: "Muslin Saree",
      description: "Legendary fine cotton fabric known for its exceptional softness and elegance.",
      rating: 5,
      discount: "20%",
      priceRange: "৳5000 - ৳50000",
    },
    {
      id: "tangail-saree-1",
      image: "/images/products/1.jpg",
      title: "Tangail Saree",
      description: "Traditional handloom saree with distinctive Bengali motifs and patterns.",
      rating: 4,
      discount: "15%",
      priceRange: "৳200 - ৳2000",
    },
    // Add more products to test pagination
    ...Array(10)
      .fill(null)
      .map((_, i) => ({
        id: `traditional-clothing-${i + 7}`,
        image: `/images/products/${(i % 4) + 1}.jpg`,
        title: `Traditional Clothing ${i + 7}`,
        description: "Beautiful traditional attire showcasing Bengali heritage and craftsmanship.",
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-48 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-bold font-playfair text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Traditional Clothes
            </h1>
            <p className="font-inter text-gray-500 text-sm sm:text-base max-w-2xl">
              Discover the rich heritage of Bengali traditional clothing, from exquisite Jamdani sarees to 
              handcrafted textiles that tell stories of our culture and craftsmanship.
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, products.length)} of{" "}
              {products.length} entries
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

export default TraditionalClothesPage; 