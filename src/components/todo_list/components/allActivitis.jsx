import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { convertNumber } from "utils/convertNumber";
import moment from "jalali-moment";

import "../todo_list.css";
import MainContext from "context/MainContext";

const AllActivitis = () => {
  const { handleRemoveTodos } = useContext(MainContext);

  const todos = JSON.parse(localStorage.getItem("todos"));
  const m = moment();
  const day = m.locale("fa").format("DD");

  return (
    <div dir="rtl">
      <VerticalTimeline lineColor="#90909044" layout="1-column-right">
        {todos &&
          todos.map((todo) => (
            <VerticalTimelineElement
              key={todo.id}
              lineColor="blue"
              className="vertical-timeline-element--education"
              contentStyle={{
                border: "1px solid var(--pallet-1)",
                boxShadow: "0 0 0",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #1985a1",
              }}
              date={
                convertNumber(todo.day) === day
                  ? "امروز"
                  : +convertNumber(todo.day) === +day + 1
                  ? "فردا"
                  : todo.date
              }
              iconOnClick={(e) => {
                e.target.id = todo.id;
                handleRemoveTodos(e.target.id);
              }}
            >
              <h3 className="font-bold text-lg">{todo.name}</h3>
              <h3 className="text-xs font-base p-3">{todo.description}</h3>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
};

export default AllActivitis;
