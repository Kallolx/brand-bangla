import { ArrowRight, MapPin, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/ui/confetti";
import { WordRotate } from "@/components/ui/word-rotate";
import { motion } from "framer-motion";

const Hero = () => {
  const rotatingWords = ["Tradition", "Customiz"];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative pt-24 mb-20">
        {/* Video Section */}
        <div className="mx-auto px-10 py-[20px]">
          <div className="relative overflow-hidden rounded-none md:rounded-2xl h-[700px] md:h-[700px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ objectPosition: "50% 50%" }}
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Weather Widget */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full">
                <Cloud className="w-5 h-5 text-gray-700" />
                <span className="font-inter font-medium text-gray-900">19°C / 13°C</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full">
                <MapPin className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Confetti Effect */}
        <Confetti className="fixed inset-0 w-full h-full pointer-events-none z-50" />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            {/* Title Section - Left Side */}
            <div className="flex-1 max-w-4xl">
              <h1 className="font-playfair text-xl sm:text-3xl md:text-5xl font-semibold text-gray-900 leading-[1.2] tracking-wide">
                <div className="flex items-baseline gap-x-3 mb-2">
                  <span>Embrace</span>
                  <span className="text-[#B1894A]">
                    <WordRotate
                      words={rotatingWords}
                      duration={2500}
                      motionProps={{
                        initial: { opacity: 0, y: -50 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 50 },
                        transition: { duration: 0.25, ease: "easeOut" },
                      }}
                    />
                  </span>
                  <span>With Exquisite</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-[#4A5C2F]">Bangladeshi</span>
                  <span className="ml-3">Craftsmanship</span>
                </div>
              </h1>
            </div>

            {/* Buttons Section - Right Side */}
            <div className="flex flex-row items-center gap-4 mt-8 lg:mt-0 lg:ml-8">
              {/* Reels Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Button
                  variant="outline"
                  className="font-inter font-bold h-12 px-6 bg-white border-gray-400 hover:bg-gray-200 text-gray-700 transition-colors flex items-center justify-center whitespace-nowrap"
                >
                  
                  About
                </Button>
              </motion.div>

              {/* Browse Product Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Button className="font-inter h-12 px-6 bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white flex items-center justify-center whitespace-nowrap">
                  Explore Heritage
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
