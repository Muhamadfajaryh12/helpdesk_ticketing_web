import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import DataTable from "react-data-table-component";
import StatusBadge from "../components/badge/StatusBadge";
import { BsTrash } from "react-icons/bs";
import PrimaryButton from "../components/button/PrimaryButton";
import { Breadcrumb } from "../components/navigation/Breadcrumb";
import Drawer from "../components/Drawer";
import UserForm from "../components/forms/UserForm";
import AuthAPI from "../shared/AuthAPI";

const Technician = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { data: dataTechnician } = useFetch({
    url: BASE_URL + "/user/technician",
  });
  const { data: dataGeneral } = useFetch({ url: BASE_URL + "/user/general" });
  console.log(dataGeneral);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Breadcrumb data={["Technician"]} />
      <div className="flex justify-end ">
        <div className="w-32">
          <PrimaryButton text={"Create"} onClick={() => setOpen(true)} />
        </div>
      </div>
      <DataTable
        data={dataTechnician}
        columns={[
          {
            name: "Name",
            selector: (row) => row.name,
          },
          {
            name: "Status",
            selector: (row) => <StatusBadge status={row.status} />,
          },
          {
            name: "Role",
            selector: (row) => row.role,
          },
          {
            name: "Action",
            selector: (row) => (
              <div>
                <button className="flex bg-red-500  text-white gap-2 text-sm  p-2 rounded-md items-center font-semibold">
                  <BsTrash />
                  <span>Delete</span>
                </button>
              </div>
            ),
          },
        ]}
        pagination
      />
      <DataTable
        data={dataGeneral}
        columns={[
          {
            name: "Name",
            selector: (row) => row.name,
          },
          {
            name: "Role",
            selector: (row) => row.role,
          },
          {
            name: "Action",
            selector: (row) => (
              <div>
                <button className="flex bg-red-500  text-white gap-2 text-sm  p-2 rounded-md items-center font-semibold">
                  <BsTrash />
                  <span>Delete</span>
                </button>
              </div>
            ),
          },
        ]}
        pagination
      />
      <Drawer open={open}>
        <UserForm setOpen={setOpen} />
      </Drawer>
    </div>
  );
};

export default Technician;
