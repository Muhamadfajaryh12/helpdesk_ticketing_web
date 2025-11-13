import React from "react";
import { IoMdOpen } from "react-icons/io";
import { useModal } from "../../context/ModalContext";
import AssignedModal from "../modal/AssignedModal";
import ReviewModal from "../modal/ReviewModal";
import StatusModal from "../modal/StatusModal";

const TicketButton = ({
  status,
  dataTechnician,
  status_id,
  dataStatus,
  id,
  updateData,
}) => {
  const { openModal } = useModal();
  switch (status.toLowerCase()) {
    case "open":
      return (
        <button
          className="flex gap-1 items-center justify-center text-sm font-semibold text-blue-500"
          onClick={() =>
            openModal(
              <AssignedModal
                id={id}
                dataTechnician={dataTechnician}
                updateData={updateData}
              />
            )
          }
        >
          <IoMdOpen />
          <span>Assign Ticket</span>
        </button>
      );
    case "resolved":
      return (
        <button
          className="flex gap-1 items-center justify-center text-sm font-semibold text-green-500"
          onClick={() =>
            openModal(<ReviewModal updateData={updateData} id={id} />)
          }
        >
          <IoMdOpen />
          <span>Close Ticket</span>
        </button>
      );
    case "in progress":
      return (
        <button
          className="flex gap-1 items-center justify-center text-sm font-semibold text-violet-500"
          onClick={() =>
            openModal(
              <StatusModal
                status_id={status_id}
                dataStatus={dataStatus}
                id={id}
                updateData={updateData}
              />
            )
          }
        >
          <IoMdOpen />
          <span>Update Status</span>
        </button>
      );
    default:
      break;
  }
};

export default TicketButton;
