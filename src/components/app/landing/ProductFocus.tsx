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
          Brand Bangladesh is the perfect place to sell authentic products.
          </h1>

          <p className="font-inter text-gray-600 text-lg leading-relaxed">
          Brand Bangladesh brings you authentic products that celebrate the craftsmanship and heritage of Bangladesh, from handcrafted to traditional art.
          </p>

          <div className="flex flex-wrap gap-4">
           {/* Buy Now Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Button className="bg-[#0F5F38] hover:bg-[#0D4F30] text-white rounded-lg font-inter font-medium px-8 py-6 border border-gray-200">
                Open Your Shop
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
