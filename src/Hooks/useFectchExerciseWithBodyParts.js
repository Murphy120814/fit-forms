import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBodyPartsData } from "../slices/exerciseDataSlice";
function useFetchExerciseWithBodyParts(url, options) {
  const dispatch = useDispatch();
  async function fetchingExerciseDataWithBodyParts(url, options) {
    const data = await fetch(url, options);
    const dataJSON = await data.json();
    dispatch(addBodyPartsData(dataJSON));
  }

  useEffect(() => {
    fetchingExerciseDataWithBodyParts(url, options);
  }, []);
}

export default useFetchExerciseWithBodyParts;
