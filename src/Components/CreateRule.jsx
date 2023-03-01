import React from "react";
import arrowSVG from "../assets/roundArrow.svg";

const CreateRule = () => {
  return (
    <div className="d-flex flex-column align-items-center gap-3 pt-3">
      <img src={arrowSVG} alt="" />
      <h3>SIgn the Transaction...</h3>
    </div>
  );
};

export default CreateRule;
