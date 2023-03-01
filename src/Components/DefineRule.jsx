import React, { useContext } from "react";
import infoSVG from "../assets/infoSVG.svg";
import { rulesContext } from "../contexts/RulesContext";
import CreateRule from "./CreateRule";
import { rulesList } from "./Stepper";

const DefineRule = ({ setIsDisable }) => {
  const { currId, count } = useContext(rulesContext);
  const currImg = rulesList[currId - 1].image;
  const handleChange = (e) => {
    if (e.target.value.length >= 6) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <div className="rule-logo">
          <img src={currImg} alt="" />
        </div>
        <input
          type="text"
          className="define-input"
          placeholder="please type rule"
          onChange={handleChange}
          autoFocus
          required
        />
        <button className="border-0 fs-3">
          <img src={infoSVG} alt="info" />
        </button>
      </div>
      {count == 2 ? (
        <div className="search-container">
          <div className="define-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" />
          </div>
        </div>
      ) : count == 3 ? (
        <CreateRule />
      ) : null}
    </>
  );
};

export default DefineRule;
