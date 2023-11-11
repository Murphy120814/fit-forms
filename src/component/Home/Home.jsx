import React from "react";
import Header from "./Header";
import SearchByInput from "./SearchContainer/SearchByInput";
import SearchByParts from "./SearchContainer/SearchByParts";
import ExerciseContainer from "./ExerciseCards/ExerciseContainer";
import { OPTIONS, ALL_EXERCISE_FETCH_URL } from "../../utils/constants";
import useFetchExerciseData from "../../Hooks/useFetchExerciseData";
function Home() {
  useFetchExerciseData(ALL_EXERCISE_FETCH_URL, OPTIONS);
  return (
    <div className="min-h-screen bg-white dark:bg-[#1F1E23]">
      <Header />
      {/* <SearchByInput />
      <SearchByParts />
      <ExerciseContainer /> */}
    </div>
  );
}

export default Home;
