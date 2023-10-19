import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchInput } from "../../../slices/searchSlice";
import { searchExercise } from "../../../utils/searchExercise";

import { searchedExercise } from "../../../slices/exerciseDataSlice";

function BodyPartCards({ bodyPartName, imageNameObject }) {
  const allExercises = useSelector((store) => store.exerciseDb.allExercises);
  const search = useSelector((store) => store.search);
  console.log(search);
  const dispatch = useDispatch();
  const handleClickAndLoadExercise = (bodyPartName) => {
    console.log(bodyPartName);
    dispatch(searchInput(bodyPartName));
    dispatch(searchedExercise(searchExercise(allExercises, bodyPartName)));
  };

  return (
    <a href="#searchResultContainer" className="scroll-smooth">
      <div
        onClick={() => {
          return handleClickAndLoadExercise(bodyPartName);
        }}
        className="flex flex-col cursor-pointer items-center  w-[200px]  mr-4 shadow-md p-4 mb-4 dark:shadow-gray-600 dark:shadow-sm rounded-md">
        <img
          src={imageNameObject[bodyPartName]}
          alt="bodyPartName"
          className="w-[40px] h-[40px] hover:scale-95"></img>
        <h1 className="font-lg dark:text-white text-black">
          {bodyPartName.at(0).toUpperCase() +
            bodyPartName.substring(1).toLowerCase()}
        </h1>
      </div>
    </a>
  );
}

export default BodyPartCards;
