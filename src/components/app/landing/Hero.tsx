import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Truck,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/ui/confetti";
import { WordRotate } from "@/components/ui/word-rotate";
import { motion } from "framer-motion";

const Hero = () => {
  const rotatingWords = ["Tradition", "Customiz"];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* White Background Pattern */}
        <div className="absolute inset-0">
          <img
            src="/images/background.jpg"
            alt="Pattern"
            className="w-full h-[120vh] object-cover opacity-70"
          />
        </div>

        {/* Confetti Effect */}
        <Confetti className="fixed inset-0 w-full h-full pointer-events-none z-50" />

        {/* Tagline Section */}
        <div className="max-w-[1920px] mx-auto px-4 md:px-6 relative pt-28 md:pt-40 pb-12 md:pb-20 w-full">
          <div className="text-center space-y-6 max-w-[1400px] mx-auto mb-12 md:mb-20">
            <div className="inline-block cursor-pointer">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="font-inter text-xs md:text-sm font-medium bg-[#F8F2E7] text-black px-2 py-1 rounded-full flex items-center gap-2"
              >
                <span className="bg-white px-2 md:px-4 py-1 rounded-full whitespace-nowrap">
                  What's new?
                </span>
                <span className="font-bold whitespace-nowrap">
                  Check new collections
                </span>
                <ArrowRight className="w-4 h-4 font-bold hidden md:block" />
              </motion.div>
            </div>

            <div className="text-center max-w-[1200px] mx-auto px-4 md:px-0">
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-900 leading-tight tracking-wide flex flex-wrap justify-center items-center gap-x-4">
                Embrace{" "}
                <span className="inline-flex items-center">
                  <WordRotate
                    words={rotatingWords}
                    className="text-[#B1894A]"
                    duration={2500}
                    motionProps={{
                      initial: { opacity: 0, y: -50 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 50 },
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                  />
                </span>{" "}
                <span>With Exquisite </span>
                <span className="text-[#4A5C2F]">Bangladeshi</span>{" "}
                <span>Craftsmanship</span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-inter px-4 md:px-0">
              Discover handcrafted Bangladeshi treasures, from Jamdani sarees to
              artisanal products, each reflecting the rich heritage and artistry
              of Bangladesh.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4 px-4 md:px-0">
      {/* Reels Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <Button
          variant="outline"
          className="w-full sm:w-auto font-inter font-bold h-12 px-6 bg-white border-gray-400 hover:bg-gray-200 text-gray-700 transition-colors flex items-center"
        >
          <img src="/icons/play.svg" alt="play icon" className="w-5 h-5 mr-2" />
          Reels
        </Button>
      </motion.div>

      {/* Browse Product Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <Button className="w-full sm:w-auto font-inter h-12 px-6 bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white flex items-center">
          Browse Product
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </div>
          </div>

          {/* Hero Image Slider */}
          <div className="relative max-w-5xl mx-auto px-4 md:px-0">
            <div className="aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/hero/1.jpg"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-6 md:left-4 top-1/2 -translate-y-1/2 w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/60 shadow-lg hover:bg-white flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all">
              <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
            </button>
            <button className="absolute right-6 md:right-4 top-1/2 -translate-y-1/2 w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/60 shadow-lg hover:bg-white flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all">
              <ChevronRight className="w-5 md:w-6 h-5 md:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Free Shipping Card */}
          <div className="bg-white p-6 rounded-lg border border-gray-100 flex items-start space-x-4">
            <div className="p-3 bg-[#EBFFF6] rounded-lg">
              <Truck className="w-6 h-6 text-[#0F5F38]" />
            </div>
            <div>
              <h3 className="font-inter text-lg font-medium text-gray-900 mb-1">
                Free Shipping
              </h3>
              <p className="font-inter text-sm text-gray-500">
                International shipping available for all orders over $99
              </p>
            </div>
          </div>

          {/* Buy Now Pay Later Card */}
          <div className="bg-white p-6 rounded-lg border border-gray-100 flex items-start space-x-4">
            <div className="p-3 bg-[#EBFFF6] rounded-lg">
              <CreditCard className="w-6 h-6 text-[#0F5F38]" />
            </div>
            <div>
              <h3 className="font-inter text-lg font-medium text-gray-900 mb-1">
                Buy Now. Pay Later
              </h3>
              <p className="font-inter text-sm text-gray-500">
                0% Interest financing available Pay after 30 days
              </p>
            </div>
          </div>

          {/* Secure Payments Card */}
          <div className="bg-white p-6 rounded-lg border border-gray-100 flex items-start space-x-4">
            <div className="p-3 bg-[#EBFFF6] rounded-lg">
              <ShieldCheck className="w-6 h-6 text-[#0F5F38]" />
            </div>
            <div>
              <h3 className="font-inter text-lg font-medium text-gray-900 mb-1">
                Secure Payments
              </h3>
              <p className="font-inter text-sm text-gray-500">
                Guarantee 100% secure payments online on our website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
