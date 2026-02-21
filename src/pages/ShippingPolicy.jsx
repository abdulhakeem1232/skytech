import React from 'react';
import { Helmet } from 'react-helmet-async';

const ShippingPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Shipping Policy | Sky Arc Computers</title>
                <meta name="description" content="Read the shipping policy of Sky Arc Computers. We ship across the Kingdom of Saudi Arabia." />
                <link rel="canonical" href="https://skyarcc.com/shipping-policy" />
            </Helmet>

            <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Shipping Policy</h1>

                    <div className="prose prose-green max-w-none text-gray-600 space-y-6">
                        <section>
                            <p>Sky Arc Computers ships orders across the Kingdom of Saudi Arabia.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Processing Time</h2>
                            <p>
                                Orders are processed within 1–3 business days after payment confirmation (excluding Fridays and public holidays).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Shipping Charges</h2>
                            <p>
                                Shipping charges are calculated at checkout based on location and package size.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Tracking Your Order</h2>
                            <p>
                                Once shipped, customers will receive a tracking number via email or SMS.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Disclaimer</h2>
                            <p>
                                Sky Arc Computers is not responsible for delays caused by courier services or incorrect shipping information provided by the customer.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Shipping Inquiries</h2>
                            <p>
                                For shipping inquiries, please contact us at:
                            </p>
                            <ul className="list-none space-y-2">
                                <li><strong>Email:</strong> <a href="mailto:Salman@skyarcc.com" className="text-green-600 hover:underline">Salman@skyarcc.com</a></li>
                                <li><strong>Phone:</strong> <a href="tel:+966593121981" className="text-green-600 hover:underline">059 312 1981</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShippingPolicy;
