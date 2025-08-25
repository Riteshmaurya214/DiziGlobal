import React from "react";


export default function GetData () {
    const data =  "https://api.maximtrip.com/v1/api/get-blog"
    
    const getData = async() => {
        return (await fetch(`data`)).json();
    }

    console.log(getData);

    return (
        <div>
           
        </div>
    )
}