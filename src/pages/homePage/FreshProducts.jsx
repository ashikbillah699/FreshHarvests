import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = ["All", "Fruits", "Vegetables", "Salad"];

const FreshProducts = () => {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        try {
            fetch("/data/FreshProductsData.json")
                .then(res => res.json())
                .then(data => setProducts(data))
        }
        catch (err) {
            console.log(err.message);
        }

    }, []);

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section className="py-10 px-4 md:px-16">
            <div className="text-center mb-6">
                <p className="text-sm text-green-600 font-semibold">Our Products</p>
                <h2 className="text-3xl md:text-4xl font-bold">Our Fresh Products</h2>
                <p className="mt-2 text-gray-500 max-w-xl mx-auto">
                    We pride ourselves on offering a wide variety of fresh and flavorful fruits,
                    vegetables, and salad ingredients.
                </p>
                <div className="flex justify-center flex-wrap gap-2 mt-6">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`btn btn-sm rounded-full px-4 ${activeCategory === cat ? "btn-active bg-green-600 text-white" : "btn-outline"
                                }`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
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
                            <Link to={`/productDetails/${product.id}`}>
                                <button className="btn btn-sm mt-2 bg-white text-black w-full hover:bg-orange-500 hover:text-white transition duration-500">
                                    <FaShoppingCart className="mr-1" /> Add to cart
                                </button>
                            </Link>
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

export default FreshProducts;