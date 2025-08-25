import React from "react";
import { FiChevronRight } from "react-icons/fi";

export default function KashmirHeader({ product }) {
  return (
    <div className="m-4">

   
    <div className="bg-white shadow-md  rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center  gap-6 max-w-7xl mx-auto">
      
      {/* Left Content */}
      <div className="w-full md:w-2/3 xl:w-2/3">
        <div className=" ">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 inline">
            {product.headline}
          </h1>
          <span className="text-red-500 font-medium ml-2 text-xs">5 Packages</span>
        </div>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed ">
          {product.metaDescription} 
        </p>

         <button className="flex items-center text-xs text-red-500 mt-5 font-medium hover:underline">
          Read more <FiChevronRight size={14} className="ml-1" />
        </button>
      </div>

      {/* Right Image - Hidden on Small Screens */}
      <div className="w-full md:w-1/3 xl:w-1/3 hidden md:block">
        <img
          src={product.image}
          alt={product.headline}
          className="w-full h-36 object-cover object-top "
        />
      </div>
    </div>
     </div>
  );
}
