import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiOutlineShoppingBag } from 'react-icons/hi';
import { useCart } from '../context/CartContext';

import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <img src={logo} alt="Sky Arc Computers Logo" className="h-20 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>


                    {/* Cart and Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/cart"
                            className="relative p-2 text-gray-600 hover:text-green-600 transition-colors"
                            aria-label="View cart"
                        >
                            <HiOutlineShoppingBag size={28} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-600 hover:text-green-600 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
