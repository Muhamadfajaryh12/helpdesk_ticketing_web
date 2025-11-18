import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";
import { useAuth } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ role }) => {
  const { auth, loading } = useAuth();
  if (loading) {
    return <div></div>;
  }

  if (!auth) return <Navigate to="/" replace />;
  const userRole = auth?.role?.toLowerCase() || "";

  const allowed = Array.isArray(role)
    ? role.map((r) => r.toLowerCase()).includes(userRole)
    : role.toLowerCase() === userRole;

  if (!allowed) return <Navigate to="/" replace />;

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
      <Toaster />
    </main>
  );
};

export default MainLayout;
