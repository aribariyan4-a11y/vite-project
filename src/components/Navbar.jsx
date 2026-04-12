const Navbar = ({ cartCount }) => {
    return (
        <div className="navbar bg-white px-8 py-4 shadow-sm">

            
            <div className="flex-1">
                <h1 className="text-2xl font-bold text-purple-600">
                    DigiTools
                </h1>
            </div>

            
            <div className="hidden lg:flex gap-6 font-medium mr-56 text-gray-600">
                <a className="hover:text-purple-600 cursor-pointer">Products</a>
                <a className="hover:text-purple-600 cursor-pointer">Features</a>
                <a className="hover:text-purple-600 cursor-pointer">Pricing</a>
                <a className="hover:text-purple-600 cursor-pointer">Testimonials</a>
                <a className="hover:text-purple-600 cursor-pointer">FAQ</a>
            </div>

            
            <div className="flex items-center gap-4">

                <button className="text-gray-600">Login</button>
                <span className="text-lg">🛒{cartCount}</span>
                <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-5 hover:bg-purple-700">
                    Get Started
                </button>

            </div>
        </div>
    );
};

export default Navbar;