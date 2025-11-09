import React, { useState } from "react";
import { BsTicket } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const linkData = [
  {
    path: "/teknisi",
    name: "Dashboard",
    icon: <RxDashboard />,
  },
  {
    path: "/teknisi/ticketing",
    name: "Ticketing",
    icon: <BsTicket />,
  },
  {
    path: "/teknisi/performance",
    name: "Performance",
    icon: <IoBarChartOutline />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
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
        {linkData.map((item) => (
          <Link to={item.path} className="flex items-center gap-2">
            {item.icon} {open && <span>{item.name}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
