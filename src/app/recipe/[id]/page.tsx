import React from "react";
import Banner from "@/components/Banner";
import Image from "next/image";

const Page = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  const data = await response.json();
  const meal = data.meals[0];
  return (
    <>
      <Banner />
      <div className="max-w-5xl mx-auto w-full h-full mt-[80px]">
        <h3 className="text-4xl font-semibold text-center">{meal?.strMeal}</h3>

        <div className="d-flex-center w-full mt-10" >
          <div className="w-1/2">
            <Image
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              width={500}
              height={500}
              className="rounded-sm"
            />
          </div>

          <div className="border-2 h-auto w-1/2">
            <table>
              <tr>
                <th>Category</th>
                <td>{meal?.strCategory}</td>
              </tr>
              <tr>
                <th>HeaAreading</th>
                <td>{meal?.strArea}</td>
              </tr>
              <tr>
                <th>Ingredient</th>
                <td>{[...Array(20)].map((_, index) => `${meal[`strIngredient${index + 1}`]} (${meal[`strMeasure${index + 1}`]})`).filter(Boolean).join(', ')}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{meal?.strCategory}</td>
              </tr>
              <tr>
                <th>Heading</th>
                <td>{meal?.strCategory}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
