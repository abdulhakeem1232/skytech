import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
    // Featured products for carousel (e.g., first 8)
    const featuredProducts = products.slice(0, 8);

    return (
        <>
            <Helmet>
                <title>Sky Arc Computers | Premium Electronics Store</title>
                <meta name="description" content="Discover premium electronics, gadgets, and accessories at Sky Arc Computers. Fast delivery and authentic products." />
                <meta property="og:title" content="Sky Arc Computers | Premium Electronics Store" />
                <meta property="og:description" content="Discover premium electronics, gadgets, and accessories at Sky Arc Computers." />
            </Helmet>

            <main>
                {/* Hero Section */}
                <Hero />

                {/* Services Section */}
                <Services />

                {/* Main Product Grid */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Collection</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Explore our premium range of electronics and accessories.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {featuredProducts.map((product) => (
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
                            href="whatsapp://send?phone=966557794892"
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
