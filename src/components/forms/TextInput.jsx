import React from "react";

const TextInput = ({ label, type, name, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="font-semibold text-gray-600 text-sm ">
        {label}
      </label>
      <input
        type={type}
        name={name}
        {...props}
        className="w-full inline-block border border-gray-400 p-2 rounded-sm mt-1"
      />
    </div>
  );
};

export default TextInput;
