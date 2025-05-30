import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logoutThunk } from "../features/authThunks";
import { MdOutlineHomeWork } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import useAllUsers from "../hooks/useAllUsers";
import { FaBasketShopping, FaLeaf, FaProductHunt, FaUsers } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { toast } from "react-toastify";

const DashboardLayout = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user);
    const [users] = useAllUsers()
    const navigate = useNavigate()

    if (!user || !users?.data) {
        return <div className="text-center py-10">Loading...<span className="loading loading-spinner loading-lg"></span></div>;
    }

    const mainRole = users?.data.find(u => u.email === user.email);

    if (!mainRole || !mainRole.role) {
        toast.info('Login or sign up as User or Admin from now on at "https://code-commando.com/api/v1/users".');
        navigate('/')
    }
    
    return (
        <div>
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Sidebar */}
                <div className="w-full md:w-1/5 bg-gray-200 text-[#0a0a0a] font-black p-8">
                    <div className="flex flex-col mb-8">
                        <a className="text-2xl font-bold">FRESH HARVESTS</a>
                    </div>
                    <ul className="flex flex-col space-y-5">
                        <li><NavLink to='/dashboard' className="hover:text-black duration-300 font-bold flex items-center gap-3"><ImProfile />Profile</NavLink></li>

                        {mainRole.role == "USER" && <>
                            <li><NavLink to='/dashboard/myShoping' className="hover:text-black duration-300 font-bold flex items-center gap-3"><FaBasketShopping />My Shoping</NavLink></li>
                            <li><NavLink to='/dashboard/history' className="hover:text-black duration-300 font-bold flex items-center gap-3"><FaHistory />History</NavLink></li>
                        </>}

                        {mainRole.role == "ADMIN" && <>
                            <li><NavLink to='/dashboard/addProduct' className="hover:text-black duration-300 font-bold flex items-center gap-3"><FaLeaf />Add Product</NavLink></li>
                            <li><NavLink to='/dashboard/allUser' className="hover:text-black duration-300 font-bold flex items-center gap-3"><FaUsers /> All Users</NavLink></li>
                            <li><NavLink to='/dashboard/manageProducts' className="hover:text-black duration-300 font-bold flex items-center gap-3"><FaProductHunt />Manage Products</NavLink></li>
                        </>}

                        <hr className=" border-gray-50" />
                        <li><NavLink to='/' className="hover:text-black duration-300 font-bold flex items-center gap-3"><MdOutlineHomeWork />Home</NavLink></li>
                        <li><NavLink to='/' onClick={() => dispatch(logoutThunk())} className="hover:text-black duration-300 font-bold flex items-center gap-3"><RiMenuAddLine />Log Out</NavLink></li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="w-full md:w-4/5 bg-gray-100 rounded">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;