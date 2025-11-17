import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import DataTable from "react-data-table-component";
import StatusBadge from "../../components/badge/StatusBadge";
import PriorityBadge from "../../components/badge/PriorityBadge";
import TicketAPI from "../../shared/TicketAPI";
import Drawer from "../../components/Drawer";
import TicketForm from "../../components/forms/TicketForm";
import PrimaryButton from "../../components/button/PrimaryButton";
import TicketDetail from "../../components/section/TicketDetail";
import { useModal } from "../../context/ModalContext";
import ReviewModal from "../../components/modal/ReviewModal";
import { IoMdOpen } from "react-icons/io";

const TicketingGeneral = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { auth } = useAuth();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dataDetailTicket, setDataDetailTicket] = useState(null);
  const { openModal } = useModal();
  const { data: dataCategory } = useFetch({
    url: BASE_URL + "/category",
  });

  const { data: dataPriority } = useFetch({
    url: BASE_URL + "/priority",
  });

  const {
    data: dataTicket,
    insertData,
    updateData,
  } = useFetch({
    url: BASE_URL + `/ticket?user=${auth.id}`,
  });

  const handleDetailTicket = async (param) => {
    const response = await TicketAPI.getDetailTicket(param);
    setDataDetailTicket(response);
    setOpenDrawer(true);
  };

  const handleOpenFormTicket = () => {
    setOpenDrawer(true);
    setDataDetailTicket(null);
  };
  return (
    <div>
      <div className="w-32">
        <PrimaryButton
          text={"Buat ticket"}
          onClick={() => handleOpenFormTicket()}
        />
      </div>
      <DataTable
        data={dataTicket}
        pagination
        columns={[
          {
            name: "ID Ticket",
            selector: (row) => <p>#{row.id}</p>,
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
              <div className="flex justify-center gap-2">
                {row.status.toLowerCase() == "resolved" && (
                  <button
                    className="flex gap-1 items-center justify-center text-sm font-semibold text-green-500"
                    onClick={() =>
                      openModal(
                        <ReviewModal updateData={updateData} id={row.id} />
                      )
                    }
                  >
                    <IoMdOpen />
                    <span>Close Ticket</span>
                  </button>
                )}
                <button
                  onClick={() => handleDetailTicket(row.id)}
                  className="flex gap-1 items-center"
                >
                  <IoMdOpen /> <span>View</span>
                </button>{" "}
              </div>
            ),
          },
        ]}
      />
      <Drawer open={openDrawer}>
        {dataDetailTicket?.data ? (
          <TicketDetail
            data={dataDetailTicket?.data}
            setOpenDrawer={setOpenDrawer}
          />
        ) : (
          <TicketForm
            setOpen={setOpenDrawer}
            dataCategory={dataCategory}
            dataPriority={dataPriority}
            insertData={insertData}
          />
        )}
      </Drawer>
    </div>
  );
};

export default TicketingGeneral;
