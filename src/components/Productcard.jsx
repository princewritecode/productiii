export const Productcard = ({ product }) => {
    return (
        <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-100 aspect-square">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick View Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    Quick View
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 space-y-4">
                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                </h3>

                {/* Price Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">
                            ${product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                            ${(product.price * 1.2).toFixed(2)}
                        </span>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        20% OFF
                    </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">(4.9)</span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl flex items-center justify-center gap-2 group/btn">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                </button>

                {/* Wishlist Icon */}
                <button className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-red-50 transition-all duration-300 group/heart">
                    <svg className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};