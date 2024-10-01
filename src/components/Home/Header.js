import React, { useState, useEffect } from "react";

const Header = () => {
  const [openCartMenu, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    if (openMenu) {
      const updateDate = () => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour:"2-digit",
          minute:"2-digit",
          second:"2-digit",
          hour12:true,
        });
        setCurrentDate(formattedDate);
      };

      updateDate(); // Update the date when cart is opened

      const intervalId = setInterval(updateDate, 1000);

      return () => clearInterval(intervalId); // Cleanup interval when cart is closed
    }
  }, [openMenu]);

  return (
    <header>
      <nav className="flex justify-between items-center p-8 border-b-[1px] border-black">
        <a
          className="font-fredoka font-semibold text-[30px] cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          MENU
        </a>
        <a className="font-fredoka font-bold text-[30px] cursor-pointer">
          SHAN FABRICS
        </a>
        <a
          className="font-fredoka font-semibold text-[30px] cursor-pointer flex gap-1"
          onClick={() => setOpenCart(!openCartMenu)}
        >
          CART <div className="bg-black text-white px-3">0</div>
        </a>
      </nav>

      {openCartMenu && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={() => setOpenCart(false)} // Close cart when clicking outside
          ></div>

          {/* Cart Sidebar */}
          <div
            className={`fixed top-0 right-0 w-[600px] h-full bg-white p-8 shadow-lg z-50 transition-transform duration-300 transform ${
              openCartMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between">
              <p className="font-fredoka font-semibold text-[36px] cursor-pointer flex gap-1">
                CART <div className=" text-black px-3 ">0</div>
              </p>
              <p
                className="font-fredoka font-semibold text-[22px] cursor-pointer "
                onClick={() => setOpenCart(false)}
              >
                &times;
              </p>
            </div>

            {/* Cart content */}
            <div className="mt-4">
              <p>Your cart is currently empty.</p>
            </div>
          </div>
        </>
      )}

      {openMenu && (
        <div className="fixed top-0 w-screen h-screen left-0, bottom-0 right-0 bg-black z-50 p-8">
          <div className="flex justify-between">
            <p className="font-fredoka font-semibold text-[30px] cursor-pointer text-white">
              MENU
            </p>
            <p className="font-robson font-semibold text-[36px] uppercase cursor-pointer text-gray-500 tra">
              {currentDate}
            </p>
            <p
              className="font-fredoka font-semibold text-[30px] cursor-pointer text-white"
              onClick={() => setOpenMenu(false)}
            >
              CLOSE
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
