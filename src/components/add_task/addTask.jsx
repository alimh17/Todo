import React, { useContext, useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BsCalendar3 } from "react-icons/bs";
import moment from "jalali-moment";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import Button from "components/ui/button/button";
import MainContext from "context/MainContext";

const AddTask = () => {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [nameInput, setNameInput] = useState("");
  const m = moment();
  const min = m.locale("fa").format("DD");
  const { handleSetTodos, showFormAddTask, handleShowFormAddTask } =
    useContext(MainContext);

  const nameRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("نام فعالیت الزامی میباشد")
        .min(4, "نام فعالیت نباید کمتر از 4 کاراکتر باشد")
        .max(60, "نام فعالیت نباید بیشتر از 60 کاراکتر باشد"),
      description: Yup.string().max(
        255,
        "توضیحات نباید بیشتر از 255 کاراکتر باشد"
      ),
    }),
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
  });

  const handleSubmitForm = (values) => {
    handleSetTodos(values, date, day);
  };

  const handleClickButton = () => {
    setNameInput("");
  };

  return (
    <div
      className={`fixed top-0 w-full h-screen flex  justify-center items-center z-10 bg-gray-500 bg-opacity-80 font-sans animate-[wiggle_0.5s_ease-in_both]  ${
        showFormAddTask ? "flex" : "hidden"
      }`}
    >
      <div
        className={`w-full  md:w-2/3 h-2/3  rounded-md bg-white shadow-md flex flex-col items-center  justify-center transition-all duration-200 `}
      >
        <h3
          className="text-2xl font-bold py-5"
          style={{
            color: "var(--darkblue-color)",
          }}
        >
          فعالیت جدید
        </h3>
        <form
          dir="rtl"
          className="flex flex-col justify-center items-center w-1/2 h-1/2  my-5"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col relative w-full">
            <label htmlFor="#name" className="w-1/2 px-3 text-gray-400 text-xs">
              نام فعالیت
            </label>
            <input
              name="name"
              id="name"
              placeholder="مثلا مطالعه "
              type="text"
              className="m-3 p-2 text-sm rounded-md focus:outline-gray-600 w-full"
              autoComplete="off"
              value={nameInput}
              style={{
                backgroundColor: "#D9D9D950",
              }}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && (
              <p className="text-rose-500 pb-3 pr-3 text-xs">
                {formik.errors.name}
              </p>
            )}
          </div>
          <div className="flex flex-col relative w-full">
            <label
              htmlFor="#description"
              className="w-1/2 px-2  text-gray-400 text-xs"
            >
              توضیحات
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="مطالعه کتاب عادت های اتمی"
              className="m-3 p-2 text-xs rounded-md focus:outline-gray-600 w-full resize-none"
              style={{
                backgroundColor: "#D9D9D950",
              }}
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && (
              <p className="text-rose-500 pb-3 pr-3 text-xs">
                {formik.errors.description}
              </p>
            )}
          </div>
          <div className="flex flex-col p-3 w-full relative">
            <label
              htmlFor="#date"
              className="w-1/2 px-2  text-gray-400 text-xs"
            >
              زمان بندی
            </label>
            <DatePicker
              name="date"
              id="date"
              calendar={persian}
              locale={persian_fa}
              calendarPosition="top-right"
              inputClass="custom-input"
              placeholder="امروز"
              minDate={new DateObject({ calendar: persian }).set("day", min)}
              onChange={(date) => {
                setDate(date.format?.("YYYY MMMM D"));
                setDay(date.format?.("D"));
              }}
            />
            <span className="absolute top-11 left-5 text-gray-400">
              <BsCalendar3 />
            </span>
          </div>
          <div className="w-full flex my-3">
            <Button
              type="submit"
              value="تایید"
              color="#4f46e5"
              onClick={() => {
                handleShowFormAddTask();
                handleClickButton();
              }}
            />
            <Button
              type="button"
              value="لغو"
              color="#4b5563"
              onClick={handleShowFormAddTask}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
