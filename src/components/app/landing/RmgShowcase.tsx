import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const RmgShowcase = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-8">
          {/* Image */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="relative aspect-[21/9] w-full">
              <img
                src="/images/2nd.jpg"
                alt="RMG Industry Worker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto md:mx-0"
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold font-playfair text-gray-900 mb-3 sm:mb-4 leading-tight">
                Bangladesh's RMG industry is leading in the 2nd position all over
                the world.
              </h2>
              <p className="text-gray-500 text-sm sm:text-base md:text-lg font-inter mb-5 sm:mb-8">
                Bangladesh's RMG industry ranks second globally, recognized for
                quality and competitiveness, driving economic growth and job
                creation.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  className="bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white font-inter px-6 py-6"
                  onClick={() =>
                    window.location.href = "https://rnd.devevenboat.com/category"
                  }
                >
                  Shop Quality Categories
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RmgShowcase;
