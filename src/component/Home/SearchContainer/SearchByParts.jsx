import React from "react";
import useFetchExerciseWithBodyParts from "../../../Hooks/useFectchExerciseWithBodyParts";
import {
  OPTIONS,
  EXERCISE_BODY_PARTS_FETCH_URL,
} from "../../../utils/constants";
import { useSelector } from "react-redux";
import BodyPartCards from "./BodyPartCards";
import { assetsMap } from "../../../utils/bulkAssetImport";

function SearchByParts() {
  useFetchExerciseWithBodyParts(EXERCISE_BODY_PARTS_FETCH_URL, OPTIONS);

  const bodyPartList = useSelector((store) => store.exerciseDb.allBodyParts);
  const allExercises = useSelector((store) => store.exerciseDb.allExercises);

  if (!bodyPartList) return null;

  return (
    <div className="max-w-screen-xl mx-auto flex px-8 flex-wrap justify-evenly">
      {["all", ...bodyPartList].map((bodyPartName) => (
        <BodyPartCards
          bodyPartName={bodyPartName}
          key={bodyPartName}
          imageNameObject={assetsMap}
        />
      ))}
    </div>
  );
}

export default SearchByParts;
