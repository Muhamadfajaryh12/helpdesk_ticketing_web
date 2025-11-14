import React from "react";
import Dropdown from "./Dropdown";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <div className="w-full border-b border-gray-200 p-2 flex justify-end">
      <Dropdown
        text={"Muhamad Fajar"}
        linkData={[
          {
            title: "Logout",
            func: logout,
          },
        ]}
      />
    </div>
  );
};

export default Navbar;
