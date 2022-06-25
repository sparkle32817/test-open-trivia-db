import React from "react";
import "./index.scss";

const Button = ({ link, children }) => {
  return (
    <a className="test-app-button" href={link}>
      {children}
    </a>
  );
};

export default Button;
