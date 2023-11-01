import React, { useRef, useState } from "react";
import { auth } from "../../../utils/fireBaseSDK";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const email = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [emailVal, setEmailVal] = useState("");
  const successMessage = `That's ok, It happens! Your Password Reset Link is
    successfully sent to your registered email Id.`;
  const resetPasswordFunction = (authObj, email) => {
    sendPasswordResetEmail(authObj, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="dark:bg-[#1f1e23] bg-white h-[90vh] flex flex-col justify-center items-center">
      <div className="max-w-screen-xl mx-auto  bg-white dark:bg-[#1F1E23]">
        <form
          className="m-28"
          onSubmit={(event) => {
            event.preventDefault;
          }}>
          <div className="p-4">
            <div className="mb-6 w-[250px] md:w-[500px]">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Registered email
              </label>
              <input
                type="email"
                ref={email}
                value={emailVal}
                onChange={(event) => setEmailVal(event.target.value)}
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@fitForms.xyz"
                required
              />
              <p className="text-blue-600 my-3">
                {showMessage && successMessage}
              </p>
              <button
                type="submit"
                onClick={() => {
                  setShowMessage(true);
                  setEmailVal("");
                  resetPasswordFunction(auth, email.current.value);
                }}
                className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-20 disabled:bg-black"
                disabled={showMessage}>
                Reset Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
