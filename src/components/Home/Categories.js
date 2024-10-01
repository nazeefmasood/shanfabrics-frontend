import React from "react";
import { categories } from "../../images/dummy_products";

const Categories = () => {
  return (
    <div className="my-10 ">
      <div className="flex justify-between items-center gap-2 mb-5">
        <hr className="h-[2px] bg-black flex-1" />
        <h2 className="font-robson min-w-min font-bold text-[40px] tracking-wider cursor-pointer">
          Categories
        </h2>
        <hr className="h-[2px] bg-black flex-1" />
      </div>
      <div className="flex gap-3 justify-evenly">
        {categories.map((category) => (
          <div className="flex gap-2">
            <img
              src={category.image}
              className="w-56 h-24 object-cover  mt-4"
            />
            <div className="flex">
              <h2 className="font-robson text-[40px] tracking-wider uppercase items-start">
                {category.name}
              </h2>
              <svg
                className="mt-4"
                width="30px"
                height="30px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokewidth="{0}" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokelinecap="round"
                  strokelinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#000000"
                    d="M12.943 3.463A.748.748 0 0012.25 3h-5.5a.75.75 0 000 1.5h3.69l-7.22 7.22a.75.75 0 101.06 1.06l7.22-7.22v3.69a.75.75 0 001.5 0v-5.5a.747.747 0 00-.057-.287z"
                  />
                </g>

                {/* Horizontal line below the arrow */}
                <line
                  x1="3"
                  y1="15"
                  x2="14"
                  y2="15"
                  stroke="black"
                  strokewidth="5"
                  strokelinecap="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
