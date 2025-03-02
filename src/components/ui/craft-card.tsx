import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface CraftCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  rating: number;
  discount: string;
  priceRange: string;
}

const CraftCard = ({ id, image, title, description, rating, discount, priceRange }: CraftCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative bg-white border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Before Shadow */}
        <div className="absolute inset-0 -bottom-2 rounded-lg sm:rounded-xl md:rounded-2xl bg-black/5 -z-10 transition-all duration-300 group-hover:bottom-0" />
        
        {/* Image */}
        <div className="relative h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Rating */}
          <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  index < rating ? "fill-[#0F5F38] text-[#0F5F38]" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h3 className="text-base sm:text-lg md:text-xl font-playfair font-semibold text-gray-900">
              {title}
            </h3>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#0F5F38] transition-colors" />
          </div>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base font-inter leading-relaxed mb-3 sm:mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between border-t border-gray-100 pt-3 sm:pt-4">
            <span className="text-black font-inter font-bold text-sm sm:text-base">
              {discount} Off
            </span>
            <span className="text-gray-800 font-inter text-xs sm:text-sm">
              {priceRange}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CraftCard; 