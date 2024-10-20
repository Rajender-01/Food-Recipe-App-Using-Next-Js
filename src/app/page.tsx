import React from "react";
import Banner from "@/components/Banner";
import MostSeachedRecipes from "@/components/MostSeachedRecipes";
import Category from "@/components/Category";
import { fetchMealsData } from "@/utils/helpers";

const page = async () => {
  const shuffledData = await fetchMealsData();

  return (
    <div>
      <Banner />
      <MostSeachedRecipes data={{ meals: shuffledData }} />
      <Category data={{ meals: shuffledData }} category={"Indian"} />
      <Category data={{ meals: shuffledData }} category={"French"} />
    </div>
  );
};

export default page;
