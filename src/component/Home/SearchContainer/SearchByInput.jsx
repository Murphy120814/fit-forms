import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchInput } from "../../../slices/searchSlice";
import { searchExercise } from "../../../utils/searchExercise";
import { searchedExercise } from "../../../slices/exerciseDataSlice";

function SearchByInput() {
  const search = useSelector((store) => store.search);
  const data = useSelector((store) => store.exerciseDb);
  // console.log(Array.isArray(data.allExercises));
  console.log(data);
  const dispatch = useDispatch();
  console.log(search);
  return (
    <div id="search" className="max-w-screen-xl mx-auto px-8">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only  dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={search}
            onChange={(event) => {
              dispatch(searchInput(event.target.value.toLowerCase()));
            }}
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Exercise Name"
            required></input>
          <button
            onClick={(event) => {
              event.preventDefault();
              const filteredData = searchExercise(data.allExercises, search);
              console.log(filteredData, search);
              dispatch(searchedExercise(filteredData));
            }}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </form>

      <div className="flex items-center my-8">
        <div className="border-t border-gray-600 flex-grow my-4"></div>
        <div className="mx-4 text-gray-500"> or</div>
        <div className="border-t border-gray-600 flex-grow my-4"></div>
      </div>
    </div>
  );
}

export default SearchByInput;
