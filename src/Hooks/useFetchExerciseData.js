import { useDispatch } from "react-redux";
import { addAllExerciseData } from "../slices/exerciseDataSlice";
import { useEffect } from "react";

function useFetchExerciseData(url, options) {
  const dispatch = useDispatch();

  async function fetchExerciseData(url, options) {
    const data = await fetch(url, options);
    const dataJSON = await data.json();
    dispatch(addAllExerciseData(dataJSON));
  }

  useEffect(() => {
    fetchExerciseData(url, options);
  }, []);
}

export default useFetchExerciseData;
