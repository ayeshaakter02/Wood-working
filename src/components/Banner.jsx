import React from "react";
import { LiaArrowDownSolid } from "react-icons/lia";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-linear-to-t from-[#030303] to-[#382013] h-screen w-full ">
      <div className="container mx-auto px-[110px]">
        <div className="flex pt-15">
          <div className="right pt-[210px] z-1">
            <h2 className="text-[30px] font-normal text-[#ffa86a] leading-[60px] font-forum">
              Carving Art
            </h2>
            <h1 className="text-[150px] font-normal w-[900px] text-[#fffdee] leading-[150px] tracking-[-7px] mt-[20px] mb-[30px] font-forum">
              Bringing <br /> Wood to Life
            </h1>
            <p className="font-normal text-[20px] text-[#d6d4c8] w-[387px] font-inter pb-[300px]">
              Expertly carved wooden sculptures and figurines that showcase the
              natural beauty and versatility of wood
            </p>
          </div>
          <div className="left">
            <img
              className="absolute ml-[-380px] mt-10 "
              src="images/banner-img.png"
              alt=""
            />
            <div className="w-30 h-30 rounded-full bg-[#ffa86a] mt-170 flex justify-center items-center  ">
              <LiaArrowDownSolid className="w-[50px] h-[50px]" />
            </div>
            <div className="text-white text-[20px] leading-11.5 font-normal ml-120 -mt-20">
              <TfiFacebook className="hover:text-[#ffa86a]" />
              <FaInstagram className="my-5 hover:text-[#ffa86a]" />
              <FaDribbble className="hover:text-[#ffa86a]" />
            </div>
          </div>
        </div>
        <div className="text-[#d6d4c880] font-inter text-[15px] uppercase font-medium leading-[25px] tracking-[1px] -rotate-90 -ml-430 -mt-400 duration-[1s]">
          made with{" "}
          <span className="text-[#d6d4c8] pl-2.5 hover:text-[#ffa86a] hover:duration-[1s]">
            slider revolution
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
