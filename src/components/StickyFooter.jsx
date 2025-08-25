import React from "react";
import { FiPhone } from "react-icons/fi";

export default function () {
    return (
        <footer>
                         <div className=" z-50 md:hidden   font-light font-xs fixed bottom-0  left-0 bg-white pb-1 px-5 py-1  w-full   ">
         

           
                
                <div className="flex justify-between   max-w-[600px] mx-auto w-full">
                            <button className="text-red-500 border rounded-bl-2xl border-red-500 py-2 flex   items-center gap-2  px-4 text-xs "> <FiPhone />Call Us </button>
                              <button className="text-white border text-[10px] border-red-500 py-2 flex bg-red-700 items-center gap-2  px-4 text-xs opacity-90 "><FiPhone />Connect with expert </button>
                              <button className="text-red-500 rounded-br-2xl border border-red-500 py-2 flex   items-center gap-2  px-4 text-xs "><FiPhone />Chat With Us </button>
                              </div>
                </div>

        </footer>
    )
}