import { FaHeart, FaLeaf } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from '../features/authThunks';

const Navbar = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch()

    const openModal = () => {
        document.getElementById('my_modal_3')?.showModal();
    };

    const links = <>
        <NavLink to='/'><li className='mx-3 hover:border-b-[#749B3F] transition duration-500 border-b border-white'>Home</li></NavLink>
        <NavLink><li className='mx-3 hover:border-b-[#749B3F] transition duration-500 border-b border-white'>Shop</li></NavLink>
        <NavLink><li className='mx-3 hover:border-b-[#749B3F] transition duration-500 border-b border-white'>About Us</li></NavLink>
        <NavLink><li className='mx-3 hover:border-b-[#749B3F] transition duration-500 border-b border-white'>Blog</li></NavLink>
    </>

    return (
        <div className="navbar border-b">
            <div className="navbar-start">
                <FaLeaf className="text-[#749B3F] w-10 h-10 " />
                <a className="text-2xl font-bold pl-2">Fresh Harvests</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal pr-6">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4 justify-end items-center">
                <FaHeart className='hidden md:inline' />
                <span className='hidden md:inline'>Favorite</span>
                <div className="indicator">
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
                    <span className="badge badge-sm indicator-item">8</span>
                </div>
                <span className='hidden md:inline'>cart</span>
                {
                    user && user?.uid ? <button onClick={() => dispatch(logoutThunk())} className="btn btn-outline">Log out</button>
                        : <button onClick={openModal} className="btn btn-outline">Sign in</button>
                }
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;