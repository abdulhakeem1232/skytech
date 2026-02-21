import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaShippingFast, FaUserFriends, FaHistory } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>About Us | Sky Arc Computers - Your Tech Partner in Khobar</title>
                <meta name="description" content="Learn more about Sky Arc Computers. We provide premium electronics and top-notch customer service in Al Khobar, Saudi Arabia." />
                <link rel="canonical" href="https://skyarcc.com/about" />
            </Helmet>

            {/* Header Banner */}
            <div className="bg-gray-900 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
                    <p className="text-xl text-gray-300">
                        Welcome to Sky Arc Computer Foundation.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Content */}
                <div className="prose prose-green max-w-none text-gray-600 space-y-6">
                    <p className="text-lg leading-relaxed">
                        Sky Arc Computer Foundation is a trusted IT trading and technology solutions company based in Al Khobar, Saudi Arabia since 2020. We specialize in providing high-quality computers, servers, networking equipment, CCTV systems, firewalls, smart automation solutions, and complete IT infrastructure services.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Since our establishment, we have been committed to delivering reliable technology products and professional IT services to businesses, organizations, and individual customers across the Kingdom of Saudi Arabia.
                    </p>
                    <p className="text-lg leading-relaxed">
                        We, through vision, always strive with determination and commitment to meet all of the unique demands of our customers of all categories and assist and provide them with both advanced and modern technology at very competitive prices we also are committed to meeting their needs & desires with the highest performance of all technology solutions to keep pace with the future.
                    </p>
                </div>

                {/* Values Grid - Kept but adjusted for layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-white/80 backdrop-blur p-8 rounded-2xl text-center shadow-lg border border-white/50 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 shadow-inner">
                            <FaShippingFast size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Doorstep Delivery</h3>
                        <p className="text-gray-600">
                            We know your time is valuable. That's why we bring the store to you with our
                            reliable and fast delivery network across the region.
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur p-8 rounded-2xl text-center shadow-lg border border-white/50 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 shadow-inner">
                            <FaUserFriends size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Customer First</h3>
                        <p className="text-gray-600">
                            Your satisfaction is our top priority. Our support team is always just a
                            message away to assistant you with any needs.
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur p-8 rounded-2xl text-center shadow-lg border border-white/50 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 shadow-inner">
                            <FaHistory size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Long Term Trust</h3>
                        <p className="text-gray-600">
                            Building lasting relationships is what we strive for. We offer only genuine
                            products with real warranties you can count on.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
