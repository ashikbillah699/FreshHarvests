import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";

// const categories = ["All", "Fruits", "Vegetables", "Salad"];

const FreshProducts = () => {
    const [categories] = useCategories();
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("https://code-commando.com/api/v1/products")
            .then(res => res.json())
            .then(data => setProducts(data.data))
            .catch(err => console.log(err.message));
    }, []);

    const categoryNames = categories ? ["All", ...categories.map(cat => cat.categoryName)] : [];

    const matchedCategory = categories?.find(cat => cat.categoryName === activeCategory);
    const matchedCategoryId = matchedCategory?.id;

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter(p => p.categoryId === matchedCategoryId);

    const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

    if (!products.length) {
        return <div className="text-center py-10">Loading...<span className="loading loading-spinner loading-lg"></span></div>
    }

    return (
        <section className="max-w-[1200px] w-full mx-auto pt-10 px-4 md:px-16 md:mt-16">
            <div className="text-center mb-6">
                <p className="btn badge bg-gray-50 text-sm text-green-600 font-semibold">Our Products</p>
                <h2 className="text-3xl md:text-4xl font-bold">Our Fresh Products</h2>
                <p className="mt-2 text-gray-500 max-w-xl mx-auto">
                    We pride ourselves on offering a wide variety of fresh and flavorful fruits,
                    vegetables, and salad ingredients.
                </p>
                <div className="flex justify-center flex-wrap gap-2 mt-6">
                    {categoryNames.map((catName) => (
                        <button
                            key={catName}
                            className={`btn btn-sm rounded-lg px-4 ${activeCategory === catName ? "btn-active bg-green-500 text-white" : "btn-outline"}`}
                            onClick={() => setActiveCategory(catName)}
                        >
                            {catName}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300"
                    >
                        <figure className=" px-4 pt-4 bg-gray-50 mx-4 mt-4 pb-4 rounded-md">
                            <img
                                src={`${product.images}`}
                                alt={product.productName}
                                className="rounded-xl h-28 object-contain w-full"
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

            {!showAll && filteredProducts.length > 8 && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(true)}
                        className="btn bg-white border-[#ff6900] text-[#ff6900] hover:bg-[#ff6900] hover:text-white transition duration-500"
                    >
                        See All Products
                    </button>
                </div>
            )}
        </section>
    );
};

export default FreshProducts;