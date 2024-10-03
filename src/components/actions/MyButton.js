import React from "react";

const MyButton = ({ title, onClick, styles }) => {
  return (
    <button
      className={` ${styles}`}
      onClick={onClick}
    >
      {title && title}
    </button>
  );
};

export default MyButton;
