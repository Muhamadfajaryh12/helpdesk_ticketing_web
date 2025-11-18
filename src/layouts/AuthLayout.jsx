import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="w-screen h-screen bg-gray-200">
      <div className="flex justify-center items-center h-full">
        <Outlet />
      </div>
      <Toaster />
    </main>
  );
};

export default AuthLayout;
