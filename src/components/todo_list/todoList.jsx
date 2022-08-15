import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import MainContext from "context/MainContext";

import "./todo_list.css";

const TodoList = () => {
  const { showSidebar, todos, handleRemoveTodos } = useContext(MainContext);

  return (
    <div
      dir="rtl"
      className={`${
        showSidebar ? "w-full" : "w-8/12"
      }  transition-all duration-200 font-sans`}
    >
      {todos.length > 0 ? (
        <VerticalTimeline lineColor="#8E8E8E55">
          {todos.map((todo) => (
            <VerticalTimelineElement
              key={todo.id}
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#ffffff",
                border: "1px solid var(--gray-color)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={todo.date}
              iconOnClick={(e) => {
                e.target.style.backgroundColor = "green";
                e.target.id = todo.id;
                setTimeout(() => {
                  handleRemoveTodos(e.target.id);
                }, 3000);
              }}
            >
              <h3 className="font-bold text-lg">{todo.name}</h3>
              <h3 className="text-xs font-base p-3">{todo.description}</h3>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      ) : null}
    </div>
  );
};

export default TodoList;
