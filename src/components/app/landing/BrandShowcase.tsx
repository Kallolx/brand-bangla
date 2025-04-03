import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import styles from './BrandShowcase.module.css';

const BrandShowcase = () => {
  const navigate = useNavigate();

  const handleDivisionClick = (division: string) => {
    navigate(`/division/${division.toLowerCase()}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const regionVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section className="relative pt-8 sm:pt-10 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-16 lg:pb-20">
      {/* Main Background Text */}
      <div 
        className={styles.mainBackground}
        style={{
          backgroundImage: 'url("/images/background-text.jpg")',
        }}
      />

      {/* Illustration Background */}
      <div 
        className={styles.illustrationBackground}
        style={{
          backgroundImage: 'url("/images/background-illustration.png")',
        }}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Map Container */}
        <motion.div 
          className="flex justify-center items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {/* Map SVG with hover effects */}
          <div className={styles.mapContainer}>
            <motion.img
              src="/images/map2.svg"
              alt="Bangladesh Map"
              className={styles.map}
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Interactive Regions */}
            <motion.div 
              className={styles.regions}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {[
                { name: 'Dhaka', top: '42%', left: '45%', image: 'dhaka' },
                { name: 'Chittagong', top: '65%', left: '82%', image: 'chittagong' },
                { name: 'Sylhet', top: '28%', left: '75%', image: 'sylhet' },
                { name: 'Rajshahi', top: '30%', left: '20%', image: 'rajshahi' },
                { name: 'Khulna', top: '60%', left: '25%', image: 'khulna' },
                { name: 'Barisal', top: '65%', left: '45%', image: 'barisal' },
                { name: 'Rangpur', top: '12%', left: '20%', image: 'manikganj' },
                { name: 'Mymensingh', top: '26%', left: '47%', image: 'gopalganj' }
              ].map((division) => (
                <motion.div
                  key={division.name}
                  className={styles.region}
                  style={{ top: division.top, left: division.left }}
                  variants={regionVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 25
                    }
                  }}
                  onClick={() => handleDivisionClick(division.name.toLowerCase())}
                >
                  <motion.span 
                    className={styles.dot}
                    style={{ backgroundImage: `url("/images/locations/${division.image}.png")` }}
                  />
                  <span className={styles.label}>
                    {division.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandShowcase; 