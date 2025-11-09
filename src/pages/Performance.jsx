import React from "react";
import { Breadcrumb } from "../components/navigation/Breadcrumb";
import useFetch from "../hooks/useFetch";
import ChartBar from "../components/chart/ChartBar";

const Performance = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const data = useFetch({ url: `${BASE_URL}/dashboard/performance` });
  console.log(data);
  return (
    <div>
      <Breadcrumb data={["Performance", "Analytic"]} />
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Average In Progress</h6>
          <h1 className="text-3xl font-extrabold">
            {data.data?.avg_in_progress} Minute
          </h1>
        </div>{" "}
        <div className="border border-gray-200 rounded-md p-4">
          <h6 className="text-sm font-bold mb-2">Average Resolved</h6>
          <h1 className="text-3xl font-extrabold">
            {data.data?.avg_resolved} Minute
          </h1>
        </div>
        <ChartBar
          data={data?.data?.teknisi_ticket}
          category={"name"}
          valueKey={"total_ticket"}
          titleXaxis={"Teknisi"}
          titleYaxis={"Ticket"}
        />
        <ChartBar
          data={data?.data?.teknisi_review}
          category={"name"}
          valueKey={"avg_review"}
          titleXaxis={"Teknisi"}
          titleYaxis={"Review"}
        />
      </div>
    </div>
  );
};

export default Performance;
