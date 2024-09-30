import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border border-b-1 border-black">
      <a className="font-fredoka  font-semibold text-[22px] cursor-pointer">
        ACCOUNT
      </a>
      <a className="font-fredoka font-bold text-[26px] cursor-pointer">
        SHAN FABRICS
      </a>
      <a className="font-fredoka  font-semibold text-[22px] cursor-pointer">
        CART
      </a>
      
    </header>
  );
};

export default Header;
