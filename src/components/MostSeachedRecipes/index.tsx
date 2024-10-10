import Image from "next/image";
import React from "react";

const recipeData = [
  {
    id: 1,
    title: "Waffles",
    description: "Cool recipe to eat with friends in the morning.",
    image: "/images/Featured-image-1.jpg",
  },
  {
    id: 2,
    title: "Coffees",
    description: "Tasty coffee perfect for the breakfast.",
    image: "/images/Featured-image-2.jpg",
  },
  {
    id: 3,
    title: "Omelette",
    description: "A quick and easy omelette recipe.",
    image: "/images/Featured-image-3.jpg",
  },
  {
    id: 4,
    title: "Coffees",
    description: "Tasty coffee perfect for the breakfast.",
    image: "/images/Featured-image-2.jpg",
  },
  {
    id: 5,
    title: "Omelette",
    description: "A quick and easy omelette recipe.",
    image: "/images/Featured-image-3.jpg",
  },
  {
    id: 6,
    title: "Waffles",
    description: "Cool recipe to eat with friends in the morning.",
    image: "/images/Featured-image-1.jpg",
  },
];

const index: React.FC = () => {
  return (
    <div className="w-full h-auto d-flex-col-center py-[80px] gap-14">
      <h2 className="text-4xl font-bold">Most Searched Recipes</h2>
      <div className="flex items-start justify-center flex-wrap container gap-9">
        {Array.from({ length: recipeData?.length }).map((_, index) => (
          <div
            key={index}
            className="max-w-[403px] min-h-[473px] bg-[#F5F2F2] rounded-3xl"
          >
            <Image
              src={recipeData[index]?.image}
              alt={recipeData[index]?.title}
              width={403}
              height={212}
            />
            <div className="flex flex-col items-start justify-between h-full gap-6 py-7 px-9">
              <h3 className="text-3xl font-semibold">
                {recipeData[index]?.title}
              </h3>
              <p className="text-xl">{recipeData[index]?.description}</p>
              <button className="items-end bg-primaryColor text-white rounded-full px-7 py-2 text-xl hover:bg-red-600 transition-all delay-200">
                View recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
