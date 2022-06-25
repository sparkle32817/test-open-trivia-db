import React from "react";
import "./index.scss";

import { Button } from "../../index";

const Header = () => {
  return (
    <div className="test-app-header">
      <Button link={"/"}>Browse</Button>
      <Button link={"/"}>Add New Questions</Button>
      <Button link={"/"}>Api</Button>
      <Button link={"/"}>Discuss</Button>
      <Button link={"/"}>Login</Button>
    </div>
  );
};

export default Header;
