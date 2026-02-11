import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <Link to={`/products/${product.id}`} className="group block h-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl hover:shadow-green-100 transition-all duration-300 overflow-hidden h-full flex flex-col border border-white/60 hover:border-green-200 hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <span className="text-xs font-bold text-green-600">Quick View</span>
                    </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-2">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 px-2 py-1 rounded-md">
                            {product.category}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-teal-600 transition-all">
                        {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                        {product.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
                        <div className="flex flex-col">
                            {product.originalPrice && (
                                <span className="text-sm font-medium text-gray-400 line-through">
                                    {product.originalPrice} 	⃁
                                </span>
                            )}
                            <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                                {product.price} 	⃁
                            </span>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="p-3 bg-gray-50 text-gray-700 hover:bg-green-600 hover:text-white rounded-xl transition-all active:scale-95 group/btn"
                            aria-label="Add to cart"
                        >
                            <HiOutlineShoppingBag size={20} className="group-hover/btn:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
