import { useState } from 'react';
import { useSelector } from 'react-redux';
const Header = () =>
{
    const cartItems = useSelector(store => store.cart.items);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                            Productii
                        </h1>
                    </div>

                    {/* Navigation Menu - Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#about"
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            Contact
                        </a>
                        <div className="relative">
                            <button className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                                <svg
                                    className="w-6 h-6 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"
                                    />
                                </svg>
                                Cart
                                <span className="ml-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${!isMobileMenuOpen ? 'hidden' : ''}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                        <a
                            href="#about"
                            className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            Contact
                        </a>
                        <button className="flex items-center px-3 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                            <svg
                                className="w-6 h-6 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"
                                />
                            </svg>
                            Cart
                            <span className="ml-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;