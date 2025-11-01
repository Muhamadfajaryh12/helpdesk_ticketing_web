import React from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="w-full border-b border-gray-200 p-2 flex justify-end">
      <Dropdown
        text={"Muhamad Fajar"}
        linkData={[
          {
            title: "Logout",
          },
        ]}
      />
    </div>
  );
};

export default Navbar;
