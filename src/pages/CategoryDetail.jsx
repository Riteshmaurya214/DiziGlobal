import React from "react";
import { useParams } from "react-router";
import  c  from "../context/category.json"; // ✅ products ko import karo yahan se
import TopDetail from "../components/TopDetail";
import Filter from "../components/Filter";
import data from "../context/data.json"

export default function CategoryDetail() {
  const { id } = useParams();
  const product = c.find(item => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-red-500">Product Not Found</h2>;
  }

  return (
    <div>
            <TopDetail product={product}/>
        <div>
        
           <Filter data = {data}  />
            
        </div>
    </div>
  );
}
