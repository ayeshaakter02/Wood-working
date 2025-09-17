import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useNavigate } from 'react-router';

const Decorations = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-y-scroll scrollbar-hide">
          <button
            onClick={() => navigate("/")}
            className="fixed rounded-lg top-10 right-10 z-50 bg-black p-4.5  transition hover:bg-[#ffa86a]"
          >
            <RxCross1 className="w-7 h-7 text-white hover:text-black" />
          </button>
          {/* First Row */}
          <div className="flex">
            <div className="relative w-1/3 h-220 overflow-hidden group">
              <img
                className="w-full h-full object-cover object-left transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="images/decorations1.webp"
                alt="Chair"
              />
    
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end mb-12 opacity-0 group-hover:opacity-100 transition duration-500">
                <h1 className="font-forum text-[70px] font-normal text-[#fffdee]">
                  Yoda
                </h1>
                <p className="font-inter text-[15px] uppercase tracking-[2px] font-bold text-[#ffa86a]">
                  request a price
                </p>
              </div>
            </div>
    
            <div className="relative w-2/3 h-220 overflow-hidden group">
              <img
                className="w-full h-full object-cover object-right transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="images/decorations2.webp"
                alt="Furniture Set"
              />
    
              {/*  Bottom Shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
    
              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-end mb-12 opacity-0 group-hover:opacity-100 transition duration-500">
                <h1 className="font-forum text-[70px] font-normal text-[#fffdee]">
                  Iron Man
                </h1>
                <p className="font-inter text-[15px] uppercase tracking-[2px] font-bold text-[#ffa86a]">
                  request a price
                </p>
              </div>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex">
            <div className="relative w-2/3 h-220 overflow-hidden group">
              <img
                className="w-full h-full object-cover object-left transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="images/figurines3.jpg"
                alt="Lux Sofa"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
    
              <div className="absolute inset-0 flex flex-col items-center justify-end mb-12 opacity-0 group-hover:opacity-100 transition duration-500">
                <h1 className="font-forum text-[70px] font-normal text-[#fffdee]">
                  Batman
                </h1>
                <p className="font-inter text-[15px] uppercase tracking-[2px] font-bold text-[#ffa86a]">
                  request a price
                </p>
              </div>
            </div>
    
            <div className="relative w-1/3 h-220 overflow-hidden group">
              <img
                className="w-full h-full object-cover object-right transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="images/figurines4.jpg"
                alt="Cabinet"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end mb-12 opacity-0 group-hover:opacity-100 transition duration-500">
                <h1 className="font-forum text-[70px] font-normal text-[#fffdee]">
                  Groot
                </h1>
                <p className="font-inter text-[15px] uppercase tracking-[2px] font-bold text-[#ffa86a]">
                  request a price
                </p>
              </div>
            </div>
          </div>
          {/* Third Row */}
          <div className="flex">
            <div className="relative w-1/2 h-220 overflow-hidden group">
              <img
                className="w-full h-full object-cover object-left transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="images/figurines5.jpg"
                alt="Furniture Left Half"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end mb-12 opacity-0 group-hover:opacity-100 transition duration-500">
                <h1 className="font-forum text-[70px] font-normal text-[#fffdee]">
                  Darth Vader
                </h1>
                <p className="font-inter text-[15px] uppercase tracking-[2px] font-bold text-[#ffa86a]">
                  request a price
                </p>
              </div>
            </div>
    
            <div className="relative w-1/2 h-220 overflow-hidden group">
              <img
                className="w-full h-full object-cover object-right transition-transform duration-500 ease-in-out group-hover:scale-110"
                src="images/figurines6.jpg"
                alt="Furniture Right Half"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end mb-12 opacity-0 group-hover:opacity-100 transition duration-500">
                <h1 className="font-forum text-[70px] font-normal text-[#fffdee]">
                  Superman
                </h1>
                <p className="font-inter text-[15px] uppercase tracking-[2px] text-[#ffa86a] font-bold">
                  request a price
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Decorations