import React from "react";
import { Field, ErrorMessage } from "formik";
import FormTextError from "./FormTextError";

function CalculatorInput(props) {
  const { label, name, ...rest } = props;
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        {...rest}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></Field>
      <ErrorMessage name={name} component={FormTextError}></ErrorMessage>
    </>
  );
}

export default CalculatorInput;
