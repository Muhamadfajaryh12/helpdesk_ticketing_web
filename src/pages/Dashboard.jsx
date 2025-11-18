import React from "react";
import { Breadcrumb } from "../components/navigation/Breadcrumb";
import useFetch from "../hooks/useFetch";
import StackedBar from "../components/chart/StackedBar";
import ChartBar from "../components/chart/ChartBar";

const Dashboard = () => {
  const BASE_URL = import.meta.env.VITE_API_URL + "/dashboard";
  const data = useFetch({ url: BASE_URL });

  console.log(data);
  return (
    <div>
      <Breadcrumb data={["Admin", "Dashboard"]} />
      <div className="grid grid-cols-4 gap-4 mt-4 ">
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Total Ticket</h6>
          <h1 className="text-3xl font-extrabold">
            {data.data.summary_ticket?.total_ticket}
          </h1>
        </div>
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Ticket Open</h6>
          <h1 className="text-3xl font-extrabold">
            {data.data.summary_ticket?.total_open}
          </h1>
        </div>
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Ticket In Progress</h6>
          <h1 className="text-3xl font-extrabold">
            {data.data.summary_ticket?.total_in_progress}
          </h1>
        </div>
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Total Close</h6>
          <h1 className="text-3xl font-extrabold">
            {data.data.summary_ticket?.total_close}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Total Technician</h6>
          <h1 className="text-3xl font-extrabold">
            {data.data?.summary_users?.total_technician}
          </h1>
        </div>
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Total Users</h6>
          <h1 className="text-3xl font-extrabold">
            {data.data?.summary_users?.total_general}
          </h1>
        </div>
        <StackedBar
          data={data?.data?.summary_category_priority}
          category={"category"}
          label={["Low", "Medium", "High", "Urgent"]}
          valueKey={"priority"}
          countKey={"total_ticket"}
          title={"Total Ticket By Priority"}
        />
        <StackedBar
          data={data?.data?.summary_category_status}
          category={"category"}
          label={[
            "Open",
            "In Progress",
            "Resolved",
            "Closed",
            "Pending",
            "On Hold",
          ]}
          valueKey={"status"}
          countKey={"total_ticket"}
          title={"Total Ticket By Status"}
        />
      </div>
      <ChartBar
        data={data?.data?.summary_ticket_month}
        category={"date"}
        valueKey={"total_ticket"}
        horizontal={false}
        title={"Total Ticket Daily"}
      />
    </div>
  );
};

export default Dashboard;
