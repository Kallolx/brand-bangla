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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { setSelectedDivision } = useDivision();

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
    { name: "Rangpur", path: "/division/rangpur" }
  ];

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
                <option value="USDT" className="text-gray-900">USDT</option>
              </select>
              <span className="text-white/40">|</span>
              <select 
                className="bg-transparent text-white hover:text-white/80 transition-colors cursor-pointer focus:outline-none text-xs py-0"
                defaultValue="ENG"
                aria-label="Select language"
              >
                <option value="ENG" className="text-gray-900">ENG</option>
                <option value="BN" className="text-gray-900">বাংলা</option>
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
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.svg"
                alt="Grand Bazaar"
                className="h-8 md:h-12 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-10">
              <div className="group relative">
                <button className="group inline-flex items-center space-x-1 text-gray-500 hover:text-[#0F5F38] transition-colors focus:outline-none">
                  <span className="font-bold font-playfair text-base">
                    Products
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

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-[#0F5F38] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
            </Button>
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
                className="text-gray-700 hover:text-[#0F5F38] hover:bg-[#0F5F38]/10 transition-all duration-200"
              >
                <a href="https://rnd.devevenboat.com/item/compare/view" className="flex items-center justify-center w-full h-full">
                  <ShoppingBag className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-[#0F5F38] hover:bg-[#0F5F38]/10 transition-all duration-200"
              >
                <a href="https://rnd.devevenboat.com/user/login" className="flex items-center justify-center w-full h-full">
                  <Heart className="w-5 h-5" />
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

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`fixed top-0 right-0 h-full w-[300px] bg-white transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-playfair text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="overflow-y-auto h-[calc(100%-60px)] py-4">
              {/* Traditional Section */}
              <div className="px-4">
                <button
                  onClick={() => toggleSection("traditional")}
                  className="flex items-center justify-between w-full py-2 text-left"
                >
                  <span className="font-playfair font-bold text-gray-900">
                    Traditional
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedSection === "traditional" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`space-y-2 pl-4 overflow-hidden transition-all duration-200 ${
                    expandedSection === "traditional"
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Jamdani Saree
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Salwar Kameez
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Panjabi
                  </a>
                </div>
              </div>

              {/* Men Section */}
              <div className="px-4">
                <button
                  onClick={() => toggleSection("men")}
                  className="flex items-center justify-between w-full py-2 text-left"
                >
                  <span className="font-playfair font-bold text-gray-900">
                    Men
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedSection === "men" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`space-y-2 pl-4 overflow-hidden transition-all duration-200 ${
                    expandedSection === "men"
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Shirts
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Pants
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Accessories
                  </a>
                </div>
              </div>

              {/* Women Section */}
              <div className="px-4">
                <button
                  onClick={() => toggleSection("women")}
                  className="flex items-center justify-between w-full py-2 text-left"
                >
                  <span className="font-playfair font-bold text-gray-900">
                    Women
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedSection === "women" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`space-y-2 pl-4 overflow-hidden transition-all duration-200 ${
                    expandedSection === "women"
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Dresses
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Tops
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Jewelry
                  </a>
                </div>
              </div>

              {/* Others Section */}
              <div className="px-4">
                <button
                  onClick={() => toggleSection("others")}
                  className="flex items-center justify-between w-full py-2 text-left"
                >
                  <span className="font-playfair font-bold text-gray-900">
                    Others
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedSection === "others" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`space-y-2 pl-4 overflow-hidden transition-all duration-200 ${
                    expandedSection === "others"
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Home Decor
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Handicrafts
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-[#0F5F38] transition-colors"
                  >
                    Gift Items
                  </a>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
                <Button 
                  className="w-full bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white"
                  onClick={() => window.location.href = 'https://rnd.devevenboat.com/user/login'}
                >
                  Log in / Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

