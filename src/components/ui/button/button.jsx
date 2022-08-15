import React from "react";

const Button = ({ type, value, color, onClick }) => {
  return (
    <button
      type={type}
      style={{ backgroundColor: color }}
      className="p-2 rounded-md text-white w-1/2 mx-3"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
