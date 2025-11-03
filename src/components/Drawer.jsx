import TextInput from "./forms/TextInput";
import Select from "./forms/Select";
import PrimaryButton from "./button/PrimaryButton";
import { Fragment } from "react";

const Drawer = ({ open, children }) => {
  return (
    <div
      className={`${
        open ? "w-96  p-4" : "w-0"
      } min-h-screen fixed transition-all duration-500 ease-in-out bg-white border-l border-gray-200 right-0 top-0`}
    >
      {open && children}
    </div>
  );
};

export default Drawer;
