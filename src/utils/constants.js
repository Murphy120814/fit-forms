export const OPTIONS = {
  method: "GET",
  headers: {
    //"X-RapidAPI-Key": "41173e5a80msh197be0f0cfa72e7p1e335djsn100a58d52f1e", //TKey
   //"X-RapidAPI-Key": "b8c57c85c2msh3972f3555cf1e0ep1b51bdjsnc6aa80edb27a", //PKey
     "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA", //jkey
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const ALL_EXERCISE_FETCH_URL =
  "https://exercisedb.p.rapidapi.com/exercises?limit=500";

export const EXERCISE_BODY_PARTS_FETCH_URL =
  "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

export const EXERCISE_DETAILS_WITH_ID_FETCH_URL =
  "https://exercisedb.p.rapidapi.com/exercises/exercise";

export const sexOptions = [
  { key: "Select an Option", value: "" },
  { key: "Male", value: "Male" },
  { key: "Female", value: "Female" },
];

export const workOutExperience = [
  { key: "Select an Option", value: "" },
  { key: "Beginner (0-2 Years)", value: "Beginner" },
  { key: "Intermediate (2-5 Years)", value: "Intermediate" },
  { key: "Advance (5-10 & above Years)", value: "Advance" },
];

export const workoutTypes = [
  { key: "Select an Option", value: "" },
  { key: "Strength Training", value: "Strength Training" },
  { key: "Aerobic", value: "Aerobics" },
  { key: "HIIT", value: "High Intensity Interval Training" },
  { key: "Pilates", value: "Pilates" },
  { key: "Zumba", value: "Zumba" },
  { key: "Running", value: "Running" },
  { key: "Swimming", value: "Swimming" },
  { key: "Yoga", value: "Yoga" },
  { key: "CrossFit", value: "CrossFit" },
  { key: "Jogging", value: "Jogging" },
];

export const lifeStyleOptions = [
  { key: "Select an Option", value: "" },
  { key: "Sedentary + Training 3-6x/wk", value: "Sedentary" },
  { key: "Lightly Active + Training 3-6x/wk", value: "Lightly Active" },
  { key: "Moderately Active + Training 3-6x/wk", value: "Moderately Active" },
  { key: "Highly Active + Training 3-6x/wk", value: "Highly Active" },
];

export const goalOptions = [
  {
    key: "Select an Option",
    value: "",
  },
  {
    key: "Want to reduce Body Fat",
    value: "Reduce Body Fat",
  },
  {
    key: "Want to increase Muscle Mass",
    value: "Increase Muscle Mass",
  },
  {
    key: "Want to maintain Current Weight",
    value: "Maintain weight",
  },
];
