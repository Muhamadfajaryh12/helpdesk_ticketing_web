import TextInput from "./TextInput";
import Select from "./Select";
import PrimaryButton from "../button/PrimaryButton";
import { useForm } from "react-hook-form";
import TicketAPI from "../../shared/TicketAPI";
import toast from "react-hot-toast";

const TicketForm = ({ setOpen, dataCategory, dataPriority, insertData }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleInsertTicket = async (data) => {
    const response = await TicketAPI.InsertTicket({
      title: data.title,
      description: data.description,
      category_id: data.category,
      priority_id: data.priority,
    });

    if (response.status == "success") {
      insertData(response.data);
      toast.success(response.message);
      reset();
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
        onSubmit={handleSubmit(handleInsertTicket)}
      >
        <TextInput
          type={"text"}
          label={"Judul ticket"}
          name={"title"}
          {...register("title", { required: true })}
        />
        <TextInput
          type={"text"}
          label={"Deskripsi"}
          name={"description"}
          {...register("description", { required: true })}
        />
        <Select
          name={"category"}
          label={"Kategori"}
          data={dataCategory}
          labelField={"category"}
          valueField={"id"}
          {...register("category", { required: true })}
        />
        <Select
          name={"priority"}
          label={"Prioritas"}
          data={dataPriority}
          labelField={"priority"}
          valueField={"id"}
          {...register("priority", { required: true })}
        />
        <PrimaryButton text={"Submit"} type={"submit"} />
      </form>
    </div>
  );
};

export default TicketForm;
