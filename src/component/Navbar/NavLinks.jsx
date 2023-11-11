import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <ul className="flex flex-row flex-wrap justify-center p-4 md:p-0 mt-4 item-center font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-[#1F1E23] dark:border-gray-700 dark:bg-gray-800">
        <li>
          <Link
            to="/home"
            className="block py-2 pl-3 pr-4 md:text-xl text-gray-900 rounded  
                   hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                   "
            aria-current="page">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/calculator"
            className="block md:text-xl py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                 ">
            KnowMacros
          </Link>
        </li>
        <li>
          <Link
            to="/calender"
            className="block py-2 md:text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                 ">
            TrackProgress
          </Link>
        </li>
        <li>
          <Link
            to="/calender"
            className="block py-2 md:text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                 ">
            TalkToMe
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavLinks;
