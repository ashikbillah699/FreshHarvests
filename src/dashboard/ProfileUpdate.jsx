import { useSelector } from "react-redux";
import useAllUsers from "../hooks/useAllUsers";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
    const user = useSelector(state => state.auth.user);
    const [users] = useAllUsers();
    const navigate= useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        email: '',
        profileImage: '',
        role: '',
    });

    useEffect(() => {
        if (user && users?.data) {
            const mainRole = users.data.find(u => u.email === user.email);
            if (mainRole) {
                setFormData({
                    fullName: mainRole.fullName || '',
                    userName: mainRole.userName || '',
                    email: mainRole.email || '',
                    profileImage: mainRole.profileImage || '',
                    role: mainRole.role || '',
                    id: mainRole._id || mainRole.id,
                });
            }
        }
    }, [user, users]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, ...updateData } = formData;

        try {
            const res = await fetch(`https://code-commando.com/api/v1/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            });

            const data = await res.json();
            console.log("User updated successfully:", data);
            toast.success("User updated successfully!");
            navigate('/dashboard')
        }
        catch (err) {
            toast.error("Update failed: " + err.message);
        }
    };

    if (!user || !users?.data || !formData.email) {
        return <div className="text-center py-10">Loading...<span className="loading loading-spinner loading-lg"></span></div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4 md:mt-20">
            <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
                <h2 className="text-2xl font-bold text-center">Update User</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="form-control">
                        <label className="label font-semibold">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Username */}
                    <div className="form-control">
                        <label className="label font-semibold">Username</label>
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Optional"
                        />
                    </div>

                    {/* Email (readonly) */}
                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            readOnly
                            className="input input-bordered w-full bg-gray-100"
                        />
                    </div>

                    {/* Profile Image */}
                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold">Profile Image URL</label>
                        <input
                            type="text"
                            name="profileImage"
                            value={formData.profileImage}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="https://..."
                        />
                    </div>

                    {/* Role */}
                    <div className="form-control md:col-span-2">
                        <label className="label font-semibold">Role</label>
                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            readOnly
                            className="input input-bordered w-full"
                            placeholder="USER, ADMIN, etc."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control md:col-span-2 mt-4">
                        <button type="submit" className="btn btn-primary w-full">
                            Update User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;
