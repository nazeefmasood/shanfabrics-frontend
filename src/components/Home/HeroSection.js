import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { products } from "../../images/dummy_products";
const getRandomHeight = () => {
  return Math.floor(Math.random() * (450 - 350 + 5)) + 350;
};
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heights, setHeights] = useState([]);
  const carouselRef = useRef(null);

  const totalProducts = products.length;
  const infiniteProductList = [
    ...products.slice(-2), // Prepend last two items at the beginning
    ...products,
    ...products.slice(0, 2), // Append first two items at the end
  ];
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };
  const handleNext = () => {
    // If current index is the last one, go back to the first, otherwise go to the next product
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };
  useEffect(() => {
    // Generate random heights for each product card
    const randomHeights = products.map(() => getRandomHeight());
    setHeights(randomHeights);
    const interval = setInterval(handleNext, 6000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="relative">
      <div className=" ticker text-white py-2">
        <ul className="">
          <li className="text-black flex gap-5">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10h10M7 14h10M7 18h10"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Shop the Latest Trends
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l4 4 4-4m-4-4l-4-4-4 4m8 0v-8m0 0H5m0 0h14"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Discover New Styles
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20h6M9 16h6M9 12h6M3 6h18M3 10h18M3 14h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Exclusive Offers Await
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Elevate Your Wardrobe
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 16l4-4-4-4m8 8l4-4-4-4m4 0H5m0 0L3 9m0 0h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Fashion That Fits You
              </span>
            </span>
          </li>
          <li className="text-black flex gap-5">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10h10M7 14h10M7 18h10"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Shop the Latest Trends
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l4 4 4-4m-4-4l-4-4-4 4m8 0v-8m0 0H5m0 0h14"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Discover New Styles
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20h6M9 16h6M9 12h6M3 6h18M3 10h18M3 14h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Exclusive Offers Await
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Elevate Your Wardrobe
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 16l4-4-4-4m8 8l4-4-4-4m4 0H5m0 0L3 9m0 0h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Fashion That Fits You
              </span>
            </span>
          </li>
          <li className="text-black flex gap-5">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10h10M7 14h10M7 18h10"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Shop the Latest Trends
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l4 4 4-4m-4-4l-4-4-4 4m8 0v-8m0 0H5m0 0h14"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Discover New Styles
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20h6M9 16h6M9 12h6M3 6h18M3 10h18M3 14h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Exclusive Offers Await
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Elevate Your Wardrobe
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 16l4-4-4-4m8 8l4-4-4-4m4 0H5m0 0L3 9m0 0h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Fashion That Fits You
              </span>
            </span>
          </li>
          <li className="text-black flex gap-5">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10h10M7 14h10M7 18h10"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Shop the Latest Trends
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l4 4 4-4m-4-4l-4-4-4 4m8 0v-8m0 0H5m0 0h14"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Discover New Styles
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20h6M9 16h6M9 12h6M3 6h18M3 10h18M3 14h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Exclusive Offers Await
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Elevate Your Wardrobe
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 16l4-4-4-4m8 8l4-4-4-4m4 0H5m0 0L3 9m0 0h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Fashion That Fits You
              </span>
            </span>
          </li>
          <li className="text-black flex gap-5">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10h10M7 14h10M7 18h10"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Shop the Latest Trends
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l4 4 4-4m-4-4l-4-4-4 4m8 0v-8m0 0H5m0 0h14"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Discover New Styles
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20h6M9 16h6M9 12h6M3 6h18M3 10h18M3 14h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Exclusive Offers Await
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Elevate Your Wardrobe
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 16l4-4-4-4m8 8l4-4-4-4m4 0H5m0 0L3 9m0 0h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Fashion That Fits You
              </span>
            </span>
          </li>
          <li className="text-black flex gap-5">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10h10M7 14h10M7 18h10"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Shop the Latest Trends
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l4 4 4-4m-4-4l-4-4-4 4m8 0v-8m0 0H5m0 0h14"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Discover New Styles
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20h6M9 16h6M9 12h6M3 6h18M3 10h18M3 14h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Exclusive Offers Await
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Elevate Your Wardrobe
              </span>
            </span>

            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 16l4-4-4-4m8 8l4-4-4-4m4 0H5m0 0L3 9m0 0h18"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Fashion That Fits You
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 250}px)` }}
          ref={carouselRef}
        >
          {infiniteProductList.map((product, index) => (
            <div
              key={index}
              className="flex-none w-80 cursor-pointer "
              style={{ height: `${heights[index]}px` }} // Set the random height for each card
            >
              <div className="overflow-hidden h-full">
                <div className="p-5 text-start border-t-[1px] hover:border-t-black">
                  <p className="font-semibold ">{product.title}</p>
                  <p className="text-sm text-gray-500 mt-3">
                    {product.category}
                  </p>
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-cover"
                  style={{ height: `${heights[index] * 0.8}px` }} // Adjust image height based on card height
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-5  left-0 right-0 flex justify-center space-x-2">
          {products.map((_, index) => (
            <div
              key={index}
              onClick={() => handleIndicatorClick(index)} // Change the product on indicator click
              className={`h-1 w-8 cursor-pointer transition-colors duration-300 ${
                index === currentIndex ? "bg-black" : "bg-gray-200"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
