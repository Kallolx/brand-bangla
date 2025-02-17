import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CategoryCards = () => {
  const categories = [
    {
      title: "Traditional Clothes",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/images/products/1.jpg",
    },
    {
      title: "Traditional Foods",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/images/products/food.jpg",
    },
    {
      title: "Traditional Crafts",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/images/products/3.jpg",
    },
  ];

  return (
    <section className="relative pt-40 pb-40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-repeat"
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundSize: '1000px',
          opacity: 100
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-playfair font-semibold text-gray-900">
                      {category.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#0F5F38] transition-colors" />
                  </div>
                  <p className="text-gray-600 text-base font-inter leading-relaxed">
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