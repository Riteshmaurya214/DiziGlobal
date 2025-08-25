import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Carousal from "../components/Carousal";
import CartCategory from "../components/CartCategory";
import category from "../context/category.json";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import data from "../context/data.json"
import SwiperSection from "../components/SwiperSection";
import CartPackage from "../components/CartPackage";
import CartDestination from "../components/CartDestination";
import CartBlog from "../components/CartBlog";
import Footer from "../components/Footer";
import StickyFooter from "../components/StickyFooter";
import { IoChatbubbleOutline } from "react-icons/io5";




export default function Holidays() {

 


  return (
    <div>
      <Carousal />
      <SwiperSection
      data ={category}
      prev = {"one"}
      next = {"two"}
      CartNameOne={"Holiday"}
      CartNameTwo={"Category"}
      CardComponent={CartCategory}
      BgColor={"0"}
      SpeedSwip={"5000"}
      />
     
      <SwiperSection
      data ={data}
      prev = {"three"}
      next = {"Four"}
      CartNameOne={"Holiday"}
      CartNameTwo={"Packages"}
      CardComponent={CartPackage}
      BgColor={""}
      SpeedSwip={"4000"}
      />

      <SwiperSection
      data ={data}
      prev = {"five"}
      next = {"Six"}
      CartNameOne={"Popular"}
      CartNameTwo={"Destinations"}
      CardComponent={CartDestination}
      BgColor={"0"}
      ViewAll={"True"}
      SpeedSwip={"5000"}
      />

       <SwiperSection
      data ={data}
      prev = {"seven"}
      next = {"Eight"}
      CartNameOne={"Travel"}
      CartNameTwo={"Blogs"}
      CardComponent={CartBlog}
      BgColor={""}
      ViewAll={"True"}
      SpeedSwip={"4000"}
      />
     

   
  

    <div className=" z-50 hidden md:block text-white bg-red-600 p-4 fixed bottom-6 right-6 rounded-full opacity-98 animate-updown ">
        <IoChatbubbleOutline  className="text-2xl  " />
    </div>
        <StickyFooter/>

    </div>
  );
}
