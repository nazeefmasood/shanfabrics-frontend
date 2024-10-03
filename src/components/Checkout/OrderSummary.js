import React, { useState } from "react";
import MyButton from "../actions/MyButton";
import { products } from "../../images/dummy_products";

const OrderSummary = () => {
  const [checkOutItems, setCheckOutItems] = useState([]);
  return (
    <div className="flex-1  w-[40vw] fixed top-0 right-0 bottom-0 flex flex-col bg-black p-8">
      <h2 className="w-max flex gap-3 text-white font-robson text-[42px] uppercase font-bold tracking-wider justify-center items-center">
        Order Summary
        <div className="font-robson text-[26px] h-min uppercase font-bold tracking-wider text-black px-3 bg-white">
          0
        </div>
      </h2>
      <div className="flex flex-col gap-3 mt-10 overflow-y-auto max-h-[58vh] pr-4 no-scrollbar">
        {products.slice(0, 4).map((product) => (
          <div className="flex gap-3">
            <div className="h-[200px] w-[150px] overflow-hidden">
              <img src={product.image} className="object-cover w-full h-full" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between">
                <h2 className="font-robson text-[28px] uppercase text-white tracking-wider">
                  {product.title}
                </h2>
                <h2 className="font-robson text-[28px] uppercase text-white tracking-wider">
                  PKR {product.price}
                </h2>
              </div>
              <p className="font-fedroka text-[14px] font-medium uppercase text-white tracking-wider">
                Quantity : 2
              </p>
              <p className="font-fedroka text-[14px] uppercase text-white tracking-wider">
                Color : BLACK
              </p>
              <p className="font-fedrokatext-[14px] uppercase text-white tracking-wider">
                SIZE : L
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="  w-full h-min flex flex-col mt-5">
        <div className="flex justify-between">
          <h2 className="font-robson text-[28px] uppercase text-white tracking-wider">
            SubTotal
          </h2>
          <p className="font-robson text-[28px] uppercase text-white tracking-wider">
            PKR 4000
          </p>
        </div>
        <div className="flex justify-between">
          <h2 className="font-robson text-[28px] uppercase text-white tracking-wider">
            Shipping
          </h2>
          <p className="font-robson text-[28px] uppercase text-white tracking-wider">
            PKR 320
          </p>
        </div>
        <div className="flex justify-between">
          <h2 className="font-robson text-[28px] uppercase text-white tracking-wider">
            Discount
          </h2>
          <p className="font-robson text-[28px] uppercase text-white tracking-wider">
            PKR 300
          </p>
        </div>

        <div className="flex justify-between border-t-[1px] mt-5 border-gray-500 border-dashed">
          <h2 className="font-robson text-[28px] uppercase text-white tracking-wider">
            TOtal
          </h2>
          <p className="font-robson text-[28px] uppercase text-white tracking-wider">
            PKR 4620
          </p>
        </div>
        <MyButton
          title={"PLACE ORDER"}
          styles={
            "font-robson h-full text-white py-2 px-20 rounded  transition duration-300  bg-[#2f04c8] hover:bg-[#24038e] text-[28px] w-full mt-5 tracking-wider"
          }
        />
      </div>
    </div>
  );
};

export default OrderSummary;
