import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import AllActivitis from "./components/allActivitis";
import { convertNumber } from "utils/convertNumber";
import "./todo_list.css";
import MainContext from "context/MainContext";
import TodyTodos from "./components/todyTodos";
import NoTask from "components/noTask/noTask";

const TodoList = () => {
  const { showSidebar, handleRemoveTodos, handleShowFormAddTask, activeTab } =
    useContext(MainContext);
  const todos = JSON.parse(localStorage.getItem("todos"));

  return (
    <div
      className={`${
        showSidebar ? "w-full" : "w-8/12"
      }  transition-all duration-200 font-sans`}
    >
      {todos.length > 0 && activeTab[0] ? (
        <AllActivitis />
      ) : todos.length > 0 && activeTab[1] ? (
        <TodyTodos />
      ) : (
        <NoTask />
      )}
    </div>
  );
};

export default TodoList;
