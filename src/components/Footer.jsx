import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Sky Arc Computers</h3>
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

                        <div className="space-y-3 mb-6 text-gray-400 text-sm">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-green-500 shrink-0" size={16} />
                                <p>Custodian of Two Holy Mosques Rd, <br /> Dossary Computer Mall, Ground Floor, <br /> Al Khobar, 34621</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-green-500 shrink-0" size={16} />
                                <a href="mailto:salman@skyarcc.com" className="hover:text-white transition-colors">salman@skyarcc.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-green-500 shrink-0" size={16} />
                                <a href="tel:+966593121981" className="hover:text-white transition-colors">+966 59 312 1981</a>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaClock className="mt-1 text-green-500 shrink-0" size={16} />
                                <p>Sat - Thu: 09:00 AM - 11:30 PM</p>
                            </div>
                        </div>

                        <a
                            href="whatsapp://send?phone=966557794892"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors duration-300 mb-4"
                        >
                            <FaWhatsapp size={20} />
                            <span>Chat on WhatsApp</span>
                        </a>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Sky Arc Computers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
