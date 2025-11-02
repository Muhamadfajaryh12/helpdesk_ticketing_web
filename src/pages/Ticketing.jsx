import React, { useState } from "react";
import { Breadcrumb } from "../components/navigation/Breadcrumb";
import DataTable from "react-data-table-component";
import PrimaryButton from "../components/button/PrimaryButton";
import Drawer from "../components/Drawer";

const Ticketing = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="relative">
      <Breadcrumb data={["Teknisi", "Ticket"]} />
      <div className="flex justify-end">
        <div className="w-32">
          <PrimaryButton
            text={"Buat ticket"}
            onClick={() => setOpenDrawer(true)}
          />
        </div>
      </div>
      <DataTable
        data={[
          {
            no: 1,
            title: "rusak",
            category: "asd",
            priority: "low",
            status: "open",
            assign: "-",
          },
        ]}
        columns={[
          {
            name: "No",
            selector: (row) => row.no,
          },
          {
            name: "Title",
            selector: (row) => row.title,
          },
          {
            name: "Category",
            selector: (row) => row.category,
          },
          {
            name: "Priority",
            selector: (row) => row.priority,
          },
          {
            name: "Status",
            selector: (row) => row.status,
          },
          {
            name: "Assigned to",
            selector: (row) => row.assign,
          },
        ]}
      />
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </div>
  );
};

export default Ticketing;
