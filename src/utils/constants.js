export const OPTIONS = {
  method: "GET",
  headers: {
    // "X-RapidAPI-Key": "41173e5a80msh197be0f0cfa72e7p1e335djsn100a58d52f1e", //TKey
    "X-RapidAPI-Key": "b8c57c85c2msh3972f3555cf1e0ep1b51bdjsnc6aa80edb27a", //PKey
    // "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA", //jkey
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const ALL_EXERCISE_FETCH_URL =
  "https://exercisedb.p.rapidapi.com/exercises?limit=1000";

export const EXERCISE_BODY_PARTS_FETCH_URL =
  "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
