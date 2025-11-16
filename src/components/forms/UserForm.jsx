import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../button/PrimaryButton";
import TextInput from "./TextInput";
import Select from "./Select";
import AuthAPI from "../../shared/AuthAPI";
import toast from "react-hot-toast";
import { useModal } from "../../context/ModalContext";

const UserForm = ({ setOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const handleSubmitUser = async (data) => {
    const response = await AuthAPI.InsertUser({
      name: data.name,
      email: data.email,
      role: data.role,
      password: data.name,
    });
    if (response.status == "success") {
      toast.success(response.message);
      reset();
    }
  };

  return (
    <div>
      <button onClick={() => setOpen(false)}>X</button>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleSubmitUser)}
      >
        <TextInput
          name={"name"}
          label={"Name"}
          {...register("name", { required: true })}
          type={"text"}
        />
        <TextInput
          name={"email"}
          label={"Email"}
          {...register("email", { required: true })}
          type={"email"}
        />
        <Select
          name={"role"}
          label={"Role"}
          {...register("role", { required: true })}
          data={[{ id: "Technician" }, { id: "General" }]}
          labelField={"id"}
          valueField={"id"}
        />
        <PrimaryButton text={"Submit"} type={"submit"} />
      </form>
    </div>
  );
};

export default UserForm;
