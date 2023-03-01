import React, { useContext, useRef } from "react";

import infoSVG from "../assets/Vector.svg";
import { rulesContext } from "../contexts/RulesContext";
import { rulesList } from "./Stepper";

const Expression = ({ nextCount }) => {
  const imgRef = useRef();
  const { setCurrId, currId, setCount } = useContext(rulesContext);
  const defineLogo = (id) => {
    console.log(imgRef.current.src);
    console.log(rulesList);
    let currRule = 0;
    rulesList.filter((rule) => {
      if (rule.id === id) {
        currRule = rule.id;
      }
    });
    currRule && setCurrId(currRule);
    console.log(currId);
    setCount((prev) => {
      if (prev == 3) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div>
      <h2>Which Type of Rule do you want to create?</h2>
      <div className="choose-rule d-flex flex-wrap w-100">
        {rulesList.map((rule) => {
          const { id, image, name } = rule;
          return (
            <div
              key={id}
              className="rule d-flex mb-2 align-items-center justify-content-between p-1"
              onClick={() => defineLogo(id)}
              role="button"
            >
              <div className="rule-name d-flex align-items-center gap-2">
                <div className="rule-logo">
                  <img ref={imgRef} src={image} alt="rules" />
                </div>
                <h6 className="fts-6 fts-md-3 m-0 text-primary">{name}</h6>
              </div>
              <button className="border-0">
                <img src={infoSVG} alt="info" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expression;
