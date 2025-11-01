import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";

const MainLayout = () => {
  return (
    <main className="w-screen h-screen ">
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
