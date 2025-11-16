import React from "react";
import Dropdown from "./Dropdown";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { logout, auth } = useAuth();
  return (
    <div className="w-full border-b border-gray-200 p-2 flex justify-end">
      <Dropdown
        text={auth.name}
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
