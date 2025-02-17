import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";

interface CraftCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  discount: string;
  priceRange: string;
}

const CraftCard = ({ image, title, description, rating, discount, priceRange }: CraftCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Before Shadow */}
        <div className="absolute inset-0 -bottom-2 rounded-2xl bg-black/5 -z-10 transition-all duration-300 group-hover:bottom-0" />
        
        {/* Image */}
        <div className="relative h-[220px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < rating ? "fill-[#0F5F38] text-[#0F5F38]" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-playfair font-semibold text-gray-900">
              {title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#0F5F38] transition-colors" />
          </div>

          <p className="text-gray-600 text-base font-inter leading-relaxed mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="text-[#0F5F38] font-inter font-medium">
              {discount} Off
            </span>
            <span className="text-gray-600 font-inter text-sm">
              {priceRange}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CraftCard; 