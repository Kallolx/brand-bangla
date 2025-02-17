import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import LocationCard from "@/components/ui/location-card";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const DivisionShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const swiperRef = useRef<SwiperType>();
  const [activeLocation, setActiveLocation] = useState("Dhaka");

  const locations = [
    { name: "Dhaka", image: "dhaka" },
    { name: "Kishoreganj", image: "kishoreganj" },
    { name: "Gazipur", image: "gazipur" },
    { name: "Rajbari", image: "rajbari" },
    { name: "Gopalganj", image: "gopalganj" },
    { name: "Faridpur", image: "faridpur" },
    { name: "Shariatpur", image: "shariatpur" },
    { name: "Tangail", image: "tangail" },
    { name: "Narsingdi", image: "narsingdi" },
    { name: "Madaripur", image: "madaripur" },
    { name: "Manikganj", image: "manikganj" },
    { name: "Munshiganj", image: "munshiganj" }
  ];

  const featuredLocations = [
    {
      id: "02",
      name: "Chittagong",
      image: "chittagong",
    },
    {
      id: "03",
      name: "Shylet",
      image: "shylet",
    },
    {
      id: "04",
      name: "Rajshahi",
      image: "rajshahi",
    },
    {
      id: "05",
      name: "Khulna",
      image: "khulna",
    },
    {
      id: "06",
      name: "Barisal",
      image: "barisal",
    }
  ];

  const handleLocationClick = (locationName: string) => {
    setActiveLocation(locationName);
    // Reset video state
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.src = `/videos/${locationName.toLowerCase()}.mp4`;
      videoRef.current.load();
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Video Player */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/14] bg-gray-900 rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover object-center scale-110"
                poster={`/images/locations/${activeLocation.toLowerCase()}.png`}
              >
                <source src={`/videos/${activeLocation.toLowerCase()}.mp4`} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Play/Pause Button */}
              <button 
                onClick={togglePlay}
                className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>

              {/* Location Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-4xl text-white font-playfair mb-4">{activeLocation}</h3>
                <button className="inline-flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg backdrop-blur-sm transition-colors font-inter">
                  <Play className="w-5 h-5" />
                  Explore Heritage
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Location Cards and Featured Locations */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Location Cards */}
            <div>
              <h2 className="text-4xl font-bold font-playfair mb-9">DHAKA DIVISION</h2>
              <div className="grid grid-cols-3 gap-5">
                {locations.map((location) => (
                  <LocationCard
                    key={location.name}
                    name={location.name}
                    image={location.image}
                    active={location.name === activeLocation}
                    onClick={() => handleLocationClick(location.name)}
                  />
                ))}
              </div>
            </div>

            {/* Featured Locations Slider */}
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-medium font-playfair text-gray-900">Other Divisions</h3>
                {/* Navigation Controls */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => swiperRef.current?.slideNext()}
                    className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="relative overflow-hidden">
                <Swiper
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  slidesPerView={2}
                  spaceBetween={12}
                  className="!overflow-hidden"
                >
                  {featuredLocations.map((location) => (
                    <SwiperSlide key={location.id}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`group cursor-pointer ${
                          activeLocation === location.name ? 'ring-2 ring-[#0F5F38]' : ''
                        }`}
                        onClick={() => handleLocationClick(location.name)}
                      >
                        <div className="relative aspect-[4/4] rounded-xl overflow-hidden">
                          <img
                            src={`/images/locations/${location.image}.png`}
                            alt={location.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 transition-colors ${
                            activeLocation === location.name 
                              ? 'bg-black/50'
                              : 'bg-black/40 group-hover:bg-black/50'
                          }`} />
                          <div className="absolute inset-0 p-4 flex flex-col justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-white/80 font-inter text-sm">{location.id}</span>
                              <div className="h-px flex-1 bg-white/40" />
                            </div>
                            <h3 className="text-xl text-white font-playfair">{location.name}</h3>
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