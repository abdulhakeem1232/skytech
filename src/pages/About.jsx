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
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sky Arc Computers</h1>
                    <p className="text-xl text-gray-300">
                        Simplifying your digital life with premium technology and exceptional service.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            At Sky Arc Computers, we believe that premium technology should be accessible to everyone.
                            Our mission is to bridge the gap between innovation and consumers by providing
                            high-quality electronics with a focus on convenience and trust.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We are not just a store; we are technology enthusiasts passionate about bringing
                            the best gadgets to your doorstep. From the latest wearables to professional
                            photography gear, we curate our collection to ensure excellence.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                            alt="Team at work"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
