import React from "react";

const MyTextArea = ({
  type,
  onChange,
  title,
  placeholder,
  isRequired = false,
}) => {
  return (
    <div className=" flex-1">
      <p className="font-fedroka text-[16px] uppercase font-bold mb-2">
        {title && title}
      </p>
      <textarea
        required={isRequired}
        className="bg-[#e0e0e0] flex-1 p-4  text-[24px] tracking-wider w-full h-full font-robson"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default MyTextArea;
