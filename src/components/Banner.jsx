import bannerImg from '../assets/banner.png';
import playIcon from '../assets/play.png';

const Banner = () => {
    return (
        <div className="bg-gray-50 px-8 py-16">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">

                <div className="max-w-xl">

                    <p className="bg-blue-100 text-purple-600 inline-block px-4 py-1 rounded-full text-sm mb-4">
                         New: AI-Powered Tools Available
                    </p>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    <p className="text-gray-500 mt-4">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>

                    <div className="mt-6 flex gap-4">
                        <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-6">
                            Explore Products
                        </button>

                        <button className="btn bg-blue-200 text-black hover:bg-blue-500 rounded-full px-6">
                            <img
                                src={playIcon}
                                alt="play"
                            /> Watch Demo
                        </button>
                    </div>

                </div>

                <div>
                    <img
                        src={bannerImg}
                        alt="banner"

                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;