const ProductsSection = ({ cart, setShowCart, showCart }) => {
    return (
        <div className="max-w-6xl mx-auto mt-16 px-4 text-center">

            <h2 className="text-4xl font-bold">
                Premium Digital Tools
            </h2>

            <p className="text-gray-500 mt-2">
                Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
            </p>

            <div className="flex justify-center gap-4 mt-6">

                <button
                    onClick={() => setShowCart(false)}
                    className={`btn rounded-full px-6 ${!showCart ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-outline"
                        }`}
                >
                    Products
                </button>

                <button
                    onClick={() => setShowCart(true)}
                    className={`btn rounded-full px-6 ${showCart ? "bg-purple-600 text-white" : "btn-outline"
                        }`}
                >
                    Cart ({cart.length})
                </button>

            </div>
        </div>
    );
};

export default ProductsSection;