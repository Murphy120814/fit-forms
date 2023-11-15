import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CalculatorFormikControl from "./CalculatorFormikControl";
import { useDispatch } from "react-redux";
import calculateMyMacros from "../../utils/calculateMyMacros";
import {
  addMacrosFormData,
  addUserMacroProfile,
} from "../../slices/exerciseDataSlice";

import {
  lifeStyleOptions,
  sexOptions,
  workOutExperience,
  workoutTypes,
  goalOptions,
} from "../../utils/constants";
function CalculatorForm() {
  //! this component is emulation of the FormikContainer component
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    sex: "",
    age: "",
    height: "",
    weight: "",
    workExp: "",
    workoutType: "",
    lifeStyle: "",
    goal: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required!"),
    sex: Yup.string().required("Sex is Required!"),
    workoutType: Yup.string().required("WorkOut Type is Required!"),
    lifeStyle: Yup.string().required("LifeStyle Type is Required!"),
    goal: Yup.string().required("Tell us your goal!"),
    age: Yup.number()
      .positive("Age cannot be negative")
      .min(16, "You must be above 16 years")
      .max(120, "Are you eternal!")
      .required("Age is Required!"),
    height: Yup.number()
      .positive("Height cannot be negative")
      .min(54, "Below than min. range i.e 54cm ")
      .max(272, "Above than max. range i.e 272cm")
      .required("Height is Required!"),
    weight: Yup.number()
      .positive("Weight cannot be negative")
      .min(25, "Below than min. range i.e 25kg ")
      .max(200, "Above than max. range i.e 200kg")
      .required("Weight is Required!"),

    workExp: Yup.string().required("Workout Experience Required!"),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log("formData", values);
    dispatch(addMacrosFormData(values));
    onSubmitProps.resetForm();
    dispatch(addUserMacroProfile(calculateMyMacros(values)));
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}>
        {(formik) => (
          <Form className="p-4 w-3/4 md:w-1/2 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <CalculatorFormikControl
                control="input"
                label="What Should I call You?"
                type="text"
                name="name"
                placeholder="John Doe"
              />
            </div>
            <div className="w-full">
              <CalculatorFormikControl
                control="select"
                options={sexOptions}
                name="sex"
                label="Sex"
              />
            </div>
            <div className="w-full">
              <CalculatorFormikControl
                control="input"
                label="Age"
                type="number"
                name="age"
                placeholder="16"
              />
            </div>
            <div className="w-full">
              <CalculatorFormikControl
                control="input"
                label="Height (in centimeter)"
                type="number"
                name="height"
                placeholder="168"
              />
            </div>
            <div className="w-full">
              <CalculatorFormikControl
                control="input"
                label="Weight (in Kg.)"
                type="number"
                name="weight"
                placeholder="60"
              />
            </div>
            <div className="w-full">
              <CalculatorFormikControl
                control="select"
                options={workOutExperience}
                name="workExp"
                label="Workout Experience"
              />
            </div>
            <div className="w-full">
              <CalculatorFormikControl
                control="select"
                options={workoutTypes}
                name="workoutType"
                label="Most Frequent Workout Type"
              />
            </div>
            <div className="sm:col-span-2">
              <CalculatorFormikControl
                control="select"
                options={lifeStyleOptions}
                name="lifeStyle"
                label="How your Life Style looks like"
              />
            </div>
            <div className="sm:col-span-2">
              <CalculatorFormikControl
                control="select"
                options={goalOptions}
                name="goal"
                label="What's Your Goal"
              />
            </div>
            <button
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-20 disabled:bg-black">
              Calculate My Macros
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CalculatorForm;
