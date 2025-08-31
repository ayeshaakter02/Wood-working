import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
const About = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="bg-[#030303]">
      <div className="container mt-40 mx-auto py-20 px-[110px]">
        <div className="flex">
          <img src="images/about-man.webp" alt="" />
          <div>
            <h2 className="font-forum text-[90px] font-normal text-[rgb(255,253,238)] leading-[90px] -tracking-[5px]">
              Wood is my <br /> Passion
            </h2>
            <p className="w-130 mt-[30px] mb-[60px] text-[rgb(214,212,200)] font-normal font-inter text-[20px] leading-[30px]">
              Hi, I'm Jack, a wood carving artist with 20 years of experience in
              creating unique, handcrafted wooden masterpieces that tell a
              story. My skills in carving, design, and finishing have been honed
              over the years, allowing me to create stunning sculptures,
              figurines, furniture, and decorations.{" "}
            </p>
            <div className="flex items-center">
              <button className="text-[rgb(219,207,190)] font-inter text-[16px] uppercase font-semibold leading-[90px] tracking-[1px] hover:text-[#ffa86a]">
                view my work
              </button>
              <div className="-ml-4 w-[90px] h-[90px] rounded-full border border-[#ffffff4f] flex justify-center items-center">
                <div
                  className="flex items-center gap-2 text-xl font-semibold cursor-pointer w-fit transition-colors duration-300"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <span
                    className={`inline-block transform transition-transform duration-300 ${
                      hovered ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <HiOutlineArrowRight className="w-[35px] h-[55px] text-[#ffa86a]" />
                  </span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
