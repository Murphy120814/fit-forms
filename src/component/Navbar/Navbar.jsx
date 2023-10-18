import React from "react";
import darkLogo from "../../assets/fitFormsSymbolDarkMode.png";
import lightLogo from "../../assets/fitFormSymbolLightMode.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const isDark = useSelector((store) => store.theme);

  return (
    <>
      <nav
        id="nav"
        className="bg-white dark:bg-[#1F1E23] fixed w-full z-20 h-auto top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md md:shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <img
                src={isDark ? darkLogo : lightLogo}
                alt="logoFitForm"
                className="max-w-none w-[80px] h-[80px]"></img>
            </span>
          </a>
          <div className="flex md:order-2 items-center md:gap-3">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <Link to="/signIn">Sign In</Link>
            </button>
            <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-row flex-wrap justify-center p-4 md:p-0 mt-4 item-center font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-[#1F1E23] dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 md:text-xl text-gray-900 rounded  
                   hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
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
                  KnowYourBody
                </Link>
              </li>
              <li>
                <Link
                  to="/calender"
                  className="block py-2 md:text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                 ">
                  HabitBuilder
                </Link>
              </li>

              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
