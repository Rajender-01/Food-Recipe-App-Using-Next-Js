import React from "react";
import Banner from "@/components/Banner";
import MostSeachedRecipes from "@/components/MostSeachedRecipes";
import RecentRecipes from "@/components/RecentRecipes";

const page = () => {
  return (
    <div>
      <Banner />
      <MostSeachedRecipes />
      <RecentRecipes />
    </div>
  );
};

export default page;
