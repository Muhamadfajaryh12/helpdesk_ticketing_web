import React from "react";

const Select = ({ name, label, labelField, valueField, data, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="font-semibold text-gray-600 text-sm ">
        {label}
      </label>
      <select
        name={name}
        className="w-full inline-block border border-gray-400 p-2 rounded-sm  mt-1"
        {...props}
      >
        <option value="">Choose</option>
        {data?.map((item) => (
          <option value={item[valueField]}>{item[labelField]}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
