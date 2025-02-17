import { motion } from "framer-motion";

interface LocationCardProps {
  name: string;
  image: string;
  active?: boolean;
  onClick?: () => void;
}

const LocationCard = ({ name, image, active, onClick }: LocationCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div 
        className={`
          relative h-[40px] rounded-md overflow-hidden flex items-center
          border border-gray-200 px-3
          ${active ? 'bg-white shadow-sm border-gray-200' : 'bg-transparent hover:border-gray-300'}
          transition-all duration-200 hover:shadow-sm
        `}
      >
        <div className="relative w-6 h-6 rounded-md overflow-hidden shrink-0">
          <img
            src={`/images/locations/${image}.png`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className={`font-inter ml-3 text-sm font-medium truncate ${
          active ? 'text-gray-900' : 'text-gray-600'
        }`}>
          {name}
        </span>
      </div>
    </motion.button>
  );
};

export default LocationCard; 