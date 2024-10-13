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
      <div className="w-full h-auto">
        <Banner />
        <div className="max-w-5xl mx-auto w-full h-full mt-[80px]">
          <h3 className="text-4xl font-semibold text-center">
            {meal?.strMeal}
          </h3>
          <div className="flex w-full my-10">
            <div className="w-1/2">
              <Image
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={500}
                height={500}
                className="rounded-sm"
              />
            </div>
            <table className="h-auto w-1/2">
              <tbody>
                <tr className="border-[1px] border-slate-500 border-b-0">
                  <th className="uppercase border-r-[1px] border-r-slate-500 text-md px-9">
                    Category
                  </th>
                  <td className="pl-6 pr-4">{meal?.strCategory}</td>
                </tr>
                <tr className="border-[1px] border-slate-500 border-b-0">
                  <th className="uppercase border-r-[1px] border-r-slate-500 text-md px-9">
                    Area
                  </th>
                  <td className="pl-6 pr-4">{meal?.strArea}</td>
                </tr>
                <tr className="border-[1px] border-slate-500 border-b-0">
                  <th className="uppercase border-r-[1px] border-r-slate-500 text-md px-9">
                    Ingredient
                  </th>
                  <td className="pl-6 pr-4">
                    {[...Array(20)]
                      .map((_, index) => {
                        const ingredient = meal[`strIngredient${index + 1}`];
                        const measure = meal[`strMeasure${index + 1}`];
                        if (ingredient && measure) {
                          return `${ingredient} (${measure})`;
                        }
                        return null;
                      })
                      .filter(Boolean)
                      .join(", ")}
                  </td>
                </tr>
                <tr className="border-[1px] border-slate-500 border-b-0">
                  <th className="uppercase border-r-[1px] border-r-slate-500 text-md px-9">
                    Source
                  </th>
                  <td className="pl-6 pr-4">
                    <a href={meal?.strSource}>Click Here</a>
                  </td>
                </tr>
                <tr className="border-[1px] border-slate-500">
                  <th className="uppercase border-r-[1px] border-r-slate-500 text-md px-9">
                    Heading
                  </th>
                  <td className="pl-6 pr-4">{meal?.strCategory}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-10">
            <h4 className="text-2xl font-semibold mb-3">Instructions</h4>
            <p className="text-xl leading-8">{meal.strInstructions}</p>
          </div>

            {meal?.strYoutube && (
              <div className="w-full h-[30rem] mb-10">
                <iframe
                  src={meal.strYoutube.replace('watch?v=', 'embed/')}
                  title="Recipe Video"
                  allowFullScreen
                  className="w-full h-full border-2 border-gray-700"
                ></iframe>
              </div>
            )}

            <div className="flex">
              {meal.strTags && meal.strTags.split(',').map((tag: string, index: number) => (
                <div key={index} className="mr-2 mb-2 px-3 uppercase font-semibold py-1 w-fit bg-blue-500 text-white text-sm">
                  {tag.trim()}
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default Page;
