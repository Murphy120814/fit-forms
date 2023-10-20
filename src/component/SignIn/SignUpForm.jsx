import React from "react";
import { useState } from "react";
import lock from "../../assets/lock.png";
import unlock from "../../assets/unlock.png";
import SignUpSubmitButton from "./SignUpSubmitButton";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <form className="mt-28">
        <div className="p-4">
          <div className="mb-6 w-[250px] md:w-[500px]">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-6 w-[250px] md:w-[500px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@fitForms.xyz"
              required
            />
          </div>
          <div className=" mb-4 w-[250px] md:w-[500px]">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 cursor-pointer">
                <img
                  src={!showPassword ? lock : unlock}
                  className="w-5 h-5"
                  onClick={() => setShowPassword((preVal) => !preVal)}></img>
              </div>
              <input
                type={!showPassword ? "password" : "text"}
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex items-start mb-4">
            {/* <div className="flex items-center h-5">
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
          <a>
            <p className="text-blue-600 mb-6 cursor-pointer hover:underline">
              Forgot password?
            </p>
          </a> */}
            <SignUpSubmitButton />
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
