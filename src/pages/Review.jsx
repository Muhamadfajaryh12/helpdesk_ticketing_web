import React from "react";
import { Breadcrumb } from "../components/navigation/Breadcrumb";
import useFetch from "../hooks/useFetch";
import DataTable from "react-data-table-component";
import { BsStarFill } from "react-icons/bs";

const Review = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { data } = useFetch({ url: BASE_URL + "/review" });

  return (
    <div>
      <Breadcrumb data={["Admin", "Review"]} />
      <DataTable
        data={data}
        columns={[
          {
            name: "ID",
            selector: (row) => <p>#{row.id}</p>,
          },
          {
            name: "ID Ticket",
            selector: (row) => <p>#{row.ticket_id}</p>,
          },
          {
            name: "User Name",
            selector: (row) => row.name,
          },
          {
            name: "Rating",
            selector: (row) => (
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: row.rating }).map((_, index) => (
                  <BsStarFill key={index} />
                ))}
              </div>
            ),
          },
        ]}
        pagination
      />
    </div>
  );
};

export default Review;
