import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
      <div className="bg-[#D2AB67] rounded-2xl px-8 py-12 sm:py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Title */}
          <h2 className="font-playfair text-3xl sm:text-4xl text-white font-medium">
            Get 10% Discount
          </h2>

          {/* Description */}
          <p className="font-inter text-base sm:text-lg text-white/90">
            Enjoy 10% off on your next purchase! Don't miss this limited-time offer to save on your favorites.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 font-inter"
            />
            <Button 
              className="bg-[#0F5F38] hover:bg-[#0F5F38]/90 py-3 sm:py-6 text-white font-inter px-8 whitespace-nowrap mt-4 sm:mt-0"
            >
              Get offer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
