import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import DefineRule from "./DefineRule";
import Expression from "./Expression";

import complementSVG from "../assets/complement.svg";
import differenceSVG from "../assets/difference.svg";
import intersectionSVG from "../assets/intersection.svg";
import unionSVG from "../assets/union.svg";
import { rulesContext } from "../contexts/RulesContext";
import CreateRule from "./CreateRule";

export const rulesList = [
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

const Stepper = () => {
  const { count, setCount } = useContext(rulesContext);
  const [isDisable, setIsDisable] = useState(true);
  const steps = [
    { id: 1, step: "Select Expression" },
    { id: 2, step: "Define Rule Set" },
    { id: 3, step: "Create Rule" },
  ];

  function nextCount() {
    setCount((prev) => {
      if (prev == 3) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  }

  function goToStep(num) {
    if (count > num) {
      setCount(num);
    } else {
      return;
    }
  }

  return (
    <>
      <div className="steps color-blue">
        {steps.map((stepper) => {
          const { id, step } = stepper;
          return (
            <div
              key={id}
              className={`step d-flex flex-column align-items-center gap-2 ${
                count >= id && "activated"
              }`}
            >
              <div
                className={`dot ${count > id && "tick"}`}
                onClick={() => goToStep(id)}
              ></div>
              <p>{step}</p>
            </div>
          );
        })}
      </div>
      <div className="content-container">
        <div className="content-border bg-light p-4 my-3 border border-2 rounded-2 border-dark-subtle">
          {count == 1 && <Expression nextCount={nextCount} />}
          {count >= 2 && <DefineRule setIsDisable={setIsDisable} />}
        </div>
        <div className="create-btn mb-3">
          {count == 2 ? (
            <Button
              className="d-block ms-auto bg-green text-black"
              disabled={isDisable}
              onClick={nextCount}
            >
              Create Rule
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Stepper;
