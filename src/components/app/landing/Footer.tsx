import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X, Check } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowToast(true);
      setEmail("");
      // Hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-[#0F5F38] text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3 animate-slide-in-bottom">
          <Check className="w-5 h-5 text-white" />
          <span className="font-inter">
            Successfully subscribed to newsletter!
          </span>
          <button
            onClick={() => setShowToast(false)}
            className="text-white/80 hover:text-white transition-colors ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 text-center md:text-left">
            <div className="relative inline-block mx-auto md:mx-0">
              <img
                src="/images/logo.svg"
                alt="Brand Bangladesh"
                className="h-12 w-auto"
              />
              <span className="absolute -top-2 -right-4">
                <img src="/icons/registered.png" alt="Logo Icon" className="w-4 h-4" />
              </span>
            </div>
            
            <div className="space-y-4 text-gray-500 font-inter">
              <p>268/A, Bashundhara R/A Block-I, Road-4,</p>
              <p>Dhaka, 1229</p>
              <p>+880 123 45 67</p>
              <p>support@bangladesh.com</p>
            </div>
          </div>

          {/* Product Links */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-lg text-gray-900 mb-6">
              Categories
            </h3>
            <ul className="space-y-4 font-inter">
              <li>
                <a
                  href="https://rnd.devevenboat.com/category/fashion-and-Beauty"
                  className="text-gray-500 hover:text-[#0F5F38] transition-colors"
                >
                  Fashion & Beauty
                </a>
              </li>
              <li>
                <a
                  href="https://rnd.devevenboat.com/category/camera-and-photo"
                  className="text-gray-500 hover:text-[#0F5F38] transition-colors"
                >
                  Camera & Photo
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <a
                  href="https://rnd.devevenboat.com/category/smart-phone-and-tablet"
                  className="text-gray-500 hover:text-[#0F5F38] transition-colors"
                >
                  Smart Phone & Tablet
                </a>
                <span className="text-xs font-medium text-[#0F5F38] bg-[#0F5F38]/10 px-2 py-0.5 rounded">
                  New
                </span>
              </li>
              <li>
                <a
                  href="https://rnd.devevenboat.com/category/sport-and-Outdoor"
                  className="text-gray-500 hover:text-[#0F5F38] transition-colors"
                >
                  Sport & Outdoor
                </a>
              </li>
              <li>
                <a
                  href="https://rnd.devevenboat.com/category/jewelry-and-watches"
                  className="text-gray-500 hover:text-[#0F5F38] transition-colors"
                >
                  Jewelry & Watches
                </a>
              </li>
              <li>
                <a
                  href="https://rnd.devevenboat.com/category/health-and-beauty"
                  className="text-gray-500 hover:text-[#0F5F38] transition-colors"
                >
                  Health & Beauty
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-lg text-gray-900 mb-6">
              Company
            </h3>
            <ul className="space-y-4 font-inter">
              <li>
                <a
                  href="https://rnd.devevenboat.com/Who We Are"
                  className="text-gray-500 hover:text-[#0F5F38] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://rnd.devevenboat.com/contact"
                  className="text-gray-500 hover:text-[#0F5F38] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://rnd.devevenboat.com/Statement"
                  className="text-gray-500 hover:text-[#0F5F38] transition-colors"
                >
                  Statement
                </a>
              </li>
              <li>
                <a
                  href="https://rnd.devevenboat.com/Guiding Principles"
                  className="text-gray-500 hover:text-[#0F5F38] transition-colors"
                >
                  Guiding Principles
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-lg text-gray-900 mb-6">
              Stay up to date
            </h3>
            <div className="space-y-4">
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F5F38]/20 focus:border-[#0F5F38] font-inter transition-all duration-200"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white font-inter transition-colors duration-200"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500 font-inter">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 font-inter text-sm text-center md:text-left">
              © 2025 Brand Bangladesh. All rights reserved.
              <br />
              Developed By{" "}
              <a
                href="https://qourin.com"
                className="text-black hover:text-[#0F5F38] transition-colors"
              >
                Qourin
              </a>
            </p>

            {/* Links */}
            <div className="flex items-center justify-center md:justify-start gap-6 font-inter text-sm">
              <a
                href="https://rnd.devevenboat.com/terms"
                className="text-gray-500 hover:text-[#0F5F38] transition-colors"
              >
                Terms
              </a>
              <a
                href="https://rnd.devevenboat.com/privacy"
                className="text-gray-500 hover:text-[#0F5F38] transition-colors"
              >
                Privacy
              </a>
              <a
                href="https://rnd.devevenboat.com/terms"
                className="text-gray-500 hover:text-[#0F5F38] transition-colors"
              >
                Cookies
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center justify-center md:justify-start gap-5">
              <div className="flex items-center gap-6">
                <img
                  src="/icons/payments/paypal.png"
                  alt="PayPal"
                  className="h-8"
                />
                <img
                  src="/icons/payments/mastercard.png"
                  alt="Mastercard"
                  className="h-8"
                />
                <img
                  src="/icons/payments/gpay.png"
                  alt="Google Pay"
                  className="h-8"
                />
                <img
                  src="/icons/payments/applepay.png"
                  alt="Apple Pay"
                  className="h-8"
                />
                <img
                  src="/icons/payments/visa.png"
                  alt="Visa"
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
