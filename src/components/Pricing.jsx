const Pricing = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-20 text-center">

            <h2 className="text-3xl font-bold">
                Simple, Transparent Pricing
            </h2>

            <p className="text-gray-500 mt-2">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

                {/* Starter */}
                <div className="bg-white p-6 rounded-xl shadow-md text-left">
                    <h3 className="text-xl font-semibold">Starter</h3>
                    <p className="text-gray-500 text-sm">Perfect for getting started</p>

                    <h2 className="text-3xl font-bold mt-4">$0<span className="text-sm">/Month</span></h2>

                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        <li>✔ Access to 10 free tools</li>
                        <li>✔ Basic templates</li>
                        <li>✔ Community support</li>
                    </ul>

                    <button className="btn mt-6 w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
                        Get Started Free
                    </button>
                </div>

                {/* Pro (Highlighted) */}
                <div className="p-6 rounded-xl text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-left relative">

                    <span className="absolute top-3 right-3 bg-yellow-300 text-black text-xs px-3 py-1 rounded-full">
                        Most Popular
                    </span>

                    <h3 className="text-xl font-semibold">Pro</h3>
                    <p className="text-sm">Best for professionals</p>

                    <h2 className="text-3xl font-bold mt-4">$29<span className="text-sm">/Month</span></h2>

                    <ul className="mt-4 space-y-2 text-sm">
                        <li>✔ Access to all premium tools</li>
                        <li>✔ Unlimited templates</li>
                        <li>✔ Priority support</li>
                    </ul>

                    <button className="btn mt-6 w-full bg-white text-purple-600 rounded-full">
                        Start Pro Trial
                    </button>
                </div>

                {/* Enterprise */}
                <div className="bg-white p-6 rounded-xl shadow-md text-left">
                    <h3 className="text-xl font-semibold">Enterprise</h3>
                    <p className="text-gray-500 text-sm">For teams & business</p>

                    <h2 className="text-3xl font-bold mt-4">$99<span className="text-sm">/Month</span></h2>

                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        <li>✔ Team collaboration</li>
                        <li>✔ Custom integrations</li>
                        <li>✔ Dedicated support</li>
                    </ul>

                    <button className="btn mt-6 w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;