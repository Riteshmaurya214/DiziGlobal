import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "../App.css"
import { GoArrowRight } from "react-icons/go";



const SwiperSection = ({ data, prev, next, CartNameOne, CartNameTwo ,CardComponent , BgColor  , ViewAll , SpeedSwip ,openPopup }) => {
  return (
    <>
    <div className={`relative w-full  bg-gray-5${BgColor}`}>

       {/* Heading json se le rahe hain */}
       <div className="mb-10 pt-2 max-w-7xl  mx-auto px-5">
        <span className="relative text-red-600 font-bold text-3xl">
           {CartNameOne}
          <div className="w-1/4 border-b-4 border-red-600 mt-2 absolute"></div>
          <span className="font-extrabold text-gray-800 text-3xl pl-2">
            {CartNameTwo}
          </span>

        </span>
       <div className="flex justify-end">
                 {
            ViewAll ?  <a className=" text-blue-500 font-semibold hidden md:block absolute top-3 cursor-pointer " >{`View All ${CartNameTwo}`} <GoArrowRight className="inline" /> </a> : " "
        }
       </div>
       
       
      </div>

       {/* Swiper Container */}
      <div className="max-w-7xl mx-auto pt-5 px-5 relative">
        <Swiper
          autoplay={{delay:`${SpeedSwip}`}}
         
          loop={true}
          spaceBetween={20}
          navigation={{ prevEl: `.${prev}`, nextEl: `.${next}` }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            750: { slidesPerView: 3 },
            1000: { slidesPerView: 4 },
          }}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CardComponent item={item} idx={idx} openPopup={openPopup}/>
            </SwiperSlide>
          ))}
        </Swiper>

         {/* Arrows */}
        <button
          className={`${prev} absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full text-black/50`}
        >
          <MdArrowBackIos className="z-50 transition-transform duration-300 hover:scale-110" size={24} />
        </button>
        <button
          className={`${next} absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full text-black/50`}
        >
          <MdArrowForwardIos className="z-50 transition-transform duration-300 hover:scale-110" size={24} />
        </button>
      </div>
    </div>
    
    <div className="flex justify-center align-center py-6">
           {
            ViewAll ?  <a className=" text-blue-500 md:hidden font-semibold pb-8 cursor-pointer " >{`View All ${CartNameTwo}`}</a> : " "
            }
    </div>
          
    </>
  );
};

export default SwiperSection;
