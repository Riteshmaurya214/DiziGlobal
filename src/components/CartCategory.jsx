import React from "react";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router";

export default function CartCategory({ item, idx, openPopup }) {
  const Navigate = useNavigate();

  return (
    <div
      key={idx}
      className="transition-all duration-300 hover:shadow-xl shadow-md rounded-xl bg-white transform hover:-translate-y-2"
    >
      {/* Image Section */}
      <div>
        <img
          src={item.image}
          alt={item.headline}
          className="w-full h-52 object-cover object-top rounded-xl cursor-pointer"
          onClick={() => Navigate(`/category/${item.id}`)}
        />
      </div>

      {/* Bottom Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-4">
          {item.headline}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <FiPhone
            size={34}
            className="p-1 text-red-500 border border-red-600 rounded-lg"
          />
          <button
            className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-lg font-medium text-base shadow"
            onClick={() => openPopup(item)} // Call parent to open popup
          >
            Request Callback
          </button>
        </div>
      </div>
    </div>
  );
}
