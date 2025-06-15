import React from "react";
import { LiaArrowDownSolid } from "react-icons/lia";

const Banner = () => {
  return (
    <div className="container mx-auto px-[110px] ">
      <div className="flex">
        <div className="right pt-[170px] z-1">
          <h2 className="text-[30px] font-normal text-[#ffa86a] leading-[60px] font-forum">
            Carving Art
          </h2>
          <h1 className="text-[150px] font-normal text-[#fffdee] leading-[150px] tracking-[-7px] text-left mt-[20px] mb-[30px] font-forum">
            Bringing <br /> Wood to Life
          </h1>
          <p className="font-normal text-[20px] text-[#d6d4c8] w-[387px] font-inter pb-[300px]">
            Expertly carved wooden sculptures and figurines that showcase the
            natural beauty and versatility of wood
          </p>
        </div>
        <div className="left">
          <img
            className="mt-[-20px] absolute ml-[-200px]"
            src="images/banner-img.png"
            alt=""
          />
          <div className="w-30 h-30 rounded-full bg-[#ffa86a] mt-160 flex justify-center items-center">
            <LiaArrowDownSolid className="w-[50px] h-[50px]" />
          </div>
        </div>
      </div>
      <div className="text-[rgba(214,212,200,0.5)] font-inter text-[15px] uppercase font-medium leading-[25px] tracking-[1px] -rotate-90 -ml-430 -mt-410 duration-[1s]">
        made with{" "}
        <span className="text-[rgb(214,212,200)] pl-2.5 hover:text-[rgb(255,168,106)] hover:duration-[1s]">
          slider revolution
        </span>
      </div>
    </div>
  );
};

export default Banner;
