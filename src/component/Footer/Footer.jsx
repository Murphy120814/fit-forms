import React from "react";

import NavLogo from "../Navbar/NavLogo";
import NavLinks from "../Navbar/NavLinks";
import { useSelector } from "react-redux";

function Footer() {
  const { isAuthenticated } = useSelector((store) => store.auth);
  return (
    <footer className="bg-white shadow shadow-gray-950 dark:bg-[#1a181f]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <NavLogo />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FitForms
            </span>
          </div>
          {isAuthenticated && <NavLinks />}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Developed By
          <a href="https://frontendmeta.dev" className="hover:underline">
            {" "}
            <span className="text-blue-600"> Prathmesh Vhatkar</span>
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
