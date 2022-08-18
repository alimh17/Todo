import moment from "jalali-moment";
import React from "react";

import "./mobile_date.css";

const MobileDate = () => {
  const m = moment();
  const Day = m.locale("fa").format("DD");
  const month = m.locale("fa").format("MMMM");

  return (
    <section className="flex md:hidden w-full  justify-center items-center gap-2 h-60 relative">
      <div
        className="w-32 h-44  flex flex-col justify-around items-center m-2 rounded-md mt-6"
        style={{
          backgroundColor: "var(--pallet-1)",
          color: "var(--pallet-2)",
          opacity: "0.9",
        }}
      >
        <h2 className="text-6xl">{+Day - 1}</h2>
        <p className="my-3 text-lg">{month}</p>
      </div>
      <div
        className="w-32 h-44  flex flex-col justify-around items-center m-2 rounded-md"
        style={{ backgroundColor: "var(--pallet-5)" }}
      >
        <h2 className="text-7xl font-bold">{Day}</h2>
        <p className="my-3 text-2xl">{month}</p>
      </div>
      <div
        className="w-32 h-44 bg-gray-300 flex flex-col justify-around items-center m-2 rounded-md mt-6"
        style={{
          backgroundColor: "var(--pallet-1)",
          color: "var(--pallet-2)",
          opacity: "0.9",
        }}
      >
        <h2 className="text-6xl">{+Day + 1}</h2>
        <p className="my-3 text-lg">{month}</p>
      </div>
      <div className="mesh_gradient_2"></div>
    </section>
  );
};

export default MobileDate;
