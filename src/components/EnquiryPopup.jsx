import React, { useEffect } from "react";

export default function EnquiryPopup({ isOpen, onClose }) {
  useEffect(() => {
    // Scroll lock when popup opens
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to ensure scroll always restored
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed   inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[99999]"
      onClick={onClose} // click outside to close
    >
      <div
        className="bg-white mx-8 sm:mx-0 w-[400px] p-6 rounded-lg relative  max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-3xl font-bold text-gray-700"
        >
          &times;
        </button>

        <h2 className="text-center mb-4 text-xl font-bold">Quick Enquiry</h2>

        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Destination" className="border p-2 rounded" />
          <input type="date" className="border p-2 rounded" />
          <select className="border p-2 rounded">
            <option>Select Travellers</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input type="text" placeholder="Full Name" className="border p-2 rounded" />
          <input type="text" placeholder="Enter Mobile no." className="border p-2 rounded" />
          <input type="email" placeholder="Email Address" className="border p-2 rounded" />

          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded hover:bg-red-700"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
