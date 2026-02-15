import React from 'react';
import { useCart } from '../context/CartContext';
import { FaWhatsapp, FaTrash, FaMinus, FaPlus, FaArrowLeft, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CurrencySymbol from '../components/CurrencySymbol';

export default function Cart() {
    const {
        cartItems,
        cartTotal,
        removeFromCart,
        updateQuantity,
        clearCart
    } = useCart();

    const handleCheckout = () => {
        const phoneNumber = '966557794892';

        const itemsList = cartItems.map((item, index) =>
            `${index + 1}. *${item.name}* (ID: ${item.id})\n` +
            `   Qty: ${item.quantity} x ${item.price} SAR\n` +
            `   Subtotal: ${item.quantity * item.price} SAR`
        ).join('\n\n');

        const message =
            `*New Order via Website Cart*\n\n` +
            `------------------------\n` +
            `${itemsList}\n` +
            `------------------------\n` +
            `*Total Amount: ${cartTotal} SAR*\n\n` +
            `I would like to place an order for these items. Is everything available?`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <Helmet>
                <title>Your Shopping Cart | Sky Arc Computers Khobar</title>
                <meta name="description" content="Review your items and checkout securely at Sky Arc Computers." />
                <link rel="canonical" href="https://skyarcc.com/cart" />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
                    <Link to="/products" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2">
                        <FaArrowLeft /> Continue Shopping
                    </Link>
                </div>

                {cartItems.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
                        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                            <FaShoppingBag size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8 max-w-sm mx-auto">Looks like you haven't added any premium tech to your cart yet.</p>
                        <Link
                            to="/products"
                            className="inline-block px-10 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20"
                        >
                            Explore Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Items List */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-6 hover:border-green-200 transition-colors">
                                    <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-200">
                                        <img
                                            src={item.images?.[0]}
                                            alt={item.name}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-gray-900 leading-tight">
                                                <Link to={`/products/${item.id}`} className="hover:text-green-600 transition-colors">
                                                    {item.name}
                                                </Link>
                                            </h3>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-300 hover:text-red-500 transition-colors p-1"
                                                aria-label="Remove item"
                                            >
                                                <FaTrash size={16} />
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 hover:bg-gray-100 text-gray-600"
                                                >
                                                    <FaMinus size={12} />
                                                </button>
                                                <span className="px-4 font-bold text-gray-900 min-w-[3rem] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 hover:bg-gray-100 text-gray-600"
                                                >
                                                    <FaPlus size={12} />
                                                </button>
                                            </div>
                                            <div className="text-lg font-bold text-gray-900">
                                                {item.price * item.quantity} <CurrencySymbol />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={clearCart}
                                className="text-gray-400 hover:text-red-500 transition-colors py-2 font-medium flex items-center gap-2 text-sm ml-auto"
                            >
                                <FaTrash size={12} /> Clear Entire Cart
                            </button>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-28">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>{cartTotal} <CurrencySymbol /></span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Delivery</span>
                                        <span className="text-green-600 font-bold uppercase text-xs">Calculated at checkout</span>
                                    </div>
                                    <div className="border-t border-gray-100 pt-4 flex justify-between">
                                        <span className="text-lg font-bold text-gray-900">Total</span>
                                        <div className="text-right">
                                            <div className="text-2xl font-black text-green-600 leading-none">
                                                {cartTotal} <CurrencySymbol />
                                            </div>
                                            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Inclusive of VAT</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl font-black shadow-xl shadow-green-600/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] mb-4"
                                >
                                    <FaWhatsapp size={24} />
                                    <span>Checkout on WhatsApp</span>
                                </button>

                                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <p className="text-xs text-gray-500 leading-relaxed text-center">
                                        * You will be redirected to WhatsApp to confirm your order details and delivery address.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
