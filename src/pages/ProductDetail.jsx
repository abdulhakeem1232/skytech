import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaArrowLeft, FaCheckCircle, FaStar, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';
import ProductCarousel from '../components/ProductCarousel';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import CurrencySymbol from '../components/CurrencySymbol';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [activeImage, setActiveImage] = useState('');
    const [quantity, setQuantity] = useState(1);

    const product = products.find(p => p.id === parseInt(id));

    // Redirect to products if not found
    useEffect(() => {
        if (!product && id) {
            // Small delay to allow render, but ideally should handle 404
            // navigate('/products'); 
        }
        if (product && product.images && product.images.length > 0) {
            setActiveImage(product.images[0]);
        }
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [id, product, navigate]);

    if (!product) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                    <Link to="/products" className="text-green-600 hover:underline">Return to Shop</Link>
                </div>
            </div>
        );
    }

    // Related products
    const relatedProducts = products.filter(
        p => p.category === product.category && p.id !== product.id
    );

    const whatsappMessage = encodeURIComponent(
        `Hello, I am interested in buying: *${product.name}* (ID: ${product.id}). Is it available?`
    );

    return (
        <>
            <Helmet>
                <title>{`${product.name} | Sky Arc Computers`}</title>
                <meta name="description" content={product.description} />
            </Helmet>

            <div className="bg-white min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Breadcrumb / Back */}
                    <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-green-600 mb-8 transition-colors">
                        <FaArrowLeft className="mr-2" /> Back to Products
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Image Section */}
                        <div className="flex flex-col gap-4">
                            <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-center aspect-square lg:aspect-auto max-h-[600px] overflow-hidden">
                                <img
                                    src={activeImage || (product?.images && product.images[0])}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            {product.images && product.images.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {product.images.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveImage(img)}
                                            className={`w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg p-2 border cursor-pointer transition-all ${activeImage === img ? 'border-green-500 ring-2 ring-green-500/30' : 'border-gray-200 hover:border-green-300'}`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${product.name} view ${index + 1}`}
                                                className="w-full h-full object-contain mix-blend-multiply"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col justify-center">
                            <span className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-2">
                                {product.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                {product.name}
                            </h1>

                            {/* <div className="flex items-center space-x-2 mb-6">
                                <div className="flex text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                <span className="text-gray-500 text-sm">(24 reviews)</span>
                            </div> */}

                            <div className="flex items-end gap-3 mb-6">
                                <div className="text-3xl font-bold text-gray-900">
                                    {product.price} <CurrencySymbol />
                                </div>
                                {product.originalPrice && (
                                    <>
                                        <div className="text-xl text-gray-400 line-through mb-1">
                                            {product.originalPrice} <CurrencySymbol />
                                        </div>
                                        <div className="mb-1 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                                            SAVE {product.originalPrice - product.price} <CurrencySymbol />
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="prose prose-lg text-gray-600 mb-8">
                                <p>{product.description}</p>
                            </div>

                            {/* Technical Specifications */}
                            {product.specifications && Object.keys(product.specifications).length > 0 && (
                                <div className="mb-8 border-t border-gray-100 pt-8">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
                                    <div className="grid grid-cols-1 gap-y-2">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <div key={key} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                                                <span className="font-semibold text-gray-500">{key}</span>
                                                <span className="text-gray-900 text-right font-medium">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Features List (Mock) */}
                            {/* <div className="space-y-3 mb-8">
                                {['1 Year Official Warranty', 'Free Doorstep Delivery', '7 Days Return Policy'].map((feature, i) => (
                                    <div key={i} className="flex items-center text-gray-700">
                                        <FaCheckCircle className="text-green-500 mr-3" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div> */}

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border-2 border-gray-100 rounded-2xl p-1 bg-gray-50/50">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="p-3 hover:text-green-600 transition-colors"
                                        >
                                            <FaMinus />
                                        </button>
                                        <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="p-3 hover:text-green-600 transition-colors"
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => addToCart(product, quantity)}
                                        className="flex-1 bg-gray-900 hover:bg-black text-white text-lg font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-gray-200"
                                    >
                                        <FaShoppingCart />
                                        <span>Add to Cart</span>
                                    </button>
                                </div>

                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://wa.me/966557794892?text=${whatsappMessage}`}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-green-600/20"
                                >
                                    <FaWhatsapp size={24} />
                                    <span>Quick Order via WhatsApp</span>
                                </a>
                            </div>
                            <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">
                                *Fast and secure checkout via WhatsApp
                            </p>
                        </div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-16 border-t border-gray-100 pt-16">
                            <ProductCarousel title="Related Products" products={relatedProducts} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
