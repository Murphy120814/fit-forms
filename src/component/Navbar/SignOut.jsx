import React from "react";

function SignOut({ handleSignOut }) {
  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="text-black shadow-md  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 hover:bg-slate-50 dark:hover:bg-slate-900 dark:shadow-sm dark:shadow-slate-50 dark:text-white">
      Sign Out
    </button>
  );
}

export default SignOut;
