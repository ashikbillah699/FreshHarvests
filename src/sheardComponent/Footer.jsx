import { FaApple, FaApplePay, FaCcPaypal, FaGooglePlay, FaLeaf, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className="mt-32 bg-gray-50">
            <footer className="w-full max-w-[1200px] mx-auto footer sm:footer-horizontal text-base-content p-10">
                <aside className="flex flex-col">
                    <div className="flex justify-center items-center md:mb-36 gap-3">
                        <FaLeaf className="text-[#749B3F] w-12 h-12" />
                        <NavLink to="/" className="text-3xl font-bold">Fresh Harvests</NavLink>
                    </div>
                    <div className='mt-30'>
                        <h4 className='text-md font-semibold mb-3'>Download App:</h4>
                        <div className="space-y-2 md:space-y-0">
                            <button className="btn btn-neutral mr-3"><FaGooglePlay size={20} /> Google Play</button>
                            <button className="btn btn-neutral"><FaApple size={20} /> Apple Store</button>
                        </div>
                    </div>
                </aside>
                <nav className="space-y-4">
                    <h6 className="font-semibold text-black text-md">Quick links 1</h6>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/shop' className="link link-hover">Shop</Link>
                    <Link to='/aboutUs' className="link link-hover">About Us</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                    <Link className="link link-hover">Detail Blog</Link>
                </nav>
                <nav className="space-y-4">
                    <h6 className="font-semibold text-black text-md">Quick links 2</h6>
                    <Link className="link link-hover">Favorites</Link>
                    <Link className="link link-hover">Cart</Link>
                    <Link className="link link-hover">Sign in</Link>
                    <Link className="link link-hover">Register</Link>

                </nav>

                <nav className="space-y-4">
                    <h6 className="font-semibold text-black text-md">Contact Us</h6>
                    <p className='flex items-center gap-2'><FaPhoneAlt size={20} /> 1234 5678 90</p>
                    <p className='flex items-center gap-2'><MdOutlineEmail size={20} /> Freshharvests@gmail.com</p>
                    <p className='flex items-center gap-2'><FaMapMarkerAlt size={20} /> Tanjung Sari Street, Pontianak, Indonesia</p>

                    <div className='pt-6'>
                        <h4 className='text-md font-bold mb-3'>Accepted Payment Methods:</h4>
                        <div className='flex items-center gap-5'>
                            <span className='text-blue-950'><RiVisaLine size={50} /></span>
                            <span className='text-blue-950'><FaCcPaypal size={50} /></span>
                            <span className=''><FaApplePay size={50} /></span>

                        </div>
                    </div>
                </nav>
            </footer>
            <footer className="pt-6 border-t w-full max-w-[1200px] mx-auto footer sm:footer-horizontal bg-base-200 text-base-content items-center px-10 pb-10">
                <aside className="grid-flow-col items-center">
                    <p className='font-semibold'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end md:mr-20">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </nav>
            </footer>
            {/* <footer className="w-full max-w-[1200px] mx-auto footer py-6 text-black items-center justify-center border-t">
                <aside className="grid-flow-col items-center">
                    <p className=''>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </footer> */}
        </div>
    );
};

export default Footer;