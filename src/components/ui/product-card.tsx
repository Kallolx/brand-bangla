import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  rating: number;
  discount: string;
  priceRange: string;
  isHovered?: boolean;
}

const ProductCard = ({ image, name, rating, discount, priceRange, isHovered }: ProductCardProps) => {
  return (
    <motion.div
      className="relative w-full h-[400px] cursor-pointer overflow-hidden rounded-md group"
      whileHover={{ scale: 1.05 }}
      animate={{
        scale: isHovered ? 0.95 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

      {/* Product Info Card */}
      <motion.div 
        className="absolute inset-0 flex flex-col justify-end p-6"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div 
          className="backdrop-blur-sm bg-white/20 rounded-md p-6 border border-white/10"
          whileHover={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            transition: { duration: 0.2 }
          }}
        >
          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < rating ? "fill-white text-white" : "text-white/40"
                }`}
              />
            ))}
          </div>

          {/* Product Name */}
          <motion.h3 
            className="text-white font-playfair text-xl font-medium mb-2"
            whileHover={{ scale: 1.02 }}
          >
            {name}
          </motion.h3>

          {/* Discount */}
          <motion.p 
            className="text-white font-inter font-medium mb-2"
            whileHover={{ scale: 1.02 }}
          >
            {discount} Off
          </motion.p>

          {/* Price Range */}
          <motion.p 
            className="text-white/90 font-inter text-sm"
            whileHover={{ scale: 1.02 }}
          >
            {priceRange}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard; 