import React from "react";

const PriorityBadge = ({ priority }) => {
  switch (priority.toLowerCase()) {
    case "low":
      return (
        <div className="p-2 bg-blue-200 text-xs w-20 rounded-sm text-blue-600 font-semibold">
          <p className="text-center">{priority}</p>
        </div>
      );
    case "medium":
      return (
        <div className="p-2 bg-yellow-200 text-xs w-20 rounded-sm text-yellow-600 font-semibold">
          <p className="text-center">{priority}</p>
        </div>
      );
    case "urgent":
      return (
        <div className="p-2 bg-red-200 text-xs w-20 rounded-sm text-red-600 font-semibold">
          <p className="text-center">{priority}</p>
        </div>
      );

    default:
      break;
  }
};

export default PriorityBadge;
