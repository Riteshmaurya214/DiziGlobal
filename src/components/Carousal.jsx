import React, { useState, useEffect } from "react";
import data from "../context/data.json";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import EnquiryPopup from "./EnquiryPopup";

export default function Carousal() {

  const [slide, setSlide] = useState(0);
  const [isOpen , setIsOpen] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isOpen]);


  const handleNext = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const handlePrev = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  // Auto scroll 
  // useEffect(() => {
  //   const interval = setInterval(handleNext, 5000);
  //   return () => clearInterval(interval);
  // }, [slide]);

useEffect(() => {
  if (!isModalOpen) {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }
}, [slide, isModalOpen]);

  return (
    <div className="relative w-full mb-10 h-[90vh] md:h-[85vh] overflow-hidden  ">
      {/* Carousel Items */}
      <div className="relative w-full h-full">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              idx === slide ? "opacity-100 z-1" : "opacity-0 z-0"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover "
            />
            
            {/* Text Overlay */}

               
            <div className="absolute  w-full  flex  flex-col  items-center justify-left md:text-center bottom-10   text-white z-9">

              <h2 className="  text-2xl mb-5  md:text-6xl font-bold">{item.title}
                <p className="text-xl  font-semi-bold md:text-xl mt-3 w-full max-w-full border-t border-b border-dotted border-gray-300 my-1 py-1 ">
              
                Days {item.day} / Nights {item.night}
               
              </p>
              </h2>
             
              
              <div className="flex items-center gap-3 mt-4">
                <span className="text-lg md:text-2xl font-bold">
                  ₹{item.price}
                </span>
                {item.price && (
                  <span className="line-through opacity-80 ">₹{(item.price/2)}</span>
                )}
              </div>
             
              <button className="mt-4 z-9 bg-red-500 hidden md:block  px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-red-600  "
                      onClick={openModal}

              >
                Connect With Expert
              </button>
               {/* Pass props to EnquiryPopup */}
              <EnquiryPopup isOpen={isModalOpen} onClose={closeModal} />
            </div>
                </div>
          
       
        ))}
      </div>

      {/* Left Button */}
    <button
  onClick={handlePrev}
  className="group absolute left-3 md:left-5 bg-black top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 flex items-center justify-center"
>
  <MdArrowBackIos className="text-white text-2xl transition-transform duration-300 group-hover:scale-110" />
</button>

<button
  onClick={handleNext}
  className="group absolute right-3 md:right-5 bg-black top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 flex items-center justify-center"
>
  <MdArrowForwardIos className="text-white text-2xl transition-transform duration-300 group-hover:scale-110" />
</button>

    </div>
  );
}
