import React from "react";
import SignUpButton from "./SignUpButton";
import SignInAnonymous from "./SignInAnonymous";
import SignInForm from "./SignInForm";

import { useSelector } from "react-redux";

function SignIn() {
  const isWantToCreateAccount = useSelector(
    (store) => store.auth.isWantToCreateAccount
  );
  return (
    <div className="dark:bg-[#1f1e23] bg-white h-[90vh] flex flex-col justify-center items-center">
      <div className="max-w-screen-xl mx-auto  bg-white dark:bg-[#1F1E23]">
        <SignInForm />
      </div>

      <div className="flex  md:flex-row flex-col justify-between items-center mt-12">
        {!isWantToCreateAccount && <SignUpButton />}

        {/* divider logic ends here */}
        {!isWantToCreateAccount && (
          <div className="flex items-center my-4 ">
            <div className="border-t border-red-500 flex-grow my-4"></div>
            <div className="mx-4 text-gray-500"> or</div>
            <div className="border-t border-gray-600 flex-grow my-4"></div>
          </div>
        )}
        {/* divider logic ends here */}

        <SignInAnonymous />
      </div>
    </div>
  );
}

export default SignIn;
