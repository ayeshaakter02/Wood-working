import React from "react";

const Furniture = () => {
  return (
    <div className="text-white">
      <div className="flex">
        <div className="w-1/2 h-220 overflow-hidden">
          <img
            className="relative w-full h-full object-cover object-left transition-transform duration-600 ease-in-out hover:scale-110"
            src="images/furniture1.webp"
            alt="Furniture Left Half"
          />
          <div className="absolute top-160 ml-90">
            <h1 className="font-forum text-[70px] font-normal text-[#fffdee] text-center">
              Throne
            </h1>
            <p className="font-inter text-[15px] uppercase tracking-[6px] text-center leading-[60px] text-[#ffa86a]">
              request a price
            </p>
          </div>
        </div>
        <div className="w-1/2 h-220 overflow-hidden">
          <img
            className="relative w-full h-full object-cover object-right transition-transform duration-600 ease-in-out hover:scale-110"
            src="images/furniture2.jpg"
            alt="Furniture Right Half"
          />
          <div className="absolute top-160 ml-90">
            <h1 className="font-forum text-[70px] font-normal text-[#fffdee] text-center">
              Coffee Table
            </h1>
            <p className="font-inter text-[15px] uppercase tracking-[6px] text-center leading-[60px] text-[#ffa86a]">
              request a price
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 h-220 overflow-hidden">
          <img
            className="relative w-full h-full object-cover object-left transition-transform duration-600 ease-in-out hover:scale-110"
            src="images/furniture3.jpg"
            alt="Furniture Left Half"
          />{" "}
          <div className="absolute top-380 ml-50">
            <h1 className="font-forum text-[70px] font-normal text-[#fffdee] text-center">
              Chair
            </h1>
            <p className="font-inter text-[15px] uppercase tracking-[6px] text-center leading-[60px] text-[#ffa86a]">
              request a price
            </p>
          </div>
        </div>
        <div className="w-2/3 h-220 overflow-hidden">
          <img
            className="relative w-full h-full object-cover object-right"
            src="images/furniture4.jpg"
            alt="Furniture Right Half"
          />{" "}
          <div className="absolute top-380 ml-90">
            <h1 className="font-forum text-[70px] font-normal text-[#fffdee] text-center">
              Furniture Set
            </h1>
            <p className="font-inter text-[15px] uppercase tracking-[6px] text-center leading-[60px] text-[#ffa86a]">
              request a price
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-2/3 h-220 overflow-hidden">
          <img
            className="relative w-full h-full object-cover object-left"
            src="images/furniture5.jpg"
            alt="Furniture Left Half"
          />{" "}
          <div className="absolute top-600 ml-150">
            <h1 className="font-forum text-[70px] font-normal text-[#fffdee] text-center">
              Lux Sofa
            </h1>
            <p className="font-inter text-[15px] uppercase tracking-[6px] text-center leading-[60px] text-[#ffa86a]">
              request a price
            </p>
          </div>
        </div>
        <div className="relative w-1/3 h-220 overflow-hidden">
          <img
            className="w-full h-full object-cover object-right"
            src="images/furniture6.jpg"
            alt="Furniture Right Half"
          />{" "}
          <div className="absolute top-160 ml-50">
            <h1 className="font-forum text-[70px] font-normal text-[#fffdee] text-center">
              Cabinet
            </h1>
            <p className="font-inter text-[15px] uppercase tracking-[6px] text-center leading-[60px] text-[#ffa86a]">
              request a price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
