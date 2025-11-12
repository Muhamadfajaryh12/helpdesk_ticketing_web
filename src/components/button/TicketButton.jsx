import React from "react";
import { IoMdOpen } from "react-icons/io";
import { useModal } from "../../context/ModalContext";
import AssignedModal from "../modal/AssignedModal";
import ReviewModal from "../modal/ReviewModal";

const TicketButton = ({ status, dataTechnician, id }) => {
  const { openModal } = useModal();
  switch (status.toLowerCase()) {
    case "open":
      return (
        <button
          className="flex gap-1 items-center justify-center text-sm font-semibold text-blue-500"
          onClick={() =>
            openModal(<AssignedModal id={id} dataTechnician={dataTechnician} />)
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
          onClick={() => openModal(<ReviewModal id={id} />)}
        >
          <IoMdOpen />
          <span>Close Ticket</span>
        </button>
      );
    default:
      break;
  }
};

export default TicketButton;
