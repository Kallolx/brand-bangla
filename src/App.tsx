import { Routes, Route } from "react-router-dom";
import Landing from "@/components/app/landing/Landing";
import DhakaPage from "@/pages/division/dhaka";
import ChittagongPage from "@/pages/division/chittagong";
import SylhetPage from "@/pages/division/sylhet";
import RajshahiPage from "@/pages/division/rajshahi";
import KhulnaPage from "@/pages/division/khulna";
import BarisalPage from "@/pages/division/barisal";
import RangpurPage from "@/pages/division/rangpur";
import DistrictPage from "@/pages/division/dhaka/[name]";
import RegionalCraftsPage from "@/pages/products/regional-crafts";
import TraditionalClothesPage from "@/pages/products/traditional-clothes";
import ProductDetails from "@/pages/products/product-details";
import TraditionalFoodsPage from "@/pages/products/traditional-foods";
import TraditionalCraftsPage from "@/pages/products/traditional-crafts";
import { DivisionProvider } from "@/context/DivisionContext";

const App = () => {
  return (
    <DivisionProvider>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/division/dhaka" element={<DhakaPage />} />
          <Route path="/division/chittagong" element={<ChittagongPage />} />
          <Route path="/division/sylhet" element={<SylhetPage />} />
          <Route path="/division/rajshahi" element={<RajshahiPage />} />
          <Route path="/division/khulna" element={<KhulnaPage />} />
          <Route path="/division/barisal" element={<BarisalPage />} />
          <Route path="/division/rangpur" element={<RangpurPage />} />
          <Route path="/division/dhaka/:name" element={<DistrictPage />} />
          <Route path="/products/regional-crafts" element={<RegionalCraftsPage />} />
          <Route path="/products/traditional-clothes" element={<TraditionalClothesPage />} />
          <Route path="/products/traditional-foods" element={<TraditionalFoodsPage />} />
          <Route path="/products/traditional-crafts" element={<TraditionalCraftsPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </DivisionProvider>
  );
};

export default App;
