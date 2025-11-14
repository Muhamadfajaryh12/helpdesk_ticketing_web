import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ text, linkData }) => {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => {
    open ? setOpen(null) : setOpen(value);
  };

  return (
    <div className="relative mx-10">
      <button
        onClick={() => handleOpen(text)}
        className="flex items-center gap-1"
      >
        <span>{text}</span>
        {open != text ? (
          <IoIosArrowDown size={18} />
        ) : (
          <IoIosArrowUp size={18} />
        )}
      </button>

      <div
        className={`${
          open == text ? "absolute" : "hidden"
        }  bg-white border border-gray-200 top-7 w-32`}
      >
        {
          <ul>
            {linkData.map((item) => (
              <li className="text-sm font-semibold p-2" onClick={item.func}>
                {item.title}
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default Dropdown;
