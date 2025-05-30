import { FaHeart, FaLeaf } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from '../features/authThunks';

const Navbar = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const openModal = () => {
        document.getElementById('my_modal_3')?.showModal();
    };

    const links = (
        <>
            <li>
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#749B3F]' : ''}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/shop' className={({ isActive }) => isActive ? 'text-[#749B3F]' : ''}>Shop</NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#749B3F]' : ''}>About Us</NavLink>
            </li>
            <li>
                <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-[#749B3F]' : ''}>Blog</NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-[#749B3F]' : ''}>Dashboard</NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="bg-gray-50 w-full flex justify-center shadow-md">
            <div className="navbar w-full max-w-[1200px] mx-auto px-4">
                {/* Navbar Start */}
                <div className="navbar-start flex items-center gap-2">
                    <FaLeaf className="text-[#749B3F] w-8 h-8" />
                    <NavLink to="/" className="text-xl font-bold">Fresh Harvests</NavLink>
                </div>

                {/* Navbar Center - Desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4 px-1">{links}</ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-1">
                        <FaHeart />
                        <span>Favorite</span>
                    </div>

                    <div className="indicator md:flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Cart</span>
                        <span className="badge badge-sm text-white bg-red-500 indicator-item">8</span>
                    </div>

                    {
                        user?.uid
                            ? <button onClick={() => dispatch(logoutThunk())} className="btn btn-outline btn-sm">Log out</button>
                            : <button onClick={openModal} className="btn btn-outline btn-sm">Sign in</button>
                    }

                    {/* Mobile Dropdown */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
