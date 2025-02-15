interface ImageCollageProps {
    images: {
      src: string;
      alt: string;
    }[];
  }
  
  const ImageCollage = ({ images }: ImageCollageProps) => {
    return (
      <div className="grid grid-cols-12 gap-4 max-w-[600px] mx-auto relative">
        {/* Top Row - 2 Images */}
        <div className="col-span-5 relative h-[150px] overflow-hidden group self-end translate-x-10">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="col-span-4 relative h-[300px] overflow-hidden group translate-x-10">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
  
        {/* Bottom Row - 3 Images */}
        <div className="col-span-4 relative h-[160px] overflow-hidden group">
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="col-span-4 relative h-[300px] overflow-hidden group">
          <img
            src={images[3].src}
            alt={images[3].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="col-span-4 relative h-[160px] overflow-hidden group">
          <img
            src={images[4].src}
            alt={images[4].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    );
  };
  
  export default ImageCollage;
  