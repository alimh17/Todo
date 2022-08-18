import React, { useContext } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AllActivitis from "./components/allActivitis";
import MainContext from "context/MainContext";
import TodyTodos from "./components/todyTodos";
import NoTask from "components/noTask/noTask";
import MobileDate from "components/mobile/mobiledate/mobileDate";
import MobileTab from "components/mobile/mobileTab/mobileTab";

import "./todo_list.css";

const TodoList = () => {
  const { showSidebar, activeTab, handleShowFormAddTask } =
    useContext(MainContext);
  const todos = JSON.parse(localStorage.getItem("todos"));

  return (
    <div
      className={`${
        showSidebar ? "w-full" : "w-full md:w-8/12"
      }  transition-all duration-200 font-sans `}
    >
      <MobileDate />
      <MobileTab />
      {todos !== null && todos.length > 0 && activeTab[0] ? (
        <AllActivitis />
      ) : todos !== null && todos.length > 0 && activeTab[1] ? (
        <TodyTodos />
      ) : (
        <NoTask />
      )}
      <span
        className="fixed text-4xl right-3 bottom-3 md:hidden"
        style={{ color: "var(--pallet-5)" }}
        onClick={handleShowFormAddTask}
      >
        <AiOutlinePlusCircle />
      </span>
    </div>
  );
};

export default TodoList;
