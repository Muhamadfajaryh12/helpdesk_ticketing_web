import TextInput from "./forms/TextInput";
import Select from "./forms/Select";
import PrimaryButton from "./button/PrimaryButton";
import { Fragment } from "react";

const Drawer = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open ? "w-96  p-4" : "w-0"
      } min-h-screen fixed transition-all duration-500 ease-in-out bg-white border-l border-gray-200 right-0 top-0`}
    >
      {open && (
        <Fragment>
          <div className="flex justify-between items-center-safe mb-4">
            <h1 className="font-bold text-2xl">Formulir Ticket</h1>
            <button onClick={() => setOpen(false)}>X</button>
          </div>
          <form className="flex flex-col gap-2">
            <TextInput type={"text"} label={"Judul ticket"} name={"title"} />
            <TextInput type={"text"} label={"Deskripsi"} name={"title"} />
            <Select
              name={"category"}
              label={"Kategori"}
              data={[
                {
                  id: "x",
                },
              ]}
              labelField={"id"}
              valueField={"id"}
            />
            <Select
              name={"category"}
              label={"Prioritas"}
              data={[
                {
                  id: "x",
                },
              ]}
              labelField={"id"}
              valueField={"id"}
            />
            <Select
              name={"category"}
              label={"Kategori"}
              data={[
                {
                  id: "x",
                },
              ]}
              labelField={"id"}
              valueField={"id"}
            />
            <PrimaryButton text={"Submit"} />
          </form>{" "}
        </Fragment>
      )}
    </div>
  );
};

export default Drawer;
