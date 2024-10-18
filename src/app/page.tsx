import React from "react";
import Banner from "@/components/Banner";
import MostSeachedRecipes from "@/components/MostSeachedRecipes";

const fetchMealsData = async () => {
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

const page = async () => {
  const shuffledData = await fetchMealsData();

  return (
    <div>
      <Banner />
      <MostSeachedRecipes data={{ meals: shuffledData }} />
    </div>
  );
};

export default page;
