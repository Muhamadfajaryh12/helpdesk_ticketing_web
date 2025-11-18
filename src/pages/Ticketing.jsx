import { useState } from "react";
import { Breadcrumb } from "../components/navigation/Breadcrumb";
import DataTable from "react-data-table-component";
import Drawer from "../components/Drawer";
import useFetch from "../hooks/useFetch";
import TicketAPI from "../shared/TicketAPI";
import StatusBadge from "../components/badge/StatusBadge";
import PriorityBadge from "../components/badge/PriorityBadge";
import TicketButton from "../components/button/TicketButton";
import Select from "../components/forms/Select";
import TicketDetail from "../components/section/TicketDetail";
import { IoMdOpen } from "react-icons/io";

const Ticketing = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dataDetailTicket, setDataDetailTicket] = useState(null);
  const base_url = import.meta.env.VITE_API_URL;
  const [filter, setFilter] = useState({
    priority: "",
    category: "",
    status: "",
  });
  const { data: dataCategory } = useFetch({
    url: base_url + "/category",
  });

  const { data: dataPriority } = useFetch({
    url: base_url + "/priority",
  });

  const { data: dataTicket, updateData } = useFetch({
    url: base_url + "/ticket",
  });

  const { data: dataStatus } = useFetch({
    url: base_url + "/status",
  });

  const { data: dataTeknisi } = useFetch({
    url: base_url + "/user/technician",
  });

  const handleDetailTicket = async (param) => {
    const response = await TicketAPI.getDetailTicket(param);
    setDataDetailTicket(response);
    setOpenDrawer(true);
  };

  const filterData = dataTicket?.filter((item) => {
    return (
      (filter.category ? item.category_id == filter.category : true) &&
      (filter.status ? item.status_id == filter.status : true) &&
      (filter.priority ? item.priority_id == filter.priority : true)
    );
  });

  return (
    <div className="relative">
      <Breadcrumb data={["Admin", "Ticket"]} />
      <div className="flex justify-end gap-2 items-center">
        <Select
          data={dataCategory}
          valueField={"id"}
          labelField={"category"}
          onClick={(e) =>
            setFilter((prev) => ({ ...prev, category: e.target.value }))
          }
        />
        <Select
          data={dataStatus}
          valueField={"id"}
          labelField={"status"}
          onClick={(e) =>
            setFilter((prev) => ({ ...prev, status: e.target.value }))
          }
        />
        <Select
          data={dataPriority}
          valueField={"id"}
          labelField={"priority"}
          onClick={(e) =>
            setFilter((prev) => ({ ...prev, priority: e.target.value }))
          }
        />
      </div>
      <DataTable
        data={filterData}
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
                <TicketButton
                  status={row.status}
                  dataTechnician={dataTeknisi}
                  id={row.id}
                  dataStatus={dataStatus}
                  status_id={row.status_id}
                  updateData={updateData}
                />

                <button
                  onClick={() => handleDetailTicket(row.id)}
                  className="flex gap-1 items-center"
                >
                  <IoMdOpen /> <span>View</span>
                </button>
              </div>
            ),
          },
        ]}
      />
      <Drawer open={openDrawer}>
        <TicketDetail
          data={dataDetailTicket?.data}
          setOpenDrawer={setOpenDrawer}
        />
      </Drawer>
    </div>
  );
};

export default Ticketing;
