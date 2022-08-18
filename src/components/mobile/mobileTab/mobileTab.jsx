import MainContext from "context/MainContext";
import React, { useContext } from "react";

const MobileTab = () => {
  const { handleAcitveTab, activeTab } = useContext(MainContext);

  return (
    <nav className="w-full flex justify-center border-b md:hidden">
      <ul className="flex justify-center items-center p-3 mt-3  w-full ">
        <li
          className="w-1/2 flex justify-center items-center p-3 rounded-md"
          onClick={() => handleAcitveTab(0)}
          style={
            activeTab[0]
              ? { backgroundColor: "var(--pallet-5)", color: "#ffffff" }
              : { backgroundColor: "#FFFFFF" }
          }
        >
          فعالیت ها
        </li>
        <li
          className="w-1/2 flex justify-center items-center p-3 rounded-md"
          onClick={() => handleAcitveTab(1)}
          style={
            activeTab[1]
              ? { backgroundColor: "var(--pallet-5)", color: "#ffffff" }
              : { backgroundColor: "#FFFFFF" }
          }
        >
          امروز
        </li>
      </ul>
    </nav>
  );
};

export default MobileTab;
