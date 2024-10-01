import React, { useEffect, useState } from "react";
import { products } from "../../images/dummy_products";

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center gap-2 mb-16">
        <hr className="h-[2px] bg-black flex-1" />
        <h2 className="font-robson min-w-min font-bold text-[40px] tracking-wider cursor-pointer">
          Our Collections
        </h2>
        <hr className="h-[2px] bg-black flex-1" />
      </div>
      <div className="flex h-[85vh] relative overflow-hidden">
        <div className="w-[400px] h-[400px] rounded-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-white flex items-center justify-center z-20">
          <svg width="400" height="400" className="absolute">
            <defs>
              <path
                id="circlePath"
                d="M 200, 200 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
              />
            </defs>
            <text
              fill="trasparent"
              fontFamily="robson"
              fontSize={50}
              fontStyle="uppercase"
              fontWeight="semibold"
            >
              <textPath
                href="#circlePath"
                startOffset="50%"
                textAnchor="middle"
              >
                GETTING STARTED GETTING STARTED GETTING STARTED GETTING STARTED GETTING STARTED
              </textPath>
            </text>
          </svg>
        </div>

        <div className="flex-1 p-8 flex flex-col justify-between bg-white z-10">
          <h2 className="text-[180px] font-robson font-semibold uppercase leading-[140px]">
            Explore our <br /> Collections
          </h2>
          <div className="flex justify-center items-center gap-3">
            <p className="font-robson text-[30px]">{currentIndex + 1}</p>
            <hr className="flex-1 h-[2px] bg-black" />
            <p className="font-robson text-[30px]">{products.length}</p>
          </div>
        </div>
        <div
          className="flex flex-1 flex-row transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: "flex",
          }}
        >
          {products.map((product, index) => (
            <div className="w-full h-full flex-shrink-0" key={index}>
              <img
                src={product.image}
                alt={product.title} // Add alt text for accessibility
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
