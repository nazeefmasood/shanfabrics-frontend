import React from "react";

const MyButton = ({ title, onClick, styles }) => {
  return (
    <button
      className={`bg-[#2f04c8] h-full text-white py-2 px-20 rounded hover:bg-[#24038e] transition duration-300 ${styles}`}
      onClick={onClick}
    >
      {title && title}
    </button>
  );
};

export default MyButton;
