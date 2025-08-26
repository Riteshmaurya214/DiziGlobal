import React from "react";
import { useParams } from "react-router";
import c from "../context/data.json";
import EnquiryForm from "../components/EnquiryForm";  // 👈 import kiya
import { useEffect } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = c.find((item) => item.id === parseInt(id));

   //  Scroll to Top on Component Mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const tabs = [
    { name: "Overview", active: true },
    { name: "Tour Itinerary", active: false },
    { name: "Inclusions", active: false },
    { name: "Exclusions", active: false },
    { name: "Terms & Conditions", active: false },
  ];

  if (!product) {
    return <h2 className="text-center text-red-500">Product Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto lg:flex lg:gap-8 lg:p-6">
        {/* Left Side */}
        <div className="lg:flex-1 bg-white shadow-md ">
          <div className="lg:rounded-xl m-5 rounded-xl overflow-hidden lg:mb-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-100 md:h-80 rounded-xl object-cover"
            />
          </div>

          <div className="p-4 lg:p-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 pl-3 mb-4 lg:mb-6">
              {product.title}
            </h1>

            {/* Tabs */}
            <div className="flex overflow-x-auto lg:overflow-visible pl-3 border-b mb-4 lg:mb-6">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap lg:whitespace-normal ${
                    tab.active
                      ? "border-orange-500 text-orange-500"
                      : "border-transparent text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="p-4 lg:p-0 lg:w-96">
          <EnquiryForm productTitle={product.title} />
        </div>
      </div>
    </div>
  );
}
