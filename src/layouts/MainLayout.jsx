import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";
import { useAuth } from "../context/AuthContext";

const MainLayout = () => {
  const { token, loading } = useAuth();
  if (loading) {
    return <div></div>;
  }
  if (!token) return <Navigate to="/" />;
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
