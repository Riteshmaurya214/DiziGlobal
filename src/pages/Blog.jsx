import React from "react";
import { useParams } from "react-router";
import c from "../context/data.json";

export default function () {
 const { id } = useParams();
  const product = c.find(item => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-red-500">Product Not Found</h2>;
  }
    
    return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
        <p className="text-sm text-gray-500 mt-2">05 Apr 2025</p>
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mt-6">
          <img
            src={product.image}// Replace with actual image URL or import
            alt="Snowy cottages in Gulmarg"
            className="w-full h-96 object-cover"
          />
        </div>
        {/* Browse/Detail Section */}
        <div className="mt-8 bg-white shadow-lg rounded-2xl p-4">
          <div className="text-base text-gray-700 font-medium">
            {product.title}
          </div>
          <div className="mt-3">
            <button className="w-full py-2 px-4 bg-gray-100 rounded-md text-gray-900 text-left font-medium hover:bg-gray-200 transition">
             {product.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}