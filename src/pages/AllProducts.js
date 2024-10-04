import React, { useEffect, useState } from "react";
import { categories, products } from "../images/dummy_products";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    setAllProducts(products);

    const footer = document.getElementById("footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting);
        });
      },
      { rootMargin: "0px", threshold: 0 }
    );

    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen relative p-8 ">
      <div className="flex">
        <h1 className="font-semibold font-robson text-[80px] flex gap-4">
          Products Catalog
          <p className="text-[32px]">{allProducts.length}</p>
        </h1>
      </div>
      <div className="flex gap-4">
        {categories.map((category) => (
          <div className="bg-black/60 hover:bg-black ">
            <p className="font-fredoka text-sm uppercase cursor-pointer text-white px-4 py-2 ">
              {category.name}
            </p>
          </div>
        ))}
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
      <div
        className={`${
          isFooterVisible ? "absolute bottom-0" : "fixed"
        } h-16 w-[50vw] bg-[#e0e0e0] bottom-0 right-0  justify-between flex px-2 items-center transition-all duration-300 z-50 shadow-md`}
        style={isFooterVisible ? { top: "auto", bottom: 0 } : {}}
      >
        <div className="bg-white/70 flex items-center py-1 px-6 gap-3">
          <p className="font-robson uppercase font-semibold text-[28px]">
            Filters
          </p>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={3}
            stroke="#000000"
            fill="none"
          >
            <line x1="50.69" y1="32" x2="56.32" y2="32" />
            <line x1="7.68" y1="32" x2="38.69" y2="32" />
            <line x1="26.54" y1="15.97" x2="56.32" y2="15.97" />
            <line x1="7.68" y1="15.97" x2="14.56" y2="15.97" />
            <line x1="35" y1="48.03" x2="56.32" y2="48.03" />
            <line x1="7.68" y1="48.03" x2="23" y2="48.03" />
            <circle cx="20.55" cy="15.66" r="6" />
            <circle cx="44.69" cy="32" r="6" />
            <circle cx="29" cy="48.03" r="6" />
          </svg>
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-fredoka uppercase font-semibold">View:</p>
          <div className="bg-white/70 flex items-center py-1 px-6 gap-3">
            <svg
              fill="#000000"
              width="40px"
              height="40px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>grid1</title>
              <path d="M8 15h7v-7h-7v7zM17 8v7h7v-7h-7zM17 24h7v-7h-7v7zM8 24h7v-7h-7v7z" />
            </svg>
          </div>
          <div className="bg-white/70 flex items-center py-2 px-6 gap-3">
            <svg
              width="30px"
              height="30px"
              viewBox="-0.5 0 19 19"
              version="1.1"
            >
              <title>icon/18/icon-grid-9</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="out"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <path
                  d="M1,13 L6,13 L6,17.8611111 L1,17.8611111 L1,13 L1,13 Z M1,7 L6,7 L6,11.8611111 L1,11.8611111 L1,7 L1,7 Z M1,1 L6,1 L6,5.86111111 L1,5.86111111 L1,1 L1,1 Z M7,13 L12,13 L12,17.8611111 L7,17.8611111 L7,13 L7,13 Z M7,7 L12,7 L12,11.8611111 L7,11.8611111 L7,7 L7,7 Z M7,1 L12,1 L12,5.86111111 L7,5.86111111 L7,1 L7,1 Z M13,13 L18,13 L18,17.8611111 L13,17.8611111 L13,13 L13,13 Z M13,7 L18,7 L18,11.8611111 L13,11.8611111 L13,7 L13,7 Z M13,1 L18,1 L18,5.86111111 L13,5.86111111 L13,1 L13,1 Z"
                  id="path"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <div className="bg-white/70 flex items-center py-2 px-6 gap-3">
            <svg
              width="30px"
              height="30px"
              viewBox="-0.5 0 19 19"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
            >
              <title>icon/18/icon-grid-16</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="out"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <path
                  d="M1,9.88888892 L4.66666663,9.88888892 L4.66666663,13.5555555 L1,13.5555555 L1,9.88888892 L1,9.88888892 Z M5.44444446,9.88888892 L9.11111108,9.88888892 L9.11111108,13.5555555 L5.44444446,13.5555555 L5.44444446,9.88888892 L5.44444446,9.88888892 Z M9.88888892,9.88888892 L13.5555555,9.88888892 L13.5555555,13.5555555 L9.88888892,13.5555555 L9.88888892,9.88888892 L9.88888892,9.88888892 Z M14.3333334,9.88888892 L18,9.88888892 L18,13.5555555 L14.3333334,13.5555555 L14.3333334,9.88888892 L14.3333334,9.88888892 Z M1,14.3333334 L4.66666663,14.3333334 L4.66666663,18 L1,18 L1,14.3333334 L1,14.3333334 Z M5.44444446,14.3333334 L9.11111108,14.3333334 L9.11111108,18 L5.44444446,18 L5.44444446,14.3333334 L5.44444446,14.3333334 Z M9.88888892,14.3333334 L13.5555555,14.3333334 L13.5555555,18 L9.88888892,18 L9.88888892,14.3333334 L9.88888892,14.3333334 Z M14.3333334,14.3333334 L18,14.3333334 L18,18 L14.3333334,18 L14.3333334,14.3333334 L14.3333334,14.3333334 Z M1,5.44444446 L4.66666663,5.44444446 L4.66666663,9.11111108 L1,9.11111108 L1,5.44444446 L1,5.44444446 Z M5.44444446,5.44444446 L9.11111108,5.44444446 L9.11111108,9.11111108 L5.44444446,9.11111108 L5.44444446,5.44444446 L5.44444446,5.44444446 Z M9.88888892,5.44444446 L13.5555555,5.44444446 L13.5555555,9.11111108 L9.88888892,9.11111108 L9.88888892,5.44444446 L9.88888892,5.44444446 Z M14.3333334,5.44444446 L18,5.44444446 L18,9.11111108 L14.3333334,9.11111108 L14.3333334,5.44444446 L14.3333334,5.44444446 Z M1,1 L4.66666663,1 L4.66666663,4.66666663 L1,4.66666663 L1,1 L1,1 Z M5.44444446,1 L9.11111108,1 L9.11111108,4.66666663 L5.44444446,4.66666663 L5.44444446,1 L5.44444446,1 Z M9.88888892,1 L13.5555555,1 L13.5555555,4.66666663 L9.88888892,4.66666663 L9.88888892,1 L9.88888892,1 Z M14.3333334,1 L18,1 L18,4.66666663 L14.3333334,4.66666663 L14.3333334,1 L14.3333334,1 Z"
                  id="path"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <div className="bg-white/70 flex items-center py-1 px-6 gap-3">
            <svg
              fill="#000000"
              width="40px"
              height="40px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>list</title>
              <path d="M8 8v4h16v-4h-16zM8 18h16v-4h-16v4zM8 24h16v-4h-16v4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
