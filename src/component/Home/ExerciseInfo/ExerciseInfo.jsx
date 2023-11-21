import React, { useEffect, useState } from "react";
import ExerciseDetails from "./ExerciseDetails";
import { useParams } from "react-router-dom";
import ExerciseVideos from "./ExerciseVideos";
import ExerciseRecommendations from "./ExerciseRecommendations";
import {
  EXERCISE_DETAILS_WITH_ID_FETCH_URL,
  OPTIONS,
} from "../../../utils/constants";

function ExerciseInfo() {
  const [exerciseDetails, setExerciseDetails] = useState(null);
  const { id } = useParams();
  console.log(exerciseDetails);

  useEffect(() => {
    async function fetchExerciseData(url, options) {
      const data = await fetch(url, options);
      const dataJSON = await data.json();
      setExerciseDetails(dataJSON);
    }

    fetchExerciseData(`${EXERCISE_DETAILS_WITH_ID_FETCH_URL}/${id}`, OPTIONS);
  }, [id]);

  if (!exerciseDetails) return;

  return (
    <div className="dark:bg-[#1f1e23] bg-white">
      <div className="dark:bg-[#1f1e23] bg-white min-h-[80vh] dark:text-white mt-48  md:mt-28 md:py-8 max-w-screen-xl mx-auto text-black">
        <ExerciseDetails exerciseDetails={exerciseDetails} />
        <ExerciseVideos />
        <ExerciseRecommendations />
      </div>
    </div>
  );
}

export default ExerciseInfo;
