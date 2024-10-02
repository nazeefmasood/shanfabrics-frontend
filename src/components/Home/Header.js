import React, { useState, useEffect } from "react";
import { products } from "../../images/dummy_products";

const Header = () => {
  const [openCartMenu, setOpenCart] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [indexItem, setSetIndexItem] = useState(null);
  const [cartItems, setCartItems] = useState(
    products.map((product) => ({ ...product, quantity: 1 })) // Initialize quantity as 1 for each product
  );
  const menu_items = [
    {
      name: "Home",
      message:
        "Welcome to your fashion destination! Find your next outfit and let’s get you looking fabulous!",
    },
    {
      name: "All Products",
      message:
        "Explore our full collection—clothes, much and more. Your dream wardrobe starts here!",
    },
    {
      name: "Categories",
      message:
        "Shop by category to find the latest trends, whether it’s casual, formal, or something in between!",
    },
    {
      name: "About",
      message:
        "We’re passionate about fashion! Learn more about who we are and why we love making you look your best.",
    },
    {
      name: "Contact",
      message:
        "Need help? Got a question? Reach out to us—we're here to assist with whatever you need!",
    },
  ];

  useEffect(() => {
    // Calculate total price based on cart items and their quantities
    const calculateTotalPrice = () => {
      const total = cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
      setTotalPrice(total);
    };

    if (openCartMenu) {
      calculateTotalPrice();
    }
  }, [openCartMenu, cartItems]);

  const handleQuantityChange = (index, increment) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = Math.max(
      1,
      newCartItems[index].quantity + increment
    ); // Ensure quantity doesn't go below 1
    setCartItems(newCartItems);
  };

  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index); // Remove the item from the cart
    setCartItems(newCartItems);
  };
  return (
    <header>
      <nav className="flex justify-between items-center p-8 border-b-[1px] border-black">
        <a
          className="font-fredoka font-semibold text-[30px] cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          MENU
        </a>
        <a className="font-fredoka font-semibold text-[30px] cursor-pointer">
          SHAN FABRICS
        </a>
        <a
          className="font-fredoka font-semibold text-[30px] cursor-pointer flex gap-1"
          onClick={() => setOpenCart(!openCartMenu)}
        >
          CART
          <div className="bg-black text-white px-3">{cartItems.length}</div>
        </a>
      </nav>

      {openCartMenu && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={() => setOpenCart(false)}
          ></div>

          {/* Cart Menu */}
          <div
            className={`fixed top-0 right-0 w-[600px] h-full bg-white p-8 shadow-lg z-50 transition-transform duration-300 transform ${
              openCartMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <p className="font-fredoka font-semibold text-[36px] flex gap-2">
                CART
                <div className="bg-black text-white px-3">
                  {cartItems.length}
                </div>
              </p>
              <a
                className="font-fredoka font-semibold text-[30px] cursor-pointer"
                onClick={() => setOpenCart(false)}
              >
                <div className="bg-black text-white px-3">X</div>
              </a>
            </div>

            {/* Cart Items */}
            <div className="flex flex-col gap-3 mt-10 overflow-y-auto max-h-[60vh] pr-4 no-scrollbar">
              {cartItems.map((product, index) => (
                <div key={product.id} className="flex gap-5 items-center">
                  <div className="w-[120px] h-[150px] overflow-hidden">
                    <img
                      src={product.image}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <h2 className="font-robson text-[28px] tracking-wide uppercase">
                        {product.title}
                      </h2>
                      <h2 className="font-robson text-[28px] tracking-wide uppercase">
                        {product.price * product.quantity} PKR
                      </h2>
                    </div>
                    <p className="font-fedroka text-[16px] tracking-wide uppercase">
                      {product.category}
                    </p>

                    <div className="flex justify-between items-end mt-4">
                      {/* Quantity Control */}
                      <div className="flex border p-2 items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(index, -1)}
                          className="px-2"
                        >
                          <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
                              fill="#000000"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          value={product.quantity}
                          readOnly
                          className="w-[40px] text-center"
                        />
                        <button
                          onClick={() => handleQuantityChange(index, 1)}
                          className="px-2"
                        >
                          <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12H18M12 6V18"
                              stroke="#000000"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(index)}
                        className="font-fedroka text-[16px] tracking-wide uppercase font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty Cart Message */}
            {cartItems.length === 0 && (
              <div className="mt-4">
                <p>Your cart is currently empty.</p>
              </div>
            )}

            {/* Cart Summary */}
            <div className="absolute bottom-0 right-0 left-0 bg-[#e9e9e9] p-8">
              <div className="flex justify-between mb-2">
                <p className="font-fredoka uppercase font-semibold">Shipping</p>
                <p className="font-fredoka uppercase font-semibold">
                  Calculated at Checkout
                </p>
              </div>

              <div className="flex justify-between">
                <p className="font-fredoka uppercase font-semibold">Subtotal</p>
                <p className="font-fredoka uppercase font-semibold ">
                  {totalPrice} PKR
                </p>
              </div>
              <button className="bg-[#5123db] font-robson text-[32px] tracking-wider uppercase font-semibold py-2 mt-10 w-full text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}

      {openMenu && (
        <>
          <div className="fixed top-0 w-[50vw] flex flex-col justify-between h-screen left-0 bottom-0  bg-[#262c34] z-50">
            <div className="flex justify-between p-8 ">
              <p
                className="font-fredoka font-semibold text-[30px] cursor-pointer text-white p-8"
                onClick={() => setOpenMenu(false)}
              >
                MENU
              </p>
            </div>
            <nav className="flex flex-col p-8">
              {menu_items.map((item, index) => (
                <div
                  className="flex justify-between items-center hover:bg-gray-600  px-8"
                  onMouseEnter={() => setSetIndexItem(index)}
                  onMouseLeave={() => setSetIndexItem(null)}
                >
                  <p className="text-white uppercase font-robson text-[100px] font-semibold tracking-wider cursor-pointer ">
                    {item.name}
                  </p>
                  <p className="text-white uppercase mb-8 font-robson text-[20px] font-semibold tracking-wider cursor-pointer ">
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      <title>arrow_right_up [#354]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-380.000000, -6599.000000)"
                          fill="#ffffff"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <polygon
                              id="arrow_right_up-[#354]"
                              points="324 6457.602 325.393 6458.997 342 6442.349 342 6453 344 6453 344 6439 329.907 6439 329.877 6441 340.634 6441"
                            ></polygon>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </p>
                </div>
              ))}
            </nav>
          </div>
          <div className="fixed top-0 w-[50vw] h-screen flex flex-col justify-between items-end bottom-0 right-0 bg-white z-50">
            <div className="flex justify-end p-8">
              <p
                className="font-fredoka font-semibold flex gap-2 text-[30px] cursor-pointer text-black"
                onClick={() => setOpenMenu(false)}
              >
                CLOSE <div className=" bg-black text-white px-3 ">X</div>
              </p>
            </div>
            <div className="flex justify-end font-robson font-semibold text-[36px] text-end uppercase cursor-pointer text-gray-500  p-8 overflow-hidden">
              {indexItem !== null ? (
                <div>
                  <p className=" text-end">/0{indexItem + 1}</p>
                  <p className="w-[70%] ml-auto text-end h-[100px] ">
                    {menu_items[indexItem].message}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
