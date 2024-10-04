import React, { useEffect, useState } from "react";
import { categories, products } from "../images/dummy_products";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    setAllProducts(products);
  }, []);

  return (
    <div className="w-full min-h-screen relative p-8 ">
      <div className="flex">
        <h1 className="font-semibold font-robson text-[80px] flex gap-4">
          Wishlist
          <p className="text-[32px]">{allProducts.length}</p>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1  mt-4 mb-20">
        {allProducts.map((product, index) => (
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

export default Wishlist;
