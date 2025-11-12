import { Children } from "react";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Ticketing from "../pages/Ticketing";
import TicketingLog from "../pages/TicketingLog";
import Performance from "../pages/Performance";
import Review from "../pages/Review";

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
      {
        path: "performance",
        element: <Performance />,
      },
      {
        path: "review",
        element: <Review />,
      },
    ],
  },
]);

export default router;
