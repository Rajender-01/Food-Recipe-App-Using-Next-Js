/**
 * Fetches meal data from the MealDB API for meals starting with each letter of the alphabet.
 * It retrieves all meals, combines them into a single array, and returns the array shuffled randomly.
 *
 * @returns {Promise<Array>} A promise resolving to an array of meal objects.
 */
export const fetchMealsData = async () => {
  const letters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  const responses = await Promise.all(
    letters.map((letter) =>
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    )
  );

  const datas = await Promise.all(responses.map((response) => response.json()));
  const combinedData = datas.reduce((acc, curr) => acc.concat(curr.meals), []);
  return combinedData.sort(() => Math.random() - 0.5);
};
