import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CategoryCards = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Traditional Clothes",
      description: "Discover authentic Bangladeshi attire, from elegant Jamdani sarees to traditional Panjabis.",
      image: "/images/products/1.jpg",
      path: "/products/traditional-clothes"
    },
    {
      title: "Traditional Foods",
      description: "Explore the rich flavors of Bangladesh with our curated selection of traditional delicacies.",
      image: "/images/products/food.jpg",
      path: "/products/traditional-foods"
    },
    {
      title: "Traditional Crafts",
      description: "Experience the artistry of Bangladesh through handcrafted treasures and cultural artifacts.",
      image: "/images/products/3.jpg",
      path: "/products/traditional-crafts"
    },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-24 md:pb-32 lg:pb-40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-repeat"
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundSize: '800px',
          opacity: 1
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => handleNavigate(category.path)}
            >
              <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-playfair font-semibold text-gray-900">
                      {category.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#0F5F38] transition-colors" />
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base font-inter leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards; 