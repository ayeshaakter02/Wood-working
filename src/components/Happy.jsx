import React from "react";

const Happy = () => {
  return (
    <div className="bg-[#030303]">
      <div className="container mt-20 mx-auto py-20 px-[110px] z-1">
        <h1 className="font-forum text-[90px] font-normal text-[rgb(255,253,238)] leading-[90px] -tracking-[5px]">
          Happy Customers
        </h1>
        <div className="flex">
          <div className="mt-20 grid grid-cols-2 gap-[30px]">
            <div className="w-[357px] h-[292px] mt-3 rounded-xl border border-[#382013] p-8 backdrop-blur-md">
              <p className="font-Manrope text-lg font-normal text-white leading-7 mb-5">
                "I ordered a Darth Vader bust from this wood carving business
                and I was blown away by the attention to detail and
                craftsmanship. It's a Stunning piece of art!"
              </p>
              <div className="flex">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src="images/man2.jpg"
                  alt=""
                />
                <p className="text-[#ffa86a] ml-2 text-[20px] leading-[60px] px-5 ">
                  David Johnson
                </p>
              </div>
            </div>
            <div className="w-[357px] h-[292px] mt-3 rounded-xl border border-[#382013] p-8 backdrop-blur-md">
              <p className="font-Manrope text-lg font-normal text-white leading-7 mb-5">
                “I commissioned a custom wood carving from this artist and they
                exceeded all of my expectations. Their attention to detail is
                truly remarkable.”
              </p>
              <div className="flex">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src="images/man1.jpg"
                  alt=""
                />
                <p className="text-[#ffa86a] ml-2 text-[20px] leading-[60px] px-5 ">
                  Lionel Dawson
                </p>
              </div>
            </div>
            <div className="w-[357px] h-[292px] mt-3 rounded-xl border border-[#382013] p-8 backdrop-blur-md">
              <p className="font-Manrope text-lg font-normal text-white leading-7 mb-5">
                “I received a wood carving as a gift from this artist and it is
                now one of my most prized possessions. The quality and
                craftsmanship is truly unmatched.”
              </p>
              <div className="flex">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src="images/woman2.jpg"
                  alt=""
                />
                <p className="text-[#ffa86a] ml-2 text-[20px] leading-[60px] px-5 ">
                  Stacia Bud
                </p>
              </div>
            </div>
            <div className="w-[357px] h-[292px] mt-3 rounded-xl border border-[#382013] p-8 backdrop-blur-md">
              <p className="font-Manrope text-lg font-normal text-white leading-7 mb-5">
                “I have been a collector of wood carvings for years and I have
                to say that this artist is one of the best I have ever come
                across. Their work is truly exceptional.”
              </p>
              <div className="flex">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src="images/woman1.jpg"
                  alt=""
                />
                <p className="text-[#ffa86a] ml-2 text-[20px] leading-[60px] px-5 ">
                  David Johnson
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-150 ml-225">
        <img src="images/lion.png" alt="" />
      </div>
    </div>
  );
};

export default Happy;
