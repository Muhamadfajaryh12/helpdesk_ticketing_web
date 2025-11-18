import React from "react";
import Chart from "react-apexcharts";
const StackedBar = ({
  data = [],
  label = [],
  category,
  valueKey,
  countKey,
  title,
}) => {
  const categories = data?.map((item) => item[category]);

  const series = label?.map((name) => ({
    name: name,
    data: data.map((item) => {
      const found = item[valueKey].find((p) => p[valueKey] === name);
      return found ? found[countKey] : 0;
    }),
  }));

  const options = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: true },
      zoom: { enabled: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
      },
    },
    title: {
      text: title,
      align: "center",
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        color: "#333",
      },
    },
    xaxis: {
      categories,
      title: { text: "Kategori" },
    },
    yaxis: {
      title: { text: "Jumlah Ticket" },
    },
    legend: {
      position: "top",
    },
    fill: {
      opacity: 1,
    },
    colors: ["#00E396", "#FEB019", "#FF4560", "#775DD0"], // optional
  };

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default StackedBar;
