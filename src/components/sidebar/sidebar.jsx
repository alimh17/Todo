import React, { useContext } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import MainContext from "context/MainContext";

import Tabs from "./components/tabs";
import Chart from "./components/chart";

import "./sidebar.css";

const Sidebar = () => {
  const { showSidebar } = useContext(MainContext);

  return (
    <div
      className={`${
        showSidebar ? "w-0" : "w-4/12"
      } flex flex-col items-center justify-between fixed right-0  overflow-x-hidden transition-all duration-200  ${
        showSidebar ? "translate-x-full " : "translate-x-0 "
      }`}
      style={{ height: "90vh", borderLeft: "1px dashed #8E8E8E" }}
    >
      <Calendar
        buttons={false}
        calendar={persian}
        locale={persian_fa}
        className="custom-calendar"
      />
      <div className="mesh_gradient"></div>
      <Chart />
      <Tabs />
    </div>
  );
};

export default Sidebar;
