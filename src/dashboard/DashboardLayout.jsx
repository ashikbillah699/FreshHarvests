import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logoutThunk } from "../features/authThunks";
import { MdClass, MdOutlineHomeWork, MdRequestQuote } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import useAllUsers from "../hooks/useAllUsers";
import { HiUser } from "react-icons/hi";
// import useAllUsers from "../hooks/useAllUsers";


const DashboardLayout = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user);
    const [users] = useAllUsers()
    console.log(users)

   if (!user || !users?.data) {
        return <div className="text-center py-10">Loading...<span className="loading loading-spinner loading-lg"></span></div>; 
    }

    const mainRole = users?.data.find(u => u.email === user.email);
    console.log("Logged in user:", user);
    console.log("Main role from DB:", mainRole);

    return (
        <div>
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Sidebar */}
                <div className="w-full md:w-1/5 bg-gray-200 text-[#0a0a0a] font-black p-8">
                    <div className="flex flex-col mb-8">
                        <a className="text-2xl font-bold">FRESH HARVESTS</a>
                        {/* <a className="text-xl font-thin tracking-widest">RESTURENT</a> */}
                    </div>
                    <ul className="flex flex-col space-y-5">

                        <li><NavLink to='/dashboard' className="hover:text-black duration-300 font-bold flex items-center gap-3"><ImProfile />Profile</NavLink></li>
                        {mainRole.role == "USER" && <>
                            <li><NavLink to='/deshboard/teacherRequest' className="hover:text-black duration-300 font-bold flex items-center gap-3"><MdRequestQuote />  Teacher Request</NavLink></li>
                            <li><NavLink to='/deshboard/users' className="hover:text-black duration-300 font-bold flex items-center gap-3"><HiUser />Users</NavLink></li>
                            <li> <NavLink to='/deshboard/reqAllClasses' className="hover:text-black duration-300 flex font-bold items-center gap-3"><MdClass />Class requests</NavLink></li>
                        </>}

                        {mainRole.role == "ADMIN" && <>
                            <li><NavLink to='/deshboard/addClass' className="hover:text-black duration-300 font-bold flex items-center gap-3"><MdRequestQuotr /> Add class</NavLink></li>
                            <li><NavLink to='/deshboard/myClass' className="hover:text-black duration-300 font-bold flex items-center gap-3"><HiUser />My class</NavLink></li>
                            <li> <NavLink to='/deshboard/reqAllClasses' href="#manage-items" className="hover:text-black duration-300 flex font-bold items-center gap-3"><MdClass />Profile</NavLink></li>
                        </>
                        }

                     
                            <li><NavLink to='/deshboard/myEnrollClass' className="hover:text-black duration-300 font-bold flex items-center gap-3"><IoHomeSharp /> My enroll class</NavLink></li>
                     
                        <hr className=" border-gray-50" />
                        <li><NavLink to='/' className="hover:text-black duration-300 font-bold flex items-center gap-3"><MdOutlineHomeWork />Home</NavLink></li>
                        <li><NavLink onClick={() => dispatch(logoutThunk())} className="hover:text-black duration-300 font-bold flex items-center gap-3"><RiMenuAddLine />Log Out</NavLink></li>
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