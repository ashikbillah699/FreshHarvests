import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const RelatedProduct = ({categoryId}) => {
    const [products] = useProducts()
    console.log(products)
    const filteredProducts = products.filter(product => (product.categoryId == categoryId))
    

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
                                src={`${product.images}`}
                                alt={product.productName}
                                className="rounded-xl h-28 object-contain"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-base md:text-lg">{product.productName}</h2>
                            <p className="text-sm text-gray-500">{product.price}/kg</p>
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
        </section>
    );
};

export default RelatedProduct;