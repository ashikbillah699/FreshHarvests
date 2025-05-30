import { useEffect, useState } from 'react';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import RelatedProduct from './RelatedProduct';
import useCategories from '../../hooks/useCategories';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const { id } = useParams();
    const [categories] = useCategories()
    console.log(categories)
    console.log(id)
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        try {
            fetch(`https://code-commando.com/api/v1/products/${id}`)
                .then(res => res.json())
                .then(data => setProduct(data.data))
        }
        catch (err) {
            console.log(err.message);
        }
    }, [id, product]);
    console.log(product)

    const matchedCategory = categories?.find(cat => cat.id === product?.categoryId);
    const categoryName = matchedCategory?.categoryName || "Unknown";

    const handleAddCart = () =>{
        toast.info("It is a work in progress.")
    }

    if (!product) return <div className="text-center py-10">Loading...<span className="loading loading-spinner loading-lg"></span>
    </div>;

    return (
        <div>
            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <img
                        src={product.images}
                        alt={product.productName}
                        className="w-full h-auto max-h-[400px] object-contain rounded-xl border"
                    />
                    <div>
                        <div className="badge text-green-500 bg-gray-100 mb-2 ">{categoryName}</div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.productName}</h2>
                        <div className="flex items-center gap-2 text-yellow-500 mb-4">
                            <FaStar />
                            <span className="text-sm text-gray-600">5.0 (1 review)</span>
                        </div>
                        <p className="text-2xl font-semibold text-green-600 mb-4">{product.price}</p>
                        <p className="text-gray-600 mb-6">
                            From our farm directly to your door, our fresh {product.productName.toLowerCase()} is rich in flavor and perfect for a variety of culinary uses. {product.description}
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="font-medium">Quantity:</span>
                            <div className="flex items-center border rounded-lg">
                                <button
                                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                                    className="p-2"
                                >
                                    <FiMinus />
                                </button>
                                <span className="px-4">{qty}</span>
                                <button
                                    onClick={() => setQty(qty + 1)}
                                    className="p-2"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                            <span className="text-sm text-gray-500">/ {product.stock}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <button className="btn btn-outline bg-gray-100 hover:bg-gray-200 border-none"><FaHeart className='text-gray-300' />Save as favorite</button>
                            <button onClick={handleAddCart} className="btn btn-primary border-none hover:bg-orange-600 bg-orange-500 text-white transition duration-500"><FaShoppingCart className='text-white' /> Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="tabs tabs-bordered">
                        <a className="tab tab-active">Description</a>
                        <a className="tab">Reviews (1)</a>
                    </div>
                    <div className="p-4 bg-base-200 mt-2 rounded-lg text-gray-700">
                        Our {product.productName.toLowerCase()} is grown with care, ensuring quality and nutrition. Rich in essential vitamins and minerals, perfect for a healthy lifestyle. Try it in salads, stir-fries, or steamed for the best results.
                    </div>
                </div>
            </div>
            <RelatedProduct categoryId={product.categoryId}></RelatedProduct>
        </div>

    );
};

export default ProductDetails;