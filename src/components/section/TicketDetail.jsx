import React from "react";
import StatusBadge from "../badge/StatusBadge";
import PriorityBadge from "../badge/PriorityBadge";

const TicketDetail = ({ data, setOpenDrawer }) => {
  return (
    <div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl mb-2">Detail Ticket</h1>
          <button onClick={() => setOpenDrawer(false)}>X</button>
        </div>
        <div className="my-2">
          <h6 className="font-semibold">Title</h6>
          <p>{data?.title}</p>
        </div>
        <div className="my-2">
          <h6 className="font-semibold">Description</h6>
          <p className="text-justify">{data?.description}</p>
        </div>
        <div className="my-2">
          <h6 className="font-semibold">Category</h6>
          <p>{data?.category}</p>
        </div>
        <div className="my-2">
          <h6 className="font-semibold">Priority</h6>
          <PriorityBadge priority={data?.priority} />
        </div>
        <div className="my-2">
          <h6 className="font-semibold">Assigned to</h6>
          <p>{data?.assigned}</p>
        </div>
        <h6 className="font-semibold">Process Log</h6>
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
