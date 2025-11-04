import { Children } from "react";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Ticketing from "../pages/Ticketing";
import TicketingLog from "../pages/TicketingLog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/teknisi",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "ticketing",
        element: <Ticketing />,
      },
      {
        path: "ticketing/log",
        element: <TicketingLog />,
      },
    ],
  },
]);

export default router;
