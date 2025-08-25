import React from "react";
import { useNavigate } from "react-router";


export default function ({item,idx}) {
  const Navigate = useNavigate();
    return(
      <div key={idx} className=" overflow-hidden  cursor-pointer  relative rounded-xl  group "
        onClick = {()=> Navigate(`/blog/${item.id}`)} >

        <div className="transition-transform overflow-hidden duration-700  group-hover:scale-110">
          
                <img src={item.image} alt="rtm" className=" rounded-xl w-full  h-[256px] overflow-hidden object-cover  "
              />

                  <div className="absolute rounded-xl inset-0  bg-black opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                
          <div >
                <h1 className=" text-white font-bold text-lg absolute  inset-0  pl-10 top-[65%] ">{item.title} 
               
                </h1>
          </div>
        </div>    
           
        </div>
    )
}