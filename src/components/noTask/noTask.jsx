import MainContext from "context/MainContext";
import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const NoTask = () => {
  const { handleShowFormAddTask } = useContext(MainContext);

  return (
    <div className="flex flex-col items-center ">
      <img
        alt="no_work"
        src={process.env.PUBLIC_URL + "/images/no_work.jpg"}
        style={{
          width: "30rem",
          height: "30rem",
        }}
      />
      <h3 className="my-2">فعالیتی وجود ندارد</h3>
      <AiOutlinePlus
        className="text-orange-500"
        onClick={handleShowFormAddTask}
      />
    </div>
  );
};

export default NoTask;
