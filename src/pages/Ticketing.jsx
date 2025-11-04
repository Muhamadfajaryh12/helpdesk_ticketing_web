import { useState } from "react";
import { Breadcrumb } from "../components/navigation/Breadcrumb";
import DataTable from "react-data-table-component";
import PrimaryButton from "../components/button/PrimaryButton";
import Drawer from "../components/Drawer";
import useFetch from "../hooks/useFetch";
import TicketForm from "../components/forms/TicketForm";
import TicketAPI from "../shared/TicketAPI";
import StatusBadge from "../components/badge/StatusBadge";
import PriorityBadge from "../components/badge/PriorityBadge";

const Ticketing = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dataDetailTicket, setDataDetailTicket] = useState(null);
  const base_url = import.meta.env.VITE_API_URL;

  const dataCategory = useFetch({
    url: base_url + "/category",
  });

  const dataPriority = useFetch({
    url: base_url + "/priority",
  });

  const dataTicket = useFetch({
    url: base_url + "/ticket",
  });

  const dataStatus = useFetch({
    url: base_url + "/status",
  });

  const dataTeknisi = useFetch({
    url: base_url + "/user/teknisi",
  });
  const handleDetailTicket = async (param) => {
    const response = await TicketAPI.getDetailTicket(param);
    setDataDetailTicket(response);
    setOpenDrawer(true);
  };

  const handleOpenFormTicket = () => {
    setDataDetailTicket(null);
    setOpenDrawer(true);
  };

  return (
    <div className="relative">
      <Breadcrumb data={["Teknisi", "Ticket"]} />
      <div className="flex justify-end">
        <div className="w-32">
          <PrimaryButton
            text={"Buat ticket"}
            onClick={() => handleOpenFormTicket()}
          />
        </div>
      </div>
      <DataTable
        data={dataTicket?.data}
        columns={[
          {
            name: "No",
            selector: (row, index) => index + 1,
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
            selector: (row) => <PriorityBadge priority={row.priority} />,
          },
          {
            name: "Status",
            selector: (row) => <StatusBadge status={row.status} />,
          },
          {
            name: "Date",
            selector: (row) => row.created_at,
          },
          {
            name: "Action",
            selector: (row) => (
              <div>
                <button onClick={() => handleDetailTicket(row.id)}>
                  Lihat
                </button>
              </div>
            ),
          },
        ]}
      />
      <Drawer open={openDrawer}>
        <TicketForm
          setOpen={setOpenDrawer}
          dataCategory={dataCategory?.data}
          dataPriority={dataPriority?.data}
          dataStatus={dataStatus?.data}
          dataTeknisi={dataTeknisi?.data}
          data={dataDetailTicket?.data}
        />
      </Drawer>
    </div>
  );
};

export default Ticketing;
