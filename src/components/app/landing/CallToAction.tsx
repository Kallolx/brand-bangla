import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X, Check } from "lucide-react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleGetOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowToast(true);
      setEmail("");
      // Hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-[#0F5F38] text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3 animate-slide-in-bottom">
          <Check className="w-5 h-5 text-white" />
          <span className="font-inter">Your 10% discount code has been sent!</span>
          <button 
            onClick={() => setShowToast(false)}
            className="text-white/80 hover:text-white transition-colors ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

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
          <form onSubmit={handleGetOffer} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 rounded-lg bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 font-inter transition-all duration-200"
            />
            <Button 
              type="submit"
              className="bg-[#0F5F38] hover:bg-[#0F5F38]/90 py-3 sm:py-6 text-white font-inter px-8 whitespace-nowrap mt-4 sm:mt-0 transition-colors duration-200"
            >
              Get offer
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
