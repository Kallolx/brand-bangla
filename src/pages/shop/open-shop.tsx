import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Check, Store, FileText, Upload, ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/app/landing/Navbar";
import Footer from "@/components/app/landing/Footer";
import { Button } from "@/components/ui/button";

const OpenShopPage = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<{
    shopName: string;
    ownerName: string;
    email: string;
    phone: string;
    address: string;
    district: string;
    division: string;
    businessType: string;
    productCategories: string[];
    description: string;
    nidNumber: string;
    tradeLicense: File | null;
    shopPhoto: File | null;
  }>({
    shopName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    division: "",
    businessType: "",
    productCategories: [],
    description: "",
    nidNumber: "",
    tradeLicense: null,
    shopPhoto: null,
  });

  const divisions = [
    "Dhaka", "Chittagong", "Sylhet", "Rajshahi",
    "Khulna", "Barisal", "Rangpur", "Mymensingh"
  ];

  const businessTypes = [
    "Individual", "Partnership", "Company", "Cooperative"
  ];

  const productCategories = [
    "Traditional Clothes", "Handicrafts", "Food & Beverages",
    "Jewelry", "Home Decor", "Art & Paintings",
    "Traditional Instruments", "Others"
  ];

  const steps = [
    { number: 1, title: "Basic Info", icon: Store },
    { number: 2, title: "Business Details", icon: FileText },
    { number: 3, title: "Documentation", icon: Upload }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      const file = e.target.files[0];
      
      // File size validation (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return;
      }

      setFormData(prev => ({ ...prev, [name]: file }));
      toast.success(`${name === 'shopPhoto' ? 'Shop photo' : 'Trade license'} uploaded successfully`);
    }
  };

  const handleCategoryChange = (category: string) => {
    setFormData(prev => {
      const categories = prev.productCategories;
      if (categories.includes(category)) {
        return {
          ...prev,
          productCategories: categories.filter(c => c !== category)
        };
      } else {
        return {
          ...prev,
          productCategories: [...categories, category]
        };
      }
    });
  };

  const validateStep = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return formData.shopName && formData.ownerName && formData.email && 
               formData.phone && formData.address && formData.district && formData.division;
      case 2:
        return formData.businessType && formData.productCategories.length > 0 && formData.description;
      case 3:
        return formData.nidNumber && formData.tradeLicense && formData.shopPhoto;
      default:
        return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Shop application submitted successfully!");
      // Reset form or redirect
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5F38] focus:border-[#0F5F38] transition-all duration-200";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-48 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-bold font-playfair text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Open Your Shop on Brand Bangladesh
            </h1>
            <p className="font-inter text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
              Join our marketplace to showcase your authentic Bangladeshi products to customers worldwide.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12 px-4">
            {steps.map((s, idx) => (
              <div key={s.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      step >= s.number 
                        ? "bg-[#0F5F38] text-white" 
                        : "bg-gray-100 text-gray-400"
                    } transition-colors duration-200`}
                  >
                    {step > s.number ? <Check /> : <s.icon />}
                  </motion.div>
                  <span className="mt-2 text-sm font-medium text-gray-600">{s.title}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`h-1 w-24 sm:w-32 md:w-40 mx-4 ${
                    step > s.number ? "bg-[#0F5F38]" : "bg-gray-200"
                  } transition-colors duration-200`} />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-playfair font-semibold mb-6 flex items-center gap-2">
                    <Store className="w-5 h-5" />
                    Basic Information
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Shop Name</label>
                      <input
                        type="text"
                        name="shopName"
                        value={formData.shopName}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Owner Name</label>
                      <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className={inputClasses}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Division</label>
                      <select
                        name="division"
                        value={formData.division}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                      >
                        <option value="">Select Division</option>
                        {divisions.map(division => (
                          <option key={division} value={division}>{division}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>District</label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-playfair font-semibold mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Business Information
                  </h2>
                  
                  <div>
                    <label className={labelClasses}>Business Type</label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className={inputClasses}
                      required
                    >
                      <option value="">Select Business Type</option>
                      {businessTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClasses}>Product Categories</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {productCategories.map(category => (
                        <motion.label
                          key={category}
                          className="flex items-center space-x-2 cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="checkbox"
                            checked={formData.productCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="rounded border-gray-300 text-[#0F5F38] focus:ring-[#0F5F38]"
                          />
                          <span className="text-sm text-gray-700">{category}</span>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Shop Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className={inputClasses}
                      required
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-playfair font-semibold mb-6 flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Documentation
                  </h2>
                  
                  <div>
                    <label className={labelClasses}>NID Number</label>
                    <input
                      type="text"
                      name="nidNumber"
                      value={formData.nidNumber}
                      onChange={handleInputChange}
                      className={inputClasses}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClasses}>Trade License</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#0F5F38] transition-colors">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer rounded-md font-medium text-[#0F5F38] hover:text-[#0D4F30] focus-within:outline-none">
                            <span>Upload trade license</span>
                            <input
                              type="file"
                              name="tradeLicense"
                              onChange={handleFileChange}
                              className="sr-only"
                              accept=".pdf,.jpg,.jpeg,.png"
                              required
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PDF, JPG up to 5MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Shop Photo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#0F5F38] transition-colors">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer rounded-md font-medium text-[#0F5F38] hover:text-[#0D4F30] focus-within:outline-none">
                            <span>Upload shop photo</span>
                            <input
                              type="file"
                              name="shopPhoto"
                              onChange={handleFileChange}
                              className="sr-only"
                              accept="image/*"
                              required
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button
                  type="button"
                  onClick={() => validateStep(step) && setStep(step + 1)}
                  className={`bg-[#0F5F38] text-white hover:bg-[#0F5F38]/90 flex items-center gap-2 ml-auto ${
                    !validateStep(step) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={!validateStep(step)}
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-[#0F5F38] text-white hover:bg-[#0F5F38]/90 flex items-center gap-2 ml-auto"
                  disabled={isSubmitting || !validateStep(3)}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </motion.form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OpenShopPage; 