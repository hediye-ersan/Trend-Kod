import React from 'react'
import ProductCard from '../components/ProductDetailCard';
import Navbar from '../layout/Header';
import { Link } from 'react-router-dom';

function ProductDetails() {
    return (
        <div>
            <Navbar />
            <div className="text-center mb-10">
                <h3 className="text-h3 font-bold mb-4">Shop</h3>
                <div className="flex items-center justify-center gap-2 text-sm text-h6 font-bold">
                    <Link to="/" className=" hover:underline ">Home</Link>
                    <span >/</span>
                    <span className="text-secondText ">Shop</span>
                </div>
            </div>
            <ProductCard />
            <div className="max-w-5xl mx-auto p-4">
                {/* Tabs */}
                <div className="flex gap-4 text-sm font-medium mb-6 border-b border-gray-200">
                    <button className="pb-2 border-b-2 border-gray-900">Description</button>
                    <button className="pb-2 border-b-2 border-transparent text-gray-500 hover:border-gray-300">
                        Additional Information
                    </button>
                    <button className="pb-2 border-b-2 border-transparent text-gray-500 hover:border-gray-300">
                        Reviews (0)
                    </button>
                </div>

                <div className="md:flex md:gap-8">
                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src="/images/detailCard.svg"
                            alt="Product"
                            className="w-full rounded-lg shadow"
                        />
                    </div>

                    {/* Description and Details */}
                    <div className="mt-6 md:mt-0 md:w-1/2">
                        {/* Description */}
                        <h3 className="text-xl font-semibold mb-4">the quick fox jumps over</h3>
                        <p className="text-gray-600 mb-4">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>

                        {/* Details */}
                        <h3 className="text-xl font-semibold mb-4">the quick fox jumps over</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="mr-2">›</span>
                                the quick fox jumps over the lazy dog
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">›</span>
                                the quick fox jumps over the lazy dog
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">›</span>
                                the quick fox jumps over the lazy dog
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">›</span>
                                the quick fox jumps over the lazy dog
                            </li>
                        </ul>
                        <h3 className="text-xl font-semibold mb-4">the quick fox jumps over</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="mr-2">›</span>
                                the quick fox jumps over the lazy dog
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">›</span>
                                the quick fox jumps over the lazy dog
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">›</span>
                                the quick fox jumps over the lazy dog
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;