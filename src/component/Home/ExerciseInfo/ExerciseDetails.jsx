import React from "react";

function ExerciseDetails({ exerciseDetails }) {
  const {
    bodyPart,
    equipment,
    gifUrl,
    instructions,
    name,
    secondaryMuscles,
    target,
  } = exerciseDetails;
  return (
    <div className="min-h-[80vh] flex lg:flex-row flex-col w-full mx-auto ">
      <div className="lg:w-1/2  flex justify-center items-center p-12">
        <img className="rounded-2xl" src={gifUrl} alt={bodyPart}></img>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center flex-col p-12">
        <h1 className="font-bold text-3xl text-blue-600 ">
          {name.toUpperCase()}
        </h1>
{/*         <p className="mt-4">
          <span className="text-lg text-blue-600">How to Perform:</span>{" "}
          {instructions?.join(" ")}
        </p> */}
        <div className="flex flex-col justify-start w-full">
          <p className="mt-4">
            <span className="text-lg text-blue-600">Target Muscle:</span>{" "}
            {target[0].toUpperCase() + target.substring(1)}
          </p>
          <p className="mt-4">
            <span className="text-lg text-blue-600">Equipment Required:</span>{" "}
            {equipment}
          </p>
{/*           <p className="mt-4">
            <span className="text-lg text-blue-600">
              Secondary Muscles Used:
            </span>{" "}
            {secondaryMuscles?.join(", ")}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetails;
