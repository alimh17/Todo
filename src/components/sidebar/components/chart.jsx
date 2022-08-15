import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const data = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#fca311", "#14213d"],
        borderColor: ["#fca311", "#14213d"],
        borderWidth: 1,
      },
    ],
  };

  //   useEffect(() => {
  //     data.datasets.map((item) => {
  //       console.log(item.data);
  //     });
  //   }, []);

  return (
    <div
      className="  flex flex-col items-center rounded-md "
      style={{
        width: "10rem",
        height: "10rem",
      }}
    >
      <Doughnut data={data} />
      <h3 className="p-2 text-2xl ">70%</h3>
    </div>
  );
};

export default Chart;
