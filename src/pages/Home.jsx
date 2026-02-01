import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProductCarousel from '../components/ProductCarousel';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
    // Featured products for carousel (e.g., first 8)
    const featuredProducts = products.slice(0, 8);

    // Latest products for grid (e.g., next 8)
    const latestProducts = products.slice(8, 16);

    return (
        <>
            <Helmet>
                <title>SkyTech | Premium Electronics Store</title>
                <meta name="description" content="Discover premium electronics, gadgets, and accessories at SkyTech. Fast delivery and authentic products." />
                <meta property="og:title" content="SkyTech | Premium Electronics Store" />
                <meta property="og:description" content="Discover premium electronics, gadgets, and accessories at SkyTech." />
            </Helmet>

            <main>
                {/* Hero Section */}
                <Hero />

                {/* Services Section */}
                <Services />

                {/* Featured Products Carousel */}
                <ProductCarousel title="Featured Collection" products={featuredProducts} />

                {/* Product Grid Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Arrivals</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Check out our newest additions to the catalog. Hand-picked quality products just for you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {latestProducts.map((product) => (
                                <div key={product.id} className="h-full">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Link
                                to="/products"
                                className="inline-block px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors duration-300 shadow-md"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
                        <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                            Our tech experts are available on WhatsApp to guide you through your purchase.
                        </p>
                        <a
                            href="https://wa.me/966XXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-white text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors duration-300 shadow-lg"
                        >
                            Chat With Us
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
