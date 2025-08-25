import React, { useState } from "react";

export default function EnquiryForm({ productTitle }) {
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    travelers: "",
    fullName: "",
    mobile: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Enquiry Sent Successfully!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:sticky lg:top-6">
      <div className="bg-red-600 text-white text-center py-3 rounded-lg mb-6 font-semibold">
        {productTitle}
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
        />

        <select
          name="travelers"
          value={formData.travelers}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-gray-600"
        >
          <option value="">Select Travellers</option>
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3">3 Persons</option>
          <option value="4">4 Persons</option>
          <option value="5+">5+ Persons</option>
        </select>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile no."
          value={formData.mobile}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Send Enquiry
        </button>
      </div>
    </div>
  );
}
