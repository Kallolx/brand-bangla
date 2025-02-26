import { ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";
import { motion } from "framer-motion";
import { useState} from "react";

const Hero = () => {
  const rotatingWords = ["Tradition", "Customiz"];
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const scrollToDivisionShowcase = () => {
    const divisionShowcase = document.querySelector('#division-showcase');
    if (divisionShowcase) {
      divisionShowcase.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative pt-16 sm:pt-20 md:pt-24 mb-6 sm:mb-10 md:mb-20">
        {/* Video Section */}
        <div className="mx-auto px-3 mt-10 sm:px-4 md:px-10 py-[12px] sm:py-[16px] md:py-[20px]">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
            {/* Loading Animation */}
            {isVideoLoading && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-[#0F5F38] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={handleVideoLoad}
              className={`absolute inset-0 w-full h-full object-cover object-center scale-[1.25] transition-opacity duration-500 ${
                isVideoLoading ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ objectPosition: "50% 50%" }}
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 md:gap-8">
            {/* Title Section - Left Side */}
            <div className="flex-1 max-w-4xl">
              <h1 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-900 leading-[1.2] tracking-wide">
                <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 mb-1 sm:mb-2">
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
                <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                  <span className="text-[#4A5C2F]">Bangladeshi</span>
                  <span>Craftsmanship</span>
                </div>
              </h1>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mt-4 sm:mt-0">
              {/* About Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="flex-1 sm:flex-none"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto font-inter font-bold h-10 sm:h-12 px-4 sm:px-6 bg-white border-gray-400 hover:bg-gray-200 text-gray-700 transition-colors flex items-center justify-center whitespace-nowrap text-sm sm:text-base"
                  onClick={() => window.location.href = 'https://rnd.devevenboat.com/Who%20We%20Are'}
                >
                  About
                </Button>
              </motion.div>

              {/* Explore Heritage Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="flex-1 sm:flex-none"
              >
                <Button 
                  className="w-full sm:w-auto font-inter h-10 sm:h-12 px-4 sm:px-6 bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white flex items-center justify-center whitespace-nowrap text-sm sm:text-base"
                  onClick={scrollToDivisionShowcase}
                >
                  Explore Heritage
                  <ArrowRight className="ml-2 w-3.5 sm:w-4 h-3.5 sm:h-4" />
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
