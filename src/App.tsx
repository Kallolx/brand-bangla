import Navbar from './components/app/landing/Navbar';
import Hero from './components/app/landing/Hero';
import ProductShowcase from './components/app/landing/ProductShowcase';
import ProductFocus from './components/app/landing/ProductFocus';
import NewArrival from './components/app/landing/NewArrival';
import CallToAction from './components/app/landing/CallToAction';
import PopularProducts from './components/app/landing/PopularProducts';
import Footer from './components/app/landing/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <ProductFocus />
      <NewArrival />
      <CallToAction />
      <PopularProducts />
      <Footer />
    </div>
  );
}

export default App;