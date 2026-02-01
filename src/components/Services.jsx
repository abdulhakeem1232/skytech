import React from 'react';
import { FaTruck, FaWhatsapp, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaTruck size={32} />,
            title: 'Fast Delivery',
            description: 'Quick and reliable doorstep delivery to all regions.'
        },
        {
            icon: <FaWhatsapp size={32} />,
            title: 'Instant Support',
            description: 'Connect with us directly on WhatsApp for any queries.'
        },
        {
            icon: <FaShieldAlt size={32} />,
            title: 'Genuine Products',
            description: '100% authentic products with manufacturer warranties.'
        },
        {
            icon: <FaHeadset size={32} />,
            title: 'Expert Advice',
            description: 'Get recommendations from our tech experts before buying.'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg shadow-gray-200/50 hover:shadow-green-200/50 hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 shadow-inner group-hover:scale-110 group-hover:from-green-600 group-hover:to-teal-600 group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
