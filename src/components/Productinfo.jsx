import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

const Productinfo = () =>
{
    const [prodInfo, setProdinfo] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');
    const { resId } = useParams();
    const navigate = useNavigate();

    useEffect(() =>
    {
        fetch('https://fakestoreapi.com/products/' + resId).then(
            res => res.json()
        ).then(
            data =>
            {
                console.log(data);
                setProdinfo(data);
            });
    }, [resId]);

    if (!prodInfo)
    {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
                >
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-semibold">Back to Products</span>
                </button>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                        {/* Left: Image Section */}
                        <div className="space-y-6">
                            <div className="relative bg-gray-50 rounded-2xl p-12 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={prodInfo.image}
                                    alt={prodInfo.title}
                                    className="w-full h-96 object-contain relative z-10 group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                                    <svg className="w-8 h-8 mx-auto text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-xs font-semibold text-gray-700">Verified</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                                    <svg className="w-8 h-8 mx-auto text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                    <p className="text-xs font-semibold text-gray-700">Free Ship</p>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                                    <svg className="w-8 h-8 mx-auto text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    <p className="text-xs font-semibold text-gray-700">30D Return</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Product Details */}
                        <div className="space-y-6">
                            {/* Category Badge */}
                            <div className="inline-block">
                                <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full">
                                    {prodInfo.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                {prodInfo.title}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-6 h-6 ${i < Math.floor(prodInfo.rating?.rate || 4) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-lg font-semibold text-gray-700">{prodInfo.rating?.rate || 4.5}</span>
                                <span className="text-gray-500">({prodInfo.rating?.count || 120} reviews)</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-4">
                                <span className="text-5xl font-bold text-gray-900">${prodInfo.price}</span>
                                <span className="text-2xl text-gray-400 line-through">${(prodInfo.price * 1.3).toFixed(2)}</span>
                                <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">30% OFF</span>
                            </div>

                            {/* Description */}
                            <div className="border-t border-b border-gray-200 py-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Product Description</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{prodInfo.description}</p>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Select Size</h3>
                                <div className="flex gap-3">
                                    {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-14 h-14 rounded-xl font-bold transition-all duration-300 ${selectedSize === size
                                                    ? 'bg-blue-600 text-white shadow-lg scale-110'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Quantity</h3>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-xl transition-colors duration-300"
                                    >
                                        -
                                    </button>
                                    <span className="text-2xl font-bold w-16 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-xl transition-colors duration-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4">
                                <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group">
                                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="text-lg">Add to Cart</span>
                                </button>
                                <button className="w-16 h-16 bg-gradient-to-br from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group shadow-lg">
                                    <svg className="w-7 h-7 text-red-500 group-hover:fill-red-500 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Additional Info */}
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 space-y-3">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 font-medium">In Stock - Ships within 24 hours</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span className="text-gray-700 font-medium">Secure Payment & Encrypted Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productinfo;