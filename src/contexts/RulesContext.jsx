import React, { createContext, useState } from "react";
import { rulesList } from "../Components/Stepper";

export const rulesContext = createContext();

const RulesContext = ({ children }) => {
  const [count, setCount] = useState(1);
  const [currId, setCurrId] = useState();

  const value = { currId, setCurrId, count, setCount };

  return (
    <rulesContext.Provider value={value}>{children}</rulesContext.Provider>
  );
};

export default RulesContext;
