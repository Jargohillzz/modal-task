import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DefineRule from "./DefineRule";
import Expression from "./Expression";

const Stepper = () => {
  const steps = [
    { id: 1, step: "Select Expression" },
    { id: 2, step: "Define Rule Set" },
    { id: 3, step: "Create Rule" },
  ];
  const [count, setCount] = useState(1);
  function nextCount() {
    setCount((prev) => {
      if (prev == 3) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  }

  return (
    <>
      <div className="steps">
        {steps.map((stepper) => {
          const { id, step } = stepper;
          return (
            <div
              key={id}
              className={`step d-flex flex-column align-items-center gap-2 ${
                count >= id && "activated"
              }`}
            >
              <div className={`dot ${count > id && "tick"}`}></div>
              <p>{step}</p>
            </div>
          );
        })}
      </div>
      <div className="content-container">
        <div className="content-border p-4 my-3 border border-2 rounded-2 border-dark-subtle">
          {count == 1 ? <Expression nextCount={nextCount} /> : null}
          {count == 2 ? <DefineRule /> : null}
          {count == 3 ? <p>bitch</p> : null}
        </div>
        <div className="create-btn mb-3">
          {count == 1 ? null : (
            <Button variant="success" className="d-block ms-auto" disabled>
              Create Rule
            </Button>
          )}
        </div>
      </div>
      <button onClick={nextCount}>next {count}</button>
    </>
  );
};

export default Stepper;
