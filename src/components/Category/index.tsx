"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
}

interface MostSearchedRecipesProps {
  data: {
    meals: Meal[];
  };
  category: string;
}

const Index: React.FC<MostSearchedRecipesProps> = ({ data, category }) => {
  const [visibleMeals, setVisibleMeals] = useState(3);
  const FilterByCategory = data?.meals?.filter(
    (meal: { strArea: string }) => meal?.strArea === "Indian"
  );

  const handleLoadMore = () => {
    setVisibleMeals(visibleMeals + 9);
  };

  return (
    <div className="w-full h-auto d-flex-col-center mt-[80px] gap-14">
      <h2 className="text-4xl font-bold">{`${category} Recipes`}</h2>
      <div className="flex items-start justify-between flex-wrap container gap-9">
        {FilterByCategory?.slice(0, visibleMeals).map((meal, index) => (
          <div
            key={index}
            className="max-w-[403px] min-h-[473px] bg-[#F5F2F2] dark:bg-inherit rounded-3xl flex flex-col"
          >
            <Image
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              width={403}
              height={212}
              className="aspect-auto h-80 rounded-t-3xl"
            />
            <div className="flex flex-col items-start justify-between h-full gap-6 py-8 px-9 flex-1 dark:border-[1px]  dark:border-slate-600 rounded-b-3xl dark:border-t-0">
              <h3 className="text-2xl font-semibold text-nowrap">
                <span title={meal?.strMeal}>
                  {meal?.strMeal.length > 22
                    ? `${meal?.strMeal.substring(0, 22)} ...`
                    : meal?.strMeal}
                </span>
              </h3>
              <p className="text-[19px]">
                {meal?.strInstructions.length > 60
                  ? `${meal?.strInstructions.substring(0, 60)} ...`
                  : meal?.strInstructions}
              </p>
              <Link
                href={`/recipe/${meal?.idMeal}`}
                className="mt-auto items-end bg-primaryColor text-white rounded-full px-7 py-2 text-[19px] hover:bg-red-600 transition-all delay-200"
              >
                View recipe
              </Link>
            </div>
          </div>
        ))}
        {FilterByCategory?.length > visibleMeals && (
          <button
            onClick={handleLoadMore}
            className="bg-primaryColor mx-auto block text-white px-9 py-2 w-auto font-semibold text-lg mt-6"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
export default Index;
