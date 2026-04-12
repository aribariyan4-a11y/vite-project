import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductsSection from './components/ProductsSection';
import Products from './components/Products';

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
    </div>
  );
}

export default App;
