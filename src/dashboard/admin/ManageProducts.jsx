import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [initialProducts] = useProducts();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (initialProducts?.length) {
            setProducts(initialProducts);
        }
    }, [initialProducts]);

    // Product delete
    const handleDelete = async (id) => {
        try {
            const res = await fetch(`https://code-commando.com/api/v1/products/${id}`, {
                method: "DELETE",
            });

            const result = await res.json();

            if (result.success) {
                const updated = products.filter(p => p.id !== id);
                setProducts(updated);
                toast.success("Product deleted successfully");
            } else {
                toast.error("Please connect to the database, then delete it.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Please connect to the database, then delete it.");
        }
    };
    return (
        <div className="overflow-x-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">All Products</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead className="bg-base-200">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price ($)</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center py-6">No products found.</td>
                            </tr>
                        ) : (
                            products.map((product, index) => (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={product.images[0]}
                                            alt={product.productName}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td>{product.productName}</td>
                                    <td>${product.price}</td>
                                    <td>{product.stock}</td>
                                    <td className="space-x-2">
                                        <Link to={`/dashboard/updateProduct/${product.id}`}>
                                            <button className="btn btn-sm btn-info"> Update</button>
                                        </Link>

                                        <button className="btn btn-sm btn-error"
                                            onClick={() => handleDelete(product.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;