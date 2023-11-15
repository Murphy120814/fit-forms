import React from "react";
import CalculatorForm from "./CalculatorForm";
import MacrosData from "./MacrosData";
import { useSelector } from "react-redux";

function Calculator() {
  const userMacroProfile = useSelector(
    (store) => store.exerciseDb.userMacroProfile
  );

  console.log(userMacroProfile);
  return (
    <div className="dark:bg-[#1f1e23] bg-white">
      <div className="dark:bg-[#1f1e23] bg-white min-h-[80vh] flex flex-col  justify-center items-center mt-48  md:mt-28 md:py-8 max-w-screen-xl mx-auto">
        <CalculatorForm />
        {userMacroProfile?.map((profileSection, index) => (
          <MacrosData key={index} profileData={ profileSection} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
