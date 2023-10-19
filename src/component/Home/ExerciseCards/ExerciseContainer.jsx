import React from "react";
import { useSelector } from "react-redux";
import ExerciseCards from "./ExerciseCards";

function ExerciseContainer() {
  const filteredExercises = useSelector(
    (store) => store.exerciseDb.filteredExercises
  );
  console.log(filteredExercises);
  if (!filteredExercises) return;
  return (
    <div className="max-w-screen-xl mx-auto flex flex-wrap items-center md:justify-between">
      {filteredExercises.map((exercise) => (
        <ExerciseCards exercise={exercise} key={exercise.id} />
      ))}
    </div>
  );
}

export default ExerciseContainer;
