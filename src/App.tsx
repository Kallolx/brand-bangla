import Navbar from './components/app/landing/Navbar';
import Hero from './components/app/landing/Hero';
import CategoryCards from './components/app/landing/CategoryCards';
import DivisionShowcase from './components/app/landing/DivisionShowcase';
import RegionalCrafts from './components/app/landing/RegionalCrafts';
import ProductFocus from './components/app/landing/ProductFocus';
import BrandShowcase from './components/app/landing/BrandShowcase';
import RmgShowcase from './components/app/landing/RmgShowcase';
import NewArrival from './components/app/landing/NewArrival';
import CallToAction from './components/app/landing/CallToAction';
import Footer from './components/app/landing/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategoryCards />
      <DivisionShowcase />
      <RegionalCrafts />
      <ProductFocus />
      <BrandShowcase />
      <RmgShowcase />
      <NewArrival />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;