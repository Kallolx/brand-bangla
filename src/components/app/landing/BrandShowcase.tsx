import { motion } from "framer-motion";

const BrandShowcase = () => {
  return (
    <section className="relative pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-24 md:pb-32 lg:pb-40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/images/background2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6
        }}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Map Container */}
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Map SVG with hover effects */}
          <div className="relative group">
            <img
              src="/images/map.svg"
              alt="Bangladesh Map"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandShowcase; 