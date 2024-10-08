import React, { useState } from "react";
import { products } from "../../images/dummy_products";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState(null);
  const featuredProducts = products.slice(0, 3);
  const newProducts = products.slice(0, 8);
  return (
    <div className="mt-16 min-h-screen">
      <div className="flex justify-between items-center gap-2">
        <hr className="h-[2px] bg-black flex-1" />
        <h2 className="font-robson min-w-min font-bold text-[40px] tracking-wider cursor-pointer">
          NEW ARRIVALS
        </h2>
        <hr className="h-[2px] bg-black flex-1" />
      </div>
      <div className="flex justify-center mt-20 ">
        <div className="flex items-center min-h-min">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className={`relative overflow-hidden mx-2 transition-transform duration-500 ${
                index === 1 ? "scale-110" : "scale-95" // Make the middle product bigger
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img
                src={product.image[1]}
                className="object-cover cursor-pointer"
                style={{ height: "600px", width: "400px" }} // Adjust the height and width as needed
                alt={product.title}
              />
              <div
                className={`p-4 absolute left-0 bottom-0 right-0 bg-white z-10 transition-transform duration-500 ${
                  hoverIndex === index
                    ? "translate-y-[0px]"
                    : "translate-y-[40px]"
                }`}
              >
                <h3 className="cursor-pointer font-fredoka font-normal text-[12px] text-[#5B5B5B] uppercase">
                  {product.category}
                </h3>
                <div className="flex justify-between cursor-pointer">
                  <h3 className="font-robson text-[28px] tracking-wide uppercase">
                    {product.title}
                  </h3>
                  <h3 className="font-robson text-[28px] uppercase">
                    {product.price} PKR
                  </h3>
                </div>
                <div className="mt-2 flex">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 rounded-full mr-2 border`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-4 mt-4">
        {newProducts.map((product, index) => (
          <div
            key={index}
            className="min-h-[620px] cursor-pointer relative overflow-hidden group"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.image[0]}
              className="object-cover cursor-pointer"
              style={{ height: "100%", width: "100%" }}
            />
            <div
              className={`p-4 absolute left-0 bottom-0 right-0 bg-white z-10 transition-transform duration-500 ${
                hoverIndex === index
                  ? "translate-y-[0px]"
                  : "translate-y-[40px]"
              }`}
            >
              <h3 className="cursor-pointer font-fredoka font-normal text-[12px] text-[#5B5B5B] uppercase">
                {product.category}
              </h3>
              <div className="flex justify-between cursor-pointer">
                <h3 className="font-robson text-[28px] tracking-wide uppercase">
                  {product.title}
                </h3>
                <h3 className="font-robson text-[28px] uppercase">
                  {product.price} PKR
                </h3>
              </div>
              <div className="mt-2 flex">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full mr-2 border`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
