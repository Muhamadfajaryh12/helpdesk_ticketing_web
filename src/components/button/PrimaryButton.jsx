import React from "react";

const PrimaryButton = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="w-full p-2 text-white bg-black font-semibold text-sm rounded-sm"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
