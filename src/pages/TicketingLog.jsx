import React from "react";
import { Breadcrumb } from "../components/navigation/Breadcrumb";
import useFetch from "../hooks/useFetch";
import DataTable from "react-data-table-component";
import StatusBadge from "../components/badge/StatusBadge";

const TicketingLog = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const dataTicketLog = useFetch({ url: BASE_URL + "/ticket-log" });
  console.log(dataTicketLog);
  return (
    <div>
      <Breadcrumb data={["Ticketing", "Log"]} />
      <DataTable
        data={dataTicketLog.data}
        pagination
        columns={[
          {
            name: "ID Log",
            selector: (row) => <p>#{row.id}</p>,
          },
          {
            name: "ID Ticket",
            selector: (row) => <p>#{row.ticket_id}</p>,
          },
          {
            name: "Assigned",
            selector: (row) => row.name,
          },
          {
            name: "Status",
            selector: (row) => <StatusBadge status={row.status} />,
          },
          {
            name: "Date Time",
            selector: (row) => (
              <div>
                <p className="font-semibold">
                  {new Date(row.status_at).toLocaleString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="text-xs">
                  Jam{" "}
                  {new Date(row.status_at).toLocaleString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default TicketingLog;
