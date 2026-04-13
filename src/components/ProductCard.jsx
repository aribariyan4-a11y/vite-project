const ProductCard = ({ product, handleAddToCart, cart }) => {
  const { name, description, price, period, features, icon, tag } = product;

  // ✅ check if already added
  const isAdded = cart.some(item => item.id === product.id);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-left relative">

      {/* Tag */}
      <span className="absolute top-4 right-4 text-xs bg-blue-950 text-gray-200 px-3 py-1 rounded-full">
        {tag}
      </span>

      {/* Icon */}
      <div className="text-3xl mb-3">{icon}</div>

      {/* Name */}
      <h3 className="text-xl text-black font-semibold">{name}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">{description}</p>

      {/* Price */}
      <p className="text-2xl text-black font-bold mt-3">
        ${price}
        <span className="text-sm text-gray-500">/{period}</span>
      </p>

      {/* Features */}
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        {features.map((f, index) => (
          <li key={index}>✔ {f}</li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => handleAddToCart(product)}
        disabled={isAdded}
        className={`btn mt-5 w-full rounded-full text-white transition ${
          isAdded
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
        }`}
      >
        {isAdded ? "Added ✅" : "Buy Now"}
      </button>

    </div>
  );
};

export default ProductCard;