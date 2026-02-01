import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">SkyTech</h3>
                        <p className="text-gray-400 mb-4">
                            Your one-stop destination for premium electronics and lifestyle products.
                            We deliver quality to your doorstep.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h4>
                        <p className="text-gray-400 mb-2">Have questions? Chat with us!</p>
                        <a
                            href="https://wa.me/966XXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors duration-300 mb-4"
                        >
                            <FaWhatsapp size={20} />
                            <span>Chat on WhatsApp</span>
                        </a>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} SkyTech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
