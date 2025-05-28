import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className=' '>
            <section className="max-w-[1200px] mx-auto bg-white dark:bg-neutral text-neutral-content py-10 px-4 md:px-10 ">
            <div className="container text-center md:text-start mx-auto grid md:grid-cols-2 items-center gap-10">
                {/* Text Content */}
                <div className="space-y-6">
                    <p className="text-green-500 font-medium">Welcome to Fresh Harvest</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral dark:text-white leading-tight">
                        Fresh Fruits and <br /> Vegetables
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        At Fresh Harvest, we are passionate about delivering you with the freshest and most flavorful fruits and vegetables.
                    </p>

                    <div className="flex gap-20 flex-wrap justify-center md:justify-start">
                        <div>
                            <button className="bg-primary bg-[#fc823c] px-4 py-2 text-sm rounded-md font-bold hover:bg-primary-focus transition duration-500">
                            Shop Now
                        </button>
                        </div>
                        
                        <div className="bg-base-100 border p-4 rounded-xl shadow-md w-[200px]">
                            <p className="text-sm font-medium text-green-500">Special Offer</p>
                            <h3 className="text-lg font-bold text-gray-900">Fresh Salad</h3>
                            <p className="text-sm text-green-500">Up to 70% off</p>
                            <p className="text-xs text-gray-900 mt-1">Code: <strong>FRESH45</strong></p>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4 justify-center md:justify-start">
                        <a href="#" className="btn btn-outline btn-sm gap-2 bg-black">
                            <FaApple className="text-lg" /> App Store
                        </a>
                        <a href="#" className="btn btn-outline btn-sm gap-2 bg-black">
                            <FaGooglePlay className="text-lg" /> Google Play
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="relative">
                    <img
                        src="https://thumbs.dreamstime.com/b/sweet-girl-vegetables-white-background-paper-bag-75508314.jpg"
                        alt="Girl with veggies"
                        className="w-full max-w-xl md:h-[600px] mx-auto md:mx-0"
                    />
                    <img
                        src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg"
                        alt="Decorative leaf"
                        className="absolute -top-1 -left-6 w-20 animate-bounce hidden sm:block"
                    />
                </div>
            </div>
        </section>
        </div>
    );
};

export default Banner;