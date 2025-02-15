import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/images/logo.svg" alt="Brand Bangladesh" className="h-12 w-auto" />
            <div className="space-y-4 text-gray-500 font-inter">
              <p>268/A, Bashundhara R/A Block-I, Road-4,</p>
              <p>Dhaka, 1229</p>
              <p>+880 123 45 67</p>
              <p>support@bangladesh.com</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-playfair text-lg text-gray-900 mb-6">Product</h3>
            <ul className="space-y-4 font-inter">
              <li>
                <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Information</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Payment</a>
              </li>
              <li className="flex items-center gap-2">
                <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Shipping</a>
                <span className="text-xs font-medium text-[#0F5F38] bg-[#0F5F38]/10 px-2 py-0.5 rounded">New</span>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Returns</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Gift Card</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Guest purchase</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-playfair text-lg text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4 font-inter">
              <li>
                <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Our Journals</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-lg text-gray-900 mb-6">Stay up to date</h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0F5F38]/20 focus:border-[#0F5F38] font-inter"
                />
                <Button className="bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white font-inter whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 font-inter text-sm">
              © 2077 Brand Bangladesh. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6 font-inter text-sm">
              <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-[#0F5F38] transition-colors">Cookies</a>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-5">
              <span className="text-gray-500 font-inter text-sm">We accept</span>
              <div className="flex items-center gap-6">
                <img src="/icons/payments/paypal.png" alt="PayPal" className="h-8" />
                <img src="/icons/payments/mastercard.png" alt="Mastercard" className="h-8" />
                <img src="/icons/payments/gpay.png" alt="Google Pay" className="h-8" />
                <img src="/icons/payments/applepay.png" alt="Apple Pay" className="h-8" />
                <img src="/icons/payments/visa.png" alt="Visa" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 