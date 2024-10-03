import React, { useState } from "react";
import { products } from "../../images/dummy_products";

const Featured = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const randomProducts = products.slice(0, 4);
  return (
    <div className="p-2 my-10 ">
      <div className="flex justify-between items-center gap-2 mb-16">
        <hr className="h-[2px] bg-black flex-1" />
        <h2 className="font-robson min-w-min font-bold text-[40px] tracking-wider cursor-pointer">
          Featured
        </h2>
        <hr className="h-[2px] bg-black flex-1" />
      </div>

      <div className="flex h-[80vh] gap-2 overflow-hidden">
        <div className="  bg-slate-400 relative">
          <img
            src={randomProducts && randomProducts[0].image[0]}
            className="object-cover cursor-pointer"
            style={{ height: "100%", width: "100%" }}
          />
          <p className="absolute font-fredoka bottom-0 left-0 right-0 bg-white p-4 uppercase">
            {randomProducts && randomProducts[0].description}
          </p>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between">
            <h3 className="font-robson text-[180px] font-semibold">
              FASHION THAT MOVES YOU
            </h3>
            <h3 className="font-robson text-[38px] font-semibold cursor-pointer">
              View All
            </h3>
          </div>

          <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4 h-[450px] mt-4 ">
            {/* First Product */}
            <div className="bg-white flex justify-center items-center relative">
              <p className="font-robson text-[100px] font-semibold">2025</p>
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.646 9.00002C13.0379 7.58179 10.5975 7.6838 9.11336 9.23129C7.62921 10.7788 7.62921 13.2213 9.11336 14.7688C10.5975 16.3162 13.0379 16.4182 14.646 15"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Second Product with Description Overlay */}
            <div className="h-[400px]">
              <img
                className="w-full h-full object-cover"
                src={randomProducts && randomProducts[1].image[1]}
              />
              <p className="py-5 font-fedroka font-medium text-[16px] uppercase bg-white  text-center">
                {randomProducts && randomProducts[1].description}
              </p>
            </div>

            {/* Third Product */}
            <div className="h-[400px]">
              <p className="py-5 font-fedroka text-[16px] font-medium uppercase text-center">
                {randomProducts && randomProducts[2].description}
              </p>
              <img
                className="w-full h-full object-cover"
                src={randomProducts && randomProducts[2].image[2]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
