import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";

const HelpLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex  p-8 gap-[80px]">
        <nav className="w-96 ">
          <ul className="flex flex-col ">
            <Link
              to="/help/order_help"
              className="border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed"
            >
              <p className="font-fredoka uppercase font-normal text-md">
                Orders
              </p>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="2" fill="#000000" />
              </svg>
            </Link>
            <Link
              to="/help/payments_methods"
              className="border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed"
            >
              <p className="font-fredoka uppercase font-normal text-md">
                Payment Methods
              </p>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="2" fill="#000000" />
              </svg>
            </Link>
            <Link
              to="/help/shipping_and_delivery"
              className="border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed"
            >
              <p className="font-fredoka uppercase font-normal text-md">
                Shipping and Delivery
              </p>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="2" fill="#000000" />
              </svg>
            </Link>
            <Link
              to="/help/return_and_refund"
              className="border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed"
            >
              <p className="font-fredoka uppercase font-normal text-md">
                Returns and Refunds
              </p>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="2" fill="#000000" />
              </svg>
            </Link>
            <Link
              to="/help/assistance"
              className="border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed"
            >
              <p className="font-fredoka uppercase font-normal text-md">
                Assistance
              </p>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="2" fill="#000000" />
              </svg>
            </Link>
            <Link
              to="/help/privacy_policy"
              className="border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed"
            >
              <p className="font-fredoka uppercase font-normal text-md">
                Privacy Policy
              </p>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="2" fill="#000000" />
              </svg>
            </Link>
            <Link
              to="/help/term_of_service"
              className="border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed"
            >
              <p className="font-fredoka uppercase font-normal text-md">
                Terms and Service
              </p>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="2" fill="#000000" />
              </svg>
            </Link>
          </ul>
        </nav>

        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HelpLayout;
