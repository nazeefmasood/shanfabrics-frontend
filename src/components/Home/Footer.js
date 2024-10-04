import React from "react";

const Footer = ({ id }) => {
  return (
    <div className=" bg-black min-h-screen " id={id}>
      <div className="flex justify-between items-center gap-2">
        <hr className="h-[2px] bg-black flex-1" />
        <h2 className="font-robson min-w-min font-semibold text-[240px] tracking-wider text-white cursor-pointer">
          SHAN FABRICS
        </h2>
        <hr className="h-[2px] bg-black flex-1" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h3 className="font-fedroka  font-semibold text-sm mb-5 text-white cursor-default">
          OUR SOCIAL MEDIA ACCOUTS
        </h3>
        <ul className="flex gap-10">
          <li className="flex items-center gap-2">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                fill="#ffffff"
              ></path>
            </svg>
            <p className="text-white text-[30px] font-robson  tracking-wider">
              WHATSAPP
            </p>
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"
                fill="#ffffff"
              />
            </svg>
            <p className="text-white text-[30px] font-robson tracking-wider">
              INSTAGRAM
            </p>
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.54433 5.16792C3.0468 4.46923 3.86451 4 4.8 4H19.2C20.1355 4 20.9532 4.46923 21.4557 5.16792C21.7993 5.64567 22 6.235 22 6.86667V17.1333C22 18.682 20.7804 20 19.2 20H4.8C3.21964 20 2 18.682 2 17.1333V6.86667C2 6.23499 2.20074 5.64567 2.54433 5.16792ZM4.9327 6L11.2598 12.9647C11.6566 13.4015 12.3434 13.4015 12.7402 12.9647L19.0673 6H4.9327ZM20 7.94766L14.2205 14.3096C13.0301 15.6199 10.9699 15.6199 9.77948 14.3096L4 7.94766V17.1333C4 17.6466 4.39214 18 4.8 18H19.2C19.6079 18 20 17.6466 20 17.1333V7.94766Z"
                fill="#ffffff"
              />
            </svg>
            <p className="text-white text-[30px] font-robson">MAIL</p>
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
                fill="#ffffff"
              />
            </svg>
            <p className="text-white text-[30px] font-robson tracking-wider">
              FACEBOOK
            </p>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 mt-4 p-8">
        <div className="flex flex-col justify-between  border border-gray-700 p-4">
          <h4 className="font-robson text-[36px]  text-white">
            National Shipping
          </h4>
          <p className="font-fredoka text-sm  text-white">
            We proudly offer shipping all over Pakistan, ensuring that our
            high-quality products reach customers in every corner of the
            country.
          </p>
        </div>
        <div className="flex flex-col justify-between  border border-gray-700 p-4">
          <h4 className="font-robson text-[36px]  text-white">Easy Returns</h4>
          <p className="font-fredoka text-sm  text-white">
            To initiate a return, please email customer@shanfabrics.com with
            your order number and reason for the return, so we can assist you
            with the process.
          </p>
        </div>
        <div className="flex flex-col justify-between  border border-gray-700 p-4">
          <h4 className="font-robson text-[36px]  text-white">Easy Payment</h4>
          <p className="font-fredoka text-sm  text-white">
            We use bank transfers, Easypaisa, and JazzCash to provide a
            comprehensive and secure payment experience, accommodating all
            client needs.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 mt-4 p-8">
        <div>
          <h3 className="text-white font-robson text-[30px] tracking-wide mb-5">
            Menu
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              Home
            </li>
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              Catalog
            </li>
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              About
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-robson text-[30px] tracking-wide mb-5">
            Shop
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              All
            </li>
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              New Arrivals
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-robson text-[30px] tracking-wide mb-5">
            Support
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              Shipping and Delivery
            </li>
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              Payments Method
            </li>
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              Returns and Refunds
            </li>
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              Terms of Service
            </li>
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              Privacy Policy
            </li>
            <li className="text-white font-fredoka uppercase cursor-pointer text-sm">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-2 border-gray-700 py-4 px-8">
        <p className="font-robson text-[36px]  text-white cursor-pointer">
          SHAN FABRICS
        </p>
        <p className="font-robson text-[36px]  text-white cursor-pointer">
          Design and Developed by Nazeef Masood
        </p>
        <p className="font-robson text-[36px]  text-white cursor-pointer">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
