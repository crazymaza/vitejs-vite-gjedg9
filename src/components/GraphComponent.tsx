import { useAppSelector } from "../redux/hooks";
import Chart from "react-apexcharts";

const GraphComponent = () => {
  const { tableData, selectedValue } = useAppSelector(
    (state) => state.selected
  );
  const selectedData = tableData.filter(({ id }) =>
    selectedValue.some((item) => item === id)
  );

  const chartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: selectedData.map((row) => row.name),
    },
    dataLabels: {
      enabled: true,
    },
  };

  const chartSeries = [
    {
      name: "Value",
      data: selectedData.map(({ value }) => value),
    },
    {
      name: "Quantity",
      data: selectedData.map(({ quantity }) => quantity),
    },
  ];

  return (
    <>
      {selectedValue.length ? (
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          width="600"
        />
      ) : (
        <p>Please select rows to display chart</p>
      )}
    </>
  );
};

export default GraphComponent;
