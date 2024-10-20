import Image from "next/image";
import React from "react";
import { RecentRecipesData } from "@/utils/data";

const index = () => {
  return (
    <div className="w-full h-auto d-flex-col-center mt-[80px] gap-14">
      <h3 className="text-4xl font-bold">Recent Recipes</h3>
      <div className="flex flex-col gap-16">
        {RecentRecipesData &&
          RecentRecipesData?.map((recipe, idx) => {
            return (
              <div
                key={idx}
                className="flex bg-[#F5F2F2] dark:bg-transparent dark:border-[1px] rounded-3xl max-w-[1187px]"
              >
                <Image
                  src={recipe?.image}
                  alt={recipe?.title}
                  width={403}
                  height={322}
                  className="rounded-l-3xl"
                />
                <div className="flex flex-col items-start justify-center h-auto gap-9 p-12">
                  <h3 className="text-3xl font-semibold">{recipe?.title}</h3>
                  <p className="text-xl">{recipe?.description}</p>
                  <button className="items-end bg-primaryColor text-white rounded-full px-7 py-2 text-xl hover:bg-red-600 transition-all delay-200">
                    View recipe
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default index;
