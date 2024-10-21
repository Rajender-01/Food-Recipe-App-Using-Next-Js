import React from "react";
import Banner from "@/components/Banner";
import MostSeachedRecipes from "@/components/MostSeachedRecipes";
import Category from "@/components/Category";
import { fetchMealsData } from "@/utils/helpers";
import ImageArticle from "@/components/ImageArticle";

const page = async () => {
  const shuffledData = await fetchMealsData();

  return (
    <div>
      <Banner />
      <MostSeachedRecipes data={{ meals: shuffledData }} />
      <ImageArticle/>
      <Category data={{ meals: shuffledData }} category={"Indian"} />
      <Category data={{ meals: shuffledData }} category={"French"} />
    </div>
  );
};

export default page;
