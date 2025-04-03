import { ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";
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
        <div className="mx-auto mt-10 w-full">
          <div className="relative overflow-hidden h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
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
              className={`absolute inset-0 w-full h-full object-cover object-center scale-[1.5] transition-opacity duration-500 ${
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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
            {/* Title Section */}
            <div className="max-w-4xl">
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.2] tracking-wide text-center lg:text-left">
                <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2 sm:gap-x-3 mb-2 sm:mb-3">
                  <span>Embrace</span>
                  <span className="text-[#B1894A]">
                    <WordRotate
                      words={rotatingWords}
                      duration={2000}
                      className="inline-block"
                    />
                  </span>
                  <span>With Exquisite</span> <span className="text-[#4A5C2F]">Bangladeshi</span>  <span>Craftsmanship</span>
                </div>
              </h1>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-row items-center gap-3 justify-center lg:justify-end">
              {/* About Button */}
              <Button
                variant="outline"
                className="min-w-[140px] font-inter font-medium h-11 px-6 bg-white/80 backdrop-blur-sm border-gray-300 hover:bg-white hover:border-gray-400 text-gray-700 transition-all duration-300"
                onClick={() => window.location.href = 'https://rnd.devevenboat.com/Who%20We%20Are'}
              >
                About
              </Button>

              {/* Explore Heritage Button */}
              <Button 
                className="min-w-[140px] font-inter h-11 px-6 bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white transition-all duration-300 group"
                onClick={scrollToDivisionShowcase}
              >
                Explore Heritage
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
