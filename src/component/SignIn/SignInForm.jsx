import React from "react";
import lock from "../../assets/lock.png";
import unlock from "../../assets/unlock.png";
import { useState } from "react";
import useFormValidation from "../../Hooks/useFormValidation";
import { useSelector } from "react-redux";

function SignInForm() {
  const isWantToCreateAccount = useSelector(
    (store) => store.auth.isWantToCreateAccount
  );
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormValidation();
  return (
    <>
      <form className="mt-28" onSubmit={formik.handleSubmit}>
        <div className="p-4">
          {isWantToCreateAccount ? (
            <div className="mb-6 w-[250px] md:w-[500px]">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required
              />
              <p className="text-red-600">
                {formik.touched.name && formik.errors.name}
              </p>
            </div>
          ) : null}
          <div className="mb-6 w-[250px] md:w-[500px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@fitForms.xyz"
              required
            />
            <p className="text-red-600">
              {formik.touched.email && formik.errors.email}
            </p>
          </div>
          <div className=" mb-4 w-[250px] md:w-[500px]">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 cursor-pointer">
                <img
                  src={!showPassword ? lock : unlock}
                  className="w-5 h-5"
                  onClick={() => setShowPassword((preVal) => !preVal)}></img>
              </div>
              <input
                type={!showPassword ? "password" : "text"}
                id="password"
                name="passWord"
                value={formik.values.passWord}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <p className="text-red-600">
              {formik.touched.passWord && formik.errors.passWord}
            </p>
          </div>
          <div className="flex items-start mb-4">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Remember me
            </label>
          </div>
          {!isWantToCreateAccount && (
            <a>
              <p className="text-blue-600 mb-6 cursor-pointer hover:underline">
                Forgot password?
              </p>
            </a>
          )}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-20 disabled:bg-black"
            disabled={!(formik.isValid && formik.dirty)}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
