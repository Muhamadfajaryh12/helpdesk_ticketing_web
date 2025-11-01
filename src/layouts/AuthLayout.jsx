import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="w-screen h-screen">
      <div className="flex justify-center items-center h-full">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
