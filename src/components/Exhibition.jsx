import React, { useState } from "react";

const Exhibition = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    {
      text: "Whispers in Wood: An Exploration of Nature's Beauty",
      normalImg: "../images/event1-pic.jpg",
      hoverImg: "../images/event1-pic.jpg",
    },
    {
      text: "Tales in Timber: Mythology and Folklore in Woodcarving",
      normalImg: "../images/event1-pic.jpg",
      hoverImg: "../images/event2-pic.jpg",
    },
    {
      text: "The Art of Carving: From Tradition to Modernity",
      normalImg: "../images/event3-pic.jpg",
      hoverImg: "../images/event3-pic.jpg",
    },
  ];

  return (
    <div className="bg-[#030303] pb-75">
      <div className="container mt-3 mx-auto px-[110px]">
        <h1 className="font-forum font-normal text-[#fffdee] leading-22.5 -tracking-[2px] text-[90px] pt-50 pb-22.5">
          Exhibitions & Events
        </h1>
        <div className="flex gap-10">
          <div>
            {activeIndex !== null ? (
              <img
                src={items[activeIndex].hoverImg}
                alt="hover"
                className="border rounded-[10px] w-[525px] h-[621px] object-cover transition-all duration-300 z-1"
              />
            ) : (
              <img
                src="../images/event1-pic.jpg"
                alt="default"
                className="w-[525px] h-[621px] object-cover rounded-lg transition-all duration-300"
              />
            )}
            <div className="border border-[#ffa86a] rounded-[10px] w-[525px] h-[621px] -mt-148 ml-8"></div>
          </div>
          <div className="flex flex-col gap-6 pl-10">
            {items.map((item, index) => (
              <div>
                <h2
                  key={index}
                  className={`font-forum font-normal text-[45px] -tracking-[2px] leading-12.5 cursor-pointer ${
                    activeIndex === index ? "text-[#ffa86a]" : "text-[#ffffff]"
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {item.text}
                  <p className="font-inter text-[20px] font-normal text-[#ffa86a] leading-15 cursor-pointer border-b border-[#ffa86a] pb-[35px]">
                    22 March 2023 - 25 March 2023
                  </p>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
