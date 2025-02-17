import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Search,
  User,
  ChevronDown,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
  Gem,
  Home,
  Wrench,
  Gift,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shirt, ShirtIcon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      } py-4 md:py-8 px-4 md:px-6 font-inter`}
    >
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
                  Traditional
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-3 w-56">
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-gray-500" />
                    Jamdani Saree
                  </div>
                  <div className="border-t border-gray-200 mx-4"></div>{" "}
                  {/* Divider */}
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <Shirt className="w-4 h-4 text-gray-500" />
                    Salwar Kameez
                  </div>
                  <div className="border-t border-gray-200 mx-4"></div>{" "}
                  {/* Divider */}
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <ShirtIcon className="w-4 h-4 text-gray-500" />
                    Panjabi
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="group inline-flex items-center space-x-1 text-gray-500 hover:text-[#0F5F38] transition-colors focus:outline-none">
                <span className="font-bold font-playfair text-base">Men</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-3 w-56">
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <Shirt className="w-4 h-4 text-gray-500" />
                    Shirts
                  </div>
                  <div className="border-t border-gray-200 mx-4"></div>{" "}
                  {/* Divider */}
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <Shirt className="w-4 h-4 text-gray-500" />
                    Pants
                  </div>
                  <div className="border-t border-gray-200 mx-4"></div>{" "}
                  {/* Divider */}
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-gray-500" />
                    Accessories
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="group inline-flex items-center space-x-1 text-gray-500 hover:text-[#0F5F38] transition-colors focus:outline-none">
                <span className="font-bold font-playfair text-base">Women</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-3 w-56">
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <Shirt className="w-4 h-4 text-gray-500" />
                    Dresses
                  </div>
                  <div className="border-t border-gray-200 mx-4"></div>{" "}
                  {/* Divider */}
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <Shirt className="w-4 h-4 text-gray-500" />
                    Tops
                  </div>
                  <div className="border-t border-gray-200 mx-4"></div>{" "}
                  {/* Divider */}
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <Gem className="w-4 h-4 text-gray-500" />
                    Jewelry
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="group inline-flex items-center space-x-1 text-gray-500 hover:text-[#0F5F38] transition-colors focus:outline-none">
                <span className="font-bold  font-playfair text-base">
                  Others
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-3 w-56">
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <Home className="w-4 h-4 text-gray-500" />
                    Home Decor
                  </div>
                  <div className="border-t border-gray-200 mx-4"></div>{" "}
                  {/* Divider */}
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-gray-500" />
                    Handicrafts
                  </div>
                  <div className="border-t border-gray-200 mx-4"></div>{" "}
                  {/* Divider */}
                  <div className="font-inter text-sm text-gray-600 hover:text-[#0F5F38] hover:bg-gray-50 px-4 py-2 cursor-pointer transition-colors flex items-center gap-2">
                    <Gift className="w-4 h-4 text-gray-500" />
                    Gift Items
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-gray-700 hover:text-[#0F5F38] transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#0F5F38] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
              0
            </span>
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
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-[#0F5F38] transition-colors"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-[#0F5F38] transition-colors"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-700 hover:text-[#0F5F38] transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-[#0F5F38] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                0
              </span>
            </Button>
          </div>

          <Button className="bg-[#fff] hover:bg-[#0F5F38]/90 hover:text-white text-black font-inter font-medium px-4 border border-gray-200">
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
              <Button className="w-full bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white">
                Log in / Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
