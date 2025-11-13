import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useModal } from "../../context/ModalContext";
import Select from "../forms/Select";
import PrimaryButton from "../button/PrimaryButton";
import TicketAPI from "../../shared/TicketAPI";
import toast from "react-hot-toast";

const StatusModal = ({ dataStatus, status_id, id, updateData }) => {
  const { closeModal } = useModal();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("status", status_id);
  }, []);

  const handleUpdateStatusTicket = async (data) => {
    const response = await TicketAPI.updateTicket({
      id: id,
      status_id: data.status,
    });
    if (response.status == "success") {
      updateData(response.data);
      toast.success(response.message);
      closeModal();
    }
  };

  return (
    <div className="w-xl" onClick={(e) => e.stopPropagation()}>
      Update Status Ticket
      <form onSubmit={handleSubmit(handleUpdateStatusTicket)}>
        <Select
          data={dataStatus}
          valueField={"id"}
          label={"Status"}
          name={"status"}
          labelField={"status"}
          {...register("status", { required: true })}
        />

        <PrimaryButton type="submit" text={"Confirm"} />
      </form>
    </div>
  );
};

export default StatusModal;
