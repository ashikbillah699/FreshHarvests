import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RelatedProduct = () => {
    const filteredProducts = [
        {
            "id": 1,
            "name": "Mushroom",
            "price": "$2.3/kg",
            "description": "Fresh and organic mushrooms, perfect for cooking.",
            "quantity": "1 kg",
            "category": "Vegetables",
            "image": "https://static.vecteezy.com/system/resources/thumbnails/031/097/640/small_2x/closeup-of-mustard-flowers-png.png"
        },
        {
            "id": 2,
            "name": "Mustard",
            "price": "$1.3/kg",
            "description": "High-quality mustard seeds for flavorful dishes.",
            "quantity": "1 kg",
            "category": "Vegetables",
            "image": "https://static.vecteezy.com/system/resources/thumbnails/031/097/640/small_2x/closeup-of-mustard-flowers-png.png"
        },
        {
            "id": 3,
            "name": "Orange",
            "price": "$4.2/kg",
            "description": "Sweet and juicy oranges, rich in vitamin C.",
            "quantity": "1 kg",
            "category": "Fruits",
            "image": "https://static.vecteezy.com/system/resources/thumbnails/031/097/640/small_2x/closeup-of-mustard-flowers-png.png"
        },
        {
            "id": 4,
            "name": "Pomegranate",
            "price": "$1.1/kg",
            "description": "Fresh pomegranates full of antioxidants.",
            "quantity": "1 kg",
            "category": "Fruits",
            "image": "https://static.vecteezy.com/system/resources/thumbnails/031/097/640/small_2x/closeup-of-mustard-flowers-png.png"
        },
    ]

    return (
        <section className="py-10 px-4 md:px-16">
            <div className="text-center mb-6">
                <p className="text-sm text-green-600 font-semibold">Our Products</p>
                <h2 className="text-3xl md:text-4xl font-bold">Related Products</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300"
                    >
                        <figure className="px-4 pt-4 bg-gray-50 m-4 pb-4 rounded-md">
                            <img
                                src={`${product.image}`}
                                alt={product.name}
                                className="rounded-xl h-28 object-contain"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-base md:text-lg">{product.name}</h2>
                            <p className="text-sm text-gray-500">{product.price}</p>
                            <div className="w-full">
                                <Link to={`/productDetails/${product.id}`}>
                                    <button className="btn btn-sm mt-2 bg-white text-black w-full hover:bg-orange-500 hover:text-white transition duration-500">
                                        <FaShoppingCart className="mr-1" /> Add to cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <button className="btn btn-outline btn-sm md:btn-md px-6 text-orange-500 border-orange-500">
                    See All Products
                </button>
            </div>
        </section>
    );
};

export default RelatedProduct;