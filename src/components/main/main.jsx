import React, { useContext } from "react";
import MainContext from "context/MainContext";

const Main = () => {
  const { showSidebar } = useContext(MainContext);

  return (
    <div
      className={`${
        showSidebar ? "w-full" : "w-8/12"
      }  transition-all duration-200`}
    >
      Main
    </div>
  );
};

export default Main;
