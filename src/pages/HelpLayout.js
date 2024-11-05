import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";

const HelpLayout = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  useEffect(() => {
    let path = location.pathname;
    let namePath = path.split("/");
    console.log(namePath[2]);
    if (namePath[2] === "order_help") {
      setName("Orders");
    }
    if (namePath[2] === "payments_methods") {
      setName("Payments methods");
    }
    if (namePath[2] == "shipping_and_delivery") {
      setName("Shipping and Delivery");
    }
    if (namePath[2] == "return_and_refund") {
      setName("Returns and Refunds");
    }
    if (namePath[2] == "assistance") {
      setName("Assistance");
    }
    if (namePath[2] == "privacy_policy") {
      setName("privacy policy");
    }
    if (namePath[2] == "term_of_service") {
      setName("Term of Service");
    }
  }, [location.pathname]);
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col p-8 gap-[10px]">
        <h1 className="font-robson text-[320px] text-center font-semibold leading-[230px] mb-12">
          {name}
        </h1>
        <nav className="w-full flex justify-center ">
          <ul className="flex flex-row ">
            <Link
              to="/help/order_help"
              className={`border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed ${
                name == "Orders" ? "border-black italic" : ""
              }`}
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
              className={`border-y-2 border-dotted flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed ${
                name == "Payments methods" ? "border-black italic" : ""
              }`}
            >
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="2" fill="#000000" />
              </svg>
              <p className="font-fredoka uppercase font-normal text-md">
                Payment Methods
              </p>
            </Link>
            <Link
              to="/help/shipping_and_delivery"
              className={`border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed ${
                name == "Shipping and Delivery" ? "border-black italic" : ""
              }`}
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
              className={`border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed ${
                name == "Returns and Refunds" ? "border-black italic" : ""
              }`}
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
              className={`border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed ${
                name == "Assistance" ? "border-black italic" : ""
              }`}
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
              className={`border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed ${
                name == "privacy policy" ? "border-black italic" : ""
              }`}
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
              className={`border-y-2 border-dotted pl-2 flex justify-between items-center cursor-pointer hover:border-black hover:border-dashed ${
                name == "Term of Service" ? "border-black italic" : ""
              }`}
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
