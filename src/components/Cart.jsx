import { FaShoppingCart } from "react-icons/fa";
const Cart = ({ cart, handleRemove, handleCheckout }) => {
    return (
        <div className="max-w-4xl mx-auto mt-10 px-4">

            <h2 className="text-2xl font-bold mb-4">
                Your Cart ({cart.length})
            </h2>

            {cart.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty <FaShoppingCart size={100} className="mx-auto mt-4" /></p>
                
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
                                    className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                    </div>

                    <button
                        onClick={handleCheckout}
                        className="btn mt-6 w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;