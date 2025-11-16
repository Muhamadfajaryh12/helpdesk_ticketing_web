import React from "react";
import Chart from "react-apexcharts";

const ChartBar = ({
  data = [],
  category,
  valueKey,
  titleXaxis,
  titleYaxis,
  horizontal,
  title,
}) => {
  const categories = data?.map((item) => item[category]);

  const series = Array.isArray(valueKey)
    ? valueKey?.map((key) => ({
        name: key.replace(/_/g, " ").toUpperCase(),
        data: data?.map((item) => item[key]),
      }))
    : [
        {
          name: valueKey.replace(/_/g, " ").toUpperCase(),
          data: data?.map((item) => item[valueKey]),
        },
      ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        horizontal: horizontal,
        columnWidth: "45%",
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
      title: { text: titleXaxis },
    },
    yaxis: {
      title: { text: titleYaxis },
    },
  };
  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default ChartBar;
