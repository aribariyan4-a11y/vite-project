import { FaUserAlt, FaBox, FaRocket } from "react-icons/fa";
const Steps = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-20 text-center">

            <h2 className="text-3xl font-bold">
                Get Started in 3 Steps
            </h2>

            <p className="text-gray-500 mt-2">
                Start using premium digital tools in minutes, not hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl mb-3 ml-36"><FaUserAlt /></div>
                    <h3 className="text-xl font-semibold">Create Account</h3>
                    <p className="text-gray-500  text-sm mt-2">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl mb-3 ml-36"><FaBox />
                    </div>
                    <h3 className="text-xl font-semibold">Choose Products</h3>
                    <p className="text-gray-500 text-sm  mt-2">
                        Browse our catalog and select the tools. <br /> that fit your needs.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl mb-3 ml-36"><FaRocket />
                    </div>
                    <h3 className="text-xl font-semibold">Start Creating</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Download and start using your premium <br /> tools immediately.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Steps;