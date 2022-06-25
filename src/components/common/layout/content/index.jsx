import React from "react";
import "./index.scss";

const Content = ({ children }) => {
  return (
    <div className="test-app-content">
      <div className="container">{children}</div>
    </div>
  );
};

export default Content;
