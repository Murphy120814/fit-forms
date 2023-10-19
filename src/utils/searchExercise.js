export function searchExercise(data, searchTerm) {
  console.log(searchTerm);
  if (searchTerm.toLowerCase() === "all") return data;
  const filteredExercises = data?.filter((exercise) => {
    return (
      exercise.name.toLowerCase().includes(searchTerm) ||
      exercise.target.toLowerCase().includes(searchTerm) ||
      exercise.bodyPart.toLowerCase().includes(searchTerm) ||
      exercise.equipment.toLowerCase().includes(searchTerm)
    );
  });

  return filteredExercises;
}
