import React from "react";
import StatusBadge from "../badge/StatusBadge";

const TicketDetail = ({ data, setOpenDrawer }) => {
  return (
    <div>
      <button onClick={() => setOpenDrawer(false)}>X</button>
      <div className="mt-4">
        <h1 className="font-bold text-2xl mb-2">Detail Ticket</h1>
        <h6 className="mb-2">Assigned to : {data.assigned}</h6>
        <div className="flex flex-col gap-2">
          {data?.ticket_log?.map((item) => (
            <div className="flex items-center-safe gap-2">
              <StatusBadge status={item.status} />
              <span className="text-sm">
                {new Date(item.status_at).toLocaleString("id-ID")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
