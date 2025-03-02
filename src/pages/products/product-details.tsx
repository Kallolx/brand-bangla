import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star } from "lucide-react";
import Navbar from "@/components/app/landing/Navbar";
import Footer from "@/components/app/landing/Footer";
import { Button } from "@/components/ui/button";
import CraftCard from "@/components/ui/craft-card";
import CallToAction from "@/components/app/landing/CallToAction";
const ProductDetails = () => {
  useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("red");
  const [activeTab, setActiveTab] = useState<"info" | "reviews">("info");

  useEffect(() => {
    // Scroll to top when component mounts or when district changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  // Mock product data
  const product = {
    name: "Banarasi Saree",
    images: [
      "/images/products/1.jpg",
      "/images/products/2.jpg",
      "/images/products/3.jpg",
      "/images/products/4.jpg",
    ],
    price: 1500,
    originalPrice: 3000,
    description:
      "Eros etiam ut turpis fea est porta aliquam impeger consectetuer sapienm et dos lectrum.",
    rating: 5,
    reviews: 12,
    colors: ["red", "blue", "green", "purple"],
  };

  // Mock related products
  const relatedProducts = [
    {
      id: "related-1",
      image: "/images/products/2.jpg",
      title: "Jamdani Saree",
      description:
        "Traditional Bengali handloom saree with intricate patterns.",
      rating: 5,
      discount: "10%",
      priceRange: "৳1200 - ৳2500",
    },
    {
      id: "related-2",
      image: "/images/products/3.jpg",
      title: "Silk Saree",
      description: "Elegant silk saree with traditional motifs.",
      rating: 4,
      discount: "15%",
      priceRange: "৳1500 - ৳3000",
    },
    {
      id: "related-3",
      image: "/images/products/4.jpg",
      title: "Cotton Saree",
      description: "Comfortable cotton saree for daily wear.",
      rating: 5,
      discount: "20%",
      priceRange: "৳800 - ৳1500",
    },
  ];

  // Mock reviews
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-03-15",
      comment:
        "Beautiful saree with excellent craftsmanship. The colors are vibrant and the material is high quality.",
    },
    {
      id: 2,
      name: "Michael Brown",
      rating: 4,
      date: "2024-03-10",
      comment: "Very good product, but delivery took longer than expected.",
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 5,
      date: "2024-03-05",
      comment:
        "Absolutely stunning! The details are amazing and it looks even better in person.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-44 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Product Title and Reviews Count */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-playfair text-4xl font-bold text-gray-900">
              {product.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("info")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === "info" 
                  ? "bg-[#0F5F38] text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              General Info
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === "reviews"
                  ? "bg-[#0F5F38] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Reviews ({reviews.length})
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "info" ? (
              <motion.div
                key="info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Left - Image Gallery */}
                <div className="space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border border-gray-200">
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg border-2 overflow-hidden ${
                          selectedImage === index ? "border-[#0F5F38]" : "border-gray-200"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right - Product Info */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="font-inter text-4xl font-bold text-[#0F5F38]">
                      ৳{product.price}
                    </span>
                    <span className="font-inter text-xl text-gray-400 line-through">
                      ৳{product.originalPrice}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-900">Description:</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <button className="text-[#0F5F38] font-medium">
                      See More
                    </button>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-900">Color</h3>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full ${
                            selectedColor === color
                              ? "ring-2 ring-[#0F5F38] ring-offset-2"
                              : ""
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-8">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-gray-600 hover:text-[#0F5F38]"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-gray-600 hover:text-[#0F5F38]"
                      >
                        +
                      </button>
                    </div>

                    <Button className="flex-1 bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white py-6">
                      Add to Cart
                    </Button>

                    <Button className="bg-white border border-gray-200 hover:bg-gray-50 p-6">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </Button>
                  </div>
                </div>

                {/* Related Products */}
                <div className="lg:col-span-2 space-y-6 mt-12">
                  <h2 className="font-playfair text-2xl font-bold text-gray-900">
                    Related Products
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedProducts.map((product) => (
                      <CraftCard key={product.id} {...product} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="reviews"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {review.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default ProductDetails;
