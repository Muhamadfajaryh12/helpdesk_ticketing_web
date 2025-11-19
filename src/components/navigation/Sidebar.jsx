import React, { useState } from "react";
import { BsStar, BsTicket } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const linkData = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: <RxDashboard />,
    access: "admin",
  },
  {
    path: "/admin/ticketing",
    name: "Ticket",
    icon: <BsTicket />,
    access: "admin",
  },

  {
    path: "/admin/ticketing/log",
    name: "Ticket Log",
    icon: <BsTicket />,
    access: "admin",
  },
  {
    path: "/admin/performance",
    name: "Performance",
    icon: <IoBarChartOutline />,
    access: "admin",
  },
  {
    path: "/admin/review",
    name: "Review",
    icon: <BsStar />,
    access: "admin",
  },
  {
    path: "/admin/users",
    name: "Users",
    icon: <FaUser />,
    access: "admin",
  },
  {
    path: "/general",
    name: "Ticket",
    icon: <BsTicket />,
    access: "general",
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { auth } = useAuth();
  const path = useLocation();

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } border-r min-h-screen transition-all delay-100 duration-500  ease-in-out  border-gray-200`}
    >
      <div
        className={`flex  items-center mb-4 border-b border-gray-200 p-2 ${
          open ? "justify-between" : "justify-center"
        }`}
      >
        {open && <h1 className="font-semibold">Ticketing Support</h1>}
        <button onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <RxHamburgerMenu size={24} />
          ) : (
            <IoIosArrowForward size={24} />
          )}
        </button>
      </div>
      <div
        className={`flex flex-col gap-4 mx-auto p-4 ${
          !open && "justify-center items-center"
        }`}
      >
        {linkData.map(
          (item) =>
            item.access == auth.role.toLowerCase() && (
              <Link
                to={item.path}
                className={`flex items-center gap-2 p-2 rounded-md ${
                  path.pathname == item.path
                    ? "bg-violet-500 text-white font-semibold"
                    : ""
                }`}
              >
                {item.icon} {open && <span>{item.name}</span>}
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
