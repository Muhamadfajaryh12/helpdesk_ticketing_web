import React, { useEffect } from "react";
import TextInput from "./TextInput";
import Select from "./Select";
import PrimaryButton from "../button/PrimaryButton";
import StatusBadge from "../badge/StatusBadge";
import { useForm } from "react-hook-form";
import TicketAPI from "../../shared/TicketAPI";
import toast from "react-hot-toast";

const TicketForm = ({
  data,
  setOpen,
  dataCategory,
  dataPriority,
  dataStatus,
  dataTeknisi,
  insertData,
  updateData,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("description", data.description);
      setValue("category", data.category_id);
      setValue("priority", data.priority_id);
      setValue("status", data.status_id);
      setValue("teknisi", data.assigned_id);
    }
  }, [data]);

  const handleInsertTicket = async (data) => {
    const response = await TicketAPI.InsertTicket({
      title: data.title,
      description: data.description,
      category_id: data.category,
      priority_id: data.priority,
      status_id: data.status,
    });

    if (response.status == "success") {
      insertData(response.data);
      toast.success(response.message);
      reset();
    }
  };

  const handleAssignedTechnician = async (datas) => {
    const response = await TicketAPI.updateTicket({
      assigned_id: datas.teknisi,
      status_id: datas.status,
      id: data.id,
    });
    if (response.status == "success") {
      updateData(response.data);
      toast.success(response.message);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center-safe mb-4">
        <h1 className="font-bold text-2xl">Formulir Ticket</h1>
        <button onClick={() => setOpen(false)}>X</button>
      </div>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(
          data ? handleAssignedTechnician : handleInsertTicket
        )}
      >
        <TextInput
          type={"text"}
          label={"Judul ticket"}
          name={"title"}
          {...register("title", { required: true })}
          readOnly={data && true}
        />
        <TextInput
          type={"text"}
          label={"Deskripsi"}
          name={"description"}
          {...register("description", { required: true })}
          readOnly={data && true}
        />
        <Select
          name={"category"}
          label={"Kategori"}
          data={dataCategory}
          labelField={"category"}
          valueField={"id"}
          {...register("category", { required: true })}
          readOnly={data && true}
        />
        <Select
          name={"priority"}
          label={"Prioritas"}
          data={dataPriority}
          labelField={"priority"}
          valueField={"id"}
          {...register("priority", { required: true })}
          readOnly={data && true}
        />
        <Select
          name={"status"}
          label={"Status"}
          data={dataStatus}
          labelField={"status"}
          valueField={"id"}
          {...register("status", { required: true })}
        />
        {data && (
          <Select
            name={"teknisi"}
            label={"Teknisi"}
            data={dataTeknisi}
            labelField={"name"}
            valueField={"id"}
            {...register("teknisi", { required: true })}
          />
        )}
        <PrimaryButton text={"Submit"} type={"submit"} />
      </form>
      {data && (
        <div className="">
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
      )}
    </div>
  );
};

export default TicketForm;
