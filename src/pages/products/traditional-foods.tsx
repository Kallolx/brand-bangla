import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/app/landing/Navbar";
import CallToAction from "@/components/app/landing/CallToAction";
import Footer from "@/components/app/landing/Footer";
import CraftCard from "@/components/ui/craft-card";

const TraditionalFoodsPage = () => {
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
      id: "pitha-1",
      image: "/images/products/food.jpg",
      title: "Traditional Pitha",
      description: "Authentic Bengali rice cake with sweet coconut filling.",
      rating: 5,
      discount: "15%",
      priceRange: "৳150 - ৳300"
    },
    {
      id: "mishti-1",
      image: "/images/products/food.jpg",
      title: "Roshogolla",
      description: "Classic Bengali sweet made from chhena and sugar syrup.",
      rating: 5,
      discount: "10%",
      priceRange: "৳200 - ৳400"
    },
    {
      id: "biriyani-1",
      image: "/images/products/food.jpg",
      title: "Kacchi Biriyani",
      description: "Traditional Dhaka-style kacchi biriyani with tender meat.",
      rating: 5,
      discount: "20%",
      priceRange: "৳350 - ৳700"
    },
    {
      id: "vorta-1",
      image: "/images/products/food.jpg",
      title: "Assorted Vorta Platter",
      description: "Selection of traditional Bengali mashed dishes.",
      rating: 4,
      discount: "10%",
      priceRange: "৳200 - ৳400"
    },
    {
      id: "doi-1",
      image: "/images/products/food.jpg",
      title: "Mishti Doi",
      description: "Sweet yogurt made in traditional clay pots.",
      rating: 5,
      discount: "15%",
      priceRange: "৳100 - ৳200"
    },
    {
      id: "chutney-1",
      image: "/images/products/food.jpg",
      title: "Mango Chutney",
      description: "Sweet and tangy traditional mango preserve.",
      rating: 4,
      discount: "10%",
      priceRange: "৳150 - ৳300"
    }
  ];

  // Add more products for pagination
  const allProducts = [
    ...products,
    ...Array.from({ length: 10 }, (_, i) => ({
      id: `traditional-food-${i + 7}`,
      image: "/images/products/food.jpg",
      title: `Traditional Food ${i + 7}`,
      description: "Delicious traditional Bengali cuisine.",
      rating: 4,
      discount: "10%",
      priceRange: "৳200 - ৳400"
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
              Traditional Foods
            </h1>
            <p className="font-inter text-gray-500 text-sm sm:text-base max-w-2xl">
              Discover the authentic flavors of Bangladesh through our carefully curated selection of traditional delicacies. Each dish tells a story of our rich culinary heritage.
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

export default TraditionalFoodsPage; 