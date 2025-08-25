import React from "react";
import { FiPhone } from "react-icons/fi";

export default function CartCategory({item,idx}) {
  return (
    <div key={idx} className=" transition-all duration-300 hover:shadow-xl shadow-md rounded-xl bg-white transform hover:-translate-y-2">
      {/* Image Section */}
      <div>
        <img
          src={item.image}
          alt={item.headline}
          className="w-full h-52 object-cover object-top rounded-xl"
        />
      </div>

      {/* Bottom Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-4">
          {item.headline}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <FiPhone size={34} className=" p-1  text-red-500 border border-red-600  rounded-lg " />
          <button className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-lg font-medium text-base shadow">
            Request Callback
          </button>
        </div>
      </div>
    </div>
  );
}
