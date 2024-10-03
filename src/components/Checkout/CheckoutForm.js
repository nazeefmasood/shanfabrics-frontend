import React from "react";
import MyInput from "../actions/MyInput";
import MyTextArea from "../actions/MyTextArea";
import MyButton from "../actions/MyButton";

const CheckoutForm = () => {
  return (
    <div className="p-8 w-[60vw] relative">
      <div className="flex justify-between sticky top-0 bg-white left-0">
        <h1 className="font-robson text-[60px] font-semibold">SHAN FABRICS</h1>
        <h2 className="font-robson text-[60px] font-semibold">CHECKOUT</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-start">
          <h2 className="font-robson text-[32px] uppercase font-bold tracking-wider">
            Customer Info
          </h2>
          <p className="font-robson text-[26px] uppercase font-bold tracking-wider">
            * Required
          </p>
        </div>
        <MyInput
          title={"Email*"}
          placeholder={"Please enter your email"}
          type={"email"}
          isRequired={true}
        />
        <div className="flex justify-between items-start">
          <h2 className="font-robson text-[32px] uppercase font-bold tracking-wider">
            Shipping Address
          </h2>
          <p className="font-robson text-[26px] uppercase font-bold tracking-wider">
            * Required
          </p>
        </div>
        <MyInput
          title={"Full Name*"}
          placeholder={"Please enter your full name"}
          type={"text"}
          isRequired={true}
        />
        <MyInput
          title={"Address*"}
          placeholder={"Please enter your address"}
          type={"text"}
          isRequired={true}
        />
        <div className="flex justify-between gap-5">
          <MyInput
            title={"City*"}
            placeholder={"Please enter your city name"}
            type={"text"}
            isRequired={true}
          />
          <MyInput
            title={"State/Province*"}
            placeholder={"Please enter your state/province"}
            type={"text"}
            isRequired={true}
          />
          <MyInput
            title={"Zip/Postal Code*"}
            placeholder={"Please enter zip/postal code"}
            type={"number"}
            isRequired={true}
          />
        </div>
        <MyTextArea
          title={"Note"}
          placeholder={"Please enter additional note if you have any"}
          type={"text"}
          isRequired={false}
        />
        <div className="flex justify-between gap-5  items-end">
          <MyInput
            title={"Discount Code"}
            type={"text"}
            placeholder={"Please enter discount code"}
            isRequired={false}
          />
          <MyButton
            title={"Apply"}
            styles={"font-robson w-max text-[28px] tracking-wider"}
          />
        </div>
      </div>

      <div className="flex mt-10 border-t-[1px] border-gray-500 border-dashed py-3 gap-3">
        <p className="cursor-pointer font-fredoka uppercase">Returns and Refunds</p>
        <p className="cursor-pointer font-fredoka uppercase">Privacy Policy</p>
        <p className="cursor-pointer font-fredoka uppercase">Terms of service</p>
      </div>
    </div>
  );
};

export default CheckoutForm;
