import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import LocationCard from "@/components/ui/location-card";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { useDivision } from '@/context/DivisionContext';
import { useNavigate } from 'react-router-dom';
import { divisions } from '@/data/divisions';

const DivisionShowcase = () => {
  const { selectedDivision, setSelectedDivision } = useDivision();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const swiperRef = useRef<SwiperType>();
  const [activeLocation, setActiveLocation] = useState(selectedDivision);
  const slideShowInterval = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();

  // Get current division data
  const currentDivision = divisions.find(div => div.name.toLowerCase() === selectedDivision.toLowerCase()) || divisions[0];
  const districts = currentDivision.districts;

  // Get other divisions for the slider
  const otherDivisions = divisions.filter(div => div.name !== currentDivision.name);

  // Add effect to handle division changes
  useEffect(() => {
    setActiveLocation(selectedDivision);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.src = `/videos/${selectedDivision.toLowerCase()}.mp4`;
      videoRef.current.load();
    }
  }, [selectedDivision]);

  // Add effect to handle slideshow
  useEffect(() => {
    if (isPlaying) {
      slideShowInterval.current = setInterval(() => {
        setActiveLocation(prevLocation => {
          const currentIndex = districts.findIndex(loc => loc.name === prevLocation);
          const nextIndex = (currentIndex + 1) % districts.length;
          return districts[nextIndex].name;
        });
      }, 3000); // Change image every 3 seconds
    } else {
      if (slideShowInterval.current) {
        clearInterval(slideShowInterval.current);
      }
    }

    return () => {
      if (slideShowInterval.current) {
        clearInterval(slideShowInterval.current);
      }
    };
  }, [isPlaying, districts]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLocationClick = (locationName: string) => {
    setActiveLocation(locationName);
    setIsPlaying(false); // Stop slideshow when manually selecting a location
    
    // Check if the location is a main division
    const clickedDivision = divisions.find(div => div.name.toLowerCase() === locationName.toLowerCase());
    
    if (clickedDivision) {
      // If clicking a division, just update the selected division without navigation
      setSelectedDivision(clickedDivision.name);
    } else {
      // If clicking a district, navigate to the district page within current division
      const encodedDistrictName = encodeURIComponent(locationName.toLowerCase());
      navigate(`/division/${currentDivision.name.toLowerCase()}/${encodedDistrictName}`);
    }
  };

  const handleExploreClick = () => {
    navigate(`/division/${currentDivision.name.toLowerCase()}`);
  };

  return (
    <section id="division-showcase" className="py-8 sm:py-10 md:py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {/* Left Side - Image Display */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/14] bg-gray-900 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src={`/images/locations/${activeLocation.toLowerCase()}.png`}
                alt={activeLocation}
                className="absolute inset-0 w-full h-full object-cover object-center scale-[1.15] transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Play/Pause Button */}
              <button 
                onClick={togglePlay}
                className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                )}
              </button>

              {/* Location Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-playfair mb-2 sm:mb-3 md:mb-4">{activeLocation}</h3>
                <button 
                  onClick={handleExploreClick}
                  className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 text-white bg-white/20 hover:bg-white/30 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg backdrop-blur-sm transition-colors font-inter text-xs sm:text-sm md:text-base"
                >
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  Explore Heritage
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Location Cards and Featured Locations */}
          <div className="lg:col-span-5 flex flex-col h-full">
            {/* Location Cards Section */}
            <div className="flex-grow">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair mb-4 sm:mb-5 md:mb-6 lg:mb-8">{currentDivision.name.toUpperCase()} DIVISION</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-1.5 md:gap-2">
                {districts.map((district) => (
                  <LocationCard
                    key={district.name}
                    name={district.name}
                    image={district.image}
                    active={district.name === activeLocation}
                    onClick={() => handleLocationClick(district.name)}
                  />
                ))}
              </div>
            </div>

            {/* Featured Locations Slider - Fixed at Bottom */}
            <div className="mt-4 sm:mt-6 md:mt-8">
              <div className="mb-2 sm:mb-3 md:mb-4 flex items-center justify-between">
                <h3 className="text-base sm:text-lg md:text-xl font-medium font-playfair text-gray-900">Other Divisions</h3>
                {/* Navigation Controls */}
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <button 
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <button 
                    onClick={() => swiperRef.current?.slideNext()}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
              
              <div className="relative overflow-hidden">
                <Swiper
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  slidesPerView={1}
                  spaceBetween={8}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 12
                    }
                  }}
                  className="!overflow-hidden"
                >
                  {otherDivisions.map((division) => (
                    <SwiperSlide key={division.id}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`group cursor-pointer ${
                          activeLocation === division.name ? 'ring-2 ring-[#0F5F38]' : ''
                        }`}
                        onClick={() => handleLocationClick(division.name)}
                      >
                        <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden">
                          <img
                            src={`/images/locations/${division.image}.png`}
                            alt={division.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 transition-colors ${
                            activeLocation === division.name 
                              ? 'bg-black/50'
                              : 'bg-black/40 group-hover:bg-black/50'
                          }`} />
                          <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-between">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <span className="text-white/80 font-inter text-xs sm:text-sm">{division.id}</span>
                              <div className="h-px flex-1 bg-white/40" />
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl text-white font-playfair">{division.name}</h3>
                          </div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionShowcase; 