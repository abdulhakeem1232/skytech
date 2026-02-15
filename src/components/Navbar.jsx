import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiOutlineShoppingBag, HiChevronDown } from 'react-icons/hi';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
    const { cartCount } = useCart();

    // get unique categories
    const categories = [...new Set(products.map(p => p.category))];

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Products',
            path: '/products',
            sublinks: categories.map(cat => ({
                name: cat,
                path: `/products?category=${encodeURIComponent(cat)}`
            }))
        },
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
                    <div className="hidden md:flex space-x-8 h-full items-center">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group h-full flex items-center">
                                {link.sublinks ? (
                                    <>
                                        <Link
                                            to={link.path}
                                            className="text-gray-600 group-hover:text-green-600 transition-colors duration-300 font-medium flex items-center gap-1"
                                        >
                                            {link.name}
                                            <HiChevronDown className="group-hover:rotate-180 transition-transform duration-300" />
                                        </Link>

                                        {/* Dropdown Menu */}
                                        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl py-4 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-[60]">
                                            <div className="grid grid-cols-1 gap-1 px-2">
                                                <Link
                                                    to="/products"
                                                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all"
                                                >
                                                    All Products
                                                </Link>
                                                {link.sublinks.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.path}
                                                        className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
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
                <div className="md:hidden bg-white border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-6rem)]">
                    <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.sublinks ? (
                                    <div className="space-y-1">
                                        <button
                                            onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                                            className="w-full flex justify-between items-center px-3 py-3 rounded-xl text-base font-bold text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                                        >
                                            {link.name}
                                            <HiChevronDown className={`transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {isMobileProductsOpen && (
                                            <div className="pl-6 space-y-1 pb-2">
                                                <Link
                                                    to="/products"
                                                    className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-600 hover:text-green-600 hover:bg-gray-50"
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setIsMobileProductsOpen(false);
                                                    }}
                                                >
                                                    All Products
                                                </Link>
                                                {link.sublinks.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.path}
                                                        className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-600 hover:text-green-600 hover:bg-gray-50"
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setIsMobileProductsOpen(false);
                                                        }}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="block px-3 py-3 rounded-xl text-base font-bold text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
