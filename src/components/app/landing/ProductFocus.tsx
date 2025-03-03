import { Button } from "@/components/ui/button";

const ProductFocus = () => {

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Content */}
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="font-bold font-playfair text-4xl lg:text-5xl text-gray-900 max-w-2xl mx-auto lg:mx-0">
            Brand Bangladesh is the perfect place to sell authentic products.
          </h1>

          <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Brand Bangladesh brings you authentic products that celebrate the craftsmanship and heritage of Bangladesh, from handcrafted to traditional art.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {/* Traditional Clothes Button */}
            <Button 
              onClick={() => window.location.href = 'https://rnd.devevenboat.com/user/vendor-register'}
              className="bg-[#0F5F38] hover:text-white text-white rounded-lg font-inter font-medium px-8 py-6 border border-gray-200"
            >
              Open Your Shop
            </Button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative aspect-[4/5] w-full">
          <img
            src="/images/products/main.jpg"
            alt="Handwoven Jamdani Saree"
            className="w-full h-[650px] object-cover rounded-tl-[110px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductFocus;
