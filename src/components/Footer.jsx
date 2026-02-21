import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import vatLogo from '../assets/vatlogo.png';
import vatCert from '../assets/vat.jpeg';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Sky Arc Computers</h3>
                        <p className="text-gray-400 mb-6">
                            Your one-stop destination for premium electronics and lifestyle products.
                            We deliver quality to your doorstep.
                        </p>
                        <div className="mt-4">
                            <a
                                href={vatCert}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src={vatLogo}
                                    alt="VAT Certificate"
                                    className="h-16 w-auto rounded border border-gray-700 bg-white p-1"
                                />
                                <p className="text-xs text-gray-400 mt-2">Certified VAT Registered</p>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/shipping-policy" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</Link></li>
                            <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/return-policy" className="text-gray-400 hover:text-white transition-colors">Return Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h4>

                        <div className="space-y-3 mb-6 text-gray-400 text-sm">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-green-500 shrink-0" size={16} />
                                <a
                                    href="https://share.google/Py958pKSMVfuT5oEw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Custodian of Two Holy Mosques Rd, <br /> Dossary Computer Mall, Ground Floor, <br /> Al Khobar, 34621
                                </a>
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
                            <a href="https://www.facebook.com/skyarc.computers/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors"><FaFacebook size={24} /></a>
                            <a href="https://www.instagram.com/skyarc.computers/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors"><FaInstagram size={24} /></a>
                            <a href="https://www.linkedin.com/company/sky-arc-computers/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors"><FaLinkedin size={24} /></a>
                            <a href="https://www.youtube.com/@SkyArcComputers/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors"><FaYoutube size={24} /></a>
                            {/* <a href="https://www.tiktok.com/@skyarc.computers" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaTiktok size={24} /></a> */}
                        </div>

                        {/* Google Map Embed */}

                    </div>
                    {/* Map Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-green-400">Our Location</h4>
                        <div className="rounded-lg overflow-hidden h-64 w-full border border-gray-700">
                            <iframe
                                title="Sky Arc Computers Location"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                src="https://maps.google.com/maps?q=Sky+Arc+Computers,+Dossary+Computer+Mall,+Al+Khobar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                allowFullScreen
                            ></iframe>
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
