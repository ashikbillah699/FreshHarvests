import React from 'react';

const Footer = () => {
    return (
        <div className="">
                <footer className="footer py-6 text-black items-center justify-center border-t mx-auto">
                    <aside className="grid-flow-col items-center">
                        <p className=''>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </aside>
                </footer>
            </div>
    );
};

export default Footer;