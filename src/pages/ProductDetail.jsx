import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaArrowLeft, FaCheckCircle, FaStar, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';
import ProductCarousel from '../components/ProductCarousel';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import CurrencySymbol from '../components/CurrencySymbol';

const SpecificationsTable = ({ specifications }) => {
    if (!specifications || Object.keys(specifications).length === 0) return null;
    return (
        <div className="bg-white rounded-[2.5rem] border border-emerald-50 p-8 md:p-12 shadow-2xl shadow-emerald-100/20 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-5 mb-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200 text-white">
                        <FaCheckCircle size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-none">Technical Specifications</h2>
                        <p className="text-emerald-600 text-sm font-bold mt-1 uppercase tracking-widest">Detail & Performance</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    {Object.entries(specifications).map(([key, value], index) => (
                        <div
                            key={key}
                            className={`grid grid-cols-[1fr_1.8fr] md:grid-cols-[1.2fr_2.5fr] py-6 px-7 rounded-[1.5rem] text-sm gap-8 items-start transition-all duration-300 ${index % 2 === 0 ? 'bg-emerald-50/40' : 'bg-transparent'
                                } hover:bg-emerald-50 hover:shadow-md hover:shadow-emerald-100/50 group border border-transparent hover:border-emerald-100`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="font-extrabold text-emerald-900/40 uppercase tracking-[0.15em] text-[11px] group-hover:text-emerald-600 transition-colors">
                                    {key}
                                </span>
                            </div>
                            <span className="text-gray-900 font-bold leading-relaxed">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

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

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": product.images.map(img => `https://skyarcc.com${img}`),
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": "Sky Arc Computers"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://skyarcc.com/products/${product.id}`,
            "priceCurrency": "SAR",
            "price": product.price,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
        "category": product.category
    };

    return (
        <>
            <Helmet>
                <title>{`${product.name} | Computer Shop Khobar | Sky Arc Computers`}</title>
                <meta name="description" content={`Buy ${product.name} at Sky Arc Computers. ${product.description.substring(0, 150)}... Original products in Khobar, Saudi Arabia.`} />
                <link rel="canonical" href={`https://skyarcc.com/products/${product.id}`} />

                {/* Product JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(productSchema)}
                </script>

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="product" />
                <meta property="og:title" content={`${product.name} | Sky Arc Computers`} />
                <meta property="og:description" content={product.description} />
                <meta property="og:image" content={product.images[0]} />
                <meta property="product:price:amount" content={product.price} />
                <meta property="product:price:currency" content="SAR" />
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

                            {/* Mobile Technical Specifications (Under WhatsApp button) */}
                            <div className="lg:hidden mt-12 px-2">
                                <SpecificationsTable specifications={product.specifications} />
                            </div>

                            <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">
                                *Fast and secure checkout via WhatsApp
                            </p>
                        </div>
                    </div>

                    {/* Desktop Technical Specifications (Below the main section) */}
                    <div className="hidden lg:block mb-16">
                        <SpecificationsTable specifications={product.specifications} />
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
