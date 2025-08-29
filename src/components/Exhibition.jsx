import React from "react";

const Exhibition = () => {
  return (
    <div className="bg-[#030303] pb-75">
      <div className="container mt-3 mx-auto px-[110px]">
        <h1 className="font-forum font-normal text-[#fffdee] leading-22.5 -tracking-[2px] text-[90px] pt-50 pb-22.5">
          Exhibitions & Events
        </h1>
        <div className="flex gap-10">
          <div className="relative">
            <img
              className="border rounded-[10px] w-[525px] h-[621px]"
              src="images/event1-pic.jpg"
              alt=""
            />
            <div className="border border-[#ffa86a] rounded-[10px] w-[525px] h-[621px] -mt-148 ml-8 z-1"></div>
          </div>
          <div className="pl-10">
            <div className="border-b border-[#ffa86a] pb-[35px]">
              <h2 className="font-forum font-normal text-[45px] -tracking-[2px] leading-12.5 text-[#ffffff] cursor-pointer hover:text-[#ffa86a]">
                Whispers in Wood: An Exploration of Nature's Beauty
              </h2>
              <p className="font-inter text-[20px] font-normal text-[#ffa86a] leading-15 cursor-pointer">
                22 March 2023 - 25 March 2023
              </p>
            </div>
            <div className="border-b border-[#ffa86a] my-[35px] pb-[35px]">
              <h2 className="font-forum font-normal text-[45px] -tracking-[2px] leading-12.5 text-[#ffffff] cursor-pointer hover:text-[#ffa86a]">
                Tales in Timber: Mythology and Folklore in Woodcarving
              </h2>
              <p className="font-inter text-[20px] font-normal text-[#ffa86a] leading-15 cursor-pointer">
                22 March 2023 - 25 March 2023
              </p>
            </div>
            <div>
              <h2 className="font-forum font-normal text-[45px] -tracking-[2px] leading-12.5 text-[#ffffff] cursor-pointer hover:text-[#ffa86a]">
                The Art of Carving: From Tradition to Modernity
              </h2>
              <p className="font-inter text-[20px] font-normal text-[#ffa86a] leading-15 cursor-pointer">
                22 March 2023 - 25 March 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
