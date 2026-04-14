const Stats = () => {
    return (
        <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-10">
            <div className="flex flex-col md:flex-row justify-around items-center text-center gap-6">

                <div className="px-6">
                    <h2 className="text-3xl font-bold">50K+</h2>
                    <p>Activ Users</p>
                </div>

                <div className="hidden md:block h-28 border-l border-white opacity-50"></div>
                <div>
                    <h2 className="text-3xl font-bold">200+</h2>
                    <p>Premium Tools</p>
                </div>

                <div className="hidden md:block h-28 border-l border-white opacity-50"></div>
                <div>
                    <h2 className="text-3xl font-bold">4.9</h2>
                    <p>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;