import React, { useContext } from "react";
import { RiHome2Line } from "react-icons/ri";
import { FiBarChart } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

import MainContext from "context/MainContext";

import style from "./navbar.module.css";

const Navbar = () => {
  const { showSidebar, handleShowSidebar } = useContext(MainContext);

  return (
    <nav className={`${style.navbar} `}>
      <ul className="flex container mx-auto  p-3 justify-between">
        <li className="cursor-pointer">
          <AiOutlinePlus />
        </li>
        <div className="flex">
          <li className="mx-1 cursor-pointer">
            <RiHome2Line />
          </li>
          <li
            className="rotate-90 mx-1 cursor-pointer"
            onClick={handleShowSidebar}
          >
            <FiBarChart />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
