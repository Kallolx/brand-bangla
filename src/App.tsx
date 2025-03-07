import { Routes, Route } from "react-router-dom";
import Landing from "@/components/app/landing/Landing";
import DhakaPage from "@/pages/division/dhaka";
import ChittagongPage from "@/pages/division/chittagong";
import SylhetPage from "@/pages/division/sylhet";
import RajshahiPage from "@/pages/division/rajshahi";
import KhulnaPage from "@/pages/division/khulna";
import BarisalPage from "@/pages/division/barisal";
import RangpurPage from "@/pages/division/rangpur";
import MymensinghPage from "@/pages/division/mymensingh";
import DhakaDistrictPage from "@/pages/division/dhaka/[name]";
import ChittagongDistrictPage from "@/pages/division/chittagong/[name]";
import SylhetDistrictPage from "@/pages/division/sylhet/[name]";
import RajshahiDistrictPage from "@/pages/division/rajshahi/[name]";
import KhulnaDistrictPage from "@/pages/division/khulna/[name]";
import BarisalDistrictPage from "@/pages/division/barisal/[name]";
import RangpurDistrictPage from "@/pages/division/rangpur/[name]";
import MymensinghDistrictPage from "@/pages/division/mymensingh/[name]";
import RegionalCraftsPage from "@/pages/products/regional-crafts";
import TraditionalClothesPage from "@/pages/products/traditional-clothes";
import ProductDetails from "@/pages/products/product-details";
import TraditionalFoodsPage from "@/pages/products/traditional-foods";
import TraditionalCraftsPage from "@/pages/products/traditional-crafts";
import { DivisionProvider } from "@/context/DivisionContext";
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import WelcomeModal from "@/components/app/landing/WelcomeModal";

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <DivisionProvider>
          <div className="relative">
            <Routes>
              <Route path="/" element={<Landing />} />
              
              {/* Division Routes */}
              <Route path="/division/dhaka" element={<DhakaPage />} />
              <Route path="/division/chittagong" element={<ChittagongPage />} />
              <Route path="/division/sylhet" element={<SylhetPage />} />
              <Route path="/division/rajshahi" element={<RajshahiPage />} />
              <Route path="/division/khulna" element={<KhulnaPage />} />
              <Route path="/division/barisal" element={<BarisalPage />} />
              <Route path="/division/rangpur" element={<RangpurPage />} />
              <Route path="/division/mymensingh" element={<MymensinghPage />} />
              
              {/* District Routes */}
              <Route path="/division/dhaka/:name" element={<DhakaDistrictPage />} />
              <Route path="/division/chittagong/:name" element={<ChittagongDistrictPage />} />
              <Route path="/division/sylhet/:name" element={<SylhetDistrictPage />} />
              <Route path="/division/rajshahi/:name" element={<RajshahiDistrictPage />} />
              <Route path="/division/khulna/:name" element={<KhulnaDistrictPage />} />
              <Route path="/division/barisal/:name" element={<BarisalDistrictPage />} />
              <Route path="/division/rangpur/:name" element={<RangpurDistrictPage />} />
              <Route path="/division/mymensingh/:name" element={<MymensinghDistrictPage />} />

              {/* Product Routes */}
              <Route path="/products/regional-crafts" element={<RegionalCraftsPage />} />
              <Route path="/products/traditional-clothes" element={<TraditionalClothesPage />} />
              <Route path="/products/traditional-foods" element={<TraditionalFoodsPage />} />
              <Route path="/products/traditional-crafts" element={<TraditionalCraftsPage />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
            <WelcomeModal />
          </div>
        </DivisionProvider>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
