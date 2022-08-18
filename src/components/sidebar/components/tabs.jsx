import React, { useContext } from "react";
import MainContext from "context/MainContext";
import { FiActivity } from "react-icons/fi";
import { IoTodayOutline } from "react-icons/io5";

const Tabs = () => {
  const { activeTab, handleAcitveTab } = useContext(MainContext);

  return (
    <ul className="w-full">
      <li
        className="p-2  flex items-center justify-end pr-8 border-b cursor-pointer"
        onClick={() => handleAcitveTab(0)}
        style={
          activeTab[0]
            ? { backgroundColor: "var(--pallet-3)" }
            : { backgroundColor: "#FFFFFF" }
        }
      >
        <span
          className="mx-2 item"
          style={
            activeTab[0] ? { color: "#FFFFFF" } : { color: "var(--pallet-3)" }
          }
        >
          فعالیت ها
        </span>
        <FiActivity
          className="icons"
          style={
            activeTab[0] ? { color: "#ffffff" } : { color: "var(--pallet-5)" }
          }
        />
      </li>
      <li
        className="p-2  flex items-center justify-end pr-8  cursor-pointer"
        onClick={() => handleAcitveTab(1)}
        style={
          activeTab[1]
            ? { backgroundColor: "var(--pallet-3)" }
            : { backgroundColor: "#FFFFFF" }
        }
      >
        <span
          className="mx-2 item"
          style={
            activeTab[1] ? { color: "#FFFFFF" } : { color: "var(--pallet-3)" }
          }
        >
          امروز
        </span>
        <IoTodayOutline
          className="icons"
          style={
            activeTab[1] ? { color: "#FFFFFF" } : { color: "var(--pallet-5)" }
          }
        />
      </li>
    </ul>
  );
};

export default Tabs;
