import React from "react";
import CalculatorInput from "./CalculatorInput";
import CalculatorSelectInput from "./CalculatorSelectInput";

function CalculatorFormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <CalculatorInput {...rest} />;
    case "select":
      return <CalculatorSelectInput {...rest} />;
    default:
      return null;
  }
}

export default CalculatorFormikControl;
