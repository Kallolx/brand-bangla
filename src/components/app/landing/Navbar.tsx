import { useState, useEffect } from "react";
import {
  User,
  Search,
  ChevronDown,
  ShoppingBag,
  Menu,
  Footprints,
  X,
  ChevronRight,
  MapPin,
  Heart,
  Percent
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shirt, ShirtIcon } from "lucide-react";
import { useDivision } from '@/context/DivisionContext';
import { useCart } from '@/context/CartContext';
import { CartModal } from "@/components/ui/CartModal";
import { useWishlist } from '@/context/WishlistContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { setSelectedDivision } = useDivision();
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { wishlistCount } = useWishlist();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Add smooth scrolling to the entire document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const divisions = [
    { name: "Dhaka", path: "/division/dhaka" },
    { name: "Chittagong", path: "/division/chittagong" },
    { name: "Sylhet", path: "/division/sylhet" },
    { name: "Rajshahi", path: "/division/rajshahi" },
    { name: "Khulna", path: "/division/khulna" },
    { name: "Barisal", path: "/division/barisal" },
    { name: "Rangpur", path: "/division/rangpur" },
    { name: "Mymensingh", path: "/division/mymensingh" }
  ];

  const handleSearch = (searchInput: string) => {
    if (searchInput) {
      window.location.href = `https://rnd.devevenboat.com/category?search=${encodeURIComponent(searchInput)}`;
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner - Simplified for mobile */}
      <div className="bg-[#0F5F38] text-white py-1.5 sm:py-2 px-3 sm:px-4 font-inter">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
          {/* Hide promotional text completely on smallest screens */}
          <span className="hidden sm:block text-left text-[10px] sm:text-xs md:text-xs">
            Free Shipping on Orders Over $100
          </span>
          
          {/* Essential links - always visible */}
          <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-4 sm:gap-5 md:gap-6">
            {/* Currency and Language Selectors - Always visible but compact */}
            <div className="flex items-center gap-2">
              <select 
                className="bg-transparent text-white hover:text-white/80 transition-colors cursor-pointer focus:outline-none text-xs py-0"
                defaultValue="BDT"
                aria-label="Select currency"
              >
                <option value="BDT" className="text-gray-900">BDT</option>
              </select>
              <span className="text-white/40">|</span>
              <select 
                className="bg-transparent text-white hover:text-white/80 transition-colors cursor-pointer focus:outline-none text-xs py-0"
                defaultValue="ENG"
                aria-label="Select language"
              >
                <option value="ENG" className="text-gray-900">ENG</option>
              </select>
            </div>
            
            {/* Login/Sell links - Simplified on mobile */}
            <div className="flex items-center gap-4 sm:gap-3">
              <a 
                href="https://rnd.devevenboat.com/user/vendor-register" 
                className="hover:text-white/80 transition-colors flex items-center gap-1.5"
                aria-label="Sell on our platform"
              >
                <ShoppingBag className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline text-xs">Sell</span>
              </a>
              <a 
                href="https://rnd.devevenboat.com/rider/login" 
                className="hover:text-white/80 transition-colors flex items-center gap-1.5"
                aria-label="Rider login"
              >
                <User className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline text-xs">Rider Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm py-4 md:py-8 px-4 md:px-6 font-inter">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center md:space-x-16">
            <Link to="/" className="flex items-center relative">
              <img
                src="/images/logo.svg"
                alt="Grand Bazaar"
                className="h-8 md:h-12 w-auto"
              />
              <span className="absolute -top-2 -right-4">
                <img src="/icons/registered.png" alt="Logo Icon" className="w-4 h-4" />
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-10">
              <div className="group relative">
                <button className="group inline-flex items-center space-x-1 text-gray-500 hover:text-[#0F5F38] transition-colors focus:outline-none">
                  <span className="font-bold font-playfair text-base">
                    Categories
                  </span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-3 w-56">
                    <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-gray-500" />
                      <a href="https://rnd.devevenboat.com/category/fashion-and-Beauty">Fashion & Beauty</a>
                    </div>
                    <div className="border-t border-gray-200 mx-4"></div>{" "}
                    {/* Divider */}
                    <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                      <Shirt className="w-4 h-4 text-gray-500" />
                      <a href="https://rnd.devevenboat.com/category/fashion-and-Beauty/women-clothing">Women Clothing</a>
                    </div>
                    <div className="border-t border-gray-200 mx-4"></div>{" "}
                    {/* Divider */}
                    <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                      <ShirtIcon className="w-4 h-4 text-gray-500" />
                      <a href="https://rnd.devevenboat.com/category/fashion-and-Beauty/men-clothing">Men Clothing</a>
                    </div>
                    <div className="border-t border-gray-200 mx-4"></div>{" "}
                    {/* Divider */}
                    <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                      <Shirt className="w-4 h-4 text-gray-500" />
                      <a href="https://rnd.devevenboat.com/category/fashion-and-Beauty/baby-clothings">Baby Clothing</a>
                    </div>
                    <div className="border-t border-gray-200 mx-4"></div>{" "}
                    {/* Divider */}
                    <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <Footprints className="w-4 h-4 text-gray-500" />
                      <a href="https://rnd.devevenboat.com/category/fashion-and-Beauty/shoes">Shoes</a>
                    </div>
                    <div className="border-t border-gray-200 mx-4"></div>{" "}
                    {/* Divider */}
                    <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                      <a href="https://rnd.devevenboat.com/category/fashion-and-Beauty/headgear">Headgear</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <button className="group inline-flex items-center space-x-1 text-gray-500 hover:text-[#0F5F38] transition-colors focus:outline-none">
                  <span className="font-bold font-playfair text-base">Divisions</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-3 w-56">
                    {divisions.map((division) => (
                      <>
                        <Link
                          key={division.name}
                          to={division.path}
                          onClick={() => setSelectedDivision(division.name)}
                          className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2"
                        >
                          <MapPin className="w-4 h-4 text-gray-500" />
                          {division.name}
                        </Link>
                        {division.name !== divisions[divisions.length - 1].name && (
                          <div className="border-t border-gray-200 mx-4"></div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="group relative">
                <button className="group inline-flex items-center space-x-1 text-gray-500 hover:text-[#0F5F38] transition-colors focus:outline-none">
                  <span className="font-bold font-playfair text-base"><a href="">Places to go</a> </span>
                </button>
                
              </div> */}

              <div className="group relative">
                <button className="group inline-flex items-center space-x-1 text-gray-500 hover:text-[#0F5F38] transition-colors focus:outline-none">
                  <span className="font-bold font-playfair text-base">
                    <a href="https://rnd.devevenboat.com/Who%20We%20Are">About</a>
                  </span>
                </button>
              </div>

              <div className="group relative">
                <button className="group inline-flex items-center space-x-1 text-gray-500 hover:text-[#0F5F38] transition-colors focus:outline-none">
                  <span className="font-bold  font-playfair text-base">
                    <a href="https://rnd.devevenboat.com/contact">Contact</a>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-[#0F5F38] transition-colors"
              onClick={() => setMobileSearchVisible(!mobileSearchVisible)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Shopping Bag */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-[#0F5F38] transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#0F5F38] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Heart/Wishlist (added for mobile) */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-[#0F5F38] transition-colors relative"
            >
              <a href="https://rnd.devevenboat.com/user/login" className="flex items-center justify-center w-full h-full">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#0F5F38] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </a>
            </Button>

            {/* Percent (added for mobile) */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-[#0F5F38] transition-colors"
            >
              <a href="https://rnd.devevenboat.com/item/compare/view" className="flex items-center justify-center w-full h-full">
                <Percent className="w-5 h-5" />
              </a>
            </Button>

            {/* Menu Toggle */}
            <button
              className="text-gray-700 hover:text-[#0F5F38] transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-4 pr-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0F5F38] focus:border-[#0F5F38] w-[250px]"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 text-gray-700 hover:text-[#0F5F38] transition-colors"
                  onClick={() => {
                    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
                    if (searchInput && searchInput.value) {
                      window.location.href = `https://rnd.devevenboat.com/category?search=${encodeURIComponent(searchInput.value)}`;
                    }
                  }}
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-[#0F5F38] hover:bg-[#0F5F38]/10 transition-all duration-200 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#0F5F38] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-[#0F5F38] hover:bg-[#0F5F38]/10 transition-all duration-200 relative"
              >
                <a href="https://rnd.devevenboat.com/user/login" className="flex items-center justify-center w-full h-full">
                  <Heart className="w-5 h-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#0F5F38] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-[#0F5F38] hover:bg-[#0F5F38]/10 transition-all duration-200"
              >
                <a href="https://rnd.devevenboat.com/item/compare/view" className="flex items-center justify-center w-full h-full">
                  <Percent className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <Button 
              className="bg-[#fff] hover:bg-[#0F5F38]/90 hover:text-white text-black font-inter font-medium px-4 border border-gray-200"
              onClick={() => window.location.href = 'https://rnd.devevenboat.com/user/login'}
            >
              Log in / Sign up
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          className={`${
            mobileSearchVisible ? "max-h-16 opacity-100 mt-4" : "max-h-0 opacity-0"
          } transition-all duration-300 overflow-hidden lg:hidden`}
        >
          <div className="relative flex items-center px-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0F5F38] focus:border-[#0F5F38]"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const target = e.target as HTMLInputElement;
                  handleSearch(target.value);
                }
              }}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 text-gray-700 hover:text-[#0F5F38] transition-colors"
              onClick={() => {
                const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
                handleSearch(searchInput?.value);
              }}
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`fixed top-0 right-0 h-full w-[300px] bg-white transform transition-transform duration-300 ease-in-out flex flex-col ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b relative">
              <div className="w-6 h-6"></div> {/* Empty space to balance the close button */}
              <span className="font-playfair text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
                Menu
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Logo Section */}
            <div className="py-6 flex justify-center border-b">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center relative">
                <img
                  src="/images/logo.svg"
                  alt="Grand Bazaar"
                  className="h-10 w-auto"
                />
                <span className="absolute -top-2 -right-4">
                  <img src="/icons/registered.png" alt="Logo Icon" className="w-3 h-3" />
                </span>
              </Link>
            </div>

            {/* Sidebar Content */}
            <div className="overflow-y-auto flex-grow py-4">
              {/* Products Section */}
              <div className="px-4">
                <button
                  onClick={() => toggleSection("products")}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="font-playfair font-bold text-gray-900">
                    Categories
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedSection === "products" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`space-y-2 pl-4 overflow-hidden transition-all duration-200 ${
                    expandedSection === "products"
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a
                    href="https://rnd.devevenboat.com/category/fashion-and-Beauty"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Fashion & Beauty
                  </a>
                  <a
                    href="https://rnd.devevenboat.com/category/fashion-and-Beauty/women-clothing"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Women Clothing
                  </a>
                  <a
                    href="https://rnd.devevenboat.com/category/fashion-and-Beauty/men-clothing"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Men Clothing
                  </a>
                  <a
                    href="https://rnd.devevenboat.com/category/fashion-and-Beauty/baby-clothings"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Baby Clothing
                  </a>
                  <a
                    href="https://rnd.devevenboat.com/category/fashion-and-Beauty/shoes"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Shoes
                  </a>
                  <a
                    href="https://rnd.devevenboat.com/category/fashion-and-Beauty/headgear"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Headgear
                  </a>
                </div>
              </div>

              {/* Divisions Section */}
              <div className="px-4 mt-4">
                <button
                  onClick={() => toggleSection("divisions")}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="font-playfair font-bold text-gray-900">
                    Divisions
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedSection === "divisions" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`space-y-2 pl-4 overflow-hidden transition-all duration-200 ${
                    expandedSection === "divisions"
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {divisions.map((division) => (
                    <Link
                      key={division.name}
                      to={division.path}
                      onClick={() => {
                        setSelectedDivision(division.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                    >
                      {division.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* About Link */}
              <div className="px-4 mt-4">
                <a
                  href="https://rnd.devevenboat.com/Who%20We%20Are"
                  className="block py-3 font-playfair font-bold text-gray-900 hover:text-[#0F5F38] transition-colors"
                >
                  About
                </a>
              </div>

              {/* Contact Link */}
              <div className="px-4">
                <a
                  href="https://rnd.devevenboat.com/contact"
                  className="block py-3 font-playfair font-bold text-gray-900 hover:text-[#0F5F38] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Login Button at the bottom */}
            <div className="px-4 py-5 border-t mt-auto">
              <Button 
                className="bg-[#fff] hover:bg-[#0F5F38]/90 hover:text-white text-black font-inter font-medium px-4 border border-gray-200 w-full"
                onClick={() => {
                  window.location.href = 'https://rnd.devevenboat.com/user/login';
                  setIsMobileMenuOpen(false);
                }}
              >
                Log in / Sign up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Navbar;

