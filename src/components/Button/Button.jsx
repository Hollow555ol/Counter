import React from "react";
import "./Button.css";

const Button = ({ className, onClick, title }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
