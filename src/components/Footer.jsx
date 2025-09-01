import React from "react";

const Footer = () => {
  const items = ["Let's Talk"];
  const text = "CONTACT  CONTACT  CONTACT  CONTACT  CONTACT  ";
  const letters = text.split("");
  return (
    <div className="pb-10">
      <img className="w-full h-[380px]" src="../images/footer.jpeg" alt="" />

      <div className="relative w-[300px] h-[300px] flex items-center justify-center -mt-38 ml-200">
        <div className="absolute w-full h-full animate-spin-slow">
          {letters.map((char, index) => {
            const angle = (360 / letters.length) * index;
            return (
              <span
                key={index}
                className="absolute left-1/2 top-1/2 text-[#ffa86a] font-medium text-lg"
                style={{
                  transform: `rotate(${angle}deg) translate(110px) rotate(-${angle}deg)`,
                  transformOrigin: "center center",
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>

      {items.map((text, index) => (
        <div key={index} className="group cursor-pointer text-center mt-10">
          <span className="font-forum text-[150px] font-normal leading-37.5 -tracking-[5px] text-[#fffdee] hover:text-[#ffa86a] transition-colors duration-400">
            {text}
          </span>

          {/* underline effect */}
          <div className="h-[2px] w-40 bg-[#ffa86a] -translate-x-1/2 mt-10 ml-240 duration-500 group-hover:w-85"></div>
        </div>
      ))}
      <div className="font-inter text-[15px] font-medium text-[rgb(214,212,200)] uppercase leading-[30px] tracking-[1px] text-center my-15">
        8500 Lorem Street, Chicago, IL 55030
      </div>
      <div className="flex justify-center">
        <p className="font-inter text-[15px] font-medium text-[rgb(255,168,106)] uppercase leading-10 tracking-[1px] px-[55px]  border rounded-[50px] border-[#ffffff3a] hover:text-black hover:bg-[rgb(255,168,106)]">
          facebook
        </p>
        <p className="font-inter text-[15px] font-medium text-[rgb(255,168,106)] bg-[rgba(255,168,106,0.26)] uppercase leading-10 tracking-[1px] px-[55px]  border rounded-[50px] border-[#ffffff3a] mx-[25px] hover:text-black hover:bg-[rgb(255,168,106)]">
          instagram
        </p>
        <p className="font-inter text-[15px] font-medium text-[rgb(255,168,106)] uppercase leading-10 tracking-[1px] px-[55px]  border rounded-[50px] border-[#ffffff3a] hover:text-black hover:bg-[rgb(255,168,106)]">
          dribbble
        </p>
      </div>
      <div className="text-white mt-20 text-center font-forum">Copyright @2025 All rights reserved | Developed by <a className="text-[#ffa86a]" href="https://www.facebook.com/ar.badhon.71">--Ayesha</a></div>
    </div>
  );
};

export default Footer;
