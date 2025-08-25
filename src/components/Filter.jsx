import React, { useState } from "react";
import CartFilter from "./CartFilter";


export default function ({data }) {
    const [priceRange, setPriceRange] = useState([100, 25799]);

    

    return (
        <div className="min-h-screen bg-gray-50 px-3 py-8">
            <div className="max-w-7xl mx-auto ">
                <div className="lg:flex gap-8">
                    {/* Filter */}
                    <div className="w-full lg:w-80 bg-white p-6 rounded-lg shadow-sm border mb-6 lg:mb-0">
                        <h2 className="text-xl font-semibold mb-6">Filters</h2>
                        
                        {/* Price Range */}
                        <div className="mb-8">
                            <h3 className="text-lg font-medium mb-4">Price Range</h3>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
                                <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
                            </div>
                            <div className="relative">
                                <input
                                    type="range"
                                    min="100"
                                    max="25799"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Approx price per person</p>
                        </div>

                        {/* Duration */}
                        <div className="mb-8">
                            <h3 className="text-lg font-medium mb-4">Duration</h3>
                            <div className="space-y-3">
                                {[
                                    'More 4 Nights 5 Days',
                                    'More 2 Nights 3 Days', 
                                    'More 3 Nights 4 Days',
                                    'More 6 Nights 7 Days',
                                    'More 7 Nights 8 Days',
                                    'More 5 Nights 6 Days'
                                ].map((duration, index) => (
                                    <label key={index} className="flex items-center cursor-pointer">
                                        <input type="checkbox" className="mr-3 w-4 h-4" />
                                        <span className="text-sm text-gray-700">{duration}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Hotel Star Rating */}
                        <div className="mb-8">
                            <h3 className="text-lg font-medium mb-4">Hotel Star Rating</h3>
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5].map((stars) => (
                                    <label key={stars} className="flex items-center cursor-pointer">
                                        <input type="checkbox" className="mr-3 w-4 h-4" />
                                        <span className="text-sm text-gray-700 mr-2">{stars} Star</span>
                                        <div className="flex">
                                            {Array.from({length: stars}, (_, i) => (
                                                <span key={i} className="text-yellow-400 text-sm">★</span>
                                            ))}
                                            {Array.from({length: 5-stars}, (_, i) => (
                                                <span key={i} className="text-gray-300 text-sm">★</span>
                                            ))}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Route City */}
                        <div className="mb-8">
                            <h3 className="text-lg font-medium mb-4">Route City</h3>
                            <div className="space-y-3">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="mr-3 w-4 h-4" />
                                    <span className="text-sm text-gray-700">Jammu to Jammu (8)</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="mr-3 w-4 h-4" />
                                    <span className="text-sm text-gray-700">Srinagar to Srinagar (4)</span>
                                </label>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <h3 className="text-lg font-medium mb-4">Location</h3>
                            <div className="space-y-3">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="mr-3 w-4 h-4" />
                                    <span className="text-sm text-gray-700">Jammu & Kashmir (2)</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="mr-3 w-4 h-4" />
                                    <span className="text-sm text-gray-700">Kashmir (4)</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Cart/Products */}
                    <div className="flex-1">
                          <CartFilter />
                    </div>
                  
                </div>
            </div>
        </div>
    );
}