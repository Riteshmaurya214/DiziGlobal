import React, { useState, useEffect } from "react";
import logo from "../assets/maximtrip-logo.png";
import { FiPhone, FiMail, FiSend, FiSearch } from "react-icons/fi";
import { Link } from "react-router";

const Navbar = () => {
const words = [
    'Search "Kashmir Group Tour Package"',
    'Search "Shimla Manali Packages"',
    'Search "Goa Honeymoon Trip"',
    'Search "Ladakh Adventure Tour"'
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setPlaceholder((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setPlaceholder((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <nav className="w-full sticky  top-0 z-50 bg-white shadow-md">
      <div className="xl:container max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        
        {/* Logo */}
        <Link to="/holidays" className="flex-shrink-0">
          <img src={logo} alt="Maximtrip Logo" className="h-9 md:h-16" />
        </Link>

        {/* Search Bar */}
        <div className="flex w-[180px]   items-center border border-gray-300 rounded sm:rounded-md px-3 py-2 sm:py-3 flex-1 mx-4 md:w-full">
          <FiSearch className="text-gray-500 mr-2 text-[13px] sm:text-[20px]" />
          <input
            type="text"
            placeholder={placeholder}
            className=" flex-1 outline-none text-gray-700  text-[8px]  sm:text-sm"
          />
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center text-gray-700">
            <FiPhone className="mr-2" /> <span className="text-xs">+91-979996205</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FiMail className="mr-2" /> <span className="text-xs">holiday@maximtrip.in</span>
          </div>
          <div className="bg-red-600 text-white p-2 rounded-full cursor-pointer">
            <FiSend />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
