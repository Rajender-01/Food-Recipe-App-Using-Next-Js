import React from "react";
import Banner from "@/components/Banner";
import MostSeachedRecipes from "@/components/MostSeachedRecipes";
import Category from "@/components/Category";
import { fetchMealsData } from "@/utils/helpers";
import ImageArticle from "@/components/ImageArticle";
import { auth } from "@/auth";

const page = async () => {
  const shuffledData = await fetchMealsData();
  const session = await auth();
  const user = session?.user;
  console.log('user :>> ', user);

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
