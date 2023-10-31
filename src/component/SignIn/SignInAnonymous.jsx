import React from "react";
import { auth } from "../../utils/fireBaseSDK";
import { signInAnonymously } from "firebase/auth";
function SignInAnonymous() {
  function signInWithAnonimity(authObj) {
    signInAnonymously(authObj)
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ":" + errorMessage);
        // ...
      });
  }

  return (
    <button
      onClick={() => signInWithAnonimity(auth)}
      type="button"
      className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
      Sign In as Guest
    </button>
  );
}

export default SignInAnonymous;
