import React, { Suspense } from "react";
import Banner from "@/components/Banner";
import MostSeachedRecipes from "@/components/MostSeachedRecipes";
import RecentRecipes from "@/components/RecentRecipes";
import { fetchMealsData } from "@/utils/helpers";

const page = async () => {
  const shuffledData = await fetchMealsData(); // Use the new function
  if (!shuffledData) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <MostSeachedRecipes data={{ meals: shuffledData }} />
      </Suspense>
      <RecentRecipes />
    </div>
  );
};

export default page;
