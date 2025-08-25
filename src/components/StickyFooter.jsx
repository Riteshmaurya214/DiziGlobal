import React from "react";

export default function () {
    return (
        <footer>
            <div className="z-50 md:hidden font-light fixed bottom-0 xs:px-5 left-0 bg-white pb-1 py-1 w-full">
                <div className="flex justify-evenly max-w-[600px] mx-auto w-full">

                    <button className="text-red-500 border rounded-bl-2xl border-red-500 py-2 flex items-center gap-2  text-xs px-4 justify-center whitespace-nowrap overflow-hidden">
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Call Us</span>
                    </button>
                    
                    <button className="text-white border text-xs border-red-500 py-2 flex bg-red-700 items-center gap-2 px-3 opacity-90  justify-center whitespace-nowrap overflow-hidden mx-px">
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Connect with expert</span>
                    </button>
                    
                    <button className="text-red-500 rounded-br-2xl border border-red-500 py-2 flex items-center gap-2 px-4 text-xs  justify-center whitespace-nowrap overflow-hidden">
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Chat With Us</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}