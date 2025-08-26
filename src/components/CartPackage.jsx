import React from "react";
import data from "../context/data.json"
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router";

export default function CartPackage ({item,idx ,openPopup}) {

    const Navigate = useNavigate();
    return (
        <div key={idx} className="bg-white  border rounded-xl border-gray-200 shadow-md 
        hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300" >
           <div  >
                  <img src={item.image} alt="rtm"
                className=" w-full cursor-pointer h-52 object-cover object-top rounded-t-xl " 
                onClick = {()=> Navigate(`/packages/${item.id}`) }   />
                
           </div>
          
     
            <div className="pl-1">
                 <h1 className="font-semibold text-gray-800 text-md my-2">{item.title}</h1>
                <div className="  flex justify-start items-center gap-2 ">
                    <GoClock size={15} />
                    <span className="text-sm text-gray-600" >{item.day} Days / {item.night} Nights</span> 
                </div>

                <div className="flex justify-start items-center mt-1 gap-2">
                    <IoLocationOutline className="" />
                    <span className="text-sm text-gray-600" >{item.location} </span> 
                </div>
               
            </div>

             <div className=" flex border border-red-600 my-5 ">
                    <div className=" h-full py-2 border-r border-red-600 text-center w-1/2">{item.price} </div>
                    <div className=" h-full py-2 text-center w-1/2">
                        View
                    </div>
            </div>

            <div className="flex items-center  gap-2"> 
                 <FiPhone size={41} className=" p-2   text-red-600 border-2 border-red-600  rounded-bl-xl " />
                <button className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-lg font-medium text-base shadow rounded-br-xl"
                 onClick={() => openPopup(item)} // Call parent to open popup
                >
            Request Callback
          </button>
            </div>
           
        </div>
    )
}