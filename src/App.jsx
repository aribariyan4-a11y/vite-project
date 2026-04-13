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
import Cart from './components/Cart';


function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const handleRemove = (id) => {
    const remaining = cart.filter(item => item.id !== id);
    setCart(remaining);
  };

  const handleCheckout = () => {
    setCart([]);
  };

  // ✅ Load products
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // ✅ Add to Cart
  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
    }
  };

  return (
    <div data-theme="light">

      {/* Navbar */}
      <Navbar cartCount={cart.length} />

      {/* Hero */}
      <Banner />
      <Stats />

      {/* Products Section */}
      <ProductsSection
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
      />

      {showCart ? (
        <Cart
          cart={cart}
          handleRemove={handleRemove}
          handleCheckout={handleCheckout}
        />
      ) : (
        <Products
          products={products}
          handleAddToCart={handleAddToCart}
          cart={cart}
        />
      )}

      {/* Other Sections */}
      <Steps />
      <Pricing />
      <Dubble />
      <Footer />

    </div>
  );
}

export default App;