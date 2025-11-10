import React from "react";
import Chart from "react-apexcharts";

const ChartBar = ({
  data = [],
  category,
  valueKey,
  titleXaxis,
  titleYaxis,
  horizontal,
}) => {
  const categories = data?.map((item) => item[category]);

  const series = [
    {
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
