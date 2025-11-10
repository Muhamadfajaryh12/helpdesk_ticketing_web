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
import { useModal } from "../context/ModalContext";
import ReviewModal from "../components/modal/ReviewModal";

const Ticketing = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dataDetailTicket, setDataDetailTicket] = useState(null);
  const { openModal } = useModal();
  const base_url = import.meta.env.VITE_API_URL;

  const { data: dataCategory } = useFetch({
    url: base_url + "/category",
  });

  const { data: dataPriority } = useFetch({
    url: base_url + "/priority",
  });

  const { data: dataTicket, insertData } = useFetch({
    url: base_url + "/ticket",
  });

  const { data: dataStatus } = useFetch({
    url: base_url + "/status",
  });

  const { data: dataTeknisi } = useFetch({
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
  console.log(dataTicket);
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
        data={dataTicket}
        pagination
        columns={[
          {
            name: "ID Ticket",
            selector: (row, index) => <p>#{row.id}</p>,
          },
          {
            name: "Title",
            selector: (row) => (
              <div>
                <p className="font-bold">{row.title}</p>
                <p className="text-xs">
                  {new Date(row.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            ),
          },
          {
            name: "Category",
            selector: (row) => row.category,
          },
          {
            name: "Name",
            selector: (row) => row.user,
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
            name: "Action",
            selector: (row) => (
              <div>
                <button onClick={() => handleDetailTicket(row.id)}>
                  Lihat
                </button>
                {row.status == "Resolved" && (
                  <button
                    onClick={() => openModal(<ReviewModal id={row.id} />)}
                  >
                    Close Ticket
                  </button>
                )}
              </div>
            ),
          },
        ]}
      />
      <Drawer open={openDrawer}>
        <TicketForm
          setOpen={setOpenDrawer}
          dataCategory={dataCategory}
          dataPriority={dataPriority}
          dataStatus={dataStatus}
          dataTeknisi={dataTeknisi}
          data={dataDetailTicket?.data}
          insertData={insertData}
        />
      </Drawer>
    </div>
  );
};

export default Ticketing;
