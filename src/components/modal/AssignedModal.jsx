import React from "react";
import { useForm } from "react-hook-form";
import Select from "../forms/Select";
import TicketAPI from "../../shared/TicketAPI";
import { useModal } from "../../context/ModalContext";
import PrimaryButton from "../button/PrimaryButton";

const AssignedModal = ({ id, dataTechnician }) => {
  const { closeModal } = useModal();
  const { register, handleSubmit } = useForm();
  const handleAssignedTechnician = async (data) => {
    const response = await TicketAPI.updateTicket({
      id: id,
      assigned_id: data.technician,
    });
    if (response.status == "success") {
      ("");
    }
  };
  return (
    <div onClick={(e) => e.stopPropagation()} className="w-xl">
      <div className="flex justify-between items-center-safe">
        <h1 className="font-bold text-2xl">Assigned Ticket</h1>
        <button onClick={closeModal}>X</button>
      </div>
      <h1 className="font-semibold">
        ID Ticket : <span>#{id}</span>
      </h1>
      <p className="my-2 ">
        Choose a technician to handle this ticket. Make sure to pick the right
        person to get it solved quickly!
      </p>
      <form
        onSubmit={handleSubmit(handleAssignedTechnician)}
        className="flex flex-col gap-2"
      >
        <Select
          data={dataTechnician}
          label={"Technician"}
          labelField={"name"}
          valueField={"id"}
          name={"technician"}
          {...register("technician", { required: true })}
        />
        <PrimaryButton type="submit" text={"Assigned"} />
      </form>
    </div>
  );
};

export default AssignedModal;
