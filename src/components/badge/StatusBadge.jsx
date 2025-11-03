import React from "react";

const StatusBadge = ({ status }) => {
  switch (status.toLowerCase()) {
    case "open":
      return (
        <div className="p-2 bg-blue-500 text-xs w-20 rounded-sm text-white font-semibold">
          <p className="text-center">{status}</p>
        </div>
      );
    case "in progress":
      return (
        <div className="p-2 bg-yellow-500 text-xs w-20 rounded-sm text-white font-semibold">
          <p className="text-center">{status}</p>
        </div>
      );
    case "resolved":
      return (
        <div className="p-2 bg-green-400 text-xs w-20 rounded-sm text-white font-semibold">
          <p className="text-center">{status}</p>
        </div>
      );

    default:
      break;
  }
};

export default StatusBadge;
