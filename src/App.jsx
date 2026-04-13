import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductsSection from './components/ProductsSection';
import Products from './components/Products';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Dubble from './components/Dubble';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div data-theme="light">
      <Navbar cart={cart} />
      <Banner />
      <Stats />
      <ProductsSection cart={cart} showCart={showCart} setShowCart={setShowCart} />
      {!showCart && <Products products={products} />}
      <Steps />
      <Pricing />
      <Dubble />
      <Footer />
    </div>
  );
}

export default App;
