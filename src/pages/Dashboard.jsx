import React from "react";
import { Breadcrumb } from "../components/navigation/Breadcrumb";

const Dashboard = () => {
  return (
    <div>
      <Breadcrumb data={["Teknisi", "Dashboard"]} />
    </div>
  );
};

export default Dashboard;
