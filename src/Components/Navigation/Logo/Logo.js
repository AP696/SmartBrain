import React from "react";
import "./Logo.css";
import brain from "./brain.gif";
import "tachyons";

function Logo() {
  return (
    <div className="ma4 mt0 ">
      <div className="br2 shadow-2 pa3">
        <img style={{ paddingTop: "5px" }} src={brain} alt={brain} />
      </div>
    </div>
  );
}

export default Logo;
