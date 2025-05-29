import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        categoryId: "",
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            ...product,
            price: parseFloat(product.price),
            stock: parseInt(product.stock),
            images: [product.image],
            isDeleted: false,
        };

        try {
            const res = await fetch("https://code-commando.com/api/v1/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });

            const result = await res.json();
            console.log(result)
            navigate('/')
            toast.success("Product added successfully!");
        } catch (err) {
            console.error(err.message);
            toast.error("Failed to add product.");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Product</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label font-semibold">Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            value={product.productName}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold">Category ID</label>
                        <input
                            type="text"
                            name="categoryId"
                            value={product.categoryId}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold">Description</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="https://..."
                            required
                        />
                    </div>

                    <div className="form-control md:col-span-2 mt-4">
                        <button type="submit" className="btn btn-primary w-full">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;