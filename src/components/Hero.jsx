import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative bg-gray-900 text-white overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600&q=80"
                    alt="Technology Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/90 to-green-900/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
                        Next Gen Tech <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 animate-pulse">Delivered To You</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg drop-shadow-md font-medium">
                        Experience the future with our curated collection of premium electronics.
                        Quality products, unbeatable prices, and doorstep delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/products"
                            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-full font-bold transition-all duration-300 shadow-lg shadow-green-600/30 hover:shadow-green-500/50 hover:-translate-y-1 text-center"
                        >
                            Explore Products
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-full font-bold transition-all duration-300 text-center border border-white/20 hover:border-white/40 hover:-translate-y-1"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
