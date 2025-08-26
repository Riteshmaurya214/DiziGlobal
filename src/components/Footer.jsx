import React from "react";
import "./Footer.css";

import { LuFacebook } from "react-icons/lu";
import { RiTwitterLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoBold } from "react-icons/pi";
import StickyFooter from "./StickyFooter";





export default function () {
    return (
        <>
        <div className="border-2  mb-6 border-b-red-500 w-full "></div>
        <footer className="mx-4">
            
     
        <div className="flex max-w-screen-xl mx-auto  mb-6 flex-col items-center md:flex-row md:justify-between   ">
            
            <div className="flex   items-center mb-5 md:mb-0 w-[313px]  gap-3">
                <h3> Follow Us On:</h3>
                <div className="flex gap-3">
                        <a href="https://facebook.com" className="social-icon facebook"><LuFacebook /></a>

                        <a href="https://twitter.com" className="social-icon twitter"><RiTwitterLine /></a>

                        <a href="https://instagram.com" className="social-icon instagram"><FaInstagram /></a>
                        
                        <a href="https://youtube.com" className="social-icon youtube"><PiYoutubeLogoBold /></a>

                </div>
            </div>
            
            <div className="flex  text-xs sm:text-sm md:text-md mb-6 md:mb-0">
                <h3 className="text-gray-600 " >Copyright &copy; 2021-2025</h3> 
                <span className="font-bold ml-1"> MaximTrip.</span>
                <h3 className="ml-1 text-gray-600"> All Right Reserved </h3> 
            
            </div>

           
        </div>

    
       

      </footer>

      </>
    )

    
}
