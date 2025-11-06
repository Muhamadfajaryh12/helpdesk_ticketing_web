import React from "react";
import { Breadcrumb } from "../components/navigation/Breadcrumb";
import useFetch from "../hooks/useFetch";

const Dashboard = () => {
  const BASE_URL = import.meta.env.VITE_API_URL + "/dashboard";
  const dataSummaryTicket = useFetch({ url: BASE_URL });

  console.log(dataSummaryTicket);
  return (
    <div>
      <Breadcrumb data={["Teknisi", "Dashboard"]} />
      <div className="grid grid-cols-4 gap-4 mt-4 ">
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Total Ticket</h6>
          <h1 className="text-3xl font-extrabold">
            {dataSummaryTicket.data.total_ticket}
          </h1>
        </div>
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Ticket Open</h6>
          <h1 className="text-3xl font-extrabold">
            {dataSummaryTicket.data.total_open}
          </h1>
        </div>
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Ticket In Progress</h6>
          <h1 className="text-3xl font-extrabold">
            {dataSummaryTicket.data.total_in_progress}
          </h1>
        </div>
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Total Close</h6>
          <h1 className="text-3xl font-extrabold">
            {dataSummaryTicket.data.total_close}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
