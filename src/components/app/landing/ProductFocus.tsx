import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const ProductFocus = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Content */}
        <div className="space-y-8">
          <h1 className="font-bold font-playfair text-4xl lg:text-5xl text-gray-900">
            Handwoven Jamdani <br /> Saree in Vibrant Green and Terracotta
          </h1>

          <p className="font-inter text-gray-600 text-lg leading-relaxed">
            Handwoven Jamdani saree with a vibrant green <br /> and terracotta
            contrast, showcasing Bangladeshi <br /> craftsmanship—perfect for
            special occasions.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Add to Cart Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Button className="bg-white hover:bg-gray-100 text-black font-inter font-medium px-8 py-6 border border-gray-200 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </motion.div>

            {/* Buy Now Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Button className="bg-[#0F5F38] hover:bg-[#0D4F30] text-white rounded-lg font-inter font-medium px-8 py-6 border border-gray-200">
                Buy Now
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative aspect-[4/5] w-full">
          <img
            src="/images/products/main.jpg"
            alt="Handwoven Jamdani Saree"
            className="w-full h-[650px] object-cover rounded-tl-[110px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductFocus;
