import React from "react";
import { FiMapPin, FiSun, FiCoffee, FiTruck, FiHome, FiEye } from "react-icons/fi";
import data from "../context/data.json"

export default function (){

    const Features =  [
                    { icon: <FiSun />, label: "highlights" },
                    { icon: <FiCoffee />, label: "Meals" },
                    { icon: <FiTruck />, label: "Transfer" },
                    { icon: <FiHome />, label: "Hotel" },
                    { icon: <FiEye />, label: "Sightseeing" }
                ]

    return (
       <div className="flex-1"> 

      
                        <div className="space-y-6">
                            {data?.map(item => (
                                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Image */}
                                        <div className="md:w-1/3">
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                className="w-full h-48 object-cover"
                                            />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="md:w-2/3 p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                                    <div className="text-sm text-gray-600 mb-2">{item.duration}</div>
                                                    <div className="flex items-center text-red-600 text-sm mb-3">
                                                        <FiMapPin className="w-4 h-4 mr-1" />
                                                        {item.location}
                                                    </div>
                                                    
                                                    {/* Rating */}
                                                    <div className="flex items-center mb-4">
                                                        {Array.from({length: item.rating}, (_, i) => (
                                                            <span key={i} className="text-yellow-400 text-sm">★</span>
                                                        ))}
                                                        {Array.from({length: 5-item.rating}, (_, i) => (
                                                            <span key={i} className="text-gray-300 text-sm">★</span>
                                                        ))}
                                                    </div>
                                                    
                                                    <div className="text-sm text-gray-600 mb-4">{item.route}</div>
                                                </div>
                                                
                                                {/* Price */}
                                                <div className="text-right">
                                                    <div className="text-3xl font-bold text-gray-800">₹{item.price}</div>
                                                    <div className="text-sm text-gray-500">Per person</div>
                                                </div>
                                            </div>
                                            
                                            {/* Features */}
                                            <div className="flex flex-wrap gap-4 mb-6">
                                                {Features.map((feature, index) => (
                                                    <div key={index} className="flex flex-col items-center text-center">
                                                        <div className="w-10 h-10 rounded-full border-2 border-red-200 flex items-center justify-center mb-1 text-red-600">
                                                            {feature.icon}
                                                        </div>
                                                        <span className="text-xs text-gray-600">{feature.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            {/* Buttons */}
                                            <div className="flex gap-3">
                                                <button className="flex-1 bg-white border border-red-500 text-red-500 py-2 px-4 rounded text-sm font-medium hover:bg-red-50 transition-colors">
                                                    Select
                                                </button>
                                                <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-red-700 transition-colors">
                                                    Enquire Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                   
        </div>
    )
}