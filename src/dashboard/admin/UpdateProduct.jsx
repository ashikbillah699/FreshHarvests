import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    const { id } = useParams();
    const [products] = useProducts();
    const prodactData = products.find(p => p.id == id)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productName = e.target.productName.value;
        const price = e.target.price.value;
        const stock = e.target.stock.value;
        const description = e.target.description.value;
        const images = e.target.images.value;
        const updateData = { productName, price, stock, description, images }

        try {
            await fetch(`https://code-commando.com/api/v1/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            });
            toast.success("update successfully");
            navigate('/dashboard/manageProducts')
        }
        catch (err) {
            console.log(err);
        }
    }

    if (!prodactData) {
        return <div className="text-center py-10">Loading...<span className="loading loading-spinner loading-lg"></span></div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Update Product</h2>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {/* Product Name */}
                <div>
                    <label className="label font-semibold">Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        defaultValue={prodactData?.productName}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="label font-semibold">Price</label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={prodactData?.price}
                        className="input input-bordered w-full"
                        step="0.01"
                        required
                    />
                </div>

                {/* Stock */}
                <div>
                    <label className="label font-semibold">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        defaultValue={prodactData?.stock}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="label font-semibold">Image URL</label>
                    <input
                        type="url"
                        name="images"
                        value={prodactData?.images[0]}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                    <label className="label font-semibold">Description</label>
                    <textarea
                        name="description"
                        value={prodactData?.description}
                        rows="4"
                        className="textarea textarea-bordered w-full"
                        required
                    ></textarea>
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                    <button type="submit" className="btn btn-primary w-full">
                        Update Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;