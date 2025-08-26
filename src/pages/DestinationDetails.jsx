import React from "react";
import { useParams } from "react-router";
import c from "../context/Destination.json";
import { useEffect } from "react";

export default function () {
 const { id } = useParams();
  const product = c.find(item => item.id === parseInt(id));

   // Scroll to Top on Component Mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!product) {
    return <h2 className="text-center text-red-500">Product Not Found</h2>;
  }
    
    return (
    <div className="min-h-screen  bg-gray-100 p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto bg-gray-100  pb-8  ">
            <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
            <p className="text-sm text-gray-500 mt-5">23 Aug 2025</p>
        {/* Image */}
            <div className="   rounded-2xl z-20 shadow-2xl  overflow-hidden mt-4 ">
            <img
            src={product.image}
            alt="Snowy cottages in Gulmarg"
            className="w-full h-[600px]  rounded-2xl shadow-2xl   object-cover"
            />
       
        {/* Browse/Detail Section */}
             <div className=" bg-white  z-19 shadow-3xl rounded-2xl py-5 ">
                    <div className="text-xl text-gray-700 pl-3 font-medium">
                        Broswer:- {product.title}
                    </div>
                    <div className="border-2 border-b my-4 w-full" ></div>
                    <div className="mt-3 w-full pl-3   text-gray-900 text-left font-sm ">
                      
                         {product.title}
             
                    </div>
                </div>
        
        </div>
               

      </div>
    </div>
  );
}