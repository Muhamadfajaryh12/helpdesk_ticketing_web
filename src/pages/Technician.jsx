import React from "react";
import useFetch from "../hooks/useFetch";
import DataTable from "react-data-table-component";

const Technician = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { data } = useFetch({ url: BASE_URL + "/user/teknisi" });

  return (
    <div>
      <DataTable
        data={data}
        columns={[
          {
            name: "Name",
            selector: (row) => row.name,
          },
        ]}
      />
    </div>
  );
};

export default Technician;
