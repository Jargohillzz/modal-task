import React from "react";

import complementSVG from "../assets/complement.svg";
import differenceSVG from "../assets/difference.svg";
import intersectionSVG from "../assets/intersection.svg";
import unionSVG from "../assets/union.svg";
import infoSVG from "../assets/Vector.svg";

const rulesList = [
  {
    id: 1,
    image: unionSVG,
    name: "Union",
  },
  {
    id: 2,
    image: intersectionSVG,
    name: "Intersection",
  },
  {
    id: 3,
    image: complementSVG,
    name: "Complement",
  },
  {
    id: 4,
    image: differenceSVG,
    name: "Difference",
  },
];

const Expression = ({ nextCount }) => {
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
              onClick={nextCount}
              role="button"
            >
              <div className="rule-name d-flex align-items-center gap-2">
                <div className="rule-logo">
                  <img src={image} alt="rules" />
                </div>
                <h6 className="fs-6 m-0 text-primary">{name}</h6>
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
