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

                {/* Step 1 */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl mb-3">📝</div>
                    <h3 className="text-xl font-semibold">Sign Up</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Create your account in just a few clicks.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl mb-3">🛒</div>
                    <h3 className="text-xl font-semibold">Choose Tools</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Browse and select your desired tools.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl mb-3">🚀</div>
                    <h3 className="text-xl font-semibold">Start Using</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Instantly access and use your tools.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Steps;