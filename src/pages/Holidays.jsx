import React, { useEffect, useState } from "react";
import SwiperSection from "../components/SwiperSection";
import CartCategory from "../components/CartCategory";
import EnquiryPopup from "../components/EnquiryPopup";
import category from "../context/category.json";
import data from "../context/data.json";
import CartPackage from "../components/CartPackage";
import CartDestination from "../components/CartDestination";
import CartBlog from "../components/CartBlog";
import destination from "../context/Destination.json";
import blog from "../context/blogs.json";
import Carousal from "../components/Carousal";
import StickyFooter from "../components/StickyFooter";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function Holidays() {
  const [popupData, setPopupData] = useState(null); // popup state

  const openPopup = (item) => setPopupData(item);
  const closePopup = () => setPopupData(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Carousal />

      <SwiperSection
        data={category}
        prev="one"
        next="two"
        CartNameOne="Holiday"
        CartNameTwo="Category"
        CardComponent={CartCategory}
        BgColor="0"
        SpeedSwip="5000"
        openPopup={openPopup} // pass to Cart
      />

      <SwiperSection
        data={data}
        prev="three"
        next="Four"
        CartNameOne="Holiday"
        CartNameTwo="Packages"
        CardComponent={CartPackage}
        BgColor=""
        SpeedSwip="4000"
        openPopup={openPopup} // pass to Cart
      />

      <SwiperSection
        data={destination}
        prev="five"
        next="Six"
        CartNameOne="Popular"
        CartNameTwo="Destinations"
        CardComponent={CartDestination}
        BgColor="0"
        ViewAll="True"
        SpeedSwip="5000"
      />

      <SwiperSection
        data={blog}
        prev="seven"
        next="Eight"
        CartNameOne="Travel"
        CartNameTwo="Blogs"
        CardComponent={CartBlog}
        BgColor=""
        ViewAll="True"
        SpeedSwip="4000"
      />

      {/* Fixed Popup */}
      {popupData && (
        <EnquiryPopup isOpen={!!popupData} onClose={closePopup} data={popupData} />
      )}

      <div className="z-50 hidden md:block text-white bg-red-600 p-4 fixed bottom-6 right-6 rounded-full opacity-98 animate-updown">
        <IoChatbubbleOutline className="text-2xl" />
      </div>

      <StickyFooter />
    </div>
  );
}
