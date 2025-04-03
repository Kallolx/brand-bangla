import { Button } from "@/components/ui/button";
import ImageCollage from "@/components/ui/image-collage";
import { motion } from "framer-motion";

const NewArrival = () => {
  const images = [
    {
      src: "/images/products/1.jpg",
      alt: "Traditional embroidered dress on display"
    },
    {
      src: "/images/products/2.jpg",
      alt: "Handcrafted traditional shoes"
    },
    {
      src: "/images/products/3.jpg",
      alt: "Artisan crafting jewelry"
    },
    {
      src: "/images/products/4.jpg",
      alt: "Traditional jewelry display"
    },
    {
      src: "/images/products/3.jpg",
      alt: "Traditional dress on mannequin"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"> 
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:top-32 text-center lg:text-left">
          <h2 className="font-bold font-playfair text-3xl sm:text-4xl md:text-5xl text-gray-900 max-w-xl mx-auto lg:mx-0">
            New Arrival
          </h2>
          <p className="font-inter text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Discover our latest addition! Fresh, exciting, and designed to impress—be the first to explore what's new.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button 
              asChild 
              className="bg-[#0F5F38] hover:bg-[#0D4F30] text-white font-inter px-6 py-3 rounded-lg cursor-pointer"
              onClick={() => window.location.href = "https://rnd.devevenboat.com/category"}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                Browse All
              </motion.div>
            </Button>
          </div>
        </div>
  
        {/* Right Image Grid */}
        <div className="relative mt-6 sm:mt-0">
          <ImageCollage images={images} />
        </div>
      </div>
    </section>
  );  
};

export default NewArrival;
