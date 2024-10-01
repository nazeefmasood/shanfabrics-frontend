import React from "react";
import { products } from "../../images/dummy_products";

const Instagram = () => {
  const filteredImages = products.slice(0, 4);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center gap-2">
        <hr className="h-[2px] bg-black flex-1" />
        <h2 className="font-robson min-w-min font-bold text-[40px] tracking-wider cursor-pointer">
          JOIN US
        </h2>
        <hr className="h-[2px] bg-black flex-1" />
      </div>
      <div className=" ticker text-white py-2">
        <ul className="">
          <li className="text-black flex gap-5">
            <span className="font-robson font-semibold text-[200px] cursor-pointer">
              Stay connected and be the first to explore our latest updates!
            </span>
            <span className="flex items-center">
              <svg
                fill="#000000"
                width="200px"
                height="200px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Stay connected and be the first to explore our latest updates!
                Follow us on our social media platforms and never miss out on
                exciting news and offers.
              </span>
            </span>

            <span className="flex items-center">
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Follow us on our social media platforms and never miss out on
                exciting news and offers.
              </span>
              <svg
                width="200px"
                height="200px"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillrule="evenodd"
                  cliprule="evenodd"
                  d="M6.36343 6.36195C7.24343 5.43495 7.55443 5.17495 7.92943 5.05395C8.18895 4.98595 8.46112 4.98217 8.72243 5.04295C9.06643 5.14295 9.15743 5.21895 10.2854 6.34295C11.2764 7.32995 11.3754 7.43695 11.4704 7.62995C11.6521 7.96873 11.6805 8.36894 11.5484 8.72995C11.4484 9.00495 11.3064 9.18695 10.7054 9.78995L10.3134 10.183C10.2105 10.2876 10.1863 10.4464 10.2534 10.577C11.1244 12.0628 12.36 13.3019 13.8434 14.177C14.0142 14.2684 14.2245 14.2389 14.3634 14.104L14.7404 13.733C14.9734 13.4941 15.2202 13.2691 15.4794 13.059C15.8866 12.809 16.3939 12.7867 16.8214 13C17.0304 13.1 17.0994 13.162 18.1214 14.182C19.1754 15.233 19.2054 15.266 19.3214 15.507C19.5397 15.9059 19.5374 16.3891 19.3154 16.786C19.2024 17.01 19.1334 17.091 18.5404 17.697C18.1824 18.063 17.8454 18.397 17.7914 18.446C17.3022 18.851 16.6746 19.0497 16.0414 19C14.883 18.8944 13.7617 18.5363 12.7564 17.951C10.5296 16.7711 8.63383 15.0521 7.24243 12.951C6.93937 12.5112 6.66994 12.0492 6.43643 11.569C5.81001 10.4953 5.48653 9.27189 5.50043 8.02895C5.54825 7.37871 5.86008 6.77637 6.36343 6.36195Z"
                  stroke="#000000"
                  strokewidth="{1.5}"
                  strokelinecap="round"
                  strokelinejoin="round"
                />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Stay connected and be the first to explore our latest updates!
              </span>
            </span>

            <span className="flex items-center">
              <svg
                width="200px"
                height="200px"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  stroke="#000000"
                  strokeWidth={12}
                  d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="30"
                  stroke="#000000"
                  strokeWidth={12}
                />
                <circle cx="135" cy="57" r="9" fill="#000000" />
              </svg>
              <span className="font-robson font-semibold text-[200px] cursor-pointer">
                Follow us on our social media platforms and never miss out on
                exciting news and offers.
              </span>
            </span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-4 overflow-hidden">
        {filteredImages.map((product) => (
          <img src={product.image} className="w-full h-full object-cover" />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Instagram;
