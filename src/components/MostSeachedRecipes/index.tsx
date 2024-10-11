import Image from "next/image";
import Link from "next/link";
import React from "react";

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
}

const index: React.FC<MostSearchedRecipesProps> = ({data} ) => {
  return (
    <div className="w-full h-auto d-flex-col-center mt-[80px] gap-14">
      <h2 className="text-4xl font-bold">Most Searched Recipes</h2>
      <div className="flex items-start justify-center flex-wrap container gap-9">
        {data.meals.map((meal, index) => (
          <div
            key={index}
            className="max-w-[403px] min-h-[473px] bg-[#F5F2F2] rounded-3xl flex flex-col"
          >
            <Image
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              width={403}
              height={212}
              className="aspect-auto h-80 rounded-t-3xl"
            />
            <div className="flex flex-col items-start justify-between h-full gap-6 py-8 px-9 flex-1">
              <h3 className="text-2xl font-semibold text-nowrap">
                <span title={meal?.strMeal}>{meal?.strMeal.length > 22 ? `${meal?.strMeal.substring(0, 22)} ...` : meal?.strMeal}</span>
              </h3>
              <p className="text-[19px]">{meal?.strInstructions.length > 60 ? `${meal?.strInstructions.substring(0, 60)} ...` : meal?.strInstructions}</p>
              <Link href={`/recipe/${meal?.idMeal}`} className="mt-auto items-end bg-primaryColor text-white rounded-full px-7 py-2 text-[19px] hover:bg-red-600 transition-all delay-200">
                View recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
