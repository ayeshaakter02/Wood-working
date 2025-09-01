import React, { useRef, useState, useEffect } from "react";

const Work = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItems = 3;
  const totalItems = 5;

  const images = [
    { 
      src: "images/furniture.webp",
      title: "Furniture",
      description: "VIEW GALLARY",
    },
    {
      src: "images/figurines.webp",
      title: "Figurines",
      description: "VIEW GALLARY",
    },
    {
      src: "images/decorations.webp",
      title: "Decorations",
      description: "VIEW GALLARY",
    },
    {
      src: "images/relief.webp",
      title: "Relief",
      description: "VIEW GALLARY",
    },
    {
      src: "images/architectural.webp",
      title: "Architectural",
      description: "VIEW GALLARY",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev < totalItems - visibleItems ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : totalItems - visibleItems
    );
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const itemWidth = slider.offsetWidth / visibleItems;
    slider.scrollTo({
      left: currentIndex * itemWidth,
      behavior: "smooth",
    });
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  mx-auto overflow-hidden" id="work">
      <div ref={sliderRef} className="flex overflow-hidden scroll-smooth">
        {images.map((item, index) => (
          <div>
          <div key={index} className="w-1/3 flex-shrink-0 py-2">
            <div className="w-[600px] h-[714px] bg-linear-to-t from-[#030303] to-[#ffa86a59] m-5 py-12 px-15 rounded-xl border border-[#382013] shadow-lg overflow-hidden">
              <img src={item.src} alt={item.title} className="mx-auto"/>
              <div >
                <h3 className=" text-white font-forum font-normal text-[67px] tracking-[-3px] leading-[75px] flex justify-center py-1.5 -mt-5 hover:text-[#ffa86a]">{item.title}</h3>
                <p className="text-sm text-[#ffa86a] font-semibold tracking-[1px] leading-[60px] flex justify-center align-top font-inter">{item.description}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default Work;