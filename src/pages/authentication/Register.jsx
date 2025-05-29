import { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const openModal = () => {
        document.getElementById('my_modal_4')?.close();
        document.getElementById('my_modal_3')?.showModal();
    };
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className=" flex items-center justify-center ">
                        <div className="bg-white w-full max-w-md ">
                            <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                            <form className="space-y-4">
                                <div>
                                    <label className="block mb-1 font-medium text-sm">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium text-sm">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="relative">
                                    <label className="block mb-1 font-medium text-sm">Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="input input-bordered w-full pr-10"
                                    />
                                    <span
                                        className="absolute right-3 top-10 cursor-pointer text-gray-500"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                                <button
                                    type="submit"
                                    className="btn bg-orange-500 text-white hover:bg-orange-600 w-full"
                                >
                                    Register
                                </button>
                            </form>

                            <div className="divider text-xs mt-6">Or Sign Up with</div>

                            <div className="flex gap-4 justify-center">
                                <button className="btn w-1/2 border border-gray-300">
                                    <FaGoogle className="mr-2" /> Google
                                </button>
                                <button className="btn w-1/2 border border-gray-300">
                                    <FaFacebook className="mr-2 text-blue-600" /> Facebook
                                </button>
                            </div>

                            <p className="text-center text-sm mt-6">
                                Already have an account?{" "}
                                <span onClick={openModal} className="text-orange-500 cursor-pointer font-semibold">
                                    Log In
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Register;