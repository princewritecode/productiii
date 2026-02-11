import React from 'react';
import { useState, useEffect } from 'react';
import { Productcard } from './Productcard';
import { Link } from 'react-router';
const Body = () =>
{
    const [productList, setProductList] = useState([]);
    useEffect(() =>
    {
        const fetchData = async () =>
        {
            const data = await fetch("https://fakestoreapi.com/products");
            const dataJson = await data.json();
            console.log(dataJson);
            setProductList(dataJson);
        };
        fetchData();
    }, []);
    return (
        <div className="container mx-auto px-4 py-8">
            <button className="mb-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl cursor-pointer flex items-center gap-3 group">
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">30% Discount</span>
                <span className="ml-2 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">Limited Time</span>
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    productList.map((product) =>
                    {
                        return <Link key={product.id} to={"/prodinfo/" + product.id}> <Productcard product={product} /></Link>;
                    })
                }
            </div>
        </div>
    );
};
export default Body;