import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto absolute">
      <nav className="relative">
        <div className="flex pt-[40px] font-semibold text-lg leading-[25px] ">
          <div className="w-full h-full absolute ml-20">
            <img src="images/logo.png" alt="logo" />
          </div>

          <ul className="flex text-left leading-[50px]  tracking-[1px] font-medium text-[15px] cursor-pointer pr-[110px] pl-92.5 z-1">
            <li className="text-[#d6d4c880] hover:text-[#ffa86a]">
              <a href="#">ABOUT</a>
            </li>
            <li className="mx-[45px] text-[#d6d4c880] hover:text-[#ffa86a]">
              <a href="#">WORK</a>
            </li>
            <li className="text-[#d6d4c880] hover:text-[#ffa86a]">
              <a href="#">EXHIBITIONS</a>
            </li>
          </ul>
          <div className="flex left-full -ml-110 items-center relative">
            <button className="text-[#d6d4c8] font-medium uppercase">
              say hello
            </button>
            <div className="w-[65px] h-[65px] rounded-full absolute ml-[55px] border border-[#ffffff4f]"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
