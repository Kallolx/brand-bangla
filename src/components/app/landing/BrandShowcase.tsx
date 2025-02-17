import { motion } from "framer-motion";

const BrandShowcase = () => {
  return (
    <section className="relative pt-40 pb-40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundSize: '500px',
          opacity: 100
        }}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative">
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
              className="w-[500px] h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandShowcase; 