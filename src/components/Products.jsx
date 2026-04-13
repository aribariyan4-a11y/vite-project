import ProductCard from "./ProductCard";

const Products = ({ products, handleAddToCart, cart }) => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          cart={cart}
        />
      ))}

    </div>
  );
};

export default Products;