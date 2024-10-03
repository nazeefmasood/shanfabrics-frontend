import React from "react";

const MyInput = ({ type, onChange, title, placeholder, isRequired = true }) => {
  return (
    <div className="flex-1">
      <p className="font-fedroka text-[16px] uppercase font-bold mb-2">
        {title && title}
      </p>
      <input
        required={isRequired}
        className="bg-[#e0e0e0] flex-1 py-3 px-5 text-[24px] tracking-wider w-full  font-robson"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default MyInput;
