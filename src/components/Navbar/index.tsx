import React from "react";
import { BsSearch } from "react-icons/bs";
import { PiBowlSteam } from "react-icons/pi";

const index: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[30px] bg-[#ed1b24]"></div>
      <div className="d-flex-between py-5 container border-b-2">
        <div className="flex items-center gap-2">
          <PiBowlSteam size={27} className="mb-[5px]" />
          <span className="text-[22px] font-medium">Delights Table</span>
        </div>

        <ul className="d-flex-center gap-1 text-[21px] space-x-11 font-medium">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Recipe</li>
          <li className="cursor-pointer">About Us</li>
        </ul>

        <div className="max-w-64 bg-gray-200 rounded-2xl flex items-center px-4">
          <BsSearch size={17} opacity={0.6} />
          <input
            className="w-full px-3 py-1.5"
            type="search"
            placeholder="Search Recipe"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
