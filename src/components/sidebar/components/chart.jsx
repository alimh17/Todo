import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const [chartData, setChartData] = useState([0, 100]);
  const data = {
    datasets: [
      {
        data: chartData,
        backgroundColor: ["#1985a1", "#c5c3c6"],
        borderColor: ["#1985a1", "#c5c3c6"],
        borderWidth: 1,
      },
    ],
  };

  // useEffect(() => {
  //   if (!todos) {
  //     setChartData([0, 100]);
  //   } else {
  //     const val = 100 / todos.length;
  //   }
  // }, [todos]);

  return (
    <div
      className="  flex flex-col items-center rounded-md "
      style={{
        width: "10rem",
        height: "10rem",
      }}
    >
      <Doughnut data={data} />
      <h3 className="p-2 text-2xl ">{chartData[0]}%</h3>
    </div>
  );
};

export default Chart;
