import React from "react";

function CalculatorForm() {
  const workoutTypes = [
    "Strength Training",
    "Aerobic",
    "HIIT",
    "Pilates",
    "Zumba",
    "Running",
    "Swimming",
    "Yoga",
    "CrossFit",
    "Jogging",
  ];
  return (
    <>
      <form className="p-4 w-3/4 md:w-1/2 grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            What Should I call You?
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="w-full">
          <div>
            <label
              htmlFor="sex"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Sex
            </label>
            <select
              id="sex"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Age
          </label>
          <input
            type="number"
            min={10}
            max={100}
            name="age"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="16"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="height"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Height (in centimeter)
          </label>
          <input
            type="number"
            min={100}
            max={300}
            name="height"
            id="height"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="168 "
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="weight"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Weight (in Kg.)
          </label>
          <input
            type="number"
            min={20}
            max={250}
            name="weight"
            id="weight"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="62"
            required
          />
        </div>
        <div className="w-full">
          <div>
            <label
              htmlFor="workoutExp"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Workout Experience
            </label>
            <select
              id="workoutExp"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option value="beginner">Beginner (0-2 Years)</option>
              <option value="intermediate">Intermediate (2-5 Years)</option>
              <option value="advance">Advance (5-10 & above Years)</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <div>
            <label
              htmlFor="trainingType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Training Type
            </label>
            <select
              id="trainingType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              {workoutTypes.map((type) => (
                <option value={type.toLowerCase()} key={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div>
            <label
              htmlFor="lifeStyle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              How&apos;s your Life Style
            </label>
            <select
              id="lifeStyle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option value="sedentary">Sedentary + Training 3-6x/wk</option>
              <option value="lightActive">
                Lightly Active + Training 3-6x/wk
              </option>
              <option value="moderateActive">
                Moderately Active + Training 3-6x/wk
              </option>
              <option value="highActive">
                Highly Active + Training 3-6x/wk
              </option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div>
            <label
              htmlFor="goal"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              What&apos;s your goal
            </label>
            <select
              id="goal"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option value="reduceFat">Want to decrease Body Fat</option>
              <option value="increaseMuscle">
                Want to increase Muscle Mass
              </option>
              <option value="remainSame">
                Want to maintain Current Weight
              </option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-20 disabled:bg-black">
          Calculate My Macros
        </button>
      </form>
    </>
  );
}

export default CalculatorForm;
