import React from "react";
import NavLogo from "./NavLogo";
import DarkModeToggle from "./DarkModeToggle";
import SignInSignUp from "./SignInSignUp";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <>
      <nav
        id="nav"
        className="bg-white dark:bg-[#1F1E23] fixed w-full z-20 h-auto top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md md:shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLogo />
          <div className="flex md:order-2 items-center md:gap-3">
            <SignInSignUp />
            <DarkModeToggle />
          </div>
          <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
            <NavLinks />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
