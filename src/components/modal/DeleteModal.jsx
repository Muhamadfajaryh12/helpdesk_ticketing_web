import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import { IoIosWarning } from "react-icons/io";
import { useModal } from "../../context/ModalContext";

const DeleteModal = ({ onDelete, id }) => {
  const { closeModal } = useModal();
  return (
    <div className="p-2">
      <div className="flex justify-end">
        <button onClick={closeModal}>X</button>
      </div>
      <IoIosWarning className="mx-auto text-red-500" size={40} />
      <h1 className="text-center  my-4">
        This user will be marked as deleted. Do you want to continue?
      </h1>
      <PrimaryButton onClick={() => onDelete(id)} text={"Confirm"} />
    </div>
  );
};

export default DeleteModal;
