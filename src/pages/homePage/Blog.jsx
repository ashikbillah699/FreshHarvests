import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className='w-full max-w-[1200px] mx-auto mt-24'>
            <div className="mb-12 text-center">
                <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                    Our blog
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                    Fresh Harvest Blog
                </h2>
                <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
                    Discover healthy eating tips, fresh recipes, and wellness insights.Stay inspired and live better with the Fresh Harvest Blog.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="card bg-base-100 w-72 md:w-96 shadow-sm mx-auto">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Shoes" className='rounded-2xl h-56 w-full' />
                    </figure>
                    <div className="card-body px-0">
                        <span className='text-gray-600 font-semibold'>May 23, 2024</span>
                        <p className='text-lg font-semibold'>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                        <div className="card-actions justify-start">
                            <button className="text-lg text-[#ff6a19] font-semibold cursor-pointer hover:underline flex items-center gap-2 mt-2">Read More <FaArrowRight size={15} /></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-72 md:w-96 shadow-sm mx-auto">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/59999/raspberries-fruits-fruit-berries-59999.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Shoes" className='rounded-2xl h-56 w-full' />
                    </figure>
                    <div className="card-body px-0">
                        <span className='text-gray-600 font-semibold'>May 23, 2024</span>
                        <p className='text-lg font-semibold'>Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"</p>
                        <div className="card-actions justify-start">
                            <button className="text-lg text-[#ff6a19] font-semibold cursor-pointer hover:underline flex items-center gap-2 mt-2">Read More <FaArrowRight size={15} /></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-72 md:w-96 shadow-sm mx-auto">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Shoes" className='rounded-2xl h-56 w-full' />
                    </figure>
                    <div className="card-body px-0">
                        <span className='text-gray-600 font-semibold'>May 23, 2024</span>
                        <p className='text-lg font-semibold'>The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</p>
                        <div className="card-actions justify-start">
                            <button className="text-lg text-[#ff6a19] font-semibold cursor-pointer hover:underline flex items-center gap-2 mt-2">Read More <FaArrowRight size={15} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;