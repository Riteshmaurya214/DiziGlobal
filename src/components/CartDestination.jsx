import React from "react";
import data from "../context/data.json";
import { useNavigate } from "react-router";


export default function Card({ item, idx }) {

  const Navigate = useNavigate();
  return (
    <div
      key={idx}
      className="relative group rounded-xl overflow-hidden cursor-pointer "
    onClick = {()=> Navigate(`/destination/${item.id}`)}
    >
      {/* Image and hover scale */}
      <div className="transition-transform duration-700 group-hover:scale-110">
        <img
          src={item.image}
          alt="rtm"
          className="rounded-xl w-full h-[256px] object-cover"
          
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

     
        <div className="absolute inset-0 flex flex-col justify-end pl-10 pb-6 z-10">
          <h1 className="text-white font-bold text-lg">{item.title}</h1>
          <p className="text-sm opacity-0 group-hover:opacity-90 mt-2 font-normal transition-opacity duration-500 text-white">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
}
