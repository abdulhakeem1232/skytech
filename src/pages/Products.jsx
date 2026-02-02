import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // get unique categories
    const categories = ['All', ...new Set(products.map(p => p.category))];

    // filter products
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <>
            <Helmet>
                <title>All Products | Sky Arc Computers</title>
                <meta name="description" content="Browse our complete catalog of electronics and gadgets." />
            </Helmet>

            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
                        <p className="text-gray-500">Explore our premium selection of technology and lifestyle items.</p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="mb-10 flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30 scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-green-600 border border-white/50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="h-full">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No products found in this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Products;
