const Cart = ({ cart, handleRemove, handleCheckout }) => {
    return (
        <div className="max-w-4xl mx-auto mt-10 px-4">

            <h2 className="text-2xl font-bold mb-4">
                Your Cart ({cart.length})
            </h2>

            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                <>
                    <div className="space-y-4">

                        {cart.map(item => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-500">${item.price}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="btn btn-sm bg-red-500 text-white"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                    </div>

                    <button
                        onClick={handleCheckout}
                        className="btn mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;