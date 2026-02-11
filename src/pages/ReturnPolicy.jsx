import React from 'react';
import { Helmet } from 'react-helmet-async';

const ReturnPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Return Policy | Sky Arc Computers</title>
                <meta name="description" content="Return Policy for Sky Arc Computers. Information on returns, refunds, and exchanges." />
            </Helmet>

            <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Return Policy</h1>

                    <div className="prose prose-green max-w-none text-gray-600 space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Return Conditions</h2>
                            <p>
                                We want you to be completely satisfied with your purchase. If you are not satisfied, you may return the item within <strong>7 days</strong> of receipt, provided that:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>The item is in its original packaging, unopened and unused.</li>
                                <li>The item includes all original tags, accessories, and documentation.</li>
                                <li>You provide the original receipt or proof of purchase.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Non-Returnable Items</h2>
                            <p>
                                Certain items cannot be returned for hygiene or safety reasons, including but not limited to:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Opened software or digital downloads.</li>
                                <li>Custom-configured hardware.</li>
                                <li>Items explicitly marked as non-returnable at the time of purchase.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Refund Process</h2>
                            <p>
                                Once we receive your returned item and inspect it, we will notify you of the approval or rejection of your refund.
                            </p>
                            <p className="mt-2">
                                If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within <strong>14 days</strong>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Defective or Damaged Items</h2>
                            <p>
                                If you receive a defective or damaged item, please contact us immediately upon receipt. We will arrange for a replacement or a full refund, including shipping costs.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Contact Us</h2>
                            <p>
                                To initiate a return or if you have any questions, please contact our support team at: <a href="mailto:salman@skyarcc.com" className="text-green-600 hover:underline">salman@skyarcc.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReturnPolicy;
