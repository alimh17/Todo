import React, { useContext } from "react";
import MainContext from "context/MainContext";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "../todo_list.css";
import { convertNumber } from "utils/convertNumber";
import moment from "jalali-moment";
import NoTask from "components/noTask/noTask";

const TodyTodos = () => {
  const { todyTasks, handleRemoveTodos } = useContext(MainContext);
  const m = moment();
  const day = m.locale("fa").format("DD");

  console.log(todyTasks);

  return (
    <>
      {todyTasks.length > 0 ? (
        <div dir="rtl">
          <VerticalTimeline lineColor="#8E8E8E55" layout="1-column-right">
            {todyTasks.map((todo) => (
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
                date={
                  convertNumber(todo.day) === day
                    ? "امروز"
                    : +convertNumber(todo.day) === +day + 1
                    ? "فردا"
                    : todo.date
                }
                iconOnClick={(e) => {
                  e.target.style.backgroundColor = "green";
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
      ) : (
        <NoTask />
      )}
    </>
  );
};

export default TodyTodos;
