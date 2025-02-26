import Navbar from './Navbar';
import Hero from './Hero';
import CategoryCards from './CategoryCards';
import DivisionShowcase from './DivisionShowcase';
import RegionalCrafts from './RegionalCrafts';
import ProductFocus from './ProductFocus';
import BrandShowcase from './BrandShowcase';
import RmgShowcase from './RmgShowcase';
import NewArrival from './NewArrival';
import CallToAction from './CallToAction';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
};

export default Landing; 